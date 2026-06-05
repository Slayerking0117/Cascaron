# Workspace Reservation System

## Description

Workspace Reservation System is a Single Page Application (SPA) developed with JavaScript, Vite, Tailwind CSS, and JSON Server.

The application allows users to authenticate, create reservations, manage reservation statuses, and access features according to their assigned role.

---

## Features

### Authentication

- User login
- Session persistence using Local Storage
- Protected routes
- Role validation

### Reservations

- View reservations
- Create reservations
- Edit reservations
- Delete reservations
- Approve reservations (Admin)
- Reject reservations (Admin)
- Cancel reservations (User)

### Business Rules

- Users can only see their own reservations
- Administrators can see all reservations
- Reservations cannot overlap in the same workspace and schedule
- Only pending reservations can be edited
- Approved reservations can be cancelled by users
- Rejected and cancelled reservations cannot be modified

---

## Technologies Used

- JavaScript (ES6+)
- Vite
- Tailwind CSS
- JSON Server

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start Vite:

```bash
npm run dev
```

Application URL:

```txt
http://localhost:5173
```

---

## Running JSON Server

Start the mock API:

```bash
npx json-server db.json --watch
```

API URL:

```txt
http://localhost:3000
```

---

## Test Users

### Administrator

Email:

```txt
admin@test.com
```

Password:

```txt
A123456
```

### User

Email:

```txt
user@test.com
```

Password:

```txt
A123456
```

### User 2

Email:

```txt
user2@test.com
```

Password:

```txt
A123456
```

---

## Project Structure

```txt
src/
│
├── api/
│   └── http.js
│
├── components/
│   ├── ReservationCard.js
│   └── Sidebar.js
│
├── controllers/
│   ├── home.controller.js
│   └── login.controller.js
│
├── router/
│   └── router.js
│
├── services/
│   ├── auth.service.js
│   └── reservation.service.js
│
├── views/
│   ├── homeView.js
│   ├── loginView.js
│   ├── unauthorized.js
│   └── notFound.js
│
├── utils/
│   └── index.js
│
└── main.js
```

---

## Roles

### Administrator

Can:

- View all reservations
- Approve reservations
- Reject reservations
- Edit reservations
- Delete reservations

### User

Can:

- View their own reservations
- Create reservations
- Edit pending reservations
- Cancel reservations
- Delete reservations

---

## Reservation Status Flow

```txt
Pending
 ├─> Approved
 ├─> Rejected
 └─> Cancelled
```

---

## Author

Developed as part of a Junior Frontend Developer technical assessment.