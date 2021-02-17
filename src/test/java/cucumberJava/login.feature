Feature: LoginFunctionality

@SmokeTest
Scenario: Login button exists
Given I open Facebook website
Then Login button should exists

@login2
Scenario Outline: Login with invalid credentials
Given I open Facebook website
When User enters <username> and <password>

Examples:  
   | username  | password  | 
   | username1 | password1 |
   | username2 | password2 |
Then Message displayed incorrect