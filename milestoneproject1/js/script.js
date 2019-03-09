//waits until page is ready
$(document).ready(function() {

    // FILTER BUTTONS //
    //Change opacity of filter categories other than current hovered filter
    $('.filter button').hover(function() {

        var filter = $(this).attr('id');
        $('.filter img').not('#' + filter).animate({ opacity: 0.5 }, 100);

    }, function() {
        $('.filter img').animate({ opacity: 1 }, 100);
    });


    //Only display Photo/video/audio selected by clicked filter
    $('.filter button').click(function() {
        var filter = $(this).attr('id');

        if (filter === 'photo') {
            $('.gallery').css('background-image', 'none');
            $('.photo').css('display', 'block');
            $('.audio').css('display', 'none');
            $('.video').css('display', 'none');
            $('.curImg').removeClass('curImg');
            $('.gallery').css('height', '100%');
            $('.top').css('display', 'block');
            $('.scroll').css('display', 'none');
            $('.filter button').animate({ opacity: 1 }, 100);
            $('.photo').addClass('curFilter')
            $('.video').removeClass('curFilter')
            $('.audio').removeClass('curFilter')
        }
        
        if (filter === 'video') {
            $('.gallery').css('background-image', 'none');
            $('.video').css('display', 'block');
            $('.audio').css('display', 'none');
            $('.photo').css('display', 'none');
            $('.curImg').removeClass('curImg');
            $('.gallery').css('height', '100%');
            $('.top').css('display', 'block');
            $('.scroll').css('display', 'none');
            $('.filter button').animate({ opacity: 1 }, 100);
            $('.video').addClass('curFilter')
            $('.photo').removeClass('curFilter')
            $('.audio').removeClass('curFilter')
        }
        
        if (filter === 'audio') {
            $('.gallery').css('background-image', 'none');
            $('.audio').css('display', 'block');
            $('.video').css('display', 'none');
            $('.photo').css('display', 'none');
            $('.curImg').removeClass('curImg');
            $('.gallery').css('height', '100%');
            $('.top').css('display', 'block');
            $('.scroll').css('display', 'none');
            $('.filter button').animate({ opacity: 1 }, 100);
            $('.audio').addClass('curFilter')
            $('.video').removeClass('curFilter')
            $('.photo').removeClass('curFilter')
        }
        
        
       
        //Fix footer to bottom when there are less than four thumbnails// 
        numPics = $('.curFilter').length;

        if (numPics < 4) {
            $('.footer').addClass('navbar-fixed-bottom');
        }
        else if (numPics > 3) {
            $('.footer').removeClass('navbar-fixed-bottom');
        }
    });

    //HOVER OVER THUMBNAILS EFFECT
    $('img.thumb').css('opacity', 1);

    $('img.thumb').hover(function() {
        $('.thumb').not(this).animate({ opacity: 0.5 }, 0);
    }, function() {
        $('.thumb').not(this).animate({ opacity: 1 }, 0);
    });


    // VIEW PHOTO LARGE //
    $('.thumb').click(function() {
        $(this).addClass('curImg');

        if ($(window).width() < 960) {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/768px/')
        }
        else {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/1200px/')
        }

        //Close thumbnails/filter, open toggles for large photos
        $('.thumb').css('display', 'none');
        $('.gallery').css('height', '60vh');
        $('.top').css('display', 'none');
        $('.scroll').css('display', 'block');
        $('.gallery').css('background-size', 'contain').css('background-image', 'url(' + imgURL + ')')
        $('.footer').removeClass('navbar-fixed-bottom');
    });


    // CLOSE IMAGE
    $('button.closeit').click(function() {
        $('.gallery').css('background-image', 'none');
        $('.thumb').css('display', 'block');
        $('.thumb').addClass('curFilter');
        $('.curFilter').css('display', 'block');
        $('.curImg').removeClass('curImg');
        $('.gallery').css('height', '100%');
        $('.top').css('display', 'block');
        $('.scroll').css('display', 'none');
        $('.filter button').animate({ opacity: 1 }, 100);
    })

    // GO TO NEXT IMAGE 
    $('button.next').click(function() {

        var imgs = $('.curFilter');
        var curImg = $('.curImg');
        var pos = $('.curFilter').index(curImg);
        var numPics = $('.curFilter').length;
        var curImg = $('.curFilter')[pos];
        var nextImg = $('.curFilter')[pos + 1];


        //Loop current filter of photos
        if (pos < numPics - 1) {
            $(curImg).removeClass('curImg');
            $(nextImg).addClass('curImg');
        }

        else {
            $(curImg).removeClass('curImg');
            var pos = 0;
            nextImg = $('.curFilter')[pos];
            $(nextImg).addClass('curImg');
        }

        if ($(window).width() < 960) {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/768px/')
        }
        else {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/1200px/')
        }

        $('.gallery').animate({
            opacity: 0
        }, 1000, function() {


            $('.gallery').css('background-size', 'contain').css('background-image', 'url(' + imgURL + ')');
            $('.gallery').animate({ opacity: 1 }, 1000);
        });
    });


    // GO TO PREVIOUS IMAGE
    $('button.previous').click(function() {
        var imgs = $('.curFilter');
        var curImg = $('.curImg');
        var pos = $('.curFilter').index(curImg);
        var numPics = $('.curFilter').length;
        var curImg = $('.curFilter')[pos];
        var nextImg = $('.curFilter')[pos - 1];

        //Loop current filter of photos
        if (pos > 0) {
            $(curImg).removeClass('curImg');
            $(nextImg).addClass('curImg');
        }

        else {
            $(curImg).removeClass('curImg');
            var pos = numPics - 1;
            nextImg = $('.curFilter')[pos];
            $(nextImg).addClass('curImg');
        }

        if ($(window).width() < 960) {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/768px/')
        }
        else {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/1200px/')
        }

        $('.gallery').animate({
            opacity: 0
        }, 1000, 'swing', function() {
            $('.gallery').css('background-size', 'contain').css('background-image', 'url(' + imgURL + ')');
            $('.gallery').animate({ opacity: 1 }, 1000, 'swing');
        });

    });

});
