$(document).ready(function(){
  
  $(".proposta-de-valor .criar").click(function(){
    var div = $("<div/>", {
      class:"post-its",
      contenteditable:"true"
    }).append("Novo Post-it");
    $(".proposta-de-valor").append(div);
  });

  $(".parceiros-chave .criar").click(function(){
    var div = $("<div/>", {
      class:"post-its",
      contenteditable:"true"
    }).append("Novo Post-it");
    $(".parceiros-chave").append(div);
  });

});