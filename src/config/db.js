// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Créer un module séparé pour les connexions aux bases de données permet de centraliser et d'encapsuler toute la logique relative aux connexions, ce qui rend le code plus propre, réutilisable et facile à maintenir. Cela permet également de gérer la logique de connexion, de gestion des erreurs, de réessai et de fermeture de manière cohérente et centralisée.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : 

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  try {
    mongoClient = new MongoClient(config.mongodb.uri);
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log(`Connected to MongoDB database: ${config.mongodb.dbName}`);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  const redisClient = redis.createClient();
  try {
    await redisClient.connect({
      host: config.redis, port: config.port
    });
    console.log("data base connected");
  } catch (error) {
    console.log("data base not connected");
  }
  return redisClient;
}

function getdb() {
  if ((!db)) {
    throw new Error("mongodb not found not connected")
  } else {
    return db;
  }
}

// close connections
async function closeMongo() {
  await mongoClient.close();
  console.log("MongoDB connection closed");
}
async function closeRedis() {
  await redisClient.quit();
  console.log("Redis connection closed");
}

// Export des fonctions et clients
module.exports = {
  connectMongo,
  connectRedis,
  closeMongo,
  closeRedis,
  getDb: () => db,
  getRedisClient: () => redisClient,
};