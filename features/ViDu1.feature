Feature: Ví dụ 1
  Ví dụ 1

    Scenario: 5 + 2 = 7
      Given cho 5
      When Khi cộng thêm 2
      Then kết quả bằng 7

    Scenario: 9 + 10 = 17
      Given cho 9
      When Khi cộng thêm 8
      Then kết quả bằng 17

    Scenario Outline: cộng
      Given cho <so1>
      When Khi cộng thêm <so2>
      Then kết quả bằng <so3>

      Examples:
        | so1 | so2 | so3 |
        |  15 |  20 |  35 |
        |   8 |   7 |  15 |
