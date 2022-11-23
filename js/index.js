// const axios = require('axios');
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $('#menu ul').hide();
});

function initMenu() {
    $('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu li a').click(
        function () {
            var checkElement = $(this).next();
            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                return false;
            }
            if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#menu ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
                return false;
            }
        }
    );
}
$(document).ready(function () {
    initMenu();
});


$(function () {

    $('.nav-stacked a').each(function (index, el) {

        var $this = $(this);
        var pane = $this.attr('href');
        // var src = $this.data('src');
        // console.log(pane);
        $(pane).load('ui/' + pane.replace('#', '') + '.html');
        // $(pane).tab('show');

    });

});

axios.get("http://localhost:3001/api/v1/admin/get-all-account")
    .then(response => {

        console.log("response", response.data)
        const name = document.getElementById("Name");
        console.log(name);
    })
