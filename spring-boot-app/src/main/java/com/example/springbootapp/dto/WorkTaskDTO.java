package com.example.springbootapp.dto;

import com.example.springbootapp.domain.*;
import lombok.*;

import javax.persistence.*;
import java.util.Date;


@Getter @Setter @AllArgsConstructor @NoArgsConstructor @EqualsAndHashCode @ToString
public class WorkTaskDTO {

    private Long id;


    private Date date;


    private String category;


    private String description;


    private String time;


    private String overTime;

    private UserDTO worker;

    private ProjectDTO project;

    private ClientDTO client;

    public WorkTaskDTO(Date date, String category, String description, String time, String overTime, UserDTO worker, ProjectDTO project, ClientDTO client) {
        this.date = date;
        this.category = category;
        this.description = description;
        this.time = time;
        this.overTime = overTime;
        this.worker = worker;
        this.project = project;
        this.client = client;
    }

    public WorkTaskDTO(WorkTask workTask) {
        this.id = workTask.getId();
        this.date = workTask.getDate();
        this.category = workTask.getCategory();
        this.description = workTask.getDescription();
        this.time = workTask.getTime();
        this.overTime = workTask.getOverTime();
        this.worker = new UserDTO(workTask.getWorker());
        this.project = new ProjectDTO(workTask.getProject());
        this.client = new ClientDTO(workTask.getClient());
    }
}
