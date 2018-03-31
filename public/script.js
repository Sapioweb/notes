$(document).ready(function() {
    $('body').bootstrapMaterialDesign();

    /**
     * Create note function
     * @return {array} Returned array of data
     */
    $('#save-note').on('click', function () {
        postData({
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
        postData({
            title: $('input[name=title]').val(),
            description: $('input[name=description]').val(),
            content: $('textarea[name=content]').val()
        })
    })

    /**
     * Posting abstraction to API
     * @param  {object} data Data to be passed to API
     * @return {array}       Returned array of data
     */
    function postData(data) {
        $.post(window.location.pathname, data, function(data, status){
            console.log(data)
        })
    }
})
