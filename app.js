(function(){
  var app = angular.module('arit', [ ]);

  app.controller('PageController', function() {
    this.page = {};
    this.pages = pages;

    this.setPage = function(setPage){
      this.page = setPage || {};
    };

    this.isCurrent = function(pageSlug){
      return this.page.slug === pageSlug;
    }
  });

  var pages = [
    {
      title: 'Home',
      slug: ''
    },
    {
      title: 'Leaderboard',
      slug: 'leaderboard'
    },
    {
      title: 'Players',
      slug: 'players'
    },
    {
      title: 'About',
      slug: 'about'
    }
  ];

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