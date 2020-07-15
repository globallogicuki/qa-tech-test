package test.e2e.core;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

public class BaseTest {
	private WebDriver driver;

    @BeforeSuite
    public void beforeSuite() {
        driver = new FirefoxDriver();
        driver.get("http://localhost:3000/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
    }

    @AfterSuite
    public void afterSuite() {
        if(null != driver) {
            driver.close();
            driver.quit();
        }
    }
    
    public WebDriver getDriver() {
        return this.driver;
    }
}
