# 🔐 Premium Password Generator

A sleek, responsive, and secure password generator web application built with **React 19** and **Vite**. This application features dynamic strength estimation, one-click copying, and fine-tuned customization settings to help users generate strong, secure passwords instantly.

---

## ✨ Features

- **⚡ Instant Generation**: Passwords generate automatically as you adjust options or the length slider.
- **🔄 Regenerate Button**: A quick-refresh action (`↻`) to get a new password with the same settings.
- **📊 Real-time Strength Indicator**: Dynamic color-coded bar (Weak 🔴, Medium 🟡, Strong 🟢) analyzing complexity based on length, digits, and special characters.
- **📋 One-Click Copy**: Copy the generated password to your clipboard with clean visual feedback.
- **📱 Glassmorphism UI**: Beautiful, modern dashboard styling with smooth hover transitions, custom accent colors, and responsive layouts.
- **🔡 Typography**: Styled with the premium Google Font family **Poppins**.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Modern Vanilla CSS (Glassmorphism & Flexbox)
- **Icons / Fonts**: Poppins (Google Fonts)

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Vicky123-hub/password-generator-react.git
cd password-generator-react
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for production
```bash
npm run build
```
This generates a production-ready compiled bundle in the `dist/` directory.

---

## 📁 Project Structure

```text
password-generator/
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── assets/             # Images and SVG resources
│   ├── App.css             # Main styling, variables, animations
│   ├── App.jsx             # Core application logic & components
│   ├── index.css           # Global resets
│   └── main.jsx            # React root mount point
├── index.html              # HTML entry point with Google Fonts
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite configuration
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
