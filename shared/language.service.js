class LanguageService {
  constructor($translate) {
    'ngInject';

    this._$translate = $translate;
  }

  changeLanguage(languageKey) {
    this._$translate.use(languageKey);
  }
}

export default LanguageService;