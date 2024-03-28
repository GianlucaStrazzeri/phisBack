//mainRoutes se encarga de gestionar el enrutamiento de forma visual, la parte funcional se encontrará en controllers

const express = require('express')
const router = express.Router()
const PatientController = require('../controllers/PatientController.js')

router.get('/', PatientController.getAll )
router.post('/', PatientController.addPatient )

module.exports = router;