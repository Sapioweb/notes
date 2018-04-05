var showdown = require('showdown')
var fs = require("fs")

// Models
var Notes = require('../models/notes')

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

    note.save(function (err, note) {
        if (err) {
            throw new Error(err)
        }

        res.redirect(note)
    })
}
