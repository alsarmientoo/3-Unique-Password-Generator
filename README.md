## Password Generator

* Once generator password is clicked

* Password Length prompt
    * A window will prompt asking the user the length of the new password which is only between 8 and 128
    * If it is less than or equal to 7 and greater than or equal to 129, a message will prompt asking the user to enter between 8 and 128 only.

* Numbers
    * A window will ask the user if they want to include numbers in their password, if true it will choose a number from the list and add it to the selectPassword variable.
    * If false, it will not be added to the password.

* Lowe Case letters
    * A window will ask the user if they want to include lower case characters in their password, if true it will choose a letter from the list and add it to the selectPassword variable.
    * If false, it will not be added to the password.

* Upper Case letter
    * A window will ask the user if they want to include lower case characters in their password, if true it will choose a letter from the list and add it to the selectPassword variable.
    * If false, it will not be added to the password.

* Special Characters
    * A window will ask the user if they want to include special characters in their password, if true it will choose a special from the list and add it to the selectPassword variable.
    * If false, it will not be added to the password.

* Then from the given password criteria it will then run a function to generate password with a length not greater than the length of the variable password length.

* also converted passwordLength to parseInt to make sure it is an integer not a string.
