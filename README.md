Test Data (registration):	First Name: Test_Firs_Name
				Last Name: Test_Last_Name
				Username: Test_Username
				Password: Qwerty123!
				Confirm Password: Qwerty123!

Test Data (Create Bank Account #1):	Bank Name: Test_Bank_Name
					Routing Number: 123456789
					Account Number: 123456789

Test Data (Create Bank Account #2):	Bank Name: Test_Bank2
					Routing Number: 987654321
					Account Number: 987654321

Test Data (New transaction):	Amount: 1000
Add a note: Test_Note

Test Data (User Settings):	Email: test@mail.com
				Phone Number: 123456


1. User can't register if the "First Name" field is empty. Error message: First Name is required
	1. Go to http://localhost:3000/
	2. Click on "Don't have an account? Sign Up" string
	3. Fill in all fields of the registration form except "First Name"
	4. [Sign Up] button is not active

2. User can't register if the "Last Name" field is empty. Error message: Last Name is required
	1. Go to http://localhost:3000/
	2. Click on "Don't have an account? Sign Up" string
	3. Fill in all fields of the registration form except "Last Name"
	4. [Sign Up] button is not active

3. User can't register if the "Username" field is empty. Error message: Username is required
	1. Go to http://localhost:3000/
	2. Click on "Don't have an account? Sign Up" string
	3. Fill in all fields of the registration form except "Username"
	4. [Sign Up] button is not active
	
4. User can't register if the "Password" field is empty. Error message: Password Is required
	1. Go to http://localhost:3000/
	2. Click on "Don't have an account? Sign Up" string
	3. Fill in all fields of the registration form except "Password"
	4. [Sign Up] button is not active

5. User can't register if the "Confirm Password" field is empty. Error message: Confirm Password Is required
	1. Go to http://localhost:3000/
	2. Click on "Don't have an account? Sign Up" string
	3. Fill in all fields of the registration form except "Confirm Password"
	4. [Sign Up] button is not active

6. User can register when all fields in the registration form are filled
	1. Go to http://localhost:3000/
	2. Click on "Don't have an account? Sign Up" string
	3. Fill in all fields of the registration form
	4. Click on [Sign Up] button

7. User can't login if the "Username" field is empty. Error message: Username is required
	1. Go to http://localhost:3000/
	2. Fill in all fields of the login form except "Username"
	3. [Sign In] button is not active

8. User can't login if the "Password" field is empty
	1. Go to http://localhost:3000/
	2. Fill in all fields of the login form except "Password"
	3. [Sign In] button is not active

9. User can login when all fields in the login form are filled
	1. Go to http://localhost:3000/
	2. Fill in all fields of the login form
	3. Click on [Sign In] button

10. User can't register "Bank Account" when the "Bank Name" field is empty. Error message: Enter a bank name
	(User logged in for the first time)
	1. Go to http://localhost:3000/
	(Opens "Get Started with Real World App" window)
	2. Click on "Next" string
	3. Fill in all fields of the "Create Bank Account" form except "Bank Name"
	4. [Save] button is not active

11. User can't register "Bank Account" when the "Routing Number" field is empty. Error message: Enter a valid bank routing number
	(User logged in for the first time)
	1. Go to http://localhost:3000/
	(Opens "Get Started with Real World App" window)
	2. Click on "Next" string
	3. Fill in all fields of the "Create Bank Account" form except "Routing Number"
	4. [Save] button is not active

12. User can't register "Bank Account" when the "Account Number" field is empty. Error message: Enter a valid bank account number
	(User logged in for the first time)
	1. Go to http://localhost:3000/
	(Opens "Get Started with Real World App" window)
	2. Click on "Next" string
	3. Fill in all fields of the "Create Bank Account" form except "Account Number"
	4. [Save] button is not active

13. User can register "Bank Account" when all fields are filled
	(User logged in for the first time)
	1. Go to http://localhost:3000/
	(Opens "Get Started with Real World App" window)
	2. Click on "Next" string
	3. Fill in all fields of the "Create Bank Account" form
	4. Click on [Save] button
	(Opens "Finished" window)
	5. Click on [Done] button

14. User can't conduct a transaction when the "Amount" field is not filled. Error message: Please enter a valid amount
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [New] button
	3. Enter "Edgar Johns" into the search bar
	4. Click on "Edgar Johns"
	5. Fill in all fields of the transaction form except "Amount"
	6. [Request] button and [Pay] button are not active

15. User can't conduct a transaction when the "Add a note" field is not filled. Error message: Please enter a note
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [New] button
	3. Enter "Edgar Johns" into the search bar
	4. Click on "Edgar Johns"
	5. Fill in all fields of the transaction form except "Add a note"
	6. [Request] button and [Pay] button are not active

16. User can transfer money other user when all fields are filled
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [New] button
	3. Enter "Edgar Johns" into the search bar
	4. Click on "Edgar Johns"
	5. Fill in all fields of the new transaction form
	6. Click on [Pay] button

17. User can request money other user when all fields are filled
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [New] button
	3. Enter "Edgar Johns" into the search bar
	4. Click on "Edgar Johns"
	5. Fill in all fields of the new transaction form
	6. Click on [Request] button

18. User can't save data on the "User Settings" page when the "First Name" field is not filled. Error message: Enter a first name
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [My Account] button
	(Opens "User Settings" page)
	3. Fill in all fields of the ures settings form except "First Name"
	4. [Save] button is not active

19. User can't save data on the "User Settings" page when the "Last Name" field is not filled. Error message: Enter a last name
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [My Account] button
	(Opens "User Settings" page)
	3. Fill in all fields of the ures settings form except "Last Name"
	4. [Save] button is not active

20. User can't save data on the "User Settings" page when the "Email" field is not filled. Error message: Enter an email address
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [My Account] button
	(Opens "User Settings" page)
	3. Fill in all fields of the ures settings form except "Email"
	4. [Save] button is not active

21. User can't save data on the "User Settings" page when the "Phone Number" field is not filled. Error message: Enter a phone number
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [My Account] button
	(Opens "User Settings" page)
	3. Fill in all fields of the ures settings form except "Phone Number"
	4. [Save] button is not active

22. User can save the data on the "User Settings" page when all fields are filled
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [My Account] button
	(Opens "User Settings" page)
	3. Fill in all fields of the ures settings form
	4. Click on [Save] button

23. User can't add a new bank account when the "Bank Name" field is empty. Error message: Enter a bank name
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [Bank Accounts] button
	3. Click on [Create] button
	4. Fill in all fields of the "Create Bank Account" form except "Bank Name"
	5. [Save] button is not active

24. User can't add a new bank account when the "Routing Number" field is empty. Error message: Enter a valid bank routing number
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [Bank Accounts] button
	3. Click on [Create] button
	4. Fill in all fields of the "Create Bank Account" form except "Routing Number"
	5. [Save] button is not active

25. User can't add a new bank account when the "Account Number" field is empty. Error message: Enter a valid bank account number
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [Bank Accounts] button
	3. Click on [Create] button
	4. Fill in all fields of the "Create Bank Account" form except "Account Number"
	5. [Save] button is not active

26. User can add a new "Bank Account" when all fields are filled
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [Bank Accounts] button
	3. Click on [Create] button
	4. Fill in all fields of the "Create Bank Account" form
	5. Click on [Save] button

27. User can delete bank account
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [Bank Accounts] button
	3. Click on [Delete] button

28. User can like the transaction
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on the transaction
	3. Click on [Like] button

29. User can comment on the transaction
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on the transaction
	3. Write a comment in the "Write a comment..." field
	4. Click on [Enter] button on keyboard

30. User can logged out
	(User logged in)
	1. Go to http://localhost:3000/
	2. Click on [Logout] button

