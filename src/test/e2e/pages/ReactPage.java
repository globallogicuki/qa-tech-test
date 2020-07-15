package test.e2e.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import test.e2e.core.BasePageObject;

public class ReactPage extends BasePageObject {

	private static By button_renderChallenge  = By.xpath("//button[@data-test-id = 'render-challenge']");
	private static By rows = By.xpath("//section[@id = 'challenge']//div/table/tbody/tr");
	private static By columns = By.xpath("//section[@id = 'challenge']//div/table/tbody/tr[1]/td");
	private static By input_challenge4 = By.xpath("//input[@data-test-id = 'submit-4']");
	private static By button_submitChallenge = By.xpath("//span[contains(text(), 'Submit Answers')]");
	
	public ReactPage(WebDriver driver) {
		super(driver);
	}
	public void renderTheChallenge(){
		driver.findElement(button_renderChallenge).click();
	}
	
	//Number of Rows
	public int getNumberOfRows(){
		int totalRows = driver.findElements(rows).size();
		System.out.println("Rows: "+ totalRows);
		return totalRows;
	}
	
	//Number of Columns
	public int getNumberOfCols(){
		int totalCols = driver.findElements(columns).size();
		System.out.println("columns: "+ totalCols);
		return totalCols;
	}
	
	public int getValueOfCell(int row, int column){
		return Integer.parseInt(driver.findElement(By.xpath("//td[@data-test-id = 'array-item-"+row+"-" + column +"']")).getText());
	}
	
	//Method to fill up the answers in the text boxes
	public void fillAns(int indexArray, int row){
		if(indexArray != -1)
			driver.findElement(By.xpath("//input[@data-test-id = 'submit-" + row + "']")).sendKeys(String.valueOf(indexArray));
		else
			driver.findElement(By.xpath("//input[@data-test-id = 'submit-" + row + "']")).sendKeys("null");
	}
	
	//Method to fill up the name in the text box
	public void fillName(){
		driver.findElement(input_challenge4).sendKeys("Poonam Borge");
	}
	//Method to submit the challenge
	public void submitChallenge(){
		driver.findElement(button_submitChallenge).click();
	}

}
