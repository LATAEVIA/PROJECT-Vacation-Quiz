$(document).ready(function() {
  $("form").submit(function(event){
    var coffeeInput = $("input:radio[name=coffee]:checked").val();
    var zombieInput = $("input:radio[name=zombie]:checked").val();
    if (coffeeInput==="cream" && zombieInput==="water"){
      $(".machu-hide").show();
    } else{
      alert(zombieInput);
    };
    event.preventDefault();
  });
});

// if (coffeeInput==="Cream"){
//   alert(coffeeInput);
// } else{
//   alert(zombieInput);
// };
// $this = $(this);
// var value = $this.find('input:radio[name=zombie]:checked').val();
// alert(value);
