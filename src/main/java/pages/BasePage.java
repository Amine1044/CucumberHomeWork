package pages;

import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BasePage {
	public static WebDriver driver;
	public static WebDriver init() {
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
	}
	public static void tearDown () {
		
		driver.close();
		driver.quit();
	}
	public static int randomNum() {
		Random ran=new Random();
		return ran.nextInt(9999);
	}

}
