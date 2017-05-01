$(document).ready(function(){
  //Start point fadeIn of the site
  $('.quotegroup').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);

  //Ajax Request
  $('.btn-quotes').on('click', function(){
    $.ajax('https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous', {
      type: 'GET',
      data: 'null',
      dataType: 'json',
      success: function(response){
        $('.quotegroup').fadeOut(1000, function(){
          $('#quote').text(response.quote);
          $('#author').text(response.author);
          $(this).fadeIn(1000);
        });
      },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "2W1js31pYJmshjhSeK7bv8Sb4SIgp1HPxkDjsnxBZqr7ZhGKZ2"); // Enter here your Mashape key
      }
    });
  });

  //Change color&background-color
  $('.btn-quotes').on('click', function(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    $('body, .btn').css('background-color', color);
    $('.quotegroup').find('p').css('color', color);
    $('.quotegroup').find('footer').css('color', color);
  });

  //Tweet API
  $('.btn-twitter').on('click', function(event){
    event.preventDefault();
    var quote = $('#quote').text();
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quote);
  });
});
