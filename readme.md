# Things that we learned in 24th June 
- Note all the codes today we have done in the auth files and some were modified in the mail.serivce file
- Creating the timestap
- Checking the activation token if it is expired or not.
- Resending the activation token through mail if it is expired.
- If the activationToken isn't expired then the code will go on further process for the login.

## Steps
1. Creating the timestap
    - Hami lea auth.controller file ma paila suru activationToken create gareko time lai banaunchau.

2. Comparing the timestap between today's time and the activationToken created time
    - Hami lea tespachi chai second step ma auth.controller file ma today's time ra activationToken lai compare garchau jasbata we can know that ki if the acitvationToken is expired or not. We have made the activationToken active for 3hrs only.

3. Validating the user and activationToken and doing segreagation of concern
    - First ma hami lea token lai validate garni ra user lai pani valdiate garni.
    - Second ma auth.service file banauni ra teslai auth.controller ma mount garchau.
    - Third ma hami lea yo lekheko validate code. user.serivce ma paste garchau and user.controller ma link garchau.

4. Remaking the activationToken if it is expired
   - First ma hami lea reactivation vanni function banaunchau ra user.rotuer ma mount garchau.
   - hami lea paila chai yedi tyo activationToken expired cha vane teslai regenerate garcahu vanni code lekhchau.

5. Sending the new activationToken through mail
   - Hami lea activationToken banaye pachi teslai email ma send garchau but with the new subject.

6. Segregation of concern
   - Auth controller file ma activateUser vanni function ko validate gareko token ra user ko code lai user.service ko code sanga link garchau.

7. Stepping into next process if the token is not expired
   - Yedi token expired chaina vane kei garnu pardaina ra next process ma janchau tesko lagi thorai activate user ma code lekhe ko chau

