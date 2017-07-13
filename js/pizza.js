$('.btn-pepperonni').click(function(){ //fade de pepperonni en la lista de la derecha al pulsar el botón
        var pepperonni = $('li')[5];
        $(pepperonni).fadeToggle();
        $('.pep').fadeToggle();
      });

$('.btn-mushrooms').click(function(){ //fade de mushrooms en la lista de la derecha al pulsar el botón
        var mushrooms = $('li')[6];
        $(mushrooms).fadeToggle();
        $('.mushroom').fadeToggle();
      });

$('.btn-green-peppers').click(function(){ //fade de green-peppers en la lista de la derecha al pulsar el botón
        var greenPeppers = $('li')[7];
        $(greenPeppers).fadeToggle();
        $('.green-pepper').fadeToggle();
      });

$('.btn-sauce').click(function(){ //fade de sauce en la lista de la derecha al pulsar el botón
        var sauce = $('li')[8];
        $(sauce).fadeToggle();
        $('.sauce').toggleClass('sauce-white');
      });

$('.btn-crust').click(function(){ //fade de pepperonni en la lista de la derecha al pulsar el botón
        var crust = $('li')[9];
        $(crust).fadeToggle();
        $('.crust').toggleClass('crust-gluten-free');
      });
