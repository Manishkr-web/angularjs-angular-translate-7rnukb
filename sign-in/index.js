import angular from 'angular';

// Create the module where our functionality can attach to
let signInModule = angular.module('signIn', []);

// Include our UI-Router config settings
import signInConfig from './sign-in.config';
signInModule.config(signInConfig);

// Controllers
import SignInCtrl from './sign-in.controller';
signInModule.controller('SignInCtrl', SignInCtrl);

export default signInModule;