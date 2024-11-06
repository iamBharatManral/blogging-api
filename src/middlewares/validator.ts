import { NextFunction, Request, Response } from "express";

export default function validateReq(req: Request, res: Response, next: NextFunction) {
  const keys = Object.keys(req.body);
  if (!keys.includes('title')) {
    res.status(400).send(`Error: missing 'title' field`)
    return;
  } else if (typeof req.body["title"] !== 'string') {
    res.status(400).send(`Error: 'title' must be a string`);
    return;
  }
  if (!keys.includes('content')) {
    res.status(400).send(`Error: missing 'content' field`)
    return;
  } else if (typeof req.body["content"] !== 'string') {
    res.status(400).send(`Error: 'content' must be a string`);
    return;
  }
  if (!keys.includes('category')) {
    res.status(400).send(`Error: missing 'category' field`)
    return;
  } else if (typeof req.body["category"] !== 'string') {
    res.status(400).send(`Error: 'category' must be a string`);
    return;
  }
  if (!keys.includes('tags')) {
    res.status(400).send(`Error: missing 'tags' field`)
    return;
  } else if (!Array.isArray(req.body["tags"])) {
    res.status(400).send(`Error: 'tags' must be an array`);
    return;
  }
  next();
}
