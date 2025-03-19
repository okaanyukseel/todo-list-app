package com.example.todolist.controller;

import com.example.todolist.model.Todo;
import com.example.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000") // React frontend için CORS yapılandırması
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    // Tüm görevleri getir
    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        return ResponseEntity.ok(todoService.getAllTodos());
    }

    // ID'ye göre görev getir
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id) {
        return todoService.getTodoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Tamamlanan görevleri getir
    @GetMapping("/completed")
    public ResponseEntity<List<Todo>> getCompletedTodos() {
        return ResponseEntity.ok(todoService.getCompletedTodos());
    }

    // Tamamlanmayan görevleri getir
    @GetMapping("/incomplete")
    public ResponseEntity<List<Todo>> getIncompleteTodos() {
        return ResponseEntity.ok(todoService.getIncompleteTodos());
    }

    // Yeni görev oluştur
    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
        return new ResponseEntity<>(todoService.createTodo(todo), HttpStatus.CREATED);
    }

    // Görevi güncelle
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo todoDetails) {
        Todo updatedTodo = todoService.updateTodo(id, todoDetails);
        return updatedTodo != null
                ? ResponseEntity.ok(updatedTodo)
                : ResponseEntity.notFound().build();
    }

    // Görevi tamamlandı olarak işaretle
    @PatchMapping("/{id}/complete")
    public ResponseEntity<Todo> markTodoAsCompleted(@PathVariable Long id) {
        Todo completedTodo = todoService.markTodoAsCompleted(id);
        return completedTodo != null
                ? ResponseEntity.ok(completedTodo)
                : ResponseEntity.notFound().build();
    }

    // Görevi sil
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }
}
