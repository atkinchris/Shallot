app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('post', {
    url: '/post',
    templateUrl: 'templates/post.html',
    controller: 'PostCtrl'
  });
  
  $urlRouterProvider.otherwise('/post');

});