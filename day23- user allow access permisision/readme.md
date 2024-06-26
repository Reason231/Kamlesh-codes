## Things that we learned in 26th June 


1. Completing the yesterday Checkuserlogin code
- First ma hami le auth.router ma new function thape => router.get("/me",checklogin,authController.getLoggedInUser)
- Second ma hami lea auth.controller ma new function banayera codes lekhchau jasle garda hami lea http://localhost:8000/auth/me garda hami lea response paunchau.
- Third ma see the video of complete-postman.

2. The easy use of postman
- See the video of postman environment
- See the video of

3. RBAC means Role Based Access Control
    Jasma user lai kun chai route access garna dini ra kun chai nai. Means admin lai matra user login checked ko matrai kholna dini
- First step ma rbac file create garchau middleware ma
- Second step ma rbac ko allowUser lai auth.router ma mount garchau =>
 router.get("/me",checklogin , allowUser('admin'),authController.getLoggedInUser)
- Third step ma rbac ma codes lekhcau for the permission access
- Fourth ma see the video of allow user to acces to understand it.
