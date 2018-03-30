$(document).ready(function() {
    $('body').bootstrapMaterialDesign();
})

$('#save-note').on('click', function () {
    var title = $('input[name=title]').val()
    var description = $('input[name=description]').val()
    var content = $('textarea[name=content]').val()

    var createData = {
        title: title,
        description: description,
        content: content
    }

    $.post(window.location.pathname, createData, function(data, status){
        console.log(status);
    });
})

$('#edit-note').on('click', function () {
    var title = $('input[name=title]').val()
    var description = $('input[name=description]').val()
    var content = $('textarea[name=content]').val()

    var updateData = {
        title: title,
        description: description,
        content: content
    }

    $.post(window.location.pathname, updateData, function(data, status){
        console.log(status);
    })
})
