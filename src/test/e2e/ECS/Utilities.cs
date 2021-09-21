using System;
using System.Collections.Generic;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;

namespace ECS
{
    public class Utilities
    {
        public static void Sum(int[] num1, int[] num2)
        {
            int FirstNumber = 0;
            int SecondNumber=0;
            for (int i=0; i< num1.Length;i++)
            {
                FirstNumber = num1[i];

            }

            for (int j = 0; j < num2.Length; j++)
            {
                SecondNumber = num2[j];

            }
            Assert.AreEqual(FirstNumber, SecondNumber);
        }

        public static void LaunchApp(IWebDriver driver)
            {
                driver.Navigate().GoToUrl("http://localhost:3000/");
                Thread.Sleep(5000);
                driver.FindElement(By.XPath("//button[@data-test-id='render-challenge']")).Click();
                
            }

            public static int GetIndex(int[] arr,
                           int n)
        {
            // Forming prefix sum
            // array from 0
            int[] prefixSum = new int[n];
            prefixSum[0] = arr[0];
            for (int i = 1; i < n; i++)
                prefixSum[i] = prefixSum[i - 1] +
                                         arr[i];

            // Forming suffix sum
            // array from n-1
            int[] suffixSum = new int[n];
            suffixSum[n - 1] = arr[n - 1];
            for (int i = n - 2; i >= 0; i--)
                suffixSum[i] = suffixSum[i + 1] +
                                         arr[i];

            // Find the point where prefix
            // and suffix sums are same.
            for (int i = 1; i < n - 1; i++)
                if (prefixSum[i] == suffixSum[i])
                    return arr[i];

            return -1;
        }

            public static IList<IWebElement> GetTableRow(IWebDriver driver, int iTableRowIndex)
        {
           return driver.FindElements(By.XPath("//*/tbody/tr["+iTableRowIndex+"]/td"));
        }

            public static IWebElement GetTableCell(IWebDriver driver, int iTableRowIndex, int iTableCellIndex)
        {
            return driver.FindElement(By.XPath("//*/tbody/tr[" + iTableRowIndex + "]/td[" + iTableCellIndex + "]"));
        }

        public static void Enterchallenge(IWebDriver driver, string challengeanswer, int iinput)
        {
             driver.FindElement(By.XPath("//input[@data-test-id='submit-"+ iinput + "']")).SendKeys(challengeanswer);
        }

        public static void SubmitAnswers(IWebDriver driver)
        {
            driver.FindElement(By.XPath("//button//div//div//span[text()='Submit Answers']")).Click();
        }


    }
    
}
