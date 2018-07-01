namespace EcsDigitalTests
{
    public class TestHelperMethods
    {
        public static int? FindArrayCenter(int[] arr, int n)
        {
            int i, j;
            int leftsum, rightsum;

            for (i = 0; i < n; ++i)
            {

                leftsum = 0;

                rightsum = 0;

                for (j = 0; j < i; j++)
                    leftsum += arr[j];

                for (j = i + 1; j < n; j++)
                    rightsum += arr[j];

                if (leftsum == rightsum)
                    return i;
            }
            return null;
        }
    }
}