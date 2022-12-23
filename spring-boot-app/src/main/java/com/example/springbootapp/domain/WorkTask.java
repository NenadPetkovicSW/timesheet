package com.example.springbootapp.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "work_task")
@Getter @Setter @AllArgsConstructor @NoArgsConstructor @EqualsAndHashCode @ToString
public class WorkTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private Date date;

    @Column(name = "category")
    private String category;

    @Column(name = "description")
    private String description;

    @Column(name = "time")
    private String time;

    @Column(name = "overTime")
    private String overTime;

    @ManyToOne
    @JoinColumn(name = "worker_id")
    private User worker;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    public WorkTask(Date date, String category, String description, String time, String overTime, User worker, Project project, Client client) {
        this.date = date;
        this.category = category;
        this.description = description;
        this.time = time;
        this.overTime = overTime;
        this.worker = worker;
        this.project = project;
        this.client = client;
    }
}
