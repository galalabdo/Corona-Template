 // Start Frequently Section
 var menuContext = $('.faq-left-box ul li');
 var blockContext = $('.faq-right-box > div');
 var Content = $('.faq-right-box');

 $(menuContext).click(function() {
     $(menuContext).removeClass('active');
     $(this).addClass('active');
     $(blockContext).hide();
     $(titleContent).find(".body").hide();
     $(titleContent).find(".body.first").show();
     $(icon).find(".plus").show();
     $(icon).find(".minus").hide();
     $(icon).find(".minus.first").show();
     $(icon).find(".plus.first").hide();
     $(titleContent).removeClass('change-color');
     $(titleContent).has(".first").addClass('change-color');

     if ($(this).hasClass('spread')) {
         $(Content).find(".spreads").show();

     } else if ($(this).hasClass('protectss')) {
         $(Content).find(".protects").show();

     } else if ($(this).hasClass('symptomss')) {
         $(Content).find(".symptom").show();

     } else if ($(this).hasClass('outbreak')) {
         $(Content).find(".outbreak").show();

     } else if ($(this).hasClass('busters')) {
         $(Content).find(".busters").show();

     } else {
         $(Content).find(".disease").show();
     }
 })

 var mainTitle = $('.faq-right-box div ul li.main-title');
 var icon = $('.faq-right-box div ul li');
 var titleContent = $('.faq-right-box div ul');
 $(mainTitle).click(function() {
         if ($(this).hasClass('first')) {
             $(titleContent).find(".body.first").toggle();
             $(titleContent).has(".first").toggleClass('change-color');
             $(icon).find(".plus.first").toggle();
             $(icon).find(".minus.first").toggle();

         } else if ($(this).hasClass('second')) {
             $(titleContent).find(".body.second").toggle();
             $(titleContent).has(".second").toggleClass('change-color');
             $(icon).find(".plus.second").toggle();
             $(icon).find(".minus.second").toggle();

         } else if ($(this).hasClass('third')) {
             $(titleContent).find(".body.third").toggle();
             $(titleContent).has(".third").toggleClass('change-color');
             $(icon).find(".plus.third").toggle();
             $(icon).find(".minus.third").toggle();

         } else if ($(this).hasClass('fourth')) {
             $(titleContent).find(".body.fourth").toggle();
             $(titleContent).has(".fourth").toggleClass('change-color');
             $(icon).find(".plus.fourth").toggle();
             $(icon).find(".minus.fourth").toggle();

         } else if ($(this).hasClass('fifth')) {
             $(titleContent).find(".body.fifth").toggle();
             $(titleContent).has(".fifth").toggleClass('change-color');
             $(icon).find(".plus.fifth").toggle();
             $(icon).find(".minus.fifth").toggle();

         } else if ($(this).hasClass('sixth')) {
             $(titleContent).find(".body.sixth").toggle();
             $(titleContent).has(".sixth").toggleClass('change-color');
             $(icon).find(".plus.sixth").toggle();
             $(icon).find(".minus.sixth").toggle();

         } else if ($(this).hasClass('seventh')) {
             $(titleContent).find(".body.seventh").toggle();
             $(titleContent).has(".seventh").toggleClass('change-color');
             $(icon).find(".plus.seventh").toggle();
             $(icon).find(".minus.seventh").toggle();

         } else if ($(this).hasClass('eighth')) {
             $(titleContent).find(".body.eighth").toggle();
             $(titleContent).has(".eighth").toggleClass('change-color');
             $(icon).find(".plus.eighth").toggle();
             $(icon).find(".minus.eighth").toggle();

         }
     })
     // Finish Frequently Section

     
var num = 20; //number of pixels before modifying styles



// Nav scroll

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('bg-light');
        $('.navbar').addClass('fixed-top');


    } else {
        $('.navbar').removeClass('fixed-top');
    }
});

if ($(window).scrollTop() > 10) {
    $('.go-to-top-icon').fadeIn();

} else {
    $('.go-to-top-icon').fadeOut();
}

    //counter

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    