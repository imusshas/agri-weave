package Rezaul.Muhib.agriweavev1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class AgriWeaveV1Application {

	public static void main(String[] args) {
		SpringApplication.run(AgriWeaveV1Application.class, args);
	}

}
