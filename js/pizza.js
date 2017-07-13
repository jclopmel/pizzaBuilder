var precio = 10;
var ingrediente1=1;
var ingrediente2=1;
var ingrediente3=1;
var ingrediente4=3;
var ingrediente5=5;

$('.btn-pepperonni').click(function(event){ //fade de pepperonni en la lista de la derecha al pulsar el botón
        var pepperonni = $('li')[5];
        $(pepperonni).fadeToggle();
        $('.pep').fadeToggle();

        $('.btn-pepperonni').toggleClass("active");                 //Activa/desactiva el bottón, mejorar con CurrentTarget

      });

$('.btn-mushrooms').click(function(){ //fade de mushrooms en la lista de la derecha al pulsar el botón
        var mushrooms = $('li')[6];
        $(mushrooms).fadeToggle();
        $('.mushroom').fadeToggle();

        $('.btn-mushrooms').toggleClass("active");                 //Activa/desactiva el bottón, mejorar con CurrentTarget
  
      });


$('.btn-green-peppers').click(function(){ //fade de green-peppers en la lista de la derecha al pulsar el botón
        var greenPeppers = $('li')[7];
        $(greenPeppers).fadeToggle();
        $('.green-pepper').fadeToggle();

        $('.btn-green-peppers').toggleClass("active");              //Activa/desactiva el bottón, mejorar con CurrentTarget


      });

$('.btn-sauce').click(function(){ //fade de sauce en la lista de la derecha al pulsar el botón
        var sauce = $('li')[8];
        $(sauce).fadeToggle();
        $('.sauce').toggleClass('sauce-white');

        $('.btn-sauce').toggleClass("active");                      //Activa/desactiva el bottón, mejorar con CurrentTarget


      });

$('.btn-crust').click(function(){ //fade de pepperonni en la lista de la derecha al pulsar el botón
        var crust = $('li')[9];
        $(crust).fadeToggle();
        $('.crust').toggleClass('crust-gluten-free');

        $('.btn-crust').toggleClass("active");                       //Activa/desactiva el bottón, mejorar con CurrentTarget


      });




      precio=precio+ingrediente1+ingrediente2+ingrediente3+ingrediente4+ingrediente5;
      $("strong").text("$"+precio);






