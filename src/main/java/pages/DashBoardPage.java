package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;




public class DashBoardPage {
	//WebDriver initiation
		WebDriver driver;
		
		public DashBoardPage (WebDriver driver) {
			this.driver=driver;	
		}
	//===========================================================
		
		
		
	//Elements
		@FindBy(how=How.XPATH , using="//*[@id=\"page-wrapper\"]/div[2]/div/h2" )WebElement DASHBOARD_HEADER_ELEMENT;
		@FindBy(how=How.XPATH,using="//*[@id=\"side-menu\"]/li[10]/a/span[1]")WebElement BANK_CASH_BUTTON_ELEMENT;
		@FindBy(how=How.XPATH,using="//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")WebElement NEW_ACCOUNT_BUTTON_ELEMENT;
	//===========================================================
		
		
		
	//Methods
		private void waitForVisibility(WebElement element) throws Error{
			WebDriverWait wait =new WebDriverWait(driver, 60);
	        wait.until(ExpectedConditions.elementToBeClickable(element)); 
		}
		
		public void verifyDashboardHeader() {
			Assert.assertEquals(DASHBOARD_HEADER_ELEMENT.getText(), "expectedHeader", "Wrong Page !!");
			
		}
		
		public void clickOnBankCachButton() {
			waitForVisibility(BANK_CASH_BUTTON_ELEMENT);
	        BANK_CASH_BUTTON_ELEMENT.click();
		}
		public void clickOnANewAccountButton() {
//			WebDriverWait wait =new WebDriverWait(driver, 60);
//	        wait.until(ExpectedConditions.visibilityOf(ADD_CUSTOMERS_BUTTON_ELEMENT)); 
			waitForVisibility(NEW_ACCOUNT_BUTTON_ELEMENT);
			NEW_ACCOUNT_BUTTON_ELEMENT.click();
		}
		
		
}