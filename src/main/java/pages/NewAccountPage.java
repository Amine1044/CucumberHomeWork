package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public class NewAccountPage extends BasePage{
	WebDriver driver;
	int rand=BasePage.randomNum();
	
	public NewAccountPage (WebDriver driver) {
		this.driver=driver;	
	}
	
	
	
	@FindBy(how=How.XPATH,using="//*[@id=\"account\"]") WebElement TITLE_FIELD_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"description\"]") WebElement DESCRIPTION_FIELD_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"balance\"]") WebElement BALANCE_FIELD_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"account_number\"]") WebElement ACCOUNT_NUMBER_FIELD_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"contact_person\"]") WebElement CONTACT_PERSON_FIELD_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"contact_phone\"]") WebElement PHONE_FIELD_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"ib_url\"]") WebElement URL_FIELD_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button") WebElement SUBMIT_BUTTON_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"page-wrapper\"]/div[3]/div[1]") WebElement ACCOUNT_CREATION_TEXT_ELEMENT;
	
	private void waitForVisibility(WebElement element) throws Error{
		WebDriverWait wait =new WebDriverWait(driver, 60);
        wait.until(ExpectedConditions.elementToBeClickable(element)); 
	}
	
	public void setTitle(String arg) {
		waitForVisibility(TITLE_FIELD_ELEMENT);
		TITLE_FIELD_ELEMENT.sendKeys(arg+rand);
	}
	public void setDescription(String arg) {
		DESCRIPTION_FIELD_ELEMENT.sendKeys(arg+rand);
	}
	public void setBalance(String arg) {
		BALANCE_FIELD_ELEMENT.sendKeys(arg+rand);
	}
	public void setAccountNumber(String arg) {
		ACCOUNT_NUMBER_FIELD_ELEMENT.sendKeys(arg+rand);
	}
	public void setContact(String arg) {
		CONTACT_PERSON_FIELD_ELEMENT.sendKeys(arg+rand);
	}
	public void setPhone(String arg) {
		PHONE_FIELD_ELEMENT.sendKeys(arg+rand);
	}
	public void setURL(String arg) {
		URL_FIELD_ELEMENT.sendKeys(arg);
	}
	public void clickOnSubmit() {
		SUBMIT_BUTTON_ELEMENT.click();
	}
	public void validateAccountCreation() {
		waitForVisibility(ACCOUNT_CREATION_TEXT_ELEMENT);
		Assert.assertEquals("Account Created Successfully", ACCOUNT_CREATION_TEXT_ELEMENT.getText());
	}
}
