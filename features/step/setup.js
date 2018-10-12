import{CinepolisPg} from '/home/santiago/Documents/IT ROCKSTARS/cucumber/Cinepolis/features/step/PageObject.js' 
module.exports = function () {
        this.Given(/^we are in Cinepolis$/, function () {
           // Write code here that turns the phrase above into concrete actions
           let homePage = new CinepolisPg();
           homePage.mainPage();
         });
}