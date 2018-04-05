var express = require('express')
var router = express.Router()

// Controllers
var notesController = require('../controllers/notesController')
var apiController = require('../controllers/apiController')

router.get('/', notesController.index)

router.get('/edit/:slug', notesController.getEdit)

router.post('/edit/:slug', apiController.postEdit)

router.get('/search', notesController.searchNotes)

router.get('/new', notesController.getNewNote)

router.post('/new', apiController.postNewNote)

router.get('/note/:slug', notesController.getNote)

router.post('/note/delete/:id', apiController.deleteNote)

module.exports = router
