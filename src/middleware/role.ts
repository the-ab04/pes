import { Request, Response, NextFunction } from "express";

interface RoleRequest extends Request {
  user?: { role: string };
}

export const checkRole = (requiredRole: string) => {
  return (req: RoleRequest, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== requiredRole) {
      return res.status(403).json({ message: "Permission Denied" });
    }
    next();
  };
};
