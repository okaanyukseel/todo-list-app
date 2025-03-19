package com.example.todolist.service;

import com.example.todolist.model.Todo;
import com.example.todolist.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    // Tüm görevleri getir
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    // ID'ye göre görev getir
    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    // Tamamlanan görevleri getir
    public List<Todo> getCompletedTodos() {
        return todoRepository.findByCompletedTrue();
    }

    // Tamamlanmayan görevleri getir
    public List<Todo> getIncompleteTodos() {
        return todoRepository.findByCompletedFalse();
    }

    // Yeni görev oluştur
    public Todo createTodo(Todo todo) {
        todo.initialize();
        return todoRepository.save(todo);
    }

    // Görevi güncelle
    public Todo updateTodo(Long id, Todo todoDetails) {
        return todoRepository.findById(id)
                .map(existingTodo -> {
                    existingTodo.setTitle(todoDetails.getTitle());
                    existingTodo.setDescription(todoDetails.getDescription());
                    existingTodo.setCompleted(todoDetails.isCompleted());
                    existingTodo.setUpdatedAt(LocalDateTime.now());
                    return todoRepository.save(existingTodo);
                })
                .orElse(null);
    }

    // Görevi tamamlandı olarak işaretle
    public Todo markTodoAsCompleted(Long id) {
        return todoRepository.findById(id)
                .map(todo -> {
                    todo.setCompleted(true);
                    todo.setUpdatedAt(LocalDateTime.now());
                    return todoRepository.save(todo);
                })
                .orElse(null);
    }

    // Görevi sil
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
