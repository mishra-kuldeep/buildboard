//main navigation

jQuery(document).ready(function($){


// Navbar
$( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
    }
});

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 1025) {
        $('html').click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $(document).click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $('.navbar-nav').click(function(e){
        e.stopPropagation();
        });
     }
});
// Navbar end

$('.collection-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });


  $('.product-slider').slick({
    dots: true,
    infinite: true,
    arrows:true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1
  });


$("#click").click(function(){
    $(".search-form").toggleClass("add")
    $(".search-form").slideToggle();
});

$('.ourwork-tab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: 'hor_1', // The tab groups identifier
    activate: function(event) { // Callback function if tab is switched
        var $tab = $(this);
        var $info = $('#nested-tabInfo');
        var $name = $('span', $info);
        $name.text($tab.text());
        $info.show();
    }
});

$("a.fancybox").fancybox();


$('.click').click(function(){ 
    if($(this).closest('li').hasClass("current")){
         $(this).closest('li').removeClass("current")
         $(".color-comb ul li").removeClass("current");
    } 
    else{
     $(".color-comb ul li").removeClass("current");
     $(this).closest('li').addClass("current")
     
    }
 
 });



});

