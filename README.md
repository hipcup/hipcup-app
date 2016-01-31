Hipcup allows users to take orders for coffee runs through the web or Slack. 
Built with React and Redux.
=================================

**To run, follow these steps:**

Google API:
1. Register for a Google API Key 
2. Enable the Google Maps Geolocation API, Google Maps JavaScript API, and Google Places API Web Service APIs
3. Insert API key into server/keys/config.js 
4. The config.js file is included in .gitignore and will not be uploaded to Github


1. Install dependencies with `npm install` in this directory (make sure it creates a local node_modules)
2. Create a config.js file in server/keys/config.js with the api key for Google Places and Geolocation
3. Build with `webpack --watch`
4. Run `npm start` for nodemon to run the local server 
5. Navigate to localhost:3468 
