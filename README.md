# Mohammed Suzain Khan – Software Engineer Portfolio

A premium, modern software engineering portfolio website engineered with **React 18**, **Tailwind CSS**, and **Framer Motion**, featuring a futuristic glassmorphic developer aesthetic, interactive shell terminal, responsive design, dark/light mode toggle, and instant printable resume generation.

---

## 🚀 Live Demo & Development

### 1. Run Locally
```bash
# Navigate to project folder
cd "C:\Users\Suzain Khan\.gemini\antigravity-ide\scratch\portfolio-suzain"

# Start the dev server
npm run dev
```
Open **http://localhost:3000** in your browser to view your live portfolio!

### 2. Build for Production
```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory.

---

## 🛠️ Tech Stack & Highlights

- **Frontend Core**: React 18, Vite
- **Styling**: Tailwind CSS, Glassmorphism, CSS Custom Properties, Responsive Layouts
- **Motion & Interactions**: Framer Motion (page reveals, modal transitions, scroll-progress indicator)
- **Icons**: Lucide React
- **Interactive Shell**: Custom Bash-style Terminal emulator with command interpreter (`whoami`, `skills`, `education`, `certs`, `sudo hire`, `clear`)
- **Document Export**: Built-in A4 print-optimized Resume Modal matching the original resume structure

---

## 📋 Extracted Resume Highlights

- **Personal Information**:
  - Name: Mohammed Suzain Khan
  - Phone: +91 9019660826
  - Email: suzein2576@gmail.com
  - Location: Karnataka, India
- **Education**:
  - **B.E. in Information Science and Engineering** – Adichunchanagiri Institute of Technology (AIT) | **CGPA: 8.8** | Expected 2028
  - **2nd PUC** – Mountain View PU College | **91%** | 2024
  - **10th CBSE** – Mountain View Public School | **83%** | 2022
- **Technical Skills**:
  - Languages: Java, Python, C, SQL, JavaScript (ES6+)
  - Core Concepts: Data Structures, Algorithms, OOP, Database Management Systems (DBMS)
  - Web Technologies: HTML, CSS, JavaScript, React.js, Tailwind CSS
  - Frameworks & Tools: Java Collections Framework, JDBC, Git, GitHub, VS Code, IntelliJ IDEA
  - Databases: MySQL
- **Certifications**:
  - NPTEL – Joy of Programming in Python (2025)
  - NPTEL – Database Management Systems (DBMS)
- **Projects**:
  - **CampusSphere**: Student Academic & Course Management DBMS (Java, JDBC, MySQL)
  - **Algoverse**: Interactive Data Structures & Algorithm Visualizer (React, Framer Motion)
  - **PyAutomate**: Computational Data Pipeline & Automated Scraper (Python, Pandas, SQL)
  - **DevPulse**: Futuristic Developer Portfolio & Command Center (React, Tailwind CSS)

---

## 🌐 Deploy to Vercel or GitHub Pages

### Deploying to Vercel (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/suzein2576/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository and click **Deploy**. Vercel will automatically detect Vite and publish the site with continuous integration and global SSL.

### Deploying to GitHub Pages
1. In `vite.config.js`, set `base: '/portfolio/'` (matching your GitHub repository name).
2. Run:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

---

© 2026 Mohammed Suzain Khan. All rights reserved.
