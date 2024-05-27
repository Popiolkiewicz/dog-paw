package com.dogpaw;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;

import java.io.InputStream;

@Path("/client")
public class ClientResource {

    @GET
    @Path("{path:.*}")
    @Produces("text/html")
    public Response getIndexHtml(@PathParam("path") String path) {
        InputStream indexHtml = getClass().getResourceAsStream("/META-INF/resources/static/index.html");
        if (indexHtml == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(indexHtml).build();
    }
}
