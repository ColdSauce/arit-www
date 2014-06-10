(function(){
  var app = angular.module('arit', [ ]);

  app.controller('PlayerController', function() {
    this.players = players;
  });

  var players = [
    {
      name: 'John Doe',
      description: 'Tall. Very tall.',
      attacked: false
    },
    {
      name: 'Joe Smith',
      description: 'Quite average, wears glasses.',
      attacked: true
    }
  ];


})();