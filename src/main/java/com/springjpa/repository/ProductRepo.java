package com.springjpa.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.springjpa.model.Product;

public interface ProductRepo extends CrudRepository<Product,Long>{
	List<Product> findByName(String name);
}
