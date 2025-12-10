# Todo List Uygulaması

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
