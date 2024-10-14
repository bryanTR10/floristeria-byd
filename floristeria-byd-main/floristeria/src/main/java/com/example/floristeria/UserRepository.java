package com.example.floristeria;

public interface UserRepository {
    User findByUsername(String username);
}
