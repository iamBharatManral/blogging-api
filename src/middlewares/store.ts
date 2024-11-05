import { NextFunction, Request, Response } from "express";
import Store from '../store/store';

export default function store(store: Store) {
  return (req: Request, res: Response, next: NextFunction) => {
    req.store = store;
    next();
  }
}
