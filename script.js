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

  if(position == "FORWARD") {
    $('#player-name').removeClass();
    $('#player-name').addClass('forward-text');
  } else if (position == "MIDFIELDER") {
    $('#player-name').removeClass();
    $('#player-name').addClass('midfielder-text');
  } else if (position == "DEFENSE") {
    $('#player-name').removeClass();
    $('#player-name').addClass('defense-text');
  } else if (position == "GOALIE") {
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





//defense hover

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



//clubs page//

$(document).ready(function(){
    $('#aweber-badge-small').hover(function(){
        $('#aweber-badge-large').slideToggle('slow')
    });
});


$(document).ready(function(){
    $('#covenant-badge-small').hover(function(){
        $('#covenant-badge-large').slideToggle('slow')
    });
});


$(document).ready(function(){
    $('#fbc-badge-small').hover(function(){
        $('#fbc-badge-large').slideToggle('slow')
    });
});


$(document).ready(function(){
    $('#profc-badge-small').hover(function(){
        $('#profc-badge-large').slideToggle('slow')
    });
});
