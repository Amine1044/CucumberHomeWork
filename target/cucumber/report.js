$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Features2.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cusername\u003e\" in the \"username\" field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cpassword\u003e\" in the \"password\" field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003caccountTitle\u003e\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cdescription\u003e\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cinitialBalance\u003e\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003caccountNumber\u003e\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003ccontactPerson\u003e\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cPhone\u003e\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "CucHwTitle",
        "CucHwDes",
        "2323",
        "12123",
        "CucHwContact",
        "12345623",
        "https://bofa.com/"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1761302100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\" in the \"username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"abc123\" in the \"password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"CucHwTitle\" in the \"accountTitle\" field in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"CucHwDes\" in the \"description\" field in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"2323\" in the \"initialBalance\" field in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"12123\" in the \"accountNumber\" field in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"CucHwContact\" in the \"contactPerson\" field in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"12345623\" in the \"Phone\" field in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"https://bofa.com/\" in the \"internetBankingURL\" field in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 542942600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "username",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_the_in_the_field(String,String)"
});
formatter.result({
  "duration": 208009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    },
    {
      "val": "password",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_enters_the_in_the_field(String,String)"
});
formatter.result({
  "duration": 68111100,
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
  "duration": 824029700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 193452500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 1178085100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 247633000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucHwTitle",
      "offset": 13
    },
    {
      "val": "accountTitle",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 143226100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucHwDes",
      "offset": 13
    },
    {
      "val": "description",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 101198900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2323",
      "offset": 13
    },
    {
      "val": "initialBalance",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 81089600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12123",
      "offset": 13
    },
    {
      "val": "accountNumber",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 78565700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucHwContact",
      "offset": 13
    },
    {
      "val": "contactPerson",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 105565200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345623",
      "offset": 13
    },
    {
      "val": "Phone",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 94474700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://bofa.com/",
      "offset": 13
    },
    {
      "val": "internetBankingURL",
      "offset": 40
    }
  ],
  "location": "StepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 143907000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 1220487300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 692096300,
  "status": "passed"
});
formatter.after({
  "duration": 637549900,
  "status": "passed"
});
});