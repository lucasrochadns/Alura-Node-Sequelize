const { Router } = require('express');
const  PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.findAllPessoaAndAtivoTrue);
router.get('/pessoas/todos', PessoaController.findAllPessoa);
router.get('/pessoas/:estudante_id/matriculas', PessoaController.pegaMatriculas);
router.get('/pessoas/:id', PessoaController.findById);
router.get('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.findPessoaAndMatricula);
router.post('/pessoas', PessoaController.save);
router.post('/pessoas/:estudante_id/matricula', PessoaController.saveMatricula);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.put('/pessoas/:id', PessoaController.update);
router.put('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.updateMatricula);
router.delete('/pessoas/:id', PessoaController.delete);
router.delete('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.deleteMatricula);

module.exports = router;