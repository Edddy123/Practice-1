// console.log('Hello World!');

function isInViewport() {
    const elem = document.querySelector('#container2');
    
    if (elem === document.activeElement) {
        alert('Element has focus!');
    }  else {
        isInViewport()
    }
}




function pageScroll() {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll, 10);
}


$("#container2").on("scroll", function(e) {
    horizontal = e.currentTarget.scrollLeft;
    vertical = e.currentTarget.scrollTop;
});




var element = '#container2'

function isInViewport() {
    var elem = document.querySelector('#container2');
    const rect = elem.getBoundingClientRect();
    alert(rect)
    if (rect == true) {
        console.log('Focus');
    } else {
        alert(rect)
        //isInViewport()
    }
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ); 
}



// isInViewport()




$('#people_say').scroll(function() {
    var pos = $('#people_say').scroll();
    if (pos == 0) {
        alert('top of the div');
    }
});




jQuery(function($) {
    $('#container2').on('scroll', function() {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            alert('end reached');
        }
    })
});





var carousel = document.getElementById('container2');
var seats = document.getElementsByClassName('flex_content');

var next = function(el) {
    if (el.next().length > 0) {
        return el.next();
    } else {
        return seats.first();
    }
};

var progress = function(e) {
    var el = document.getElementsByClassName('is_ref').removeClass('is_ref');
    var new_seat = next(el);

    new_seat.addClass('is_ref').css('order', 1);
    for (var i = 2, ref = seats.length; i <= ref; i++) {
        new_seat = next(new_seat).css('order', i);
        console.log(new_seat);
    }

    carousel.removeClass('is_set');

    return setTimeout((function() {
        return carousel.addClass('is_set');
    }), 50);
};

window.setInterval(function() {
    progress();
}, 2000);




function autoScroll() {

    var curr = document.getElementsByClassName('flex_content');
    var next = curr.nextSibling.focus()
    



}



