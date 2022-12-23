package com.example.springbootapp.domain;

import jdk.jfr.Name;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "users")
@Table
@Getter @Setter @NoArgsConstructor @ToString @EqualsAndHashCode @AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name",nullable = false)
    private String name;
    @Column(name = "username",unique = true,nullable = false)
    private String username;
    @Column(name = "email",unique = true,nullable = false)
    private String email;
    @Column(name = "password",nullable = false)
    private String password;
    @Enumerated(EnumType.STRING)
    @Column(name = "role",nullable = false)
    private UserRole role;
    @Column(name = "hoursPerWeek",nullable = false)
    private Double hoursPerWeek;
    @Column(name = "status",nullable = false)
    private Boolean status;

    @OneToOne(mappedBy = "lead")
    private Project project;

    @OneToMany(mappedBy="worker")
    private Set<WorkTask> workTasks;

    public User(String name, String username, String email, String password, UserRole role, Double hoursPerWeek, Boolean status, Project project, Set<WorkTask> workTasks) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.hoursPerWeek = hoursPerWeek;
        this.status = status;
        this.project = project;
        this.workTasks = workTasks;
    }
}
