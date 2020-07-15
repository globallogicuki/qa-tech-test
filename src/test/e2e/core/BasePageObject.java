package test.e2e.core;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePageObject {
	private static final int TIMEOUT = 5;
    
	protected WebDriver driver;
    private WebDriverWait wait;

    public BasePageObject(WebDriver driver) {
        this.driver = driver;
        isLoaded();
        wait = new WebDriverWait(driver, TIMEOUT, 100);
     }
    protected void isLoaded() {
		this.wait = new WebDriverWait(driver, TIMEOUT, 100);
	}
    protected void waitForElementToAppear(By locator) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
    
    public int findIndexOfArray(int arrayNum[], int arraySize){
		int totalArraySum = 0;
		int leftSum = 0;
		
		//Total sum
		for(int i = 0; i<arraySize; i++)
			totalArraySum += arrayNum[i];
		
		for(int i = 0; i<arraySize; i++){
			totalArraySum -= arrayNum[i];
			if(leftSum == totalArraySum)
				return i;
			leftSum += arrayNum[i];
		}
		return -1;
    }
		
}
