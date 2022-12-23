package com.example.springbootapp.sevices;

import com.example.springbootapp.domain.WorkTask;
import com.example.springbootapp.repositories.WorkTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkTaskServices {
    private WorkTaskRepository workTaskRepository;

    @Autowired
    public WorkTaskServices(WorkTaskRepository workTaskRepository) {
        this.workTaskRepository = workTaskRepository;
    }

    public List<WorkTask> getAll(){
        return workTaskRepository.findAll();
    }

    public WorkTask save(WorkTask user){
        return workTaskRepository.save(user);
    }

    public WorkTask update(WorkTask user){
        WorkTask newUser = workTaskRepository.findById(user.getId()).get();
        newUser.setId(user.getId());
        newUser.setDescription(user.getDescription());
        newUser.setDate(user.getDate());
        newUser.setClient(user.getClient());
        newUser.setTime(user.getTime());
        newUser.setCategory(user.getCategory());
        newUser.setWorker(user.getWorker());
        newUser.setOverTime(user.getOverTime());
        newUser.setProject(user.getProject());

        return workTaskRepository.save(newUser);
    }

    public void delete(WorkTask user) throws Exception{
        workTaskRepository.delete(user);
    }
}
