using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace EcsDigitalTests
{
    /// <summary>
    /// Summary description for FindArrayCenterTests
    /// </summary>
    [TestClass]
    public class FindArrayCenterTests : TestHelper
    {

        [TestMethod]
        public void SplitArray1()
        {
            int[] intArray = { 23, 50, 63, 90, 10, 30, 155, 23, 18 };
            var method = FindArrayCenter(intArray, 9);
            Assert.AreEqual(4, method);
        }

        [TestMethod]
        public void SplitArray2()
        {
            int[] intArray = { 133, 60, 23, 92, 6, 7, 168, 16, 19 };
            var method = FindArrayCenter(intArray, 9);
            Assert.AreEqual(3, method);
        }

        [TestMethod]
        public void SplitArray3()
        {
            int[] intArray = { 30, 43, 29, 10, 50, 40, 99, 51, 12 };
            var method = FindArrayCenter(intArray, 9);
            Assert.AreEqual(5, method);
        }
    }
}
