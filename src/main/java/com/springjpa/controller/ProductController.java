package com.springjpa.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.springjpa.model.Distributor;
import com.springjpa.model.Product;
import com.springjpa.repository.ProductRepo;


@Component
@Path("/products")
@Produces("application/json")
public class ProductController {
	@Autowired
	private ProductRepo repository;

	@GET
	public List<Product> findAll(){
		List<Product> products = new ArrayList<>();
		repository.findAll().forEach(products::add);
		return products;
	}
	
	@DELETE
	@Consumes("application/json")
	public Product deleteProd(Product prod) {
		repository.delete(prod);
		return prod;	
	}
	
	@PUT
	@Consumes("application/json")
	public Product updateProd(@Valid Product prod) {
		prod = repository.save(prod);
		return prod;
	}
	
	@POST
	@Consumes("application/json")
	public Product addProd(@Valid Product prod) {
		prod = repository.save(prod);
		return prod;
	}
	
}
