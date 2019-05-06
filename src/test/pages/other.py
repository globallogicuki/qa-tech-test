from selenium import webdriver
from selenium.webdriver.common.by import By


def calc_array(num_list):
    """ Calculates the index of a list where the sum of 
    ints on the left is equal to the sum of ints on the right
    """

    for x in range(len(num_list)):
        if sum(num_list[:x+1]) == sum(num_list[x+2:]):
            return sum(num_list[:x+1])
    return 'null'


def store_table_row_in_list(self, row_num, total_column):
    """ Creates a list from the selected row with against 
    selected columns
    """

    num_list = []
    x = 1

    while x <= total_column:

        column_value = self.driver.find_element(
            By.XPATH,
            f'//*[@id="challenge"]//table/tbody/tr[{row_num}]/td[{x}]'
        ).text

        num_list.append(int(column_value))
        x += 1

    return num_list
