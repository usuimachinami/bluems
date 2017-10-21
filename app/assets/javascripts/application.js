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

    $('.logo').on('click', function(){
        var youtubeTop = $('.youtube').offset().top;
        $("html,body").animate({scrollTop:youtubeTop}, "slow", "swing");
    });
    $('.wrapper .content .logo img').hover(
        function(){
            $(this).animate({width: '85%'}, "slow", "swing");
        },
        function(){
            $(this).animate({width: '80%'}, "slow", "swing");
        }
    );

    var windowHeight	= $(window).height();
    var logoHeight		= $('.logo').height();
    var padding = (windowHeight - logoHeight) * 3 / 5;
    $('.logo').css({'padding-top':padding, 'padding-bottom':padding});
});