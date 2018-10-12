@watch
 Feature: Test
    Scenario: About Cinepolis
        Given we are in Cinepolis
        When we select the city "San Pedro"
        When we select the cine "Cinépolis San Pedro"
        Then we change the hours between "9 PM" and "10 PM"
        Then we check the functions time

