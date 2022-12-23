package com.example.springbootapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@Getter @Setter @AllArgsConstructor @NoArgsConstructor @EqualsAndHashCode @ToString
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "archive")
    private Boolean archive;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType. LAZY)
    @JoinTable(name = "lead",
            joinColumns =
                    { @JoinColumn(name = "project_id", referencedColumnName = "id") },
            inverseJoinColumns =
                    { @JoinColumn(name = "users_id", referencedColumnName = "id") })
    private User lead;



    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client customer;

    @OneToMany(mappedBy="project")
    private Set<WorkTask> workTasks;

    public Project(String name, String description, Boolean status, Boolean archive, User lead, Client customer, Set<WorkTask> workTasks) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.archive = archive;
        this.lead = lead;
        this.customer = customer;
        this.workTasks = workTasks;
    }
}
