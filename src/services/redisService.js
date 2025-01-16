// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse :
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse :

const redisdb = require('../config/db');
// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
  // TODO: Implémenter une fonction générique de cache
  const redisClient = await redisdb.connectRedis();
  try {
    await redisClient.set(key, JSON.stringify(data), { EX: ttl });

  } catch (error) {
    console.error("Error caching data:", error);
  }
}

async function getCachedData(key) {
  // get cash data implemenatation
  const redisClient = await redisdb.connectRedis();
  try {
    const data = await redisClient.get(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error("Error getting cached data:", error);
    return null;
  }

}

module.exports = {
  // TODO: Exporter les fonctions utilitaires
  cacheData,
  getCachedData
};