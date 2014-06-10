(function(){
  var app = angular.module('arit', [ ]);

  app.controller('PlayerController', function() {
    this.player = player;
  });

  var player = {
    name: 'John Doe',
    description: 'Tall. Very tall.',
    attacked: false
  }

})();