package com.example.springbootapp.controller;
import com.example.springbootapp.domain.User;
import com.example.springbootapp.domain.User;
import com.example.springbootapp.dto.PageDTO;
import com.example.springbootapp.dto.UserDTO;
import com.example.springbootapp.dto.UserDTO;
import com.example.springbootapp.sevices.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import java.util.ArrayList;
import java.util.List;

@RequestMapping(value = "users", produces = MediaType.APPLICATION_JSON_VALUE)
@RestController
public class UserController {

    private UserServices userServices;

    @Autowired
    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @ResponseBody
    @GetMapping(path = "/pages")
    public ResponseEntity<PageDTO> getPages(@RequestParam(defaultValue = "") String letter, @RequestParam(defaultValue = "") String str, @RequestParam(defaultValue = "0") int page)
    {
        PageDTO pageDTO = new PageDTO();

        Page<User> p;
        if(str!= null && !str.isEmpty())
        {
            p = userServices.searchBySting(str, page);
        }
        else
        {
            p = userServices.getAll(page);
        }

        pageDTO.setTotalPages(p.getTotalPages());
        pageDTO.setTotalElements(p.getTotalElements());

        List<User> list = p.toList();
        List<UserDTO> newList = new ArrayList<UserDTO>();

        for(User user : list)
        {
            newList.add(new UserDTO(user));
        }

        pageDTO.setUsers(newList);

        return new ResponseEntity<PageDTO>(pageDTO, HttpStatus.OK);
    }


    @ResponseBody
    @GetMapping(path = "/getPage")
    public ResponseEntity<PageDTO> getPage()
    {
        PageDTO pageDTO = new PageDTO();

        Page<User> p = userServices.getAll(0);

        pageDTO.setTotalPages(p.getTotalPages());
        pageDTO.setTotalElements(p.getTotalElements());

        return new ResponseEntity<PageDTO>(pageDTO, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(value = "/getAll")
    public ResponseEntity<List<UserDTO>> getAll()
    {

        List<UserDTO> list = new ArrayList<UserDTO>();

        for(User u : userServices.getAll())
        {
            list.add(new UserDTO(u));
        }
        return new ResponseEntity<List<UserDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(value = "/search/{str}")
    public ResponseEntity<List<UserDTO>> search(@PathVariable("str") String str) {

        List<UserDTO> list = new ArrayList<UserDTO>();

        for(User u : userServices.searchBySting(str))
        {
            list.add(new UserDTO(u));
        }
        return new ResponseEntity<List<UserDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping(value = "/save")
    public ResponseEntity<UserDTO> save(@RequestParam User user) {
        return  new ResponseEntity<UserDTO>(new UserDTO(userServices.save(user)), HttpStatus.OK);
    }

    @ResponseBody
    @PutMapping(value = "/update")
    public ResponseEntity<UserDTO> update(@RequestParam User user)
    {
        return  new ResponseEntity<UserDTO>(new UserDTO(userServices.update(user)), HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping(value = "/delete")
    public ResponseEntity<UserDTO>  delete(@RequestParam User user) throws Exception {
        userServices.delete(user);
        return new ResponseEntity<UserDTO>(new UserDTO(user), HttpStatus.OK);
    }
}
