package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BasePage;
import pages.DashBoardPage;
import pages.DataBasePage;
import pages.LoginPage;
import pages.NewAccountPage;


public class StepDefinition extends BasePage{
	LoginPage loginpage;
	DashBoardPage dashboardpage;
	NewAccountPage newaccountpage;
	DataBasePage databasepage;
	int random=BasePage.randomNum();
	@Before 
	public void beforeRun(){
		BasePage.init();
		loginpage=PageFactory.initElements(driver, LoginPage.class);
		dashboardpage=PageFactory.initElements(driver, DashBoardPage.class);
		newaccountpage=PageFactory.initElements(driver, NewAccountPage.class);
		databasepage = new DataBasePage();
	}
	@After
	public void afterRun() {
		BasePage.tearDown();
		
	}
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		
		driver.get("https://techfios.com/billing/?ng=admin/");

		
	}

	@When("^User enters the \"([^\"]*)\" in the \"([^\"]*)\" field$")
	public void user_enters_the_in_the_field(String arg1, String arg2) {
		switch (arg2){
			case "username":
				loginpage.setUserName(arg1);
				break;
			case "password":
				loginpage.setPassword(arg1);
				break;
			
		}
		
	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String arg1) {
		switch (arg1){
		case "login":
			loginpage.clickSigninButton();
			break;
		case "bankCash":
			dashboardpage.clickOnBankCachButton();
			break;
		case "newAccount":
			dashboardpage.clickOnANewAccountButton();
			break;
		case "submit":
			newaccountpage.clickOnSubmit();
			break;
		}
		
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		loginpage.verifyDashboardHeader();
		
	}


	@Then("^User enters \"([^\"]*)\" in the \"([^\"]*)\" field in accounts page$")
	public void user_enters_in_the_field_in_accounts_page(String arg1, String arg2) {
		
		switch (arg2){
		case "accountTitle":
			newaccountpage.setTitle(arg1);
			break;
		case "description":
			newaccountpage.setDescription(arg1);
			break;
		case "initialBalance":
			newaccountpage.setBalance(arg1);
			break;
		case "accountNumber":
			newaccountpage.setAccountNumber(arg1);
			break;
		case "contactPerson":
			newaccountpage.setContact(arg1);
			break;
		case "Phone":
			newaccountpage.setPhone(arg1);
			break;
		case "internetBankingURL":
			newaccountpage.setURL(arg1);
			break;
		
	}
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		newaccountpage.validateAccountCreation();
	}
	//=================================DATA BASE STEPS =====================================================================
	@When("^User enters the \"([^\"]*)\" from mysql DB$")
	public void user_enters_the_from_mysql_DB(String data) {
		if (data.equalsIgnoreCase("username")) {
			loginpage.setUserName(databasepage.getDataFromDb("username"));
			System.out.println("username from DB: " +databasepage.getDataFromDb("username" ));
		}else if (data.equalsIgnoreCase("password")) {
			loginpage.setPassword(databasepage.getDataFromDb("password"));
			System.out.println("password from DB: " +databasepage.getDataFromDb("password"));
		}else {
			System.out.println(data +"is not found !!");
		}
	}




}
