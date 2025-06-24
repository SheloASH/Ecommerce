Feature: User Login

  Scenario: Successful login
    Given I am on the Demoblaze login page
    When I login using username "test" and password "test"
    Then I should see a login welcome message "Welcome test"

  Scenario: Successful logout
    Given I am logged in through the login form
    When I trigger the logout from login
    Then I should not see the welcome message on login

  Scenario: Wrong password login
    Given I am on the Demoblaze login page
    When I attempt login with invalid username "akka" and password "1234567"
    Then I should see a login error alert