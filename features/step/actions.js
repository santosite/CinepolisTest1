import{CinepolisPg, SPedroPage} from '/home/santiago/Documents/IT ROCKSTARS/cucumber/Cinepolis/features/step/PageObject.js' 
module.exports = function () {
    this.When(/^we select the city "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        let chooseCity = new CinepolisPg();
        chooseCity.selectCity(arg1);
      });
    this.When(/^we select the cine "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        let chooseCinema = new CinepolisPg();
        chooseCinema.selectCinema(arg1);
      });
    this.Then(/^we change the hours between "([^"]*)" and "([^"]*)"$/, function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        let pickHours = new SPedroPage();
        pickHours.changeTime(arg1, arg2);
      });
    this.Then(/^we check the functions time$/, function () {
        // Write code here that turns the phrase above into concrete actions
        let fucnHours = new SPedroPage();
        fucnHours.getFuncTime();
      });







}