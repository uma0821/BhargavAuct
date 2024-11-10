// src/web-socket

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import next from 'next';
import fs from 'fs';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressApp = express();
  const server = http.createServer(expressApp); // Create HTTP server
  const io = new Server(server, {
    cors: {
      origin: dev ? "http://localhost:3000" : "https://bhargavaauctions.com",
    },
  });

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('placedBid', () => {
      console.log('Client bidUpdate');
      io.emit('bidUpdated'); // Emit event to all connected clients
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  // for next js routing
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

 // Start the combined server
  const PORT = 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on PORT ${PORT}`);
  });
});
