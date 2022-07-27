# Description

- Show IP address location on a single page web application with an attractive and user-friendly UI. 
- The main idea of project is to fetch and display the location of IP address based on user inputs in a user-friendly way.
- The application shows the location of user input IP address. The response json file contains multiple things like location , lat , lng , country ,city etc 

# Tools used

[NodeJS](https://nodejs.org/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
[ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces.
[mui icons](https://reactjs.org/](https://mui.com/material-ui/material-icons/) - Used to add icons in react

# How to install and run the project

- Install NodeJS from [here](https://nodejs.org/). It is a javascript runtime that allows running javascript outside of browser.
- Download or clone the project. Use command `git clone` to clone.
- cd into the project directoy and add a new file named **.env**
- Create your free account on [ipify API](https://www.ipify.org/) and grab your api key.
- Create your free account on [Mapbox](https://www.mapbox.com/) and grab your mapbox access token.
- Add this two lines to .env file.
  - REACT_APP_API_KEY=paste_your_api_key_here 
  - REACT_APP_ACCESS_TOKEN=paste_your_mapbox_access_token_here
- Run these two commands, `npm install`, then `npm start`.
  - `npm install` , this command will install the required dependencies from package.json
  - `npm start`, this command will start the development server on port no. 3000
- Visit localhost to view the application.

**Note - React will automatically open up the browser once the developement server is up and running.**

#How to use the project
- Simple usage, just enter the IP address that you want to view location and click on Forward arrow.
- After that Marker of Mapbox slowly slide to the location of IP address using Longitude amd Latitude.
- If the enter IP address or Domain is wrong then it gives alert dialog box.

# Screenshots

