
$(document).ready(function(){

  $(".parceiros-chave .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".parceiros-chave").append(div);
  });


  $(".proposta-de-valor .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".proposta-de-valor").append(div);
  });

  $(".atividade-chave .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".atividade-chave").append(div);
  });

  $(".recursos-chave .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".recursos-chave").append(div);
  });

  $(".relacionamento-clientes .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".relacionamento-clientes").append(div);
  });

  $(".canais .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".canais").append(div);
  });

  $(".segmentos-de-clientes .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".segmentos-de-clientes").append(div);
  });

  $(".estrutura-custo .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".estrutura-custo").append(div);
  });

  $(".fluxo-receita .criar").click(function(){
    var div = $("<textarea/>", {
      contenteditable:"true",
      class:"post-its",
      onkeyup:"autoGrow(this)",
      placeholder:"Novo post-it"
    });
    $(".fluxo-receita").append(div);
  });

  
 
});



