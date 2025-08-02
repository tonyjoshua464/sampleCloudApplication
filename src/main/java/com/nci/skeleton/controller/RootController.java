package com.nci.skeleton.controller;

import com.nci.skeleton.entity.Property;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;


@Controller
public class RootController {

    @GetMapping("/**/{path:[^\\.]*}")
    public String forward() {
        return "forward:/";
    }

}
