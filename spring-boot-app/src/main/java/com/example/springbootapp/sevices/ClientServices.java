package com.example.springbootapp.sevices;

import com.example.springbootapp.domain.Client;
import com.example.springbootapp.domain.User;
import com.example.springbootapp.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServices {
    private ClientRepository clientRepository;

    private static final int CARD_NUMBER = 3;

    @Autowired
    public ClientServices(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAll(){
        return clientRepository.findAll();
    }

    public Page<Client> getAll(int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return clientRepository.findAll(requestedPage);
    }

    public Client save(Client client){
        return clientRepository.save(client);
    }

    public Client getById(long id){
        return clientRepository.findById(id).get();
    }

    public Client update(Client client){
        Client newClient = clientRepository.findById(client.getId()).get();
        newClient.setAddress(client.getAddress());
        newClient.setCity(client.getCity());
        newClient.setName(client.getName());
        newClient.setCountry(client.getCountry());
        newClient.setZipPostalCode(client.getZipPostalCode());

        return clientRepository.save(newClient);
    }

    public void delete(Client client) throws Exception{
        clientRepository.delete(client);
    }

    public List<Client> search(String str){
        return clientRepository.findAllByNameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrCityContainingIgnoreCaseOrCountryContainingIgnoreCaseOrZipPostalCodeContainingIgnoreCase(str,str,str,str,str);
    }

    public Page<Client> search(String str, int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return clientRepository.findAllByNameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrCityContainingIgnoreCaseOrCountryContainingIgnoreCaseOrZipPostalCodeContainingIgnoreCase(str,str,str,str,str, requestedPage);
    
    }

    public List<Client> startsWith(String str){
        return clientRepository.findByNameStartsWithIgnoreCase(str);
    }

    public Page<Client> startsWith(String str, int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return clientRepository.findByNameStartsWithIgnoreCase(str, requestedPage);
    }

    public List<String> getAlpha(){
        return clientRepository.alphaLetters();
    }
}
