$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DB_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios Login from DB",
  "description": "",
  "id": "techfios-login-from-db",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@jdbc"
    }
  ]
});
formatter.before({
  "duration": 6285278800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to login with valid credentials from DB",
  "description": "and open a new account",
  "id": "techfios-login-from-db;user-should-be-able-to-login-with-valid-credentials-from-db",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"username\" from mysql DB",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"password\" from mysql DB",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1194089500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 17
    }
  ],
  "location": "StepDefinition.user_enters_the_from_mysql_DB(String)"
});
formatter.result({
  "duration": 685153700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 17
    }
  ],
  "location": "StepDefinition.user_enters_the_from_mysql_DB(String)"
});
formatter.result({
  "duration": 149716701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 1144250700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 274010999,
  "status": "passed"
});
formatter.after({
  "duration": 365576500,
  "status": "passed"
});
});