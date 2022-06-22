Feature: view deceased information

  Given I visit page X
  Then placeholder text appears
  And the placeholder text is replaced by the content provided by the json service 

Scenario: view the add deceased information page
  Given the user is on the "new" "deceased" page
  Then the user should see "Add Deceased Information"
  And the user should see some fields marked with "*"