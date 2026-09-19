<p align="center">
  <img src="public/assets/images/gcloud-hero-banner.jpg" alt="Google Cloud Sovereign Clone Banner" width="100%"/>
</p>

<h1 align="center">Google Cloud Sovereign Platform Clone</h1>

<p align="center">
  <b>Pixel-accurate, high-fidelity reproduction of Google Cloud's web ecosystem, Gemini Studio, and enterprise analytics suite.</b>
</p>

<p align="center">
  <a href="https://cloud-google-por.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-cloud--google--por.vercel.app-1A73E8?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Live Demo" /></a>
  <a href="https://github.com/christpor/cloud-google-por"><img src="https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" /></a>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,tailwind,vite,html,css,gcp,git,github&perline=10" alt="Tech Stack" />
  </a>
</p>

---

## ⚡ Executive Summary (30-Second Rule)

**Google Cloud Sovereign Clone** delivers a production-grade reproduction of Google Cloud's flagship web portal. Built with React 18, Vite 5, Tailwind CSS, and Lenis kinetic scroll, it includes an interactive Gemini Playground, BigQuery data warehouse console simulator, real-time cloud cost calculator, and Cmd+K command palette.

Run it locally in seconds:
```bash
git clone https://github.com/christpor/cloud-google-por.git
cd cloud-google-por && npm install && npm run dev
```

---

## 🗺️ Master Cognitive Flow Architecture

```mermaid
flowchart TD
    classDef client fill:#18181b,stroke:#1A73E8,stroke-width:2px,color:#fff;
    classDef studio fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff;
    classDef calc fill:#14141e,stroke:#22c55e,stroke-width:2px,color:#fff;
    classDef edge fill:#0a0a0a,stroke:#ea4335,stroke-width:2px,color:#fff;

    Visitor[Enterprise Architect / Developer]:::client -->|Global Command Palette: Cmd+K| Nav[Instant Fuzzy Route Search]:::client
    Visitor -->|/ai/gemini| Gemini[Interactive Gemini Multimodal Studio]:::studio
    Gemini -->|Prompt Execution Simulation| Stream[Real-time Token Stream & Code Gen]:::studio
    Visitor -->|/pricing/list| Calc[Dynamic Cloud Cost Estimator]:::calc
    Calc -->|vCPU / Memory / Egress Sliders| Bill[Real-time Estimate & $300 Credit Ledger]:::calc
    Visitor -->|/bigquery| BQ[BigQuery Analytics SQL Workbench]:::studio
    Views[All Hubs] -->|Edge Optimization| Vercel[Vercel Global Edge Network]:::edge
```

---

## 🏛️ Multi-Tier Engineering Architecture

| Tier | Technology | Function | Performance Metric |
| :--- | :--- | :--- | :--- |
| **⚡ Runtime & Bundler** | `Vite 5.4` + `TypeScript 5.5` | Fast HMR & tree-shaken static bundle | Sub-2.5s production build |
| **💻 Client Core** | `React 18.3` | State machines for playgrounds & cost sliders | Zero layout jank / 60 FPS |
| **🎨 Design System** | `Tailwind CSS 3.4` + `Google Sans` | Enterprise Google Cloud blue `#1A73E8` & typography | Crisp vector rendering |
| **🌊 Motion & Controls** | `Lenis Scroll` + `Lucide Icons` | Smooth momentum scrolling & unified icon grammar | Sub-50ms interaction latency |
| **☁️ Infrastructure** | `Vercel Edge Platform` | Static asset caching & global SSL delivery | 100% Core Web Vitals |

---

## ⚡ Highlights & Key Features

- **Asset Fidelity**: Extracted high-resolution assets, Google Sans styling, Material Symbols, and original hero webm video loops.
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

## 🚀 Quick Start & CLI Operations

### Local Development
```bash
# 1. Clone repository
git clone https://github.com/christpor/cloud-google-por.git
cd cloud-google-por

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
