package com.example.springbootapp.sevices;

import com.example.springbootapp.domain.Project;
import com.example.springbootapp.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServices {
    private ProjectRepository projectRepository;

    private static final int CARD_NUMBER = 3;

    @Autowired
    public ProjectServices(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAll(){
        return projectRepository.findAll();
    }

    public Page<Project> getAll(int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return projectRepository.findAll(requestedPage);
    }

    public Project save(Project project){
        return projectRepository.save(project);
    }

    public Project update(Project project){
        Project newProject = projectRepository.findById(project.getId()).get();
        newProject.setName(project.getName());
        newProject.setLead(project.getLead());
        newProject.setArchive(project.getArchive());
        newProject.setId(project.getId());
        newProject.setCustomer(project.getCustomer());
        newProject.setDescription(project.getDescription());
        newProject.setStatus(project.getStatus());

        return projectRepository.save(newProject);
    }

    public void delete(Project project) throws Exception{
        projectRepository.delete(project);
    }

    public List<Project> search(String str){
        return projectRepository.findAllByNameContainingIgnoreCase(str);
    }

    public List<Project> startsWith(String str){
        return projectRepository.findByNameStartsWithIgnoreCase(str);
    }

    public Page<Project> search(String str, int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return projectRepository.findAllByNameContainingIgnoreCase(str, requestedPage);
    }

    public Page<Project> startsWith(String str, int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return projectRepository.findByNameStartsWithIgnoreCase(str, requestedPage);
    }
    public List<String> getAlpha(){
        return projectRepository.alphaLetters();
    }
}
