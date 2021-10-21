const { I, aboutPage, mainPage, termConditionPage, offerSearchFragment } = inject();

module.exports = {

    // locators

    //noResultIcon: '//div[@class="errorPage_headerImg"]',
    noResultTextTitle: '//div[@class="errorPage_content"]//div[contains(@class,"contentTitle")]',
    noResultTextDescription: '//div[@class="errorPage_content"]//div[contains(@class,"contentDescription")]',

    // methods

    async typeInTheSearch(dataTable, state) {
        state.expectedTitle = dataTable.parse().hashes()[0].expectedTitle
        state.expectedDescription = dataTable.parse().hashes()[0].expectedDescription
        I.fillField('.forms_inputText', dataTable.parse().hashes()[0].input);
        //I.waitForElement(this.noResultIcon, 20);
        state.currentTextTitle = await I.grabTextFrom(this.noResultTextTitle);
        state.currentTextDescription = await I.grabTextFrom(this.noResultTextDescription);
    },
   
    validateContent(state) {
        I.assertContain(state.currentTextTitle, state.expectedTitle);
        I.assertContain(state.currentDescription, state.expectedDescription);
    }
}
