package com.csi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

import com.csi.config.registrar.MultiDataSourceRegister;


@SpringBootApplication
@Import(MultiDataSourceRegister.class)
public class BlankManagerApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BlankManagerApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(BlankManagerApplication.class);
	}
}
