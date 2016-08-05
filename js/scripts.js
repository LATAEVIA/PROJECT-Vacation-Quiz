$(document).ready(function() {
  $(".btn").click(function(event){
    var coffeeInput = $("input:radio[name=coffee]:checked").val();
    var zombieInput = $("input:radio[name=zombie]:checked").val();
    var annoyInput = $("input:radio[name=annoy]:checked").val();
    var lrcInput = $("input:radio[name=lrc]:checked").val();
    var collabInput = $("input:radio[name=collab]:checked").val();
    // coffee
    if (coffeeInput==="blackcoffee"){
      $(".cold-hide").fadeIn();
      $(".machu-hide").hide();
      $(".warm-hide").hide();
    };
    if (coffeeInput==="cream"){
      $(".warm-hide").fadeIn();
      $(".cold-hide").hide();
      $(".machu-hide").hide();
    };
    if (coffeeInput==="sugar"){
      $(".machu-hide").fadeIn();
      $(".cold-hide").hide();
      $(".warm-hide").hide();
    };
  });
});
