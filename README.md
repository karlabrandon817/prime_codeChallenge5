#Code Challenge 5: Angular and MongoDB, Hero Tracker

Technologies Used
-----------------
* Angular
* Mongo
* HTML
* Node
* Express

#Instructions
This assessment is intended to see how you are progressing with Angular and Mongo.


##Your Hero Tracker
The Department of Superhero Knowledge needs an app to help track superhero aliases and powers. You are going to build them this app with Angular and MongoDB.

Some of the code has been started for you. Fork and clone this repo to get started. There pieces of both the client side and the server side that need completion. The following files will need your attention:

[x] On the server side you will need to complete the hero router in the `hero.js` file.
[x] One the client side you will need to complete the `script.js` file.
[x] `index.html` will need some ng directives to work with `script.js`.

##Hero Entry
This will have a form to fill out and create new heroes. Each hero will have the following information on their record:

* ```alias``` (this is their superhero name)
* ```first_name```
* ```last_name```
* ```city```
* ```power_name```

[x] Store these in a Collection called ```heroes``` with Mongo.

##Hero Listing
This should show a list of heroes and their information.
[x] On page load, all heroes currently in the database should be displayed.
[x] When a new hero is added the view should refresh automatically.
