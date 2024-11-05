import express from "express";
import postRoutes from './routes/posts';

const PORT = process.env.PORT || 4000;

const app = express();
app.use('/api/v1/posts', postRoutes);

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

server.on('error', () => {
  console.log(`Errored out. Exiting.`);
  process.exit(1);
})

