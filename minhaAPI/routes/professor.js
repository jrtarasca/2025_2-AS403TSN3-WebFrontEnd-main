
const express = require('express');
const router = express.Router();
const controller = require('../controllers/professorController');


router.get('/', controller.listarProfessores);
router.get('/departamento/:departamento', controller.listarPorDepartamento);
router.get('/:id', controller.buscarProfessorPorId);
router.get('/:id/turmas', controller.listarTurmas);
router.put('/:id', controller.atualizarProfessor);
router.post('/:id/turmas', controller.adicionarTurma);
router.delete('/:id', controller.removerProfessor);

module.exports = router;
