package com.springjpa.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "distributors")
public class Distributor implements Serializable{

	private static final long serialVersionUID = -300915992241606L;
	@Id
	@Column(name = "dist_id")
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private long dist_id;
	

	@Column(name = "name")
	private String name;
	

	protected Distributor() {
	}


	public Distributor(long id,String name) {
		//super();
		this.dist_id = id;
		this.name = name;
	}


	public long getId() {
		return dist_id;
	}


	public void setId(long id) {
		this.dist_id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

//	@Override
//	public String toString() {
//		return String.format("Produkt -> productId='%d', firstname='%s', lastname='%s',address='%s']", id, firstname, lastname,address);
//	}
}
