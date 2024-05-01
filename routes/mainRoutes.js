//mainRoutes se encarga de gestionar el enrutamiento de forma visual, la parte funcional se encontrará en controllers

const express = require('express') //requiero express
const router = express.Router() //requiero Router de express
const PatientController = require('../controllers/PatientController.js') //requiero los controladores

router.get('/', PatientController.getAll )
router.post('/', PatientController.addPatient )

module.exports = router; //exporto router