var showdown = require('showdown')

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
    var re = new RegExp(req.query.q.toLowerCase(), 'i');

    var notes = await Notes.find().or([
        {title: { $regex: re }},
        {description: { $regex: re }},
        {content: { $regex: re }}
    ]).sort({ 'created_at': -1 }).exec()

    res.render('search', {
        q: req.query.q,
        results_count: notes.length,
        notes: notes
    })
}
