const { Router } = require('express');
const  PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.findAllPessoa);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoas', PessoaController.save);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);
router.get('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.findPessoaAndMatricula);
router.post('/pessoas/:estudante_id/matricula', PessoaController.saveMatricula);
router.put('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.updateMatricula);
router.delete('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.deleteMatricula);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);

module.exports = router;