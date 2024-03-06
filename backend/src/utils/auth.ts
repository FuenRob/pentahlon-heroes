import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (token === `Bearer ${config.secretKey}`) {
        next();
    } else {
        res.status(401).json({ message: 'Invalid token: ' + token + ' ' + config.secretKey});
    }
};

export default verifyToken;
