package com.example.floristeria;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.floristeria.arregloFloralRepository;

@Service
public class ArregloFloralService {
    @Autowired
    private ArregloFloral arregloFloralRepository;

    public List<ArregloFloral> obtenerArreglosFlorales() {
        return arregloFloralRepository.findAll();
    }

    public ArregloFloral obtenerArregloFloralPorId(Long id) {
        return ((Object) arregloFloralRepository.findById(id)).orElse(null);
    }

    public void guardarArregloFloral(ArregloFloral arregloFloral) {
        arregloFloralRepository.save(arregloFloral);
    }

}
