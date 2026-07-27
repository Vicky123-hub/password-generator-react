# React Password Generator

A customizable password generator built with React and Vite. It lets users generate secure, random passwords by adjusting the length and toggling options for numbers and special characters.

## Features

- **Dynamic Generation**: Generates new passwords instantly as slider or options change.
- **Regenerate Button**: Click the refresh button (`↻`) to quickly create a new password with the same settings.
- **Strength Indicator**: Real-time color-coded bar (Weak, Medium, Strong) based on password complexity.
- **One-click Copy**: Copies the generated password to your clipboard with temporary visual feedback.
- **Modern UI**: Designed with glassmorphism, responsive layouts, and Poppins font.

## Tech Stack

- **React 19**
- **Vite**
- **CSS** (Vanilla stylesheet)

## How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Vicky123-hub/password-generator-react.git
cd password-generator-react
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

## Project Directory Structure

```text
password-generator/
├── public/                 # Static assets
├── src/
│   ├── assets/             # SVGs and images
│   ├── App.css             # Main stylesheet (styles and animations)
│   ├── App.jsx             # App component and generation logic
│   ├── index.css           # Global resets
│   └── main.jsx            # Entry point
├── index.html              # HTML shell
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite config
```
