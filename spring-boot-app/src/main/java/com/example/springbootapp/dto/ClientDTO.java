package com.example.springbootapp.dto;

import com.example.springbootapp.domain.Client;
import lombok.*;


@Getter @Setter @AllArgsConstructor @NoArgsConstructor @EqualsAndHashCode @ToString
public class ClientDTO {

    private Long id;


    private String name;

    private String zipPostalCode;

    private String address;

    private String country;

    private String city;

    public ClientDTO(String name, String zipPostalCode, String address, String country, String city) {
        this.name = name;
        this.zipPostalCode = zipPostalCode;
        this.address = address;
        this.country = country;
        this.city = city;
    }
    public ClientDTO(Client client) {
        this.id = client.getId();
        this.name = client.getName();
        this.zipPostalCode = client.getZipPostalCode();
        this.address = client.getAddress();
        this.country = client.getCountry();
        this.city = client.getCity();
    }

    public ClientDTO(long id) {
        this.id = id;
    }
}
