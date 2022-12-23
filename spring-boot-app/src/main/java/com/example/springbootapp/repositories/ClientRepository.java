package com.example.springbootapp.repositories;

import com.example.springbootapp.domain.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends PagingAndSortingRepository<Client, Long> {
    List<Client> findAll();

    Page<Client> findAll(Pageable pageable);

    List<Client> findAllByNameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrCityContainingIgnoreCaseOrCountryContainingIgnoreCaseOrZipPostalCodeContainingIgnoreCase(String str1, String str2, String str3, String str4, String str5);

    Page<Client> findAllByNameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrCityContainingIgnoreCaseOrCountryContainingIgnoreCaseOrZipPostalCodeContainingIgnoreCase(String str1, String str2, String str3, String str4, String str5, Pageable pageable);

    List<Client> findByNameStartsWithIgnoreCase(String str1);

    Page<Client> findByNameStartsWithIgnoreCase(String str1, Pageable pageable);



    @Query(value = "SELECT DISTINCT SUBSTRING(name, 1, 1) AS Alpha FROM Client", nativeQuery = true)
    List<String> alphaLetters();
}
