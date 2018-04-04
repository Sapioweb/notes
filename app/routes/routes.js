var express = require('express')
var router = express.Router()

// Controllers
var notesController = require('../controllers/notesController')

router.get('/', notesController.index)

router.get('/edit/:slug', notesController.getEdit)

router.post('/edit/:slug', notesController.postEdit)

router.get('/search', notesController.searchNotes)

router.get('/new', notesController.getNewNote)

router.post('/new', notesController.postNewNote)

router.get('/note/:slug', notesController.getNote)

router.post('/note/delete/:id', notesController.deleteNote)

module.exports = router
