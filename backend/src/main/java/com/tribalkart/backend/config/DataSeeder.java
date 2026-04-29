package com.tribalkart.backend.config;

import com.tribalkart.backend.entity.Product;
import com.tribalkart.backend.entity.User;
import com.tribalkart.backend.repository.ProductRepository;
import com.tribalkart.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Seed Users
        if (userRepository.count() == 0) {
            userRepository.saveAll(Arrays.asList(
                    new User(null, "admin1", "admin123", "admin"),
                    new User(null, "artisan1", "artisan123", "artisan"),
                    new User(null, "customer1", "customer123", "customer"),
                    new User(null, "consultant1", "consultant123", "consultant")
            ));
            System.out.println("Seeded initial users into the database.");
        }

        // Seed Products
        if (productRepository.count() == 0) {
            productRepository.saveAll(Arrays.asList(
                    new Product(null, "Handcrafted Bamboo Basket", "₹1,200", "product1"),
                    new Product(null, "Tribal Warli Painting", "₹3,500", "product2"),
                    new Product(null, "Dokra Art Horse", "₹2,800", "product3"),
                    new Product(null, "Handwoven Naga Shawl", "₹4,500", "product4"),
                    new Product(null, "Terracotta Decor Set", "₹1,800", "product5")
            ));
            System.out.println("Seeded initial products into the database.");
        }
    }
}
