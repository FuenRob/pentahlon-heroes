import dotenv from "dotenv";

interface Config {
    port: number;
    mongoURI: string;
    secretKey: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/superheroes',
    secretKey: process.env.SECRET_KEY || 'your_secret_key_here'
};

export { config };
