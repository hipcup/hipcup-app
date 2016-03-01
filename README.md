## Hipcup 
###Hipcup is a web application that allows users to create and place orders for coffee runs. 

### Features 
* Search for coffee stores nearby or by name and/or address
* Specify details of coffee run, including how many orders are accepted and time until run
* Robust notification system for when coffee run expires 
* Ability to notify users when coffee run is complete 

### Tech Stack
React 
Redux 
React-Router-Redux
SaSS 
Node 
Express
MongoDB
Mongoose 
Babel 
Webpack
Q
Google-Map-React 
Moment.js

### Apis 
* [Google Maps APIs](https://developers.google.com/maps/?hl=en/)
  * **Google Maps JavaScript API** - Provides Google Map functionality on search results view 
  * **Google Places API Web Service** - Finds coffee stores near user or by user-inputted address 
  * **Google Maps Distance Matrix API** - Calculates the distance between coffee shops and user 
  * **Google maps Geocoding** - Converts addresses to geographic coordinates 
  * **Google Maps Geolocation API** - Finds places by geocoordinates 

### Installation 

APIs:
* 1. Register for a Google API Key 
* 2. Enable the APIs listed above 
* 3. Insert API key into server/keys/config.js 
Note: the config.js file is included in .gitignore and will not be uploaded to Github

Database: 
* 1. Set up a local mongodb database following the instructions [here](https://docs.mongodb.org/manual/installation/)
* When application is initialized mongoose will automatically create a 'hipcup' table in your local mongodb database. To interact with the database on your local machine, run 'mongo' and 'use hipcup' commands in terminal to access the hipcup table. 

Application: 
* 1. Install dependencies with `npm install` in root directory (make sure it creates a local node_modules)
* 2. 'mongod' - run command in terminal to start local mongodb database 
* 3. `webpack --watch` - compiles ES6/React code to Javascript 
* 4. `npm start` - runs local server on port 3468
* 5. Navigate to localhost:3468 on browser 

### Client-Side 

#### File Structure 
```
client: 
  ├── index.html
  ├── index.js
  ├── assets
  │   ├── assorted images 
  ├── styles 
  │   ├── scss 
    │   ├── assorted scss files 
  ├── dist 
    │   ├── bundle.js
     │   ├── main.css 
     
  Redux Architecture:
  ├── actions 
  │   ├── coffeeOrderActions.js
  │   ├── coffeeResultsActions.js
  │   ├── coffeeRunActions.js
  │   ├── storeActions.js
  ├── reducers  
  │   ├── index.js
  │   ├── coffeeRun.js
  │   ├── coffeeOrder.js
  │   ├── coffeeResults.js  
  │   ├── stores.js
  ├── containers 
  │   ├── index.js  
  │   ├── app.js
  │   ├── landingBox.js
  │   ├── searchResults.js
  │   ├── coffeeRun.js
  │   ├── coffeeOrder.js
  │   ├── coffeeRunResults.js
  ├── components 
  │   ├── index.js  
  │   ├── appView   
      │   ├── header.js
      │   ├── howto.js
      │   ├── makeRunButton.js
      │   ├── footer.js
  │   ├── landingView
      │   ├── jumbotronSearch.js
  │   ├── searchResultsView
      │   ├── mapBox.js
      │   ├── map.js
      │   ├── mapMarker.js
      │   ├── userMarker.js
      │   ├── shopsList.js
      │   ├── shop.js
  │   ├── coffeeRunView
      │   ├── coffeeRunForm.js
      │   ├── coffeeRunInfo.js
      │   ├── coffeeRunUrlBox.js
      │   ├── makeCoffeeRun.js
      │   ├── selectCoffeeRunStoreBeforeRunError.js
      │   ├── countdownTimer.js
  │   ├── coffeeOrderView
      │   ├── coffeeOrderForm.js
  │   ├── coffeeOrderResultsView 
      │   ├── runResults.js
  │   ├── spinner.js 
  
```
### Server-Side 

#### File Structure 
```
  ├── server.js
  ├── config 
  │   ├── database.js 
  │   ├── databaseExample.js 
  ├── app 
  │   ├── models
       │   ├── coffeeOrder.js
       │   ├── coffeeRun.js 
  │   ├── controllers 
       │   ├── coffeeOrder.js
       │   ├── coffeeRun.js 
  │   ├── routes.js
  │   ├── helperFunctions.js 
  ├── server
    │   ├── keys
        │   ├── config.js 
        │   ├── configExample.js 
