Feature: Ví dụ 1
  Ví dụ 1

  Scenario: 5 + 2 = 7
    Given cho 5
    When Khi cộng thêm 2
    Then kết quả bằng 8

  Scenario: click LEARN HTML on www.w3schools.com
    Given I am on the www.w3schools.com
    When I click on "LEARN HTML"
    Then I should see the page to learn html
