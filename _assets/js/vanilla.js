document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('container')[0],
    handler: function( direction ) {
      if ( direction === 'down' ) {
        document.getElementsByClassName('navMenu')[0].classList.add('white');
      } else {
        document.getElementsByClassName('navMenu')[0].classList.remove('white');
      }
    },
    offset: 42
  });
});
