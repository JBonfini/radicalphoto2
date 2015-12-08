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

$(document).ready(function() {

//Form
var my_form = $('#myform');

//Paragraph (All fields are required)
var errors_warning = $('#errors');

//Input/textarea
var the_name = $('#username');
var the_email = $('#email');
var the_message = $('#my_message');

//Span
var name_error = $('#name_error');
var email_error = $('#email_error');
var message_error = $('#message_error');


my_form.submit(function (ev) {
    
    var errors = 0;
    var user_name = $('#username').val();
    var user_email = $('#email').val();
    var user_message = $('#my_message').val();
    
    if (user_name == '') {
        the_name.css('border-color', '#C00');
        name_error.text('Field Required');
        name_error.css('color', '#C00');
        errors++;
    } else {
        the_name.css('border-color', 'limegreen');
        name_error.text(' ');
    }
    
    // ---------------------------------------------
    
    if (user_email == '') {
        the_email.css('border-color', '#C00');
        email_error.text('Field Required');
        email_error.css('color', '#C00');
        errors++;
    } else {
        the_email.css('border-color', 'limegreen');
        email_error.text(' ');
    }
    
    // ----------------------------------------------
    
    if (user_message == '') {
        the_message.css('border-color', '#C00');
        message_error.text('Field Required');
        message_error.css('color', '#C00');
        errors++;
    } else {
        the_message.css('border-color', 'limegreen');
        message_error.text(' ');
    }
    
    // ------------------
    
    if (errors > 0) {
        errors_warning.show();
        errors_warning.css('color', '#C00');
        ev.preventDefault();
    } else {
        errors_warning.hide()
    }
    
    });
    
});
    

















































