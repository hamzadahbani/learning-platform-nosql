// Question: Pourquoi créer des services séparés ?
// Réponse: 

const { db } = require('../config/db');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
  return await db.collection(collection).findOne({ _id: new ObjectId(id) })
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
};