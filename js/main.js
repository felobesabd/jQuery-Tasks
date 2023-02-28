$(function () {
    // $.extend($.expr[':'],{            video 2
    //     element: function (e) {
    //         if ($(e).height() > 100) {
    //             return $(e)
    //         }
    //     }
    // });
    // $('ul li:element').css('color', 'red')
    // $.extend($.expr[':'], {           video 1
    //     redElement: function (e) {
    //         if ($(e).css('color') === 'rgb(255, 0, 0)') {
    //             return $(e)
    //         }
    //     }
    // })
    // $('ul li:redElement').css('fontSize', '50px')
    // $.fn.makeRed = function (e) {      video 4
    //     $(this).css('color', 'red')
    //     return $(e);
    // }
    // $('.text, .test').makeRed()
    // $.fn.centerMe = function () {     video 3
    //     $(this).css({
    //         position: 'absolute',
    //         left: ($(window).width() - $(this).width()) / 2,
    //         top: ($(window).height() - $(this).height()) / 2
    //     })
    // }
    // $('.text').centerMe()
    // $('.test').centerMe()
    let maxtext = $('textarea').attr('maxlength')
    $('.message').html('<span>' + maxtext + '</span> words')
    $('textarea').keyup(function () {
        let areaVal = $(this).val().length,
            rentext = maxtext - areaVal
        $('.message').html('<span>' + rentext + '</span> words')
        if (areaVal === 100) {
            $('.message').text('finish').delay(1000).fadeOut(500, function () {
                $('textarea').fadeOut()
            })
        }
    })
    $('.pass').click(function () {
        $(this).attr('placeholder', '')
    })
    $('.fa-eye-slash').click(function () {
        $(this).fadeOut().next().addClass('active').fadeIn()
        if ($(this).next().hasClass('active')) {
            $(this).prev('input').attr('type', 'text')
        } else {
            $(this).prev('input').attr('type', 'password')
        }
    })
    $('.fa-eye').click(function () {
        $(this).fadeOut().prev().addClass('active').fadeIn()
        if ($(this).prev().hasClass('active')) {
            $('.pass').attr('type', 'password')
        }
    })
    var ourCountDown = setInterval(function () {
        var counter = parseInt($('.countdown').html())
        if (counter !== 0) {
            $('.countdown').html(counter - 1)
        } else {
            clearInterval(ourCountDown)
            $('.countdown').html('Finished')
        }
    }, 1000)
    $('.item-info .item').click(function () {
        $(this).next().show().animate({
            width: '40%'
        }, 500).siblings('.info').animate({
            width: '0'
        }, 500, function () {
            $(this).hide()
        })
    })
});




























