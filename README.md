# Full-Stack AI-Powered Finance Tracker

**Live Demo:** [https://candid-biscochitos-9cf2b7.netlify.app/](https://candid-biscochitos-9cf2b7.netlify.app/)

---

## Overview

This is a **full-stack finance tracker application** designed to parse bank statements using AI and display structured financial insights on a dashboard.  

It was built as a **24-hour take-home assignment** to evaluate:

- Technical proficiency in full-stack development
- Problem-solving and critical thinking
- Ability to deliver a working product under time constraints

---

## Features

1. **User Authentication**
   - Secure registration and login using **bcrypt** for password hashing.
   - **JWT**-based authentication for protected routes.

2. **Bank Statement Upload**
   - Users can upload statements in various formats (PDF, CSV, text).
   - Uploads are securely handled and validated.

3. **AI-Powered Parsing**
   - **Gemini AI** parses uploaded statements to extract transactions.
   - Data is structured for easy categorization (income, expenses, transfers).

4. **Dashboard**
   - Displays parsed data in a clear, structured format.
   - Insights include categorized transactions, summaries, and overall financial health.

---

## Technology Stack

**Frontend**
- React + Vite
- React Router DOM
- Chakra UI / Styled components (optional for styling)
- Axios for API requests

**Backend**
- Node.js + Express
- MongoDB for storage
- Authentication using **bcrypt** & **JWT**
- File upload handling with Multer
- Gemini AI for parsing bank statements

---

## Installation

### Backend
```bash
cd flamecloud-server
npm install
