/*
=======================
        GALLERY

=======================
*/

var big_img = $("#big-img"); 

$('#gallery > ul > li > a').mouseover(function () {
    var test = $(this).attr('href');
    big_img.attr('src', test);
});
