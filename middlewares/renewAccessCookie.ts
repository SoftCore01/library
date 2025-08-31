import { NextFunction, Request, Response } from "express";

export default function renewAccessCookie(req: Request, res: Response, next: NextFunction) {
    /* if (!req.session.user) return res.status(401); */ 
    res.cookie("access", "true", {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 10,
    });
    next()
}