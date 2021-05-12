package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.groupproject.models.User;
import com.example.groupproject.models.UserRepository;



@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
 UserRepository userRepository;
 @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping()
  public List<User> getUsers() {
    return userRepository.findAll();
  }
  
   @GetMapping("/{id}")
  public ResponseEntity<User> getUsers(@RequestParam Long id){
   User foundUser = userRepository.findById(id).orElse(null);
   if(foundUser == null){
     return ResponseEntity.notFound().build();
   }
     return ResponseEntity.ok(foundUser);
  }


  @PostMapping()
  public User addUser(@RequestBody User user) {
    return userRepository.save(user);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
   userRepository.deleteById(id);
  }
  @PutMapping("/{id}")
  public User updateProject(@PathVariable Long id, @RequestBody User user) {
   User foundUser = userRepository.findById(id).orElse(null);
    if (foundUser != null) {
    	foundUser.setUsername(user.getUsername());
      userRepository.save(foundUser);
      return foundUser;
    }
    return null;
  }

}