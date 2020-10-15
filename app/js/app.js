
$(document).ready(function(){
  //Select the language
  $('#link1').click(function(e){
    e.preventDefault();
    $('.select').fadeOut("slow");
    $('.welcome').css("display","block");
  })
});

