package com.example.floristeria;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlorRepository extends JpaRepository<Pedido, Long> {

    void saveAll(Flor flor);

}
