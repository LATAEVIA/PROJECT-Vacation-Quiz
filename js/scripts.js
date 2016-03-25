$(document).ready(function() {
  $("form").submit(function(event){
    var coffeeInput = $("input:radio[name=coffee]:checked").val();
    var zombieInput = $("input:radio[name=zombie]:checked").val();
    var annoyInput = $("input:radio[name=annoy]:checked").val();
    var lrcInput = $("input:radio[name=lrc]:checked").val();
    var collabInput = $("input:radio[name=collab]:checked").val();
    if (coffeeInput==="cream"){
      $(".machu-hide").fadeIn();
      $(".cold-hide").fadeOut();
      $(".warm-hide").hide();
    };
    if (coffeeInput==="blackcoffee"){
      $(".cold-hide").fadeIn();
      $(".machu-hide").hide();
      $(".warm-hide").hide();
    };
    if (coffeeInput==="sugar"){
      $(".warm-hide").fadeIn();
      $(".cold-hide").hide();
      $(".machu-hide").hide();
    };
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    });
    event.preventDefault();
  });


    // } else if (coffeeInput==="cream" && zombieInput==="water" && annoyInput==="hipsters" && lrcInput==="ambi" && collabInput==="elton"){
    //   $(".warm-hide").show();


    // if (coffeeInput==="cream" && zombieInput==="water"){
    //   $(".machu-hide").show();
    // };
    // if (coffeeInput==="cream" && zombieInput==="water"){
    //   $(".machu-hide").show();
    // };
    // if (coffeeInput==="cream" && zombieInput==="water"){
    //   $(".machu-hide").show();
    // };
    // if (coffeeInput==="cream" && zombieInput==="water"){
    //   $(".machu-hide").show();
    // };
    // if (coffeeInput==="cream" && zombieInput==="water"){
    //   $(".machu-hide").show();
    // };
    // if (coffeeInput==="cream" && zombieInput==="water"){
    //   $(".machu-hide").show();
    // };
    // if (coffeeInput==="cream" && zombieInput==="water"){
    //   $(".machu-hide").show();
    // };

// if (coffeeInput==="Cream"){
//   alert(coffeeInput);
// } else{
//   alert(zombieInput);
// };
// $this = $(this);
// var value = $this.find('input:radio[name=zombie]:checked').val();
// alert(value);
