Feature: User Register

  Scenario: Successful Register
    Given I am on the Demoblaze register page
    When I register with username "akaki" and password "akaki123"
    Then I should see a register welcome message "Sign up successful."

  Scenario: User already exist
    Given I am on the Demoblaze register page
    When I attempt to register existing username "akaki" and password "akaki123"
    Then I should see a register error alert