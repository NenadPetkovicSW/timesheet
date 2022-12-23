package com.example.springbootapp.controller;

import com.example.springbootapp.domain.Client;
import com.example.springbootapp.dto.ClientDTO;
import com.example.springbootapp.dto.PageDTO;
import com.example.springbootapp.sevices.ClientServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("clients")
@RestController
public class ClientController {

    private ClientServices clientServices;

    @Autowired
    public ClientController(ClientServices clientServices) {
        this.clientServices = clientServices;
    }

    @ResponseBody
    @GetMapping(path = "/getAlpha")
    public ResponseEntity<List<String>> getAlpha()
    {

        return new ResponseEntity<List<String>>(clientServices.getAlpha(), HttpStatus.OK);
    }
    @ResponseBody
    @GetMapping(path = "/pages")
    public ResponseEntity<PageDTO> getPages(@RequestParam(defaultValue = "") String letter, @RequestParam(defaultValue = "") String str, @RequestParam(defaultValue = "0") int page)
    {
        PageDTO pageDTO = new PageDTO();

        Page<Client> p;
        if(letter != null && !letter.isEmpty())
        {
            p = clientServices.startsWith(letter, page);
        }
        else if(str!= null && !str.isEmpty())
        {
            p = clientServices.search(str, page);
        }
        else
        {
            p = clientServices.getAll(page);
        }

        pageDTO.setTotalPages(p.getTotalPages());
        pageDTO.setTotalElements(p.getTotalElements());

        List<Client> list = p.toList();
        List<ClientDTO> newList = new ArrayList<ClientDTO>();

        for(Client u : list)
        {
            newList.add(new ClientDTO(u));
        }

        pageDTO.setClients(newList);

        return new ResponseEntity<PageDTO>(pageDTO, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/getPage")
    public ResponseEntity<PageDTO> getPage()
    {
        PageDTO pageDTO = new PageDTO();

        Page<Client> p = clientServices.getAll(0);

        pageDTO.setTotalPages(p.getTotalPages());
        pageDTO.setTotalElements(p.getTotalElements());

        return new ResponseEntity<PageDTO>(pageDTO, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/getAll")
    public ResponseEntity<List<ClientDTO>> getAll()
    {

        List<ClientDTO> list = new ArrayList<ClientDTO>();

        for(Client u : clientServices.getAll())
        {
            list.add(new ClientDTO(u));
        }
        return new ResponseEntity<List<ClientDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/search/{str}")
    public ResponseEntity<List<ClientDTO>> search(@PathVariable("str") String str)
    {

        List<ClientDTO> list = new ArrayList<ClientDTO>();

        for(Client u : clientServices.search(str))
        {
            list.add(new ClientDTO(u));
        }
        return new ResponseEntity<List<ClientDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping(path = "/letter/{str}/{page}")
    public ResponseEntity<List<ClientDTO>> letter(@PathVariable("str") String str, @PathVariable("page") int page)
    {
        List<ClientDTO> list = new ArrayList<ClientDTO>();

        for(Client u : clientServices.startsWith(str,page))
        {
            list.add(new ClientDTO(u));
        }
        return new ResponseEntity<List<ClientDTO>>(list, HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping(path = "/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClientDTO> save(@RequestBody ClientDTO client) {
        Client newClient = new Client(null, client.getName(), client.getZipPostalCode(), client.getAddress(), client.getCountry(), client.getCity());

        return  new ResponseEntity<ClientDTO>(new ClientDTO(clientServices.save(newClient)), HttpStatus.OK);
    }

    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClientDTO> update(@RequestBody ClientDTO client)
    {

        Client newClient = new Client(client.getId(), client.getName(), client.getZipPostalCode(), client.getAddress(), client.getCountry(), client.getCity());
        return  new ResponseEntity<ClientDTO>(new ClientDTO(clientServices.update(newClient)), HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping(path = "/delete", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClientDTO>  delete(@RequestParam("id") long id) throws Exception {
        Client toDelete = clientServices.getById(id);
        clientServices.delete(toDelete);

        return new ResponseEntity<ClientDTO>(new ClientDTO(), HttpStatus.OK);
    }


}
