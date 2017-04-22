// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    var scrolled = false;
    $(window).scroll(function(){
        scrolled = true;
    })

    setTimeout(function(){
        var scheduleTop = $('.schedule').offset().top;
        if(scrolled == false){
            $("html,body").animate({scrollTop:scheduleTop}, "slow", "swing");
        }
    },2000)

    var windowHeight	= $(window).height();
    var logoHeight		= $('.logo').height();
    var padding = (windowHeight - logoHeight) / 2;
    $('.logo').css({'padding-top':padding, 'padding-bottom':padding});
})