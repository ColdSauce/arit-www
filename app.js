(function(){
  var app = angular.module('arit', [ ]);

  app.controller('PageController', function() {
    this.page = {};
    this.pages = pages;

    this.setPage = function(slug){
      this.page = this.getPage(slug);
    };

    this.getPage = function(slug){
      var newPage = {};
      this.pages.forEach(function(page){
        if (page.slug == slug)
          newPage = page;
      });
      return newPage;
    };

    this.isCurrent = function(pageSlug){
      if (!this.page)
        return false
      return this.page.slug === pageSlug;
    };

    this.setPage(window.location.hash.split("#")[1] || '');
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