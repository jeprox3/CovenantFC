$(document).ready(function(){
    $('.player-card').click(function(){
        $('.player-card').fadeOut('slow')

    });

});


function playerCard(player){
  $('.player-card').fadeIn('slow');
  $('#featuredCard').attr('src', 'gif/' + player + '.gif');
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



//mid fielder hover//

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
