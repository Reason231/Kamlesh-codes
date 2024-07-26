## Things that we have learned in the 26th July as day 17 of React
- RBAC in react


## Steps
1. RBAC Concept
- Yo chai k vaneko ho vane, user create garda jun role hami lea select garyou teai role ko panel ma matra access garna pauni.
- For eg-> yedi account seller ko role ma cha vane, usle from the url localhost/admin garera admin ko panel ma access garna napauni

2. Implementing the RBAC
- Go the auth.context.tsx file
- Write the getLoggedIn function
- Write the code in the return of the auth.context.tsx file
- After that go in the http.service.tsx file  in order to get the token
- Then we again write the code in the auth.context.tsx

3. Creating the permission-config.tsx file in the config folder
- Create the permission.config.tsx file.
- After that define the allowUser function.
- After that make these changes in the router.config.tsx file
  <!-- <Route path="/admin" element={<AllowUser allowUser="admin">  
          <AdminPageLayout />
        </AllowUser>}> -->
- Then go to the permission.config.tsx file and write the code


4. Making the permission for the seller panel
- Go the router.config.file
- Copy the code of admin and paste and make it for the seller.
- That's it if you login with seller role, then u can't access the login panel

5. Design the no-permission page
- Create no-permission.page.tsx file in the errrors folder.
- Copy the code of not-found-page file
- Paste it in the no-permission-page file.
- Import the file to the permission.config.tsx file

6. Icon 
fontawesome is the website that provide us the icon for our webpage.
heroicons is the website that provide us the icon for our webpage.