var showdown = require('showdown')
var fs = require("fs")

// Models
var Notes = require('../models/notes')

exports.index = async function(req, res) {
    var notes = await Notes.find().sort({ created_at: 'desc'})

    res.render('index', {
        results_count: notes.length,
        notes: notes
    })
}

exports.getEdit = async function(req, res) {
    var note = await Notes.findOne({slug: req.params.slug}).exec()

    res.render('edit', {note: note})
}

exports.getNote = async function(req, res) {
    var note = await Notes.findOne({slug: req.params.slug}).exec()

    var converter = new showdown.Converter()

    res.render('note', {content: converter.makeHtml(note.content)})
}

exports.getNewNote = function(req, res) {
    res.render('new')
}

exports.searchNotes = async function(req, res) {
    var notes = await Notes.find({title: { $regex: new RegExp(req.query.q.toLowerCase(), "i") }}).sort({ 'created_at': -1 }).exec()

    res.render('search', {
        q: req.query.q,
        results_count: notes.length,
        notes: notes
    })
}
