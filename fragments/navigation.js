const { I, mainPage, aboutPage, responsibleGamingPage, termConditionPage } = inject();

module.exports = {

    // locators

    // methods

    goToMainPage() {
        I.amOnPage(mainPage.mainPageUrl);
    }
}
