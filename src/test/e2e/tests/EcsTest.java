package test.e2e.tests;

import org.testng.annotations.Test;

import test.e2e.core.BaseTest;
import test.e2e.pages.ReactPage;

public class EcsTest extends BaseTest {
	ReactPage reactObj;
	int totalRows;
	int totalCols;
	
	@Test
	public void findIndexOfArrayAndWriteAns(){
		reactObj = new ReactPage(super.getDriver());
		reactObj.renderTheChallenge();
		totalRows = reactObj.getNumberOfRows();
		totalCols = reactObj.getNumberOfCols();
		
		for(int row = 1; row<=totalRows; row++){
			int numArray[]= new int[totalCols]; 
			for(int column = 0; column<totalCols; column++){
				numArray[column] = reactObj.getValueOfCell(row, column);
			}
			int indexArray = reactObj.findIndexOfArray(numArray, numArray.length);
			System.out.println("The expected Index for row "+ row +" is: " +  indexArray + " And the value is : " + numArray[indexArray]);
			reactObj.fillAns(indexArray, row);			
		}
		reactObj.fillName();
		reactObj.submitChallenge();
	}
	

}
