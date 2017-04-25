function callQuotes(){
  $.ajax('http://quotes.stormconsultancy.co.uk/quotes.json', {
    type: 'GET',
    data: 'null',
    dataType: 'json',
    success: function(data){
      var randomIndex = Math.floor(Math.random() * data.length);
      $.each(data, function(i){
        if(randomIndex === data[i]['id']){
          $('#quote').text(data[i]['quote']);
          $('#author').text(data[i]['author']);
        }
      });
    },
    error: function(request, errorType, errorMessage){
      alert('Error: ' + errorType + ' with message: ' + errorMessage);
    }
  });
}

$(document).ready(function(){
  callQuotes();
  $('.btn').click(callQuotes);
});
