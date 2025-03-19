package com.example.todolist.repository;

import com.example.todolist.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    
    // Tamamlanan görevleri getir
    List<Todo> findByCompletedTrue();
    
    // Tamamlanmayan görevleri getir
    List<Todo> findByCompletedFalse();
}
