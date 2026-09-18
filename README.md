# Google Cloud Sovereign Clone (`cloud-google-por`)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-cloud--google--por.vercel.app-1A73E8?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud-google-por.vercel.app)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An autonomous, 100% pixel-accurate reproduction of [Google Cloud](https://cloud.google.com), powered by `clone-use` v3.0 autonomous web decompression engine.

---

## ⚡ Key Highlights & Parity Architecture

- **Asset Decompilation**: Scraped and extracted retina GStatic assets, Google Sans & Google Material Symbols ligatures, and original hero webm video loops (`MultiPath_2X_V2.webm`).
- **Interactive Gemini Studio**: Live playground simulating multimodal vision, autonomous agent workflows, and BigQuery SQL generation with realistic token outputs.
- **Dynamic Cost Estimator**: Interactive calculator modeling compute (vCPU), memory (GB RAM), and API requests with real-time $300 90-day free trial credit deductions.
- **Lenis Kinetic Scroll**: High-fidelity kinetic scroll physics mimicking enterprise Google Cloud desktop interactions.
- **Command Palette (Cmd+K)**: Instant search navigation across Google Cloud products, solutions, AI platforms, and documentation.
- **Multi-Route Architecture**:
  - `/` — Homepage with video hero, live products, enterprise case studies, and SLA trust metrics.
  - `/ai/gemini` — Dedicated Vertex AI & Gemini ecosystem portal with model comparison matrix.
  - `/bigquery` — Enterprise serverless data warehouse analytics workbench.
  - `/pricing/list` — Transparent tier breakdown and interactive workload blueprints.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript 5.5 (Strict mode)
- **Styling**: Tailwind CSS with custom Google Material Color tokens (`#1A73E8`, `#EA4335`, `#FBBC04`, `#34A853`)
- **Motion & Scrolling**: `@studio-freight/lenis`, `lucide-react`
- **Deployment**: Vercel Edge Network

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/christpor/cloud-google-por.git
cd cloud-google-por

# Install dependencies
npm install

# Start local dev server
npm run dev

# Production build & preview
npm run build
npm run preview
```

---

## 🌐 Live Production

Deployed on Vercel at [https://cloud-google-por.vercel.app](https://cloud-google-por.vercel.app).
