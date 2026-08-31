const express = require("express");
const next = require("next");
const cors = require("cors");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();

    // Middleware setup
    server.use(cors());
    server.use(express.json());

    // Custom Express logging middleware
    server.use((req, res, nextHook) => {
      console.log(`[${new Date().toISOString().split("T")[1].slice(0, 8)}] ${req.method} ${req.url}`);
      nextHook();
    });

    // Express-based API endpoint (Non-serverless, persistent process runtime)
    server.post("/api/contact", (req, res) => {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Required fields are missing: name, email, or message" 
        });
      }

      // Live console logs (acting as an audit trail for inbound correspondence)
      console.log(`\n========================================`);
      console.log(`[EXPRESS-BACKEND] SECURE PACKET RECEIVED`);
      console.log(`Timestamp    : ${new Date().toISOString()}`);
      console.log(`Sender Name  : ${name}`);
      console.log(`Sender Email : ${email}`);
      console.log(`Subject      : ${subject || "N/A"}`);
      console.log(`Payload      : ${message}`);
      console.log(`========================================\n`);

      return res.status(200).json({
        success: true,
        message: "Handshake verified. Transmission saved to node log."
      });
    });

    // Catch-all: pass all other requests to Next.js handler
    server.use((req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`\n========================================`);
      console.log(`[SOC PORTAL] Persistent Node Server Active`);
      console.log(`Address: http://localhost:${PORT}`);
      console.log(`Mode   : ${dev ? "DEVELOPMENT" : "PRODUCTION"}`);
      console.log(`========================================\n`);
    });
  })
  .catch((ex) => {
    console.error("Failed to boot custom Node-Express engine:", ex.stack);
    process.exit(1);
  });
