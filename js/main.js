/*
=======================
        GALLERY

=======================
*/

var big_img = $('#big-img');

$('#gallery > ul > li > a').mouseover(function () {
    var test = $(this).attr('href');
    big_img.attr('src', test);
});

/*
=======================
        ABOUT

=======================
*/

$(document).ready(function () {
    $('#bios a').click(function (e) {
        e.preventDefault();
        var link_url = $(this).attr('href');
        $('#bio').load(link_url + ' #content');
        
        $('#bio').hide().slideDown(700);
    });
});

/*
=======================
        CONTACT

=======================
*/

//Form
var my_form = $('#myform');

//Paragraph (All fields are required)
var errors_warning = $('#errors');

//Input/textarea
var user_name = $('#username');
var user_email = $('#email');
var user_message = $('#my_message');

//Span
var name_error = $('#name_error');
var email_error = $('#email_error');
var message_error = $('#message_error'); 



















