package com.playground.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/upload")
public class StockController {
	
	@GET
	@Path("{fileName}")
	@Produces("application/xml")
	public String fileUpload(@PathParam("fileName") String fileName ) {
		System.out.println("you sent " + fileName);
		return "sample message";
	}
}
