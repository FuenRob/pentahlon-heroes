import { Request, Response, NextFunction } from 'express';
import Superhero from '../models/superhero';

class SuperheroController {
    // Obtener todos los superhéroes
    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const superheroes = await Superhero.find();
            res.status(200).json(superheroes);
        } catch (error) {
            next(error);
        }
    }

    // Crear un nuevo superhéroe
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, image, attributes } = req.body;
            const newSuperhero = await Superhero.create({ name, image, attributes });
            res.status(201).json(newSuperhero);
        } catch (error) {
            next(error);
        }
    }

    // Obtener un superhéroe por su ID
    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const superhero = await Superhero.findById(req.params.id);
            if (!superhero) {
                res.status(404).json({ message: 'Superhero not found' });
                return;
            }
            res.status(200).json(superhero);
        } catch (error) {
            next(error);
        }
    }

    // Actualizar un superhéroe por su ID
    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const updatedSuperhero = await Superhero.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedSuperhero) {
                res.status(404).json({ message: 'Superhero not found' });
                return;
            }
            res.status(200).json(updatedSuperhero);
        } catch (error) {
            next(error);
        }
    }

    // Eliminar un superhéroe por su ID
    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const deletedSuperhero = await Superhero.findByIdAndDelete(req.params.id);
            if (!deletedSuperhero) {
                res.status(404).json({ message: 'Superhero not found' });
                return;
            }
            res.status(200).json({ message: 'Superhero deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

export default new SuperheroController();
