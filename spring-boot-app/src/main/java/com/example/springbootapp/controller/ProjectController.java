package com.example.springbootapp.controller;

import com.example.springbootapp.domain.Client;
import com.example.springbootapp.domain.Project;
import com.example.springbootapp.dto.ClientDTO;
import com.example.springbootapp.dto.PageDTO;
import com.example.springbootapp.dto.ProjectDTO;
import com.example.springbootapp.sevices.ProjectServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("projects")
@RestController
public class ProjectController {

    private ProjectServices projectServices;

    @Autowired
    public ProjectController(ProjectServices projectServices) {
        this.projectServices = projectServices;
    }

    @ResponseBody
    @GetMapping(path = "/pages")
    public ResponseEntity<PageDTO> getPages(@RequestParam(defaultValue = "") String letter, @RequestParam(defaultValue = "") String str, @RequestParam(defaultValue = "0") int page)
    {
        PageDTO pageDTO = new PageDTO();

        Page<Project> p;
        if(letter != null && !letter.isEmpty())
        {
            p = projectServices.startsWith(letter, page);
        }
        else if(str!= null && !str.isEmpty())
        {
            p = projectServices.search(str, page);
        }
        else
        {
            p = projectServices.getAll(page);
        }

        pageDTO.setTotalPages(p.getTotalPages());
        pageDTO.setTotalElements(p.getTotalElements());

        List<Project> list = p.toList();
        List<ProjectDTO> newList = new ArrayList<ProjectDTO>();

        for(Project project : list)
        {
            newList.add(new ProjectDTO(project));
        }

        pageDTO.setProjects(newList);

        return new ResponseEntity<PageDTO>(pageDTO, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/getAlpha")
    public ResponseEntity<List<String>> getAlpha()
    {

        return new ResponseEntity<List<String>>(projectServices.getAlpha(), HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/getPage")
    public ResponseEntity<PageDTO> getPage()
    {
        PageDTO pageDTO = new PageDTO();

        Page<Project> p = projectServices.getAll(0);

        pageDTO.setTotalPages(p.getTotalPages());
        pageDTO.setTotalElements(p.getTotalElements());

        return new ResponseEntity<PageDTO>(pageDTO, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/getAll")
    public ResponseEntity<List<ProjectDTO>> getAll()
    {

        List<ProjectDTO> list = new ArrayList<ProjectDTO>();

        for(Project p : projectServices.getAll())
        {
            list.add(new ProjectDTO(p));
        }
        return new ResponseEntity<List<ProjectDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/search/{str}")
    public ResponseEntity<List<ProjectDTO>> search(@PathVariable("str") String str)
    {

        List<ProjectDTO> list = new ArrayList<ProjectDTO>();

        for(Project p : projectServices.search(str))
        {
            list.add(new ProjectDTO(p));
        }
        return new ResponseEntity<List<ProjectDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/letter/{str}")
    public ResponseEntity<List<ProjectDTO>> letter(@PathVariable("str") String str)
    {

        List<ProjectDTO> list = new ArrayList<ProjectDTO>();

        for(Project p : projectServices.startsWith(str))
        {
            list.add(new ProjectDTO(p));
        }
        return new ResponseEntity<List<ProjectDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping(path = "/save")
    public ResponseEntity<ProjectDTO> save(@RequestParam Project project) {
        return  new ResponseEntity<ProjectDTO>(new ProjectDTO(projectServices.save(project)), HttpStatus.OK);
    }

    @ResponseBody
    @PutMapping(path = "/update")
    public ResponseEntity<ProjectDTO> update(@RequestParam Project project)
    {
        return  new ResponseEntity<ProjectDTO>(new ProjectDTO(projectServices.update(project)), HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping(path = "/delete")
    public ResponseEntity<ProjectDTO>  delete(@RequestParam Project project) throws Exception {
        projectServices.delete(project);
        return new ResponseEntity<ProjectDTO>(new ProjectDTO(project), HttpStatus.OK);
    }


}
