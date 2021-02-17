$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\login.feature');
formatter.feature({
  "line": 1,
  "name": "LoginFunctionality",
  "description": "",
  "id": "loginfunctionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login button exists",
  "description": "",
  "id": "loginfunctionality;login-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open Facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login button should exists",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 2396108000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginButton()"
});
formatter.result({
  "duration": 33199,
  "status": "passed"
});
});