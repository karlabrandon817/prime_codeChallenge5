#Code Challenge 5: Angular and MongoDB, Hero Tracker

#Instructions
This assessment is intended to see how you are progressing with Angular and Mongo. It is open-notes and open-book. No talking is allowed for the duration.

A friendly reminder that this is simply a way for us to see how you are individually doing with the technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit. This assessment is not an indicator of how you will perform post-Prime or a measure of overall success thus far. It just gives us an idea of where you are at.

Just relax and show us what you know!

##Your Hero Tracker
The Department of Superhero Knowledge needs an app to help track superhero aliases and powers. You are going to build them this app with Angular and MongoDB. 

Some of the code has been started for you. Fork and clone this repo to get started. There pieces of both the client side and the server side that need completion. The following files will need your attention:

- On the server side you will need to complete the hero router in the `hero.js` file.
- One the client side you will need to complete the `script.js` file.
- `index.html` will need some ng directives to work with `script.js`.

##Hero Entry
This will have a form to fill out and create new heroes. Each hero will have the following information on their record:

* ```alias``` (this is their superhero name)
* ```first_name```
* ```last_name```
* ```city```
* ```power_name```

Store these in a Collection called ```heroes``` with Mongo.

##Hero Listing
This should show a list of heroes and their information. On page load, all heroes currently in the database should be displayed. When a new hero is added the view should refresh automatically.