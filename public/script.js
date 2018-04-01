$(document).ready(function() {
    $('body').bootstrapMaterialDesign();

    /**
     * Create note function
     * @return {array} Returned array of data
     */
    $('#save-note').on('click', function () {
        postData(window.location.pathname, {
            title: $('input[name=title]').val(),
            description: $('input[name=description]').val(),
            content: $('textarea[name=content]').val()
        })
    })

    /**
     * Edit note function
     * @return {array} Returned array of data
     */
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

    /**
     * Posting abstraction to API
     * @param  {object} data Data to be passed to API
     * @return {array}       Returned array of data
     */
    function postData(path, data) {
        $.post(path, data, function(data, status){
            console.log(data)
        })
    }
})
