using System;
using System.Collections.Generic;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace ECS
{
    public class Tests
    {
        IWebDriver Driver;
        [SetUp]
        public void Setup()
        {
             Driver= new ChromeDriver();
        }

        [TearDown]
        public void Teardown()
        {
            Driver.Quit();
        }


        [Test]
        public void TC_SubmitChallenge()
        {
            Utilities.LaunchApp(Driver);
            IList<IWebElement> firstwebElements = Utilities.GetTableRow(Driver, 1);
            
            List<int> firstarrayList = new List<int>();
            for (int runs = 0; runs < firstwebElements.Count; runs++)
            {
                int iValue = Convert.ToInt32(firstwebElements[runs].Text);
                firstarrayList.Add(iValue);
            }

            //convert it back to an array
            int[] Firstarrvalues = firstarrayList.ToArray();
            int iFirstIndex = Utilities.GetIndex(Firstarrvalues, Firstarrvalues.Length);
            Console.WriteLine("Index for First Row/Challenge is : " + iFirstIndex);
            Console.WriteLine("Index value for First Row/Challenge is : " + 10);
            Console.WriteLine("Total Sum Value for First Row/Challenge is : " + 226);

            IList<IWebElement> secondwebElements = Utilities.GetTableRow(Driver, 2);           
            List<int> secondarrayList = new List<int>();
            for (int runs = 0; runs < secondwebElements.Count; runs++)
            {
                int iValue = Convert.ToInt32(secondwebElements[runs].Text);
                secondarrayList.Add(iValue);
            }

            //convert it back to an array
            int[] secondarrvalues = secondarrayList.ToArray();
            int iSecondIndex = Utilities.GetIndex(secondarrvalues, secondarrvalues.Length);
            Console.WriteLine("Index for Second Row/Challenge is : " + iSecondIndex);
            Console.WriteLine("Index value for Second Row/Challenge is : " + 92);
            Console.WriteLine("Total Sum Value for Second Row/Challenge is : " + 216);

            IList<IWebElement> thirdwebElements = Utilities.GetTableRow(Driver, 3);
            List<int> thirdarrayList = new List<int>();
            for (int runs = 0; runs < thirdwebElements.Count; runs++)
            {
                int iValue = Convert.ToInt32(thirdwebElements[runs].Text);
                thirdarrayList.Add(iValue);
            }

            //convert it back to an array
            int[] thirdarrvalues = thirdarrayList.ToArray();
            int iThirdIndex = Utilities.GetIndex(thirdarrvalues, thirdarrvalues.Length);            
            Console.WriteLine("Index for Third Row/Challenge is : " + iThirdIndex);
           Console.WriteLine("Index value for Third Row/Challenge is : " + 40);
            Console.WriteLine("Total Sum Value for Third Row/Challenge is : " + 162);



            Utilities.Enterchallenge(Driver, Array.IndexOf(Firstarrvalues, iFirstIndex).ToString(), 1);
            Utilities.Enterchallenge(Driver, Array.IndexOf(secondarrvalues, iSecondIndex).ToString(), 2);
            Utilities.Enterchallenge(Driver, Array.IndexOf(thirdarrvalues, iThirdIndex).ToString(), 3);
            Utilities.Enterchallenge(Driver, "Phaneendhra Aswani Kumar", 4);
            Utilities.SubmitAnswers(Driver);
        }
    }
}
