// Alto falante 

$( "#altoFalante a" ).click(function() {
  if ($("#altoFalante .fa-volume-up").length){
    $("#altoFalante .fa-volume-up").removeClass("fa-volume-up").addClass("fa-volume-mute");
  }
  else {
    $("#altoFalante .fa-volume-mute").removeClass("fa-volume-mute").addClass("fa-volume-up");
  } 
  return false;
});

// Minha lista

$( ".tradicional .left" ).click(function() {
  const lista = $(this).parent().find(".listaSerie");
  if(parseInt(lista.css("left")) >= 0)
    lista.animate({left:"-1547"});
  else
    lista.animate({left:"+=221"});
});

$( ".tradicional .right" ).click(function() {
  const lista = $(this).parent().find(".listaSerie");
  if(parseInt(lista.css("left")) <= -1547)
    lista.animate({left:"0"});
  else
    lista.animate({left:"-=221"});
});

// Ranking 

$( "#ranking .left" ).click(function() {
  const lista = $(this).parent().find(".listaSerie");
  if(parseInt(lista.css("left")) >= 0)
    lista.animate({left:"-1210"});
  else
    lista.animate({left:"+=242"});
});

$( "#ranking .right" ).click(function() {
  const lista = $(this).parent().find(".listaSerie");
  if(parseInt(lista.css("left")) <= -1210)
    lista.animate({left:"0"});
  else
    lista.animate({left:"-=242"});
});


