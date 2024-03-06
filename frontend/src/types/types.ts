export interface Superhero {
    _id: string;
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
  