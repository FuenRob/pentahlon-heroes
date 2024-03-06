import mongoose, { Schema, Document } from 'mongoose';

export interface Superhero extends Document {
    name: string;
    image: string;
    attributes: {
        agility: number;
        strength: number;
        weight: number;
        endurance: number;
        charisma: number;
    };
}

const SuperheroSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    attributes: {
        agility: { type: Number, required: true },
        strength: { type: Number, required: true },
        weight: { type: Number, required: true },
        endurance: { type: Number, required: true },
        charisma: { type: Number, required: true }
    }
});

export default mongoose.model<Superhero>('Superhero', SuperheroSchema);
