import express from "express";
import postRoutes from './routes/posts';
import { InMemoryStore } from './store/InMemoryStore';
import storeMiddleware from './middlewares/store';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use('/api/v1/posts', postRoutes);

app.use(storeMiddleware(InMemoryStore));

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

server.on('error', () => {
  console.log(`Errored out. Exiting.`);
  process.exit(1);
})

