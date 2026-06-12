# GO-BRICS Email Automation Sequence Documentation

An interactive, premium React documentation dashboard for **TASK_T07 | Welcome Series | Shungite Shield | June 2026** by GO-BRICS Business Lab.

This single-page application documents a live 3-email automated sequence for the Shungite Shield wellness brand, tracking deliverability, flow branches, trigger conditions, and performance metrics against industry benchmarks.

---

## 🎨 Design System & Aesthetics
- **Colors**: Matte Black (`#0A0A0A`), Neon Matrix Green (`#00FF41`), Deep Charcoal (`#1A1A1A`) for card containers, and Gold (`#D4AF37`) accents for CTA highlights.
- **Typography**: Inter (Google Fonts) for UI elements, Monospace (Fira Code) for test run consoles.
- **Micro-interactions**: Pulse effects for live indicators, smooth tab transitions, and hover glow elevations.
- **Print Friendly**: Embedded `@media print` styles optimized for A4 document prints. When clicking the "Download Report PDF" button, the page hides navigational chrome, switches to high-contrast white/black colors, and prints all four tabs sequentially as a clean print layout.

---

## 📂 Features & Structure

The application is structured into four interactive sections:

### 1. Overview
- **Sequence Summary**: Core metadata (Platform: Mailchimp, status, list triggers, open/click rate averages).
- **Stat Cards Grid**: Highlights total emails, active subscriber enrollments, and average open/click rates.
- **Timeline Visual**: Vertical/horizontal diagram detailing the send schedule (Day 0, Day 2, and Day 5).

### 2. Email Previews
- **Sidebar Selector**: On-screen selector allowing the user to select and review each email mockup.
- **Fidelity Client Mockups**: Renders HTML/CSS preview boxes styled as live emails:
  - **Email 1 (Day 0 - Welcome)**: Initial brand welcome, Karelian Shungite mineral intro, and `WELCOME10` code gift block.
  - **Email 2 (Day 2 - Education)**: Explores the science behind fullerene EMF absorption, water purification, grounding, and Bangalore customer review quote.
  - **Email 3 (Day 5 - Special Offer)**: Red countdown urgency header banner, Starter Pack/Home Protect/Studio Pack cards, certified trust badges, and conversions CTA.
- **Sequential print preview**: Automatically formats and renders all three mockups vertically when printing.

### 3. Trigger & Flow
- **Automation Flow Diagram**: Node chart diagram illustrating the subscription path, integrations, delays, and split logic branches (Green branch for customer buyers, Amber branch for re-engagement).
- **Trigger Conditions Matrix**: Matrix table of Signups, Hard Bounces, Unsubscribes, and Purchase Actions.
- **Test Run Log**: Sleek console mockup verifying test email deliveries, responsive mobile/desktop formats, and link validations.

### 4. Performance Stats
- **Performance Matrix Table**: Complete breakdown of Open, Click, Bounce, Unsubscribe, and Conversion rates against Industry Averages.
- **Grouped Bar Charts**: Interactive **Recharts** charts comparing Shungite Shield rates against standard benchmarks (separate charts for Open and Click rates to ensure proper Y-axis scaling).
- **Insight Cards**: Highlights strong subject lines, conversion drivers, and performance beats.

---

## 🛠️ Technical Stack
- **Framework**: React 19 + Vite 8 (Client build)
- **Styling**: Tailwind CSS v4 (using the `@tailwindcss/vite` compiler)
- **Charts**: Recharts 3
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
1. Navigate to the project directory:
   ```bash
   cd go-brics-email-automation
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the local dev server:
```bash
npm run dev
```

### Production Build
Compile and build static assets for deployment:
```bash
npm run build
```
The built assets will be created in the `dist/` folder.
