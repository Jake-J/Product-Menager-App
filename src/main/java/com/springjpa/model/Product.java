package com.springjpa.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;


@Entity
@Table(name = "products")

public class Product implements Serializable{

	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull(message="Please enter a product name")
	@Range(min=1,message="Price have to greater than 1")
	@Column(name = "price")
	private int price;
	
	@Size(min=3, max=20, message="Your product name should be between 3 - 20 characters.")
	@NotNull(message="Please enter a product name")
	@Column(name = "name")
	private String name;

	@ManyToOne(optional=false)
	@NotNull(message="Product needs to have distributor")
	@JoinColumn(name="distributor_fk",referencedColumnName="dist_id")
	private Distributor distributor;
	
	protected Product() {
	}
	public Product(long id, String name, int price,Distributor distributor) {
		this.id = id;
		this.price = price;
		this.name = name;
		this.distributor = distributor;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Distributor getDistributor() {
		return distributor;
	}
	public void setDistributor(Distributor distributor) {
		this.distributor = distributor;
	}
}
