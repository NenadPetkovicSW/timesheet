package com.example.springbootapp.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@Getter @Setter @AllArgsConstructor @NoArgsConstructor @EqualsAndHashCode @ToString
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "zipPostalCode", nullable = true)
    private String zipPostalCode;

    @Column(name = "address", nullable = true)
    private String address;

    @Column(name = "country", nullable = true)
    private String country;

    @Column(name = "city", nullable = true)
    private String city;

    @OneToMany(mappedBy="customer")
    private Set<Project> items;

    @OneToMany(mappedBy="client")
    private Set<WorkTask> workTasks;

    public Client(String name, String zipPostalCode, String address, String country, String city, Set<Project> items, Set<WorkTask> workTasks) {
        this.name = name;
        this.zipPostalCode = zipPostalCode;
        this.address = address;
        this.country = country;
        this.city = city;
        this.items = items;
        this.workTasks = workTasks;
    }

    public Client(Long id, String name, String zipPostalCode, String address, String country, String city) {
        this.id = id;
        this.name = name;
        this.zipPostalCode = zipPostalCode;
        this.address = address;
        this.country = country;
        this.city = city;
    }
}
