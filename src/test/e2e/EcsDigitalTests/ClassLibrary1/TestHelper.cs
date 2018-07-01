namespace EcsDigitalTests
{
    public class TestHelper
    {
           public static int? FindArrayCenter(int[] arr, int n)
            {
                int i, j;
                int leftsum, rightsum;

                /* Check for indexes one by 
                 one until an equilibrium
                index is found */
                for (i = 0; i < n; ++i)
                {

                    // initialize left sum
                    // for current index i
                    leftsum = 0;

                    // initialize right sum
                    // for current index i
                    rightsum = 0;

                    //get left sum
                    for (j = 0; j < i; j++)
                        leftsum += arr[j];

                    //get right sum
                    for (j = i + 1; j < n; j++)
                        rightsum += arr[j];

                    if (leftsum == rightsum)
                        return i;
                }
                return null;
            }
    }
}