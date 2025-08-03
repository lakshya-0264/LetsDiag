# 💊 LetsDiag - Medicine Recommendation App

This project is a medicine recommendation application that suggests over-the-counter (OTC) medications based on user-provided symptoms. It leverages the Perplexity AI API to generate recommendations and then fetches detailed information about those medications from the RxNav API and, as a fallback, Wikipedia. The frontend, built with React, provides a user-friendly interface for entering symptoms and viewing the recommended medications.

## 🚀 Key Features

- **Symptom-Based Recommendations:** Recommends OTC medications based on user-provided symptoms using the Perplexity AI API.
- **Medicine Information Retrieval:** Fetches detailed information about recommended medications from RxNav API and Wikipedia.
- **User-Friendly Interface:** Provides a React-based frontend for easy symptom input and medication viewing.
- **API Integration:** Seamlessly integrates with Perplexity AI and RxNav APIs.
- **Client-Side Routing:** Uses React Router for smooth navigation between different sections of the application.
- **Animated UI:** Uses Framer Motion for engaging UI animations.
- **Proxy Configuration:** Configured Vite proxy to forward API requests to the backend server during development.
- **Deployment Ready:** Configured for deployment on Vercel with URL rewrites for SPA support.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - React Router DOM
    - Axios
    - Framer Motion
    - Tailwind CSS
    - Vite
- **Backend:**
    - Python
    - Flask
    - Flask-CORS
- **API:**
    - Perplexity AI API
    - RxNav API
    - Wikipedia API
- **Other:**
    - dotenv
    - Vercel

## 📦 Getting Started / Setup Instructions

### Prerequisites

- Node.js and npm installed
- Python 3.x installed
- A Perplexity AI API key
- Vercel CLI (optional, for deployment)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Backend Setup:**

    ```bash
    https://github.com/lakshya-0264/LetsDiag-FlaskServer
    ```

    Create a `.env` file in the `backend` directory and add your Perplexity AI API key:

    ```
    PERPLEXITY_API_KEY=YOUR_PERPLEXITY_API_KEY
    ```

3.  **Frontend Setup:**

    ```bash
    cd frontend
    npm install
    ```

### Running Locally

1.  **Start the Backend:**

    ```bash
    cd backend
    flask run
    ```

    (Make sure your virtual environment is activated)

2.  **Start the Frontend:**

    ```bash
    cd frontend
    npm run dev
    ```

    The frontend will typically be accessible at `http://localhost:5173`.

## 💻 Project Structure

```
📂 Medicine-Recommendation-App
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
│   └── venv/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── Diagnosis.jsx
│   │   │   ├── LetsDiag.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   │   └── vite.svg
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
├── vercel.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [lakshyasinghal2320@gmail.com](mailto:lakshyasinghal2320@gmail.com).

Thank you for checking out this project! I hope it's helpful.

