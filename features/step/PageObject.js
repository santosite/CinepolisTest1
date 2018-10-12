export
    class CinepolisPg{
        constructor(URL, citySelector, cineSelector){
            this.URL = 'http://www.cinepolis.com';
            this.citySelector = '//*[@id="cmbCiudades"]';
            this.cineSelector = '//*[@id="cmbComplejos"]';
        }
        mainPage(){
            browser.url(this.URL);
        }
        selectCity(city){
            browser.selectByVisibleText(this.citySelector,city);
        }
        selectCinema(cinema){
            browser.selectByVisibleText(this.cineSelector,cinema);

        }
    }
export
    class SPedroPage{
        constructor(url, box1Selector, box2Selector, getHours){
            this.URL = 'http://www.cinepolis.com/cartelera/san-pedro/cinepolis-san-pedro';
            this.box1Selector = '#slider-range > a:nth-child(2)';
            this.box2Selector = '#slider-range > a:nth-child(3)';
            this.getHours = '.btn.btnhorario.ng-scope';
        }
        changeTime(from, to){
            switch (from){
                case "12 AM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-0');
                               break;
                case "10 AM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-1');
                               break;
                case "11 AM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-2');
                               break;
                case "12 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-3');
                               break;
                case "1 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-4');
                               break;
                case "2 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-5');
                               break;
                case "3 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-6');
                               break;    
                case "4 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-7');
                               break;
                case "5 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-8');
                               break;
                case "6 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-9');
                               break;
                case "7 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-10');
                               break;
                case "8 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-11');
                               break;
                case "9 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-12');
                               break;
                case "10 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-13');
                               break;
                case "11 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-14');
                               break;
                case "11:59 PM":  browser.dragAndDrop(this.box1Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-15');
                               break;
            }
            switch (to){
                case "12 AM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-0');
                            break;
                case "10 AM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-1');
                            break;
                case "11 AM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-2');
                            break;
                case "12 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-3');
                            break;
                case "1 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-4');
                            break;
                case "2 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-5');
                            break;
                case "3 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-6');
                            break;    
                case "4 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-7');
                            break;
                case "5 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-8');
                            break;
                case "6 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-9');
                            break;
                case "7 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-10');
                            break;
                case "8 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-11');
                            break;
                case "9 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-12');
                            break;
                case "10 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-13');
                            break;
                case "11 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-14');
                            break;
                case "11:59 PM":  browser.dragAndDrop(this.box2Selector,'#slider-range > span.ui-slider-pip.ui-slider-pip-15');
                            break;
            } 
        }

        getFuncTime(){
                let allHours = (browser.getText(this.getHours));
                let functHours = [];
                allHours.forEach(element => {
                    if(element!= ''){
                    functHours.push(element);
                    }
                });  
                //CHECK IF FUNCTIONS ARE BETWEEN THE SET TIME
                //funcHours.forEach(element => {
                //    if(element>=from && element<=to){
                //        console.log(elements+" this time is ok")
                //    }
                    
                //}); */

                console.log(functHours);
        }

}
