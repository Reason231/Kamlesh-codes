## Things that we have learned in the 28th July as day 18 of React
- Hami lea login garyou rea hai aani tespachi feri url ma gayerea localhost/login garyo vane hami lea login form dekhnu hudaina. So we, are going to fix it.

## Steps
1. Fixing the login
- Go the login.auth.tsx and register.tsx and activate.page.tsx file
- Add this
 useEffect(()=>{
      if(auth.loggedINUser){
        toast.info("You are already logged iN")
        navigate("/"+auth.loggedInUser.role)

      }
    },[auth])


2. After that we manage the admin-side.component

3. After that we manage the admin-dashboard

4. We modify the notFound url in the router.config file along with not-found-page

5. Creating the banner page and defining the url in the router.config.tsx file under the admin section


Tips: Chartjs or reactchart is used to make the charts/bargraph