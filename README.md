# About 

This is an app for Brewdog brewery built using React with data taken from Punk API at: https://punkapi.com/. It is built as the fourth project of the software development course by _Nology and can be found at: https://gazalneb.github.io/beer-app-project/

# User Interface

Users see 80 beer types taken from punk API on the screen, with the image, name, description, abv, ph, and brewed-year information for each beer type. 

The search-box in the navigation bar can be used to dynamically search for any beer by its name. Clicking on the filters button on the top-right section takes the users to a list of filters, where one filter can be selected at a time to filter the beers displayed by specific conditions. 

The website design is responsive to screens of various widths.

# Code

Problems Encountered:

My initial plan was to display only the image, name, and part of the description for each beer on the main page, and set up a link for each beer-card to a new page that displays detailed information about it. However, the routing required for that didn't work on my react app. I therefore created another branch with the code for routing and I will try to get that working as soon as possible.

As of now, clicking on one filter checkbox, doesn't un-click other checkboxes. This is something I need to fix. 

Since each beer-card component is of the same height, it creates a problem with beer-descriptions of different lengths and gives a look of uneven spacing between cards. This will be fixed once I impliment routing to the website, as I can limit the content displayed on each card to the same length, and display the remaining content on the links to each card.
