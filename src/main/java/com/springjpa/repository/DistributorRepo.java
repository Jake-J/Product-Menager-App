package com.springjpa.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.springjpa.model.Distributor;

public interface DistributorRepo extends CrudRepository<Distributor,Long>{
	List<Distributor> findByName(String name);
}

