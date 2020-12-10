$(document).ready(() =>
{
  window.onresize = () => {
    window.location.reload();
    window.location.hash = '#home';
  }

  //hamburger view toggle
  var x=1;
  $('.extgl').on('click',() =>
  {
    
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

    //diables scroll and fade away main navbar
    if($('.excont').hasClass('active')){
      $('.nav-bar').css('display','none');
    }
    else{
      $('.nav-bar').css('display','block');
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

  //overbtn view toggle
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
    }
    else{
      $('.nav-bar').css('display','block');
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
      $('.nav-bar').css('display','block');
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
      $('.nav-bar').css('display','block');
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
      $('.nav-bar').css('display','block');
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
      $('.nav-bar').css('display','block');
    }

    if(swa=='absolute'){
      $('.switcha').css({'position':'relative','z-index':'6'});
      $('.exmain').css('display','none');
    }
  });



  //scroll functions
  const vheight = $(window).height();

  //const hTop = 0;
  const hMid = (vheight/3)*2;
  //const exTop = vheight;
  const exMid= vheight*1.5;
  const upTop= vheight*2;
  //const upMid= vheight*2.5;
  const aTop= vheight*3;

  //Large Screen scroll effecs
  if($(window).width()>800){
  $('.home').toggleClass('fresh-link',$(this).scrollTop()<vheight);
  
  $('main').scroll(function(){
    var pos = $(this).scrollTop();

    //navbar track
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


    //exercise fade in/out
      if(pos>hMid && pos<exMid){
        $("#exercise").css("opacity","1");
        $('.exnav').css({"display, block":"opacity,1"});
        $('.exnav').css('position','fixed');
        //exnav jumps, not fade
      }
      else{
        $("#exercise").css("opacity","0");
        $('.exnav').css({"display, none":"opacity,0"});
        $('.exnav').css('position','relative');
      }
  });
  }
  
  //beginner entry/exit
  $('.newbbtn').on('click',() =>{
    $('.exbegin').toggle(1000);
    $('.newb-enter').toggle(1000);
  });

  //newb-fit popup
  $('.n-fit-link').on('click',()=>{
    $('.newb-fit').toggle();
  });
  $('.newb-fit i').on('click',()=>{
    $('.newb-fit').toggle();
  });
  //newb-mscl popup
  $('.n-mscl-link').on('click',()=>{
    $('.newb-mscl').toggle();
  });
  $('.newb-mscl i').on('click',()=>{
    $('.newb-mscl').toggle();
  });

  //intermediate entry/exit
  $('.intermbtn').on('click',() =>{
    $('.exinte').toggle(1000);
    $('.interm-enter').toggle(1000);
  });

  //interm-fit popup
  $('.i-fit-link').on('click',()=>{
    $('.interm-fit').toggle();
    //$('main').toggleClass('noscroll');
  });
  $('.interm-fit i').on('click',()=>{
    $('.interm-fit').toggle();
  });
  //interm-mscl popup
  $('.i-mscl-link').on('click',()=>{
    $('.interm-mscl').toggle();
  });
  $('.interm-mscl i').on('click',()=>{
    $('.interm-mscl').toggle();
  });

  //advanced entry/exit
  $('.advbtn').on('click',() =>{
    $('.exadv').toggle(1000);
    $('.adv-enter').toggle(1000);
  });
  //adv-fit popup
  $('.a-fit-link').on('click',()=>{
    $('.adv-fit').toggle();
  });
  $('.adv-fit i').on('click',()=>{
    $('.adv-fit').toggle();
  });
  //interm-mscl popup
  $('.a-mscl-link').on('click',()=>{
    $('.adv-mscl').toggle();
  });
  $('.adv-mscl i').on('click',()=>{
    $('.adv-mscl').toggle();
  });

});