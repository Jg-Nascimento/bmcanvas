function organizeHeight(el) {
  if ( $(el).parents('.first-row').length == 1 ) {
    var maiorAltura = 0;
    $.each( $('.first-row').children() , function(index, val) {
      var altura = $(val).outerHeight();
      if ( altura > maiorAltura ) {
        maiorAltura = altura;
      }
      if ((index + 1) == $('.first-row').children().length) {
        console.log(maiorAltura);
        $('.first-row > div').animate({'min-height': maiorAltura}, 500);
      }
    });
  } else if ( $(el).parents('.second-row').length == 1 ) {
    var maiorAltura = 0;
    $.each( $('.second-row').children() , function(index, val) {
      var altura = $(val).outerHeight();
      if ( altura > maiorAltura ) {
      maiorAltura = altura;
      }
      if ((index + 1) == $('.second-row').children().length) {
        console.log(maiorAltura);
        $('.second-row > div').animate({'min-height': maiorAltura}, 500);
      }
    });
  }
}

$(document).ready(function(){

  // CRIA OS POST-ITS
  $(".criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(this).parent().append(div);
    organizeHeight(this);
  });
});



