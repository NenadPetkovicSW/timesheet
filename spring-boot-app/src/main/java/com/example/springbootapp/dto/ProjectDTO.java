package com.example.springbootapp.dto;

import com.example.springbootapp.domain.Client;
import com.example.springbootapp.domain.Project;
import com.example.springbootapp.domain.User;
import lombok.*;

import javax.persistence.*;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor @EqualsAndHashCode @ToString
public class ProjectDTO {
    private Long id;

    private String name;

    private String description;

    private Boolean status;

    private Boolean archive;
    private UserDTO lead;

    private ClientDTO customer;

    public ProjectDTO(String name, String description, Boolean status, Boolean archive, User lead, Client customer) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.archive = archive;
        this.lead = new UserDTO(lead);
        this.customer = new ClientDTO(customer);
    }

    public ProjectDTO(Project project) {
        this.name = project.getName();
        this.description = project.getDescription();
        this.status = project.getStatus();
        this.archive = project.getArchive();
        this.lead = new UserDTO(project.getLead());
        this.customer = new ClientDTO(project.getCustomer());
        this.id = project.getId();
    }
}
