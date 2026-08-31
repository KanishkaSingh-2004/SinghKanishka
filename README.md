# Cybersecurity & SecOps Portfolio — Sridhar Konda

A modern, premium, fully responsive cybersecurity, threat intelligence, and SecOps Engineer portfolio website designed with a dark futuristic SOC/SecOps dashboard aesthetic.

---

## ⚡ Tech Stack & Architecture

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React Icons
- **Backend & Server**: Express.js Integration (custom Node.js server runtime)
- **Deployment Model**: Persistent, long-running Node server (non-serverless) for optimal API response times and Zero Cold Starts.

---

## 🎯 Key Features

1. **Futuristic SOC Console**: Realistic interactive dashboard simulating live SIEM log queries, system CPU metrics, memory pools, and access control policies.
2. **Interactive Threat Radar Map**: Animated vector SVG map showcasing simulated cyber-attacks, active node telemetry, and real-time IDS event logs.
3. **Interactive Developer Terminal Shell**: Triggered by the backtick (\`` ` `\`) key or the navigation bar. Custom emulator supporting command requests: `help`, `about`, `skills`, `projects`, `contact`, `scan` (network audit sweep), and `decrypt` (decipher hash flags).
4. **Cyber Canvas Backgrounds**: Custom Matrix digital code rain and interactive constellation-like node networks reacting to mouse coordinates.
5. **Tactical Custom Cursor**: Glowing cyan crosshair cursor with real-time viewport coordinate outputs, expanding on hoverable action items.
6. **SecOps Boot Loader**: A custom loading overlay replicating a terminal system boot-up check and firewall credential check.
7. **Cyberpunk Contact Dispatcher**: Secure form integrating validation states, encryption placeholders, and server-side logs output.

---

## 🚀 Setup & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
To run the default Next.js development engine:
```bash
npm run dev
```

To run the Next.js development engine wrapped inside the custom Express server:
```bash
npm run dev:server
```
*Port defaults to `3000` (http://localhost:3000)*

### 3. Build & Compile for Production
```bash
npm run build
```

### 4. Boot Production Server (Express Backend)
```bash
npm run start
```
*This boots the persistent Node.js Express application process. All page loads and API lookups are handled instantly in-memory.*

---

## 📂 Project Architecture

```
├── server.js               # Custom Express server wrapper
├── package.json            # Script definitions and dependencies
├── postcss.config.mjs      # PostCSS compilation setup
├── eslint.config.mjs       # Lint validation settings
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static asset definitions
└── src/
    ├── app/                # Next.js App Router Page components
    │   ├── api/            # API Route endpoints
    │   │   └── contact/    # Contact route API handler
    │   ├── globals.css     # Global styles & cyberpunk variables
    │   ├── layout.tsx      # Main layout, fonts & metadata
    │   └── page.tsx        # Main portfolio assembly page
    └── components/         # Modular interactive components
        ├── LoadingScreen.tsx
        ├── ScrollProgress.tsx
        ├── Navbar.tsx
        ├── TerminalEasterEgg.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        ├── Certifications.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        └── BrandIcons.tsx
```

---

## 📡 Deployment Instructions

Since this application utilizes a custom Express server runtime (non-serverless), it should be hosted on a persistent Node.js environment.

### Hosting on VPS (DigitalOcean, AWS EC2, Linode)
1. **Clone & Setup**:
   Clone the repository to your host instance and run `npm install`.
2. **Build**:
   Compile the Next.js static and server components:
   ```bash
   npm run build
   ```
3. **Process Manager (PM2)**:
   Use PM2 to run the Express server in the background and ensure automatic restarts:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "sridhar-portfolio"
   pm2 save
   pm2 startup
   ```
4. **Nginx Reverse Proxy**:
   Configure Nginx as a reverse proxy to route traffic from port 80/443 to port 3000:
   ```nginx
   server {
       listen 80;
       server_name sridharkonda.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
