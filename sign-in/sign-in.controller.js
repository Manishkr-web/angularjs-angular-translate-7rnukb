// This page demonstrates translating in the template.
class SignInCtrl {
  constructor($scope, languageService) {
    'ngInject';
    this._languageService = languageService;
    this.translationData = { date: '15/03/2018' };
  }

  changeLanguage(languageKey) {
    this._languageService.changeLanguage(languageKey);
  }
}

export default SignInCtrl;