(function($){
  $(function(){
    var url = 'http://tinybuddha.com/wp-content/plugins/tiny-buddha-host/wisdom.txt'
    $.get(url, function(data) {
       alert(data);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
