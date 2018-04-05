$(document).ready(function() {
    $('body').bootstrapMaterialDesign();

    $('#save-note').on('click', function () {
        postData(window.location.pathname, {
            title: $('input[name=title]').val(),
            description: $('input[name=description]').val(),
            content: $('textarea[name=content]').val()
        })
    })

    $('#edit-note').on('click', function () {
        postData(window.location.pathname, {
            title: $('input[name=title]').val(),
            description: $('input[name=description]').val(),
            content: $('textarea[name=content]').val()
        })
    })

    $('a.delete-note').on('click', function () {
        postData('/note/delete/' + this.getAttribute('data-id'))
    })

    function postData(path, data) {
        $.post(path, data, function(data, status){
            if (status == 'success') {
                location.reload()
            }
        })
    }
})
