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
  var x=1;
  $('.exham').on('click',() =>
  {
    if(x==1){
      //$('.exmain').css('position','absolute');
      //$('.exnav').css('position','fixed');
      
      $('.ex').css('top','0');
      x=x-1;
    }
    else{
      //$('.exmain').css('position','relative');
      $('.ex').css('top','auto');
      x=x+1;
    }
  });


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

});