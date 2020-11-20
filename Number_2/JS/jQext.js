/*
$(document).ready(() =>
{
  //Reveals hidden div
  $('.ex-btn').on('click',() =>
  {
    $('#sect-ex').css('display','block');
  });

  //Should hide the card layout (doesn't work yet)
  $('.ex-btn').on('click',() =>
  {
    $('#ex-main').css('display','none');
  });
  
});
*/

$(document).ready(() =>
{
  //hamburger view toggle
  
  /*
  function actval(y){
    if(y==1){
      $('.ex').css('top','0');
      y=y-1;
    }
    else{
      $('.ex').css('top','auto');
      y=y+1;
    }
  }*/
  var x=1;
  $('.exham').on('click',() =>
  {
    
    if(x==1){
      $('.ex').css('top','0');
      x=x-1;
    }
    else{
      $('.ex').css('top','auto');
      x=x+1;
    }
    //actval(x);

    $('.excont').toggleClass('active');
    $('main').toggleClass('noscroll');

    //diable scroll and fade away main navbar
    if($('.excont').hasClass('active')){
      $('.nav-bar').css('display','none');
      $('main').css('margin-left','0');
    }
    else{
      $('.nav-bar').css('display','flex');
      $('main').css('margin-left','5rem');
    }

    if(swb=='relative'|| $('.excont').hasClass('active')){
      $('.switchb').css({'position':'absolute','z-index':'-1'});
      $('.exmain').css('display','block');
    }
    if(swi=='relative'|| $('.excont').hasClass('active')){
      $('.switchi').css({'position':'absolute','z-index':'-2'});
      $('.exmain').css('display','block');
    }
    if(swa=='relative'|| $('.excont').hasClass('active')){
      $('.switcha').css({'position':'absolute','z-index':'-3'});
      $('.exmain').css('display','block');
    }

  });

  //exbtn view toggle
  $('.overbtn').on('click',() =>{
    if(x==1){
      $('.ex').css('top','0');
      x=x-1;
    }
    else{
      $('.ex').css('top','auto');
      x=x+1;
    }
    $('.excont').toggleClass('active');
    $('main').toggleClass('noscroll');

    if($('.excont').hasClass('active')){
      $('.nav-bar').css('display','none');
      $('main').css('margin-left','0');
    }
    else{
      $('.nav-bar').css('display','flex');
      $('main').css('margin-left','5rem');
    }
  });


  //Overview toggle
  $('.overv').on('click',() =>{
    if(x==1){
      $('.ex').css('top','0');
      x=x-1;
    }
    else{
      $('.ex').css('top','auto');
      x=x+1;
    }
    $('.excont').toggleClass('active');
    $('main').toggleClass('noscroll');

    if($('.excont').hasClass('active')!=true){
      $('.nav-bar').css('display','flex');
      $('main').css('margin-left','5rem');
    }
  });

  //Beginner switch
  var swb = $('.switchb').css('position');

  $('.beginn').on('click',() =>{
    if(x==1){
      $('.ex').css('top','0');
      x=x-1;
    }
    else{
      $('.ex').css('top','auto');
      x=x+1;
    }
    $('.excont').toggleClass('active');
    $('main').toggleClass('noscroll');

    if($('.excont').hasClass('active')!=true){
      $('.nav-bar').css('display','flex');
      $('main').css('margin-left','5rem');
    }

    if(swb=='absolute'){
      $('.switchb').css({'position':'relative','z-index':'6'});
      $('.exmain').css('display','none');
    }
  });

  //Intermediate switch
  var swi = $('.switchi').css('position');

  $('.interme').on('click',() =>{
    if(x==1){
      $('.ex').css('top','0');
      x=x-1;
    }
    else{
      $('.ex').css('top','auto');
      x=x+1;
    }
    $('.excont').toggleClass('active');
    $('main').toggleClass('noscroll');

    if($('.excont').hasClass('active')!=true){
      $('.nav-bar').css('display','flex');
      $('main').css('margin-left','5rem');
    }

    if(swi=='absolute'){
      $('.switchi').css({'position':'relative','z-index':'6'});
      $('.exmain').css('display','none');
    }
  });

  //Advanced switch
  var swa = $('.switcha').css('position');

  $('.advan').on('click',() =>{
    if(x==1){
      $('.ex').css('top','0');
      x=x-1;
    }
    else{
      $('.ex').css('top','auto');
      x=x+1;
    }
    $('.excont').toggleClass('active');
    $('main').toggleClass('noscroll');

    if($('.excont').hasClass('active')!=true){
      $('.nav-bar').css('display','flex');
      $('main').css('margin-left','5rem');
    }

    if(swa=='absolute'){
      $('.switcha').css({'position':'relative','z-index':'6'});
      $('.exmain').css('display','none');
    }
  });



  //scroll functions
  const vheight = $(window).height();

  const hTop = 0;
  const hMid = vheight/2;
  const exTop = vheight;
  const exMid= vheight*1.5;
  const upTop= vheight*2;
  const upMid= vheight*2.5;
  const aTop= vheight*3;


  $('.home').toggleClass('fresh-link',$(this).scrollTop()<vheight);
  
  $('main').scroll(function(){
    var pos = $(this).scrollTop();

    $('.home').toggleClass('fresh-link',pos<vheight);
    
    if(pos>=vheight){
      $('.exercise').toggleClass('fresh-link',pos<upTop);
    }
    if(pos<upTop){
      $('.exercise').toggleClass('fresh-link',pos>=vheight );
    }

    if(pos>=upTop){
      $('.u-events').toggleClass('fresh-link',pos<aTop);
    }
    if(pos<aTop){
      $('.u-events').toggleClass('fresh-link',pos>=upTop);
    }

    $('.about').toggleClass('fresh-link',pos>=aTop);



    if(pos>hMid && pos<exMid){
      $("#exercise").css("opacity","1");
      $('.exnav').css('position','fixed');
    }
    else{
      $("#exercise").css("opacity","0");
      $('.exnav').css('position','relative');
    }
    
    //Other sections if I feel like
    /*
    else{
      $("#home").remove(".temp");
    }
  
    //exercise section
    if(pos>hMid && pos<=exMid){
      $("#exercise").add(".temp");
    }
    else{
      $("#exercise").remove(".temp");
    }
  
    if(pos>exMid && pos<=upMid){
      $("#u-events").add(".temp");
    }
    else{
      $("#u-events").remove(".temp");
    }
  
    if(pos>upMid){
      $("#exercise").add(".temp");
    }
    else{
      $("#exercise").remove(".temp");
    }*/
  });

  //beginner entry/exit
  
  //buggy on the back button
  $('.newbbtn').on('click',() =>{
    $('.exbegin').toggle(1000);
    $('.newb-enter').toggle(1000);
  });

  //intermediate entry/exit


  //advanced entry/exit

});