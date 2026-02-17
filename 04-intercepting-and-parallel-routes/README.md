# Intercepted routees

-- used to show the overlapping pages without affecting the current page
you have to make to pages
fo example:
apps->dashboard->profile->page.js
and also inside the dashboard:
dashboard->(.)profile->page.js

# Paralle routes

-- used to show the differnt routes(pages) in a single page or layout
dashboard-main-->@feeds/@stats are the parallel routes
@feeds-->page.js
@stats-->page.js

# unmatchded routes

when the routes does not match in the parallel routes then it shows the default.js page
which is aknown as the fallback.
@tab1-->tab1/page.js
tab1-->page.js/default.js
