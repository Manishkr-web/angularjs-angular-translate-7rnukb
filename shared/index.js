import angular from 'angular';

let sharedModule = angular.module('shared', []);

// Controllers
import LanguageService from './language.service';


sharedModule.factory('languageService', ['$translate', ($translate) => {
  let languageService = new LanguageService($translate);
  return languageService;
}]);

export default sharedModule;