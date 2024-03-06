import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config';
import apiRoutes from './routes/api';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.connectDB();
        this.routes();
        this.init();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private connectDB(): void {
        mongoose.connect(config.mongoURI)
            .then(() => console.log('MongoDB connected'))
            .catch(err => console.log(err));
    }

    private init(): void {
        this.app.listen(config.port, () => {
            console.log('App is listening on port 3000');
        });
    }

    private routes(): void {
        this.app.use(cors());
        this.app.use('/api', apiRoutes);
        
        // Error handling middleware
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });
    }
}

export default new App().app;
