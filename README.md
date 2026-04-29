# TribalKart - Handcrafted Treasures

TribalKart is a full-stack web application designed to connect tribal artisans directly with customers. It features role-based dashboards for Admins, Artisans, Customers, and Cultural Consultants.

## Tech Stack
- **Frontend:** React.js, Vite, React Router
- **Backend:** Java, Spring Boot, Spring Data JPA
- **Database:** MySQL

## Prerequisites
- Node.js & npm (for frontend)
- Java 17+ & Maven (for backend)
- MySQL Workbench (for database)

## How to Run Locally

### 1. Database Setup
1. Open MySQL Workbench.
2. Ensure your local server is running with the username `root` and password `#MonSulo1` (or update these in `application.properties`).
3. The Spring Boot application will automatically create the `tribal` database and populate the initial tables.

### 2. Backend Setup
1. Navigate to the `backend` directory.
2. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.

### 3. Frontend Setup
1. Navigate to the root directory (where `package.json` is located).
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser to the URL provided by Vite (usually `http://localhost:5173` or `5174`).

## Test Accounts
You can log in using any of the following pre-configured accounts:
- **Admin:** `admin1` / `admin123`
- **Artisan:** `artisan1` / `artisan123`
- **Customer:** `customer1` / `customer123`
- **Consultant:** `consultant1` / `consultant123`
