Feature: The UX Library posts list

  As a normal user
  I want to access the posts list
  So then order and filter items to a better visualization

  Scenario: Visiting the posts list page
    Given I am on the posts list page
    When The page finishes loading
    Then I should see the posts list

  Scenario Outline: Ordering posts by popularity
    Given I am on the posts list page
    When I click on the order by menu
    And I select 'Popularidade'
    Then The posts should be ordered by popularity

  Scenario: Filtering posts by text
    Given I am on the posts list page
    When I type 'hat' into the filter by text field
    Then The posts should be filtered by 'hat'