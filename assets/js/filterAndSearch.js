var qsRegex;
var buttonFilter;


var $grid = $('.grid').isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows',
    filter: function() {
      $this = $(this)
      var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
      var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
      return searchResult && buttonResult;
    }
  });
  
  var filters = {};
  
  $('.filters').on( 'click', '.button', function( event ) {
     var $button = $( event.currentTarget );
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
      console.log(filterGroup )
      filters[ filterGroup ] = $button.attr('data-filter').replace(/ /g,"_").toLowerCase().toLowerCase().replace(/[!"#$%&'()+,\/:;<=>?@[\\\]^`{|}~]/g, "\\\$&");
      console.log( $button.attr('data-filter').replace(/ /g,"_").toLowerCase())
    var filterValue = concatValues( filters );
    buttonFilter = filterValue;

  $grid.isotope()    
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

  $("button.button_plateform").click()
$("button.button_categorie").click()
      // quick search regex
  var qsRegex;
  
  // init Isotope
  
  // use value of search field to filter
  var $quicksearch = $('.quicksearch').keyup( debounce( function() {
    qsRegex = new RegExp( $quicksearch.val(), 'gi' );
    $grid.isotope();
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