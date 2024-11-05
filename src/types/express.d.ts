import { Request } from 'express';
import Store from '../store/store';

declare module 'express-serve-static-core' {
  interface Request {
    store?: Store;
  }
}
