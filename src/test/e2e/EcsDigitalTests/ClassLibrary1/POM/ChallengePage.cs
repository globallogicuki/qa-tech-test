using OpenQA.Selenium;
using System;
using System.Collections.Generic;

namespace EcsDigitalTests.POM
{
    class ChallengePage
    {
        public static IWebDriver _webDriver;
        private Dictionary<string, string> pageObjectModelXPath = new Dictionary<string, string>();
        private Dictionary<string, string> pageObjectModelCssSelector = new Dictionary<string, string>();

        public ChallengePage(IWebDriver webDriver)
        {
            _webDriver = webDriver;
            pageObjectModelXPath = PageObjectsXPaths();
            pageObjectModelCssSelector = PageObjectsCssSelectors();
        }

        private Dictionary<string, string> PageObjectsXPaths()
        {
            Dictionary<string, string> POMXPath = new Dictionary<string, string>();
            POMXPath.Add("Render Challenge Button", "//div/div/button/div/div/span");
            POMXPath.Add("First Row", "//div/div/div[1]/div/div[2]/table/tbody/tr[1]");
            POMXPath.Add("Second Row", "//div/div/div[1]/div/div[2]/table/tbody/tr[2]");
            POMXPath.Add("Third Row", "//div/div/div[1]/div/div[2]/table/tbody/tr[3]");
            POMXPath.Add("Submit Answers", "//div/div/div[2]/div/div[2]/button/div/div/span");
            return POMXPath;
        }

        private Dictionary<string, string> PageObjectsCssSelectors()
        {
            Dictionary<string, string> POMCssSelector = new Dictionary<string, string>();
            POMCssSelector.Add("First Row Answer", "[data-test-id= 'submit-1']");
            POMCssSelector.Add("Second Row Answer", "[data-test-id= 'submit-2']");
            POMCssSelector.Add("Third Row Answer", "[data-test-id= 'submit-3']");
            POMCssSelector.Add("Submit Name", "[data-text-id= 'submit-4']");
            return POMCssSelector;
        }

        public void ClickRenderChallengeButton()
        {
            try
            {
                var clickRenderChallenge = GetObjectXPath(pageObjectModelXPath["Render Challenge Button"]);
                clickRenderChallenge.Click();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public int[] SplitRow1DataIntoArrayInt()
        {
            var row1Data = GetObjectXPath(pageObjectModelXPath["First Row"]).Text;
            string[] row1Split = row1Data.Split(' ');
            int[] row1SplitValues = Array.ConvertAll(row1Split, int.Parse);
            return row1SplitValues;
        }

        public int[] SplitRow2DataIntoArrayInt()
        {
            var row2Data = GetObjectXPath(pageObjectModelXPath["Second Row"]).Text;
            string[] row1Split = row2Data.Split(' ');
            int[] row2SplitValues = Array.ConvertAll(row1Split, int.Parse);
            return row2SplitValues;
        }

        public int[] SplitRow3DataIntoArrayInt()
        {
            var row3Data = GetObjectXPath(pageObjectModelXPath["Third Row"]).Text;
            string[] row1Split = row3Data.Split(' ');
            int[] row3SplitValues = Array.ConvertAll(row1Split, int.Parse);
            return row3SplitValues;
        }

        public void SubmitAnswer1(int? answerOne)
        {
            var submitFirstAnswer = GetObjectCssSelector(pageObjectModelCssSelector["First Row Answer"]);
            submitFirstAnswer.SendKeys(answerOne.ToString());
        }

        public void SubmitAnswer2(int? answerTwo)
        {
            var submitFirstAnswer = GetObjectCssSelector(pageObjectModelCssSelector["Second Row Answer"]);
            submitFirstAnswer.SendKeys(answerTwo.ToString());
        }

        public void SubmitAnswer3(int? answerThree)
        {
            var submitFirstAnswer = GetObjectCssSelector(pageObjectModelCssSelector["Third Row Answer"]);
            submitFirstAnswer.SendKeys(answerThree.ToString());
        }

        public void SubmitName(string name)
        {
            var submitName = GetObjectCssSelector(pageObjectModelCssSelector["Submit Name"]);
            submitName.SendKeys(name);
        }

        public void SubmitAnswers()
        {
            var submitAnswers = GetObjectCssSelector(pageObjectModelCssSelector["Submit Answers"]);
            submitAnswers.Click();
        }

                private IWebElement GetObjectXPath(string pageObjectXPath)
        {
            var xPath = pageObjectModelXPath[pageObjectXPath];
            try
            {
            var returnedObject = _webDriver.FindElement(By.XPath(xPath));
                return returnedObject;
            }
            catch (NoSuchElementException e)
            {
                Console.WriteLine(e);
                Console.WriteLine("Check XPath. Object does not exsist or is not visable on page");
                throw;
            }
        }

        private IWebElement GetObjectCssSelector(string pageObjectCssSelector)
        {
            var cssSelector = pageObjectModelXPath[pageObjectCssSelector];
            try
            {
                var returnedObject = _webDriver.FindElement(By.XPath(cssSelector));
                return returnedObject;
            }
            catch (NoSuchElementException e)
            {
                Console.WriteLine(e);
                Console.WriteLine("Check CSS Selector. Object does not exsist or is not visable on page");
                throw;
            }
        }
    }
}



