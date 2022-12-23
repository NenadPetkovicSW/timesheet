package com.example.springbootapp.controller;

import com.example.springbootapp.domain.WorkTask;
import com.example.springbootapp.dto.WorkTaskDTO;
import com.example.springbootapp.sevices.WorkTaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping(value = "workTask", produces = MediaType.APPLICATION_JSON_VALUE)
@RestController
public class WorkTaskController {

    private WorkTaskServices workTaskServer;

    @Autowired
    public WorkTaskController(WorkTaskServices workTaskServer) {
        this.workTaskServer = workTaskServer;
    }

    @ResponseBody
    @GetMapping(value = "/getAll")
    public ResponseEntity<List<WorkTaskDTO>> getAll() {

        List<WorkTaskDTO> list = new ArrayList<WorkTaskDTO>();

        for (WorkTask wt : workTaskServer.getAll()) {
            list.add(new WorkTaskDTO(wt));
        }
        return new ResponseEntity<List<WorkTaskDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping(value = "/save")
    public ResponseEntity<WorkTaskDTO> save(@RequestParam WorkTask workTask) {
        return  new ResponseEntity<WorkTaskDTO>(new WorkTaskDTO(workTaskServer.save(workTask)), HttpStatus.OK);
    }

    @ResponseBody
    @PutMapping(value = "/update")
    public ResponseEntity<WorkTaskDTO> update(@RequestParam WorkTask workTask)
    {
        return  new ResponseEntity<WorkTaskDTO>(new WorkTaskDTO(workTaskServer.update(workTask)), HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping(value = "/delete")
    public ResponseEntity<WorkTaskDTO>  delete(@RequestParam WorkTask workTask) throws Exception {
        workTaskServer.delete(workTask);
        return new ResponseEntity<WorkTaskDTO>(new WorkTaskDTO(workTask), HttpStatus.OK);
    }
}
