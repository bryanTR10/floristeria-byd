package com.example.floristeria;

import java.util.List;

import com.example.floristeria.Flor;
import com.example.floristeria.FlorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlorService {
    @Autowired
    private FlorRepository florRepository;

    public List<Pedido> obtenerFlores() {
        return florRepository.findAll();
    }

    public Pedido obtenerFlorPorId(Long id) {
        return florRepository.findById(id).orElse(null);
    }

    public void guardarFlor(Flor flor) {
        florRepository.saveAll(flor);
    }

    public void eliminarFlor(Long id) {
        florRepository.deleteById(id);
    }
}
