$(document).ready(function(){
  //Start point fadeIn of the site
  $('.quotegroup').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 3000);

  //Ajax Request
  $('.btn').on('click', function(){
    $.ajax('http://quotes.stormconsultancy.co.uk/quotes.json', {
      type: 'GET',
      data: 'null',
      dataType: 'json',
      success: function(data){
        var randomIndex = Math.floor(Math.random() * data.length);
        $.each(data, function(i){
          if(randomIndex === data[i]['id']){
            $('.quotegroup').fadeOut(1000, function(){
              $('#quote').text(data[i]['quote']);
              $('#author').text(data[i]['author']);
              $(this).fadeIn(1000);
            });
          }
        });
      },
      error: function(request, errorType, errorMessage){
        alert('Error: ' + errorType + ' with message: ' + errorMessage);
      }
    });
  });

  //Change color&background-color
  $('.btn').on('click', function(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    $('body, .btn').css('background-color', color);
    $('.quotegroup').find('p').css('color', color);
    $('.quotegroup').find('footer').css('color', color);
  });
});
