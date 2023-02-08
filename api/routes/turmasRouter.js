const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router();
router
 .get('/turmas', TurmaController.findAllTurma)
 .get('/turmas/:id', TurmaController.findById)
 .post('/turmas', TurmaController.save)
 .put('/turmas/:id', TurmaController.update)
 .delete('/turmas/:id', TurmaController.delete)
module.exports = router