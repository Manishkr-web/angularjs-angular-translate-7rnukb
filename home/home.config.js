function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '/home',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html'
  })

};

export default HomeConfig;