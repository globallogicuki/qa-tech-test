using EcsDigitalTests.POM;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Chrome;
using System.Threading;

namespace EcsDigitalTests
{
    [TestClass]
    public class CompleteEcsChallenge : TestHelperMethods
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
            Assert.IsTrue(challengePage.ArraysChallengeIsPresent().Contains("Arrays Challenge"));


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

            Thread.Sleep(1000);
            Assert.IsTrue(challengePage.CongratulationsAlert().Contains("Congratulations you have succeeded. Please submit your challenge"));

        }
    }
}





                
                



