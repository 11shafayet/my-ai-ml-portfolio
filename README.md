# MD Shafayetur Rahman Portfolio

Personal AI/ML engineering portfolio for MD Shafayetur Rahman. The site presents profile information, skills, selected AI/ML projects, work experience, contact links, and a contact form in a responsive React/Vite app.

## About The Project

This portfolio is built to highlight practical AI/ML and full-stack engineering work, including:

- Machine learning, deep learning, NLP, computer vision, and generative AI skills.
- Selected projects such as image classification, sentiment analysis, and churn prediction.
- MERN/React development experience.
- Contact options and resume download.
- SEO metadata, Open Graph/Twitter cards, JSON-LD structured data, favicon, and robots.txt.
- Initial page loading animation while the app finishes loading.

## Tech Stack

- React 19
- Vite 8
- Framer Motion
- Lucide React
- CSS Modules
- EmailJS integration for the contact form

## Project Structure

```text
.
├── public/
│   ├── assets/
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

Install Node.js 20 or newer.

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The local development server usually runs at:

```text
http://localhost:5173/
```

### Build For Production

```bash
npm run build
```

The production build is generated in `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/cpanel-deploy.yml`.

On every push to `main`, the workflow:

1. Installs dependencies with `npm ci`.
2. Builds the app with `npm run build`.
3. Deploys the generated `dist` folder to the `cpanel-deploy` branch.


## Contact

- Email: 11shafayet@gmail.com
- GitHub: https://github.com/11shafayet/
- LinkedIn: https://www.linkedin.com/in/shafayetur-rahman/
