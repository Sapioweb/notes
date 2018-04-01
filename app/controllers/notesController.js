var showdown = require('showdown')
var fs = require("fs")

// Models
var Notes = require('../models/notes')

exports.index = async function(req, res) {
    var notes = await Notes.find().limit(20).sort({ created_at: 'desc'})

    res.render('index', {
        notes: notes
    })
}

/**
 * Get method for editing a note
 * @param  {object} req Requested data
 * @param  {object} res Response object to send back
 * @return {view}       View and data rendering
 */
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
    var notes = await Notes.find({title: req.query.q}).sort({ 'created_at': -1 }).exec()

    res.render('search', {
        q: req.query.q,
        results_count: notes.length,
        notes: notes
    })
}

exports.postEdit = async function(req, res) {
    var note = await Notes.findOneAndUpdate({slug: req.params.slug}, req.body)

    res.send(note)
}

exports.deleteNote = async function(req, res) {
    var note = await Notes.remove({_id: req.params.id})

    res.send(note)
}

exports.postNewNote = async function(req, res) {
    var note = new Notes({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        slug: req.body.title.replace(/\s+/g, '-').toLowerCase()
    })

    note.save()

    res.send(note)
}
