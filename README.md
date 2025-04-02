# Todo List Uygulaması

Bu proje, kullanıcıların günlük görevlerini ekleyip takip edebileceği basit ve kullanıcı dostu bir To-Do List (Yapılacaklar Listesi) uygulamasıdır. Uygulama üzerinden kullanıcılar görev ekleyebilir, düzenleyebilir, tamamlandığında işaretleyebilir veya silebilir. Ayrıca görevleri filtreleyerek tamamlanan veya tamamlanmayan görevleri ayrı ayrı görebilir.

## Teknolojiler

### Backend
- Java 11
- Spring Boot 2.7.10
- Spring Data JPA
- H2 Database (Geliştirme için)
- Lombok

### Frontend
- React.js
- Bootstrap 5
- Axios
- React Icons

## Kurulum ve Çalıştırma

### Backend

1. Backend klasörüne gidin:
   ```
   cd C:\Users\okaan\CascadeProjects\todo-list-app\backend
   ```

2. Maven ile projeyi derleyin ve çalıştırın:
   ```
   mvn spring-boot:run
   ```

3. Backend sunucusu http://localhost:8080 adresinde çalışacaktır.

### Frontend


   ```

1. Gerekli paketleri yükleyin:
   ```
   npm install
   ```

2. Uygulamayı başlatın:
   ```
   npm start
   ```

4. Frontend uygulaması http://localhost:3000 adresinde çalışacaktır.

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

## H2 Veritabanı Konsolu

H2 veritabanı konsoluna erişmek için:

1. Backend uygulamasını çalıştırın
2. Tarayıcınızda http://localhost:8080/h2-console adresine gidin
3. JDBC URL: `jdbc:h2:mem:tododb`
4. Kullanıcı adı: `sa`
5. Şifre: `password`
