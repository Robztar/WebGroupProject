$(document).ready(function() {
    $("#sign").click(function(){
        $("#signInPage").css('display', 'none');
        $("#signUpPage").css('display', 'block');
      });

    $("#log").click(function(){
      $("#signUpPage").css('display', 'none');
      $("#signInPage").css('display', 'block');
    });
});
  
  