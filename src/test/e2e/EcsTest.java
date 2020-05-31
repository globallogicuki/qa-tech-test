package test.e2e;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class EcsTest {

	private static WebDriver driver = null;
	private static By button_renderChallenge  = By.xpath("//button[@data-test-id = 'render-challenge']");
	private static By rows = By.xpath("//section[@id = 'challenge']//div/table/tbody/tr");
	private static By columns = By.xpath("//section[@id = 'challenge']//div/table/tbody/tr[1]/td");
	private static By input_challenge4 = By.xpath("//input[@data-test-id = 'submit-4']");
	private static By button_submitChallenge = By.xpath("//span[contains(text(), 'Submit Answers')]");
	
	public static void main(String[] args) {
		//Setting up the driver.
		driver = new FirefoxDriver();
		driver.get("http://localhost:3000/");
		driver.findElement(button_renderChallenge).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		//Number of rows and Columns
		int totalRows = driver.findElements(rows).size();
		System.out.println("Rows: "+ totalRows);
		int totalCols = driver.findElements(columns).size();
		System.out.println("columns: "+ totalCols);
		
		//Creating an array
		
		for(int row = 1; row<=totalRows; row++){
			int numArray[]= new int[totalCols]; 
			for(int column = 0; column<totalCols; column++){
				numArray[column] = Integer.parseInt(driver.findElement(By.xpath("//td[@data-test-id = 'array-item-"+row+"-" + column +"']")).getText());
			}
			// Inserting answers in the given input boxes.
			
			int indexArray = findIndexOfArray(numArray, numArray.length);
			System.out.println("The expected Index for row "+ row +" is: " +  indexArray + " And the value is : " + numArray[indexArray]);
			
			if(indexArray != -1)
				driver.findElement(By.xpath("//input[@data-test-id = 'submit-" + row + "']")).sendKeys(String.valueOf(indexArray));
			else
				driver.findElement(By.xpath("//input[@data-test-id = 'submit-" + row + "']")).sendKeys("null");
		}
		driver.findElement(input_challenge4).sendKeys("Poonam Borge");
		driver.findElement(button_submitChallenge).click();
		//driver.close();
	}
	// Method to find the index.
	
	public static int findIndexOfArray(int arrayNum[], int arraySize){
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
