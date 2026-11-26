# AutoDrive – Car Dealership Website

## 1. Project Overview

AutoDrive is a web-based car dealership platform developed using React. The platform allows customers to explore available vehicles, view detailed vehicle information, save cars to their wishlists, place orders, and contact sellers.

It also provides a seller dashboard where sellers can manage dealership activities, view customer orders, access customer information, and review messages submitted through the contact page.

The project aims to provide a simple, user-friendly, and responsive experience for both customers and sellers.

## 2. Technologies Used

The project was developed using the following technologies:

- **React.js** – Building the user interface and reusable components.
- **Vite** – Development environment and build tool.
- **JavaScript** – Application functionality and logic.
- **Tailwind CSS** – Styling and responsive layouts.
- **React Router DOM** – Navigation and routing between pages.
- **Redux Toolkit** – Managing application authentication state.
- **React Redux** – Connecting Redux state to React components.
- **Lucide React** – Icons and visual elements.
- **LocalStorage** – Persisting prototype user accounts, wishlist items, orders, and contact messages in the browser.

## 3. Main Features

### Customer Features

- Customer registration and login.
- Browse available vehicles.
- Search and filter cars.
- View individual vehicle details.
- Add and remove vehicles from a wishlist.
- Access a personalized customer dashboard.
- View previously placed orders.
- View order and payment statuses.
- Contact sellers through the contact page.
- Logout functionality.

### Seller Features

- Seller registration and login.
- Access a dedicated seller dashboard.
- View dealership statistics.
- View customer orders.
- View registered customers.
- View messages submitted through the contact page.
- Navigate between dashboard sections.

### General Features

- Responsive user interface.
- Role-based navigation for customers and sellers.
- Protected routes for authenticated users.
- Vehicle availability indicators.
- Order confirmation page.
- Kenyan Shilling (KES) currency formatting.
- Consistent navy blue, amber, and white design theme.

## 4. User Roles

The application supports two main user roles:

| Role | Description |
|---|---|
| Customer | Browses vehicles, manages a wishlist, places orders, and contacts sellers. |
| Seller | Accesses the seller dashboard to review orders, customers, and messages. |

## 5. Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

Ensure you have installed:

- Node.js
- npm
- Visual Studio Code 
- Git

### Installation

**Step 1: Clone the repository**

```bash
git clone https://github.com/macklenton/Car_Dealership.git
```

**Step 2: Navigate into the project folder**

```bash
cd Car_Dealership
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Start the development server**

```bash
npm run dev
```

**Step 5: Open the application**

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 6. Project Structure

The application follows a feature-based React project structure.

```text
src/
│
├── components/
│   ├── auth/
│   └── dashboard/
│
├── data/
│   └── cars.js
│
├── features/
│   ├── auth/
│   ├── customer/
│   └── seller/
│
├── App.jsx
├── main.jsx
└── index.css
```

Additional folders and components may be included as the project develops.

## 7. Data Storage and Application Logic

The current version uses browser LocalStorage to persist prototype application data.

The application stores information such as:

- Registered user accounts.
- Logged-in user sessions.
- Customer wishlists.
- Customer orders.
- Contact messages.

Redux Toolkit is used to manage authentication state, while React Router handles navigation between application pages.

**Important:** LocalStorage is used for demonstration purposes. Data is stored in the browser and is not automatically synchronized between different devices or browsers.

## 8. Payment Processing

The current checkout process demonstrates the order placement workflow and order confirmation.

A live payment gateway has not yet been integrated. Payment statuses displayed in the application are therefore part of the prototype and should not be interpreted as verified financial transactions.

## 9. Future Improvements

Possible future enhancements include:

- Integration with a backend API and database.
- Secure authentication and password hashing.
- Integration of M-Pesa and other payment gateways.
- Real-time synchronization of customer and seller data.
- Advanced vehicle comparison functionality.
- Vehicle image uploads and inventory management.
- Real-time customer and seller messaging.
- Order tracking and notifications.
- Improved seller analytics and sales reports.

## 10. Contributors

This project was developed collaboratively, with responsibilities divided among group members.

| Contributor | Responsibilities |
|---|---|
| Brian | Home page, Login and Registration pages |
| Mohaa | Seller Dashboard, Customer Dashboard, Contact page and Order page |
| Project Lead / Contributor | Cars Listing, Vehicle Details and Order Success pages |

