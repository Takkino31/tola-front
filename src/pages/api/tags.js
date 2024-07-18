import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const tags = await prisma.tags.findMany();
      // Ajout du descriptif par défaut
      const tagsWithDescription = tags.map(tag => ({
        ...tag,
        descriptif: "Je suis un langage de programmation"
      }));
      res.status(200).json(tagsWithDescription);
    } catch (error) {
      console.error('Erreur lors de la récupération des tags:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des tags' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
