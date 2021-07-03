
var $grid = $('.grid').isotope({
    itemSelector: '.card'
  });
  
  var filters = {};
  
  $('.filters').on( 'click', '.button', function( event ) {
     var $button = $( event.currentTarget );
      console.log($button)
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
      console.log(filterGroup )
    filters[ filterGroup ] = $button.attr('data-filter').replace(/ /g,"_").toLowerCase();
      console.log( $button.attr('data-filter').replace(/ /g,"_").toLowerCase())
    var filterValue = concatValues( filters );
    $grid.isotope({ filter: filterValue });
  });
      
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function( event ) {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      var $button = $( event.currentTarget );
      $button.addClass('is-checked');
    });
  });
  
  // flatten object by concatting values
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
  
      // quick search regex
  var qsRegex;
  
  // init Isotope
  var $gridSearch = $('.grid').isotope({
    itemSelector: '.global_name',
    layoutMode: 'fitRows',
    filter: function() {
      return qsRegex ? $(this).text().match( qsRegex ) : true;
    }
  });
  
  // use value of search field to filter
  var $quicksearch = $('.quicksearch').keyup( debounce( function() {
    qsRegex = new RegExp( $quicksearch.val(), 'gi' );
    $gridSearch .isotope();
  }, 200 ) );
  
  // debounce so filtering doesn't happen every millisecond
  function debounce( fn, threshold ) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout( timeout );
      var args = arguments;
      var _this = this;
      function delayed() {
        fn.apply( _this, args );
      }
      timeout = setTimeout( delayed, threshold );
    };
  }
  