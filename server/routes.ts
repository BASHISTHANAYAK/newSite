import type { Express,Router } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // put application routes here
  // prefix all routes with /api

  // Add health check endpoint
  app.get('/api/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
