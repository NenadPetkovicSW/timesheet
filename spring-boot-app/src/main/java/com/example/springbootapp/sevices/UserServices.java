package com.example.springbootapp.sevices;

import com.example.springbootapp.domain.User;
import com.example.springbootapp.repositories.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {
    private UserRepository userRepository;
    private static final int CARD_NUMBER = 3;
    @Autowired
    public UserServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public Page<User> getAll(int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return userRepository.findAll(requestedPage);
    }

    public User save(User user){
        return userRepository.save(user);
    }

    public User update(User user){
        User newUser = userRepository.findById(user.getId()).get();
        newUser.setEmail(user.getEmail());
        newUser.setRole(user.getRole());
        newUser.setName(user.getName());
        newUser.setPassword(user.getPassword());
        newUser.setStatus(user.getStatus());
        newUser.setUsername(user.getUsername());
        newUser.setHoursPerWeek(user.getHoursPerWeek());

        return userRepository.save(newUser);
    }

    public void delete(User user) throws Exception{
        userRepository.delete(user);
    }

    public List<User> searchBySting(String string){
        return userRepository.findAllByNameContainingIgnoreCaseOrUsernameContainingIgnoreCaseOrEmailContainingIgnoreCase(string,string,string);
    }



    public Page<User> searchBySting(String string, int pageNumber){
        Pageable requestedPage = PageRequest.of(pageNumber, CARD_NUMBER);
        return userRepository.findAllByNameContainingIgnoreCaseOrUsernameContainingIgnoreCaseOrEmailContainingIgnoreCase(string,string,string, requestedPage);
    }
}
