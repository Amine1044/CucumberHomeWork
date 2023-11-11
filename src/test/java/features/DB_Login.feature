@jdbc
Feature: Techfios Login from DB

Scenario: User should be able to login with valid credentials from DB 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the "username" from mysql DB
	When User enters the "password" from mysql DB
	And User clicks on "login"
	Then User should land on Dashboard page 