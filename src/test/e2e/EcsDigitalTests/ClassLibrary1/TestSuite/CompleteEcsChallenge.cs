using EcsDigitalTests.POM;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Chrome;

namespace EcsDigitalTests
{
    [TestClass]
    public class CompleteEcsChallenge : TestHelper
    {
        ChromeDriver _webDriver;

        [TestInitialize]
        public void SpinUp()
        {
            _webDriver = new ChromeDriver();
            _webDriver.Url = "localhost:3000";
        }

        [TestCleanup]
        public void TearDown()
        {
            _webDriver.Close();
            _webDriver.Quit();
        }

        [TestMethod]
        public void CompleteTheChallenge()
        {
            var challengePage = new ChallengePage(_webDriver);

            challengePage.ClickRenderChallengeButton();

            var firstRowArray = challengePage.SplitRow1DataIntoArrayInt();
            var secondRowArray = challengePage.SplitRow2DataIntoArrayInt();
            var thirdRowArray = challengePage.SplitRow3DataIntoArrayInt();

            var answer1 = FindArrayCenter(firstRowArray, firstRowArray.Length);
            var answer2 = FindArrayCenter(secondRowArray, secondRowArray.Length);
            var answer3 = FindArrayCenter(thirdRowArray, thirdRowArray.Length);

            challengePage.SubmitAnswer1(answer1);
            challengePage.SubmitAnswer2(answer2);
            challengePage.SubmitAnswer3(answer3);

            var name = "Ali Hill";
            challengePage.SubmitName(name);

            challengePage.SubmitAnswers();
        }
    }
}




                
                



