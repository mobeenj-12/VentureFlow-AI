import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { optimizePipeline, rationalizeExpenses, innovateProduct } from "./server/businessAgents";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Support large JSON payloads for base64 image transfers from the camera or upload explorer
  app.use(express.json({ limit: "30mb" }));
  app.use(express.urlencoded({ limit: "30mb", extended: true }));

  // API Route: Verify system state
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "active", 
      timestamp: new Date().toISOString(),
      service: "VentureFlow Enterprise Strategic Workspace" 
    });
  });

  // API Route: Enterprise Sales/Ops Pipeline Optimization
  app.post("/api/business/optimize-pipeline", async (req, res) => {
    const { pipelineRawText, businessModel } = req.body;
    try {
      if (!pipelineRawText) {
        return res.status(400).json({ error: "Pipeline transaction records or stage log raw text is required." });
      }
      const result = await optimizePipeline(pipelineRawText, businessModel || "B2B Enterprise SaaS");
      res.json(result);
    } catch (error: any) {
      console.error("Pipeline Optimization error:", error);
      res.status(500).json({ 
        error: error.message || "An error occurred auditing the enterprise pipeline.",
        details: "Ensure your GEMINI_API_KEY is configured in Settings Secrets."
      });
    }
  });

  // API Route: Corporate Expense Rationalization Audit
  app.post("/api/business/rationalize-expenses", async (req, res) => {
    const { expensesRawText } = req.body;
    try {
      if (!expensesRawText) {
        return res.status(400).json({ error: "No expense transaction list or card log text provided." });
      }
      const result = await rationalizeExpenses(expensesRawText);
      res.json(result);
    } catch (error: any) {
      console.error("Expense Audit error:", error);
      res.status(500).json({ 
        error: error.message || "An error occurred auditing card expenses.",
        details: "Ensure your GEMINI_API_KEY is configured in Settings Secrets."
      });
    }
  });

  // API Route: Product Market Intel & Competitive Map (Search Grounded)
  app.post("/api/business/innovate-product", async (req, res) => {
    const { conceptText, targetMarket } = req.body;
    try {
      if (!conceptText) {
        return res.status(400).json({ error: "Product innovation concept or raw brief is required." });
      }
      const result = await innovateProduct(conceptText, targetMarket || "General Consumer Retail");
      res.json(result);
    } catch (error: any) {
      console.error("Product Intel error:", error);
      res.status(500).json({ 
        error: error.message || "An error occurred running competitive market searches.",
        details: "Ensure your GEMINI_API_KEY is configured in Settings Secrets."
      });
    }
  });

  // Vite Middleware setup for development / static server for production
  if (process.env.NODE_ENV !== "production") {
    console.log("Vite loading in DEVELOPMENT mode with hot middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Vite loading in PRODUCTION mode. Serving static assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TrustLens AI server successfully booted on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server boot failure:", err);
});
