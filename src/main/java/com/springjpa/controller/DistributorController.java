package com.springjpa.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.springjpa.model.Distributor;
import com.springjpa.repository.DistributorRepo;
import com.springjpa.repository.ProductRepo;

@Component
@Path("/distributors")
@Produces("application/json")
public class DistributorController {
	@Autowired
	private DistributorRepo repository;

	@GET
	public List<Distributor> findAll(){
		List<Distributor> distributor= new ArrayList<>();
		repository.findAll().forEach(distributor::add);
		return distributor;
	}

	@DELETE
	@Consumes("application/json")
	public Distributor deleteDist(Distributor distributor) {
		repository.delete(distributor);
		return distributor;
	}

	@POST
	@Consumes("application/json")
	public Distributor addDistributor(@Valid Distributor distributor) {
		distributor=repository.save(distributor);
		return distributor;
	}

	@PUT
	@Consumes("application/json")
	public  Distributor updateDistributor(@Valid Distributor distributor) {
		distributor=repository.save(distributor);
		return distributor;
	}
}

