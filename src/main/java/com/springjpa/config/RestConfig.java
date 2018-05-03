package com.springjpa.config;

import javax.annotation.PostConstruct;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.springjpa.controller.DistributorController;
import com.springjpa.controller.ProductController;

@Configuration
@Component
@ApplicationPath("/api")
public class RestConfig extends ResourceConfig{
	
	@PostConstruct
	public void  JerseyConfig() {
		register(DistributorController.class); 
		register(ProductController.class);
		property(ServerProperties.BV_SEND_ERROR_IN_RESPONSE, true);
		}
}
