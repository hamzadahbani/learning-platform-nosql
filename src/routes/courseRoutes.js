// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : 
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: 

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route pour les statistiques des cours
router.get('/stats', courseController.getCourseStats);

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);

module.exports = router;