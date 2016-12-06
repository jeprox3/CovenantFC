$(document).ready(function(){
    $('.player-card').click(function(){
        $('.player-card').fadeOut('slow')

    });

});


function playerCard(player, name, position, number){
  $('.player-card').fadeIn('slow');
  $('#player-name').html(name);
  $('#player-position').html(position);
  $('#player-number').html(number);
  $('.player-card').css('background-image', 'url(gif/' + player + '.gif)');

  if(position == "Forward") {
    $('#player-name').removeClass();
    $('#player-name').addClass('forward-text');
  } else if (position == "Goalie") {
    $('#player-name').removeClass();
    $('#player-name').addClass('goalie-text');
  }
}





//forward hover//

$(document).ready(function(){
    $('.forward-hover').mouseover(function(){
        $('.forward-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.forward-hover').mouseleave(function(){
        $('.forward-hover').fadeTo('fast', 0)

    });

});



//midfielder hover//

$(document).ready(function(){
    $('.mid-hover').mouseover(function(){
        $('.mid-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.mid-hover').mouseleave(function(){
        $('.mid-hover').fadeTo('fast', 0)

    });

});





//defense

$(document).ready(function(){
    $('.defense-hover').mouseover(function(){
        $('.defense-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.defense-hover').mouseleave(function(){
        $('.defense-hover').fadeTo('fast', 0)

    });

});




//goalie hover//

$(document).ready(function(){
    $('.goalie-hover').mouseover(function(){
        $('.goalie-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.goalie-hover').mouseleave(function(){
        $('.goalie-hover').fadeTo('fast', 0)

    });

});
