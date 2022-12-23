package com.example.springbootapp.repositories;

import com.example.springbootapp.domain.Client;
import com.example.springbootapp.domain.Project;
import com.example.springbootapp.domain.User;
import com.example.springbootapp.dto.PageDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository  extends PagingAndSortingRepository<Project, Long> {
    List<Project> findAllByNameContainingIgnoreCase(String str1);

    Page<Project> findAllByNameContainingIgnoreCase(String str1, Pageable pageable);

    List<Project> findByNameStartsWithIgnoreCase(String str1);

    Page<Project> findByNameStartsWithIgnoreCase(String str1, Pageable pageable);

    Page<Project> findAll(Pageable pageable);
    List<Project> findAll();

    @Query(value = "SELECT DISTINCT SUBSTRING(name, 1, 1) AS Alpha FROM Project", nativeQuery = true)
    List<String> alphaLetters();
}
