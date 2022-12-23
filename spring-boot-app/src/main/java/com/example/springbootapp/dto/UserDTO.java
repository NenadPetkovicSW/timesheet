package com.example.springbootapp.dto;

import com.example.springbootapp.domain.User;
import com.example.springbootapp.domain.UserRole;
import lombok.*;



@Getter @Setter @NoArgsConstructor @ToString @EqualsAndHashCode @AllArgsConstructor
public class UserDTO {

    private Long id;

    private String name;

    private String username;

    private String email;

    private String password;

    private UserRole role;

    private Double hoursPerWeek;

    private Boolean status;

    public UserDTO(String username, String email, String password, UserRole role, Double hoursPerWeek, Boolean status) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.hoursPerWeek = hoursPerWeek;
        this.status = status;
    }

    public UserDTO(User user) {
        this.name = user.getName();
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.role = user.getRole();
        this.hoursPerWeek = user.getHoursPerWeek();
        this.status = user.getStatus();
    }
}
