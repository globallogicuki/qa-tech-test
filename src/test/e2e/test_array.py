import time
import unittest

from selenium import webdriver
from selenium.webdriver.common.by import By

from src.test.pages import other as others


class TestECS(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get("localhost:3000")
        time.sleep(2)


    def test_array_ecs(self):
        my_name = 'Mark Beaman'
        # Clicks on Challenge button
        render_button = self.driver.find_element(
            By.XPATH, '//button[@data-test-id="render-challenge"]'
        )
        render_button.click()
        
        row = 1
        while row <= 3:
            # Goes through each table row and stores into a list
            num_list = others.store_table_row_in_list(self, row_num=row, total_column=9)
            # Calculates the sum value from list
            sum = others.calc_array(num_list)

            print(f'{num_list} with Sum: {sum}')
            # Adds value into correct submit textfield
            self.driver.find_element(
                By.XPATH, f'//input[@data-test-id="submit-{row}"]'
            ).send_keys(sum)

            row += 1
        # Adds 'my_name' into Your Name textfeild
        self.driver.find_element(
            By.XPATH, '//input[@data-test-id="submit-4"]'
        ).send_keys(my_name)    
        # Submits results
        submit_button = self.driver.find_element(
            By.XPATH, '//button[@data-test-id="submit"]'
        )
        submit_button.click()


    def tearDown(self):
        self.driver.quit()


if __name__ == '__main__':  
    unittest.main()      
