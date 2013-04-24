(function( $ ){
  var methods = {
    settings:{},
    activeTab:{tabName,tabIndex}
    init : function( options ) { 
      var settings = $.extend( {
        'location'         : 'top',
        'background-color' : 'blue'
        }, options);
      this.settings=settings;
      var $activeTab=$('active');
      this.activeTab
    },
    activateTab : function( ) {
      // IS
    }
  };

  $.fn.tabcontrol = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
    
  };

})( jQuery );

// calls the init method
$('div').tooltip(); 

// calls the init method
$('div').tooltip({
  foo : 'bar'
});