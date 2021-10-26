function SignInConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('sign-in', {
    url: '/sign-in',
    controller: 'SignInCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'sign-in/sign-in.html'
  })

};

export default SignInConfig;