package com.example.springbootapp.repositories;

import com.example.springbootapp.domain.WorkTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkTaskRepository extends JpaRepository<WorkTask, Long> {

}
