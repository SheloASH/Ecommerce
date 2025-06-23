Feature: User Login

    Scenario: Successful login
        Given I am on the Demoblaze homepage
        When I login with username "test" and password "test"
        Then I should see "Welcome test"
        When I click the logout button
        Then I should not see the welcome message
        When I login with username "akka" and password "1234567"
        Then I should see a login error alert