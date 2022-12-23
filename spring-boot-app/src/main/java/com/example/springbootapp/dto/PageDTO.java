package com.example.springbootapp.dto;

import com.example.springbootapp.domain.Client;
import com.example.springbootapp.domain.Project;
import com.example.springbootapp.domain.User;
import lombok.*;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor @ToString @EqualsAndHashCode
public class PageDTO {
    private Long totalElements;
    private int totalPages;

    private List<UserDTO> users;
    private List<ProjectDTO> projects;
    private List<ClientDTO> Clients;

}
