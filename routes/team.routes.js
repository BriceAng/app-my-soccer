const router = require('express').Router();
const teamController = require('../controllers/team.controller');

//basics routes team
router.get('/', teamController.showTeams);
router.post('/', teamController.createTeam);
router.put('/:id', teamController.updateTeam);
router.delete('/:id', teamController.deleteTeam);

//routes for management of user requests
router.get('/wait-list/:id', teamController.showWaitListUser);
router.patch('/request-user/:id', teamController.requestUser);
router.patch('/cancel-request-user/:id', teamController.cancelRequestUser);
router.patch('/accept-user/:id', teamController.acceptUser);

//routes for management of match requests
router.get('/game-list/:id', teamController.showWaitListGame);
router.patch('/request-game/:id', teamController.requestGame);
router.patch('/cancel-request-game/:id', teamController.cancelRequestGame);
router.patch('/accept-game/:id', teamController.acceptGame);
router.patch('/result/:id', teamController.Result);

module.exports = router;
