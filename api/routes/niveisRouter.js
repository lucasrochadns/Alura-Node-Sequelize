const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
 .get('/niveis', NivelController.findAllNivel)
 .get('/niveis/:id', NivelController.findById)
 .post('/niveis', NivelController.save)
 .put('/niveis/:id', NivelController.update)
 .delete('/niveis/:id', NivelController.delete)
module.exports = router