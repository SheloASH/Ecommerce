Feature: User Login

    Scenario: Successful login
        Given I am on the Demoblaze homepage
        When I login with username "test" and password "test"
        Then I should see "Welcome test"
    Scenario: Successful logout
        Given I am logged in Demoblaze homepage
        When I click the logout button    
        Then I should not see the welcome message
    Scenario: Wrong password login
        Given I am on the Demoblaze homepage
        When I enter wrong password with username "akka" and password "1234567"
        Then I should see a login error alert