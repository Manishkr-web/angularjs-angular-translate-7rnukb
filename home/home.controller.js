// This page/class demonstrates translating programmatically.
class HomeCtrl {
  constructor($scope, $translate, $rootScope, languageService) {
    'ngInject';
    this._languageService = languageService;
    this._$translate = $translate;

    $rootScope.$on('$translateChangeSuccess', () => {
      this.updateTranslations();
    }, this);

    this.updateTranslations();
  }

  updateTranslations() {
    this._$translate(['APP_WELCOME', 'APP_TAGLINE'], { username: 'Emma Livingstone' }).then((translations) => {
      this.welcome = translations.APP_WELCOME;
      this.tagline = translations.APP_TAGLINE;
    }, (translationIds) => {
      this.welcome = translationIds.APP_WELCOME;
      this.tagline = translationIds.APP_TAGLINE;
    });
  }

  changeLanguage(languageKey) {
    this._languageService.changeLanguage(languageKey);
  }
}

export default HomeCtrl;