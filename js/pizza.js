var prize=13;                                       //valor de partida para calcular el precio en base a los botones activados al recargar
$("strong").text("$"+prize);                        //imprime por pantalla el precio en base a los botones pulsados

$(".btn-crust").removeClass("active");              //desactiva los botones crust y sauce de forma predefinida
$(".btn-sauce").removeClass("active");

$('.btn-pepperonni').click(function(event){ //fade de pepperonni en la lista de la derecha al pulsar el botón
        var pepperonni = $('li')[5];
        $(pepperonni).fadeToggle();
        $('.pep').fadeToggle();

        $('.btn-pepperonni').toggleClass("active");                 //Activa/desactiva el bottón, mejorar con CurrentTarget

        if($("button.btn-pepperonni").hasClass("active")===true) {  //condicional que se repite para calcular el precio en base a la clase active
        prize=prize+1;
        }else{prize=prize-1;}

        return $("strong").text("$"+prize);

      });

$('.btn-mushrooms').click(function(){ //fade de mushrooms en la lista de la derecha al pulsar el botón
        var mushrooms = $('li')[6];
        $(mushrooms).fadeToggle();
        $('.mushroom').fadeToggle();

        $('.btn-mushrooms').toggleClass("active");                 //Activa/desactiva el bottón, mejorar con CurrentTarget

        if($("button.btn-mushrooms").hasClass("active")===true) {
        prize=prize+1;
        }else{prize=prize-1;}

        return $("strong").text("$"+prize);
  
      });


$('.btn-green-peppers').click(function(){ //fade de green-peppers en la lista de la derecha al pulsar el botón
        var greenPeppers = $('li')[7];
        $(greenPeppers).fadeToggle();
        $('.green-pepper').fadeToggle();

        $('.btn-green-peppers').toggleClass("active");              //Activa/desactiva el bottón, mejorar con CurrentTarget

        if($("button.btn-green-peppers").hasClass("active")===true) {
        prize=prize+1;
        }else{prize=prize-1;}

        return $("strong").text("$"+prize);


      });

$('.btn-sauce').click(function(){ //fade de sauce en la lista de la derecha al pulsar el botón
        var sauce = $('li')[8];
        $(sauce).fadeToggle();
        $('.sauce').toggleClass('sauce-white');

        $('.btn-sauce').toggleClass("active");                      //Activa/desactiva el bottón, mejorar con CurrentTarget

        if($("button.btn-sauce").hasClass("active")===true) {
        prize=prize+3;
        }else{prize=prize-3;}

        return $("strong").text("$"+prize);


      });

$('.btn-crust').click(function(){ //fade de pepperonni en la lista de la derecha al pulsar el botón
        var crust = $('li')[9];
        $(crust).fadeToggle();
        $('.crust').toggleClass('crust-gluten-free');

        $('.btn-crust').toggleClass("active");                       //Activa/desactiva el bottón, mejorar con CurrentTarget

        if($("button.btn-crust").hasClass("active")===true) {
        prize=prize+5;
        }else{prize=prize-5;}

        return $("strong").text("$"+prize);


      });



     



