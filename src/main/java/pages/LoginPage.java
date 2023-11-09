package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage extends BasePage{
	//WebDriver initiation
	WebDriver driver;
	
	public LoginPage (WebDriver driver) {
		this.driver=driver;	
	}
	//===========================================================
	
	
	

	//Elements
	@FindBy(how= How.XPATH, using="//*[@id=\"username\"]") WebElement USER_NAME_ELEMENT;
	@FindBy(how= How.XPATH, using="//*[@id=\"password\"]") WebElement PASSWORD_ELEMENT;
	@FindBy(how= How.XPATH, using="/html/body/div/div/div/form/div[3]/button") WebElement SIGNIN_BUTTON_ELEMENT;
	@FindBy(how=How.XPATH , using="//*[@id=\"page-wrapper\"]/div[2]/div/h2" )WebElement DASHBOARD_HEADER_ELEMENT;
	//============================================================
	
	
	
	//Methods
	private void waitForVisibility(WebElement element) throws Error{
		WebDriverWait wait =new WebDriverWait(driver, 60);
        wait.until(ExpectedConditions.elementToBeClickable(element)); 
	}
	public void setUserName(String username) {
		waitForVisibility(USER_NAME_ELEMENT);
		USER_NAME_ELEMENT.sendKeys(username);
	}
	
	public void setPassword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
	}
	
	public void clickSigninButton() {
		SIGNIN_BUTTON_ELEMENT.click();
	}
	public void verifyDashboardHeader() {
		waitForVisibility(DASHBOARD_HEADER_ELEMENT);
		Assert.assertEquals("Wrong Page !!","Dashboard",DASHBOARD_HEADER_ELEMENT.getText());
		
	}
}