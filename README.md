# Tickmill Interview Exercise (React)

## Notes
- This repository is the client side implementation of the exercise. The server is available [here](https://github.com/subzero10/tickmill-exercise-server).
- This template was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- I wanted to write tests and integrate with CI but I went over the 4 hours limit. 

## Architecture
- I used a hybrid of component based architecture (the idea behind React) together with Domain Driven Design.
- The only `domain` at the moment is the Users listing page.
- I created components that can be shared between domains in the `components` folder.
- The client app is hosted on heroku as a SPA. It serves the purpose of fetching the index page and the static resources (js, css, images, etc.). 

## Start the app
- Make sure the backend server is started.
- Create a copy of `.env.example` and name it `.env.local`. Set variable `REACT_APP_API_URL` to point to the backend api, for example: `http://localhost:3001`
- `npm i`
- `npm start`
