# To-do List App

Bu proje, kullanıcıların günlük görevlerini ekleyip takip edebileceği basit ve kullanıcı dostu bir To-Do List uygulamasıdır. Uygulama üzerinden kullanıcılar görev ekleyebilir, düzenleyebilir, tamamlandığında işaretleyebilir veya silebilir. Ayrıca görevleri filtreleyerek tamamlanan veya tamamlanmayan görevleri ayrı ayrı görebilir.

## Teknolojiler

### Backend
- Java 11
- Spring Boot 2.7.10
- Spring Data JPA
- H2 Database
- Lombok

### Frontend
- React.js
- Bootstrap 5
- Axios
- React Icons

## API Endpoints

- `GET /api/todos`: Tüm görevleri listeler
- `GET /api/todos/{id}`: Belirli bir görevi getirir
- `GET /api/todos/completed`: Tamamlanan görevleri listeler
- `GET /api/todos/incomplete`: Tamamlanmayan görevleri listeler
- `POST /api/todos`: Yeni bir görev oluşturur
- `PUT /api/todos/{id}`: Var olan bir görevi günceller
- `PATCH /api/todos/{id}/complete`: Bir görevi tamamlandı olarak işaretler
- `DELETE /api/todos/{id}`: Bir görevi siler

## Özellikler

- Görev ekleme, düzenleme, silme ve tamamlandı olarak işaretleme
- Görevleri filtreleme (Tümü, Aktif, Tamamlanan)
- Duyarlı tasarım (Responsive Design)
- Kullanıcı dostu arayüz
- Veritabanı entegrasyonu

## Kurulum ve Çalıştırma

Gereksinimler: Java 11+, Maven, Node.js ve npm.

### Backend

```bash
cd backend
mvn spring-boot:run
```

API `http://localhost:8080/api/todos` adresinde çalışır. Veritabanı bellek içi H2'dir (`jdbc:h2:mem:tododb`), bu yüzden uygulama yeniden başlatıldığında veriler sıfırlanır. H2 konsolu: `http://localhost:8080/h2-console`.

### Frontend

```bash
cd frontend
npm install
npm start
```

Arayüz `http://localhost:3000` adresinde açılır. Backend, CORS ayarında yalnızca bu adrese izin verir.

## Proje Yapısı

```
backend/
  src/main/java/com/example/todolist/
    controller/TodoController.java   # REST uç noktaları
    service/TodoService.java         # İş mantığı
    repository/TodoRepository.java   # Spring Data JPA
    model/Todo.java                  # Entity
  src/main/resources/application.properties
frontend/
  src/components/                    # TodoForm, TodoList, TodoItem, TodoFilter
  src/services/TodoService.js        # Axios ile API çağrıları
```
