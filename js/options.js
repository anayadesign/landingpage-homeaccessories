$(document).ready(function() {
  var carousel1 = {
    visible: 1,
    speed: 300,
    pause: true,
    btnGo: $('div.nav1').find('a'),
    btnPrev: function() {
      return $(this).find('.prev1');
    },
    btnNext: function() {
      return $(this).find('.next1');
    }

  };
  var carousel2 = {
    visible: 1,
    speed: 300,
    pause: true,
    btnGo: $('div.nav2').find('a'),
    btnPrev: function() {
      return $(this).find('.prev2');
    },
    btnNext: function() {
      return $(this).find('.next2');
    }

  };
  var carousel3 = {
    visible: 1,
    speed: 300,
    pause: true,
    btnGo: $('div.nav3').find('a'),
    btnPrev: function() {
      return $(this).find('.prev3');
    },
    btnNext: function() {
      return $(this).find('.next3');
    }

  };
  var carousel4 = {
    visible: 1,
    speed: 300,
    pause: true,
    btnGo: $('div.nav4').find('a'),
    btnPrev: function() {
      return $(this).find('.prev4');
    },
    btnNext: function() {
      return $(this).find('.next4');
    }

  };


  var $slideshows = $('.carousel');

  $slideshows.eq(0).jCarouselLite(carousel1); // links carousel 1 options
  $slideshows.eq(1).jCarouselLite(carousel2); // links carousel 1 options
  $slideshows.eq(2).jCarouselLite(carousel3); // links carousel 1 options
  $slideshows.eq(3).jCarouselLite(carousel4); // links carousel 1 options

  $(document).keyup(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);

    switch(code) {
        case 37: $(".prev1, .prev2").trigger("click"); break; // left
        case 39: $(".next1, .next2").trigger("click"); break; // right

    }
  });

  //Tabs!
    $(".tabs-menu a").click(function(event) {
        event.preventDefault(); //don't redirect to the href
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab").not(tab).css("display", "none"); //tabs that are not THIS - hide
        $(tab).fadeIn(); //fade in the clicked tab
    });

    $('img.tabthumb').click(function(){
        var src = this.src;
        this.src = src.indexOf('_current') == -1 ? src.replace('.jpg','_current.jpg') : src.replace('_current.jpg','.jpg');
    });

});
