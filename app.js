(function(){
  var app = angular.module('arit', [ ]);

  app.controller('PlayerController', function() {
    this.players = players;
  });

  var players = [
    {
      name: 'John Doe',
      description: 'Tall. Very tall.',
      kills: 10,
      deaths: 3,
      attacked: false
    },
    {
      name: 'Joe Smith',
      description: 'Quite average, wears glasses.',
      kills: 5,
      deaths: 9,
      attacked: true
    }
  ];


})();