# Tickmill Interview Exercise (React)

## Exercise

### Prototype of the following:
REACT application to show the list of users within a Table. The application should be able to:
- List of users
- Use pagination (that means select page number, page size)
- Sort users
- Filter orders (by FirstName, lastName or Email) - please maintain an inputbox at the top of page above the grid where user can provide the filter input

Please use the following endpoint as a source for binding the data of users:

GET - `"http://localhost:3001/users/"`

You can experiment with the variables set at the url to see the data returned back from the public endpoint.

### Example Response

GET - `"http://localhost:3001/users?take=10&orderBy=email&order=ASC&page=1&q=A"`

```code
{
    "data": [
        {
            "id": "4a69e2ee-7869-43ec-b796-6169b7f79db7",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Anabella",
            "lastName": "French",
            "role": "ADMIN",
            "email": "anabell@gmail.com",
            "avatar": null,
            "phone": "230044500"
        },
        {
            "id": "9b774e29-cf18-43cc-869e-6df97232c26a",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Graham",
            "lastName": "Arias",
            "role": "USER",
            "email": "ariasg9@gmail.com",
            "avatar": null,
            "phone": "1123041"
        },
        {
            "id": "c56fe96d-173d-4ba5-b2d0-2ef94373a26f",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Bruce",
            "lastName": "Durham",
            "role": "USER",
            "email": "bruce@gmail.com",
            "avatar": null,
            "phone": "6542200440"
        },
        {
            "id": "598ffa41-c5ab-45da-827a-e780c53cb3b1",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Clarence",
            "lastName": "Henry",
            "role": "USER",
            "email": "clarence_h19@gmail.com",
            "avatar": null,
            "phone": "900554012"
        },
        {
            "id": "71ea66f6-d294-4e8a-9b84-4f2d0351df93",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Marques",
            "lastName": "Mcpherson",
            "role": "USER",
            "email": "cpheron@gmail.com",
            "avatar": null,
            "phone": "98890044"
        },
        {
            "id": "d475d6be-508a-44c8-94b0-75199c20bd98",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Melissa",
            "lastName": "Dickson",
            "role": "USER",
            "email": "dickson_melissa@gmail.com",
            "avatar": null,
            "phone": "122444142"
        },
        {
            "id": "32fea6b7-ab5b-4ae4-abfd-415f5f5101b9",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Dawson",
            "lastName": "Shields",
            "role": "USER",
            "email": "ds@gmail.com",
            "avatar": null,
            "phone": "81209534"
        },
        {
            "id": "866f1407-ba5c-400c-8a07-af215a46014a",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "German",
            "lastName": "Crawford",
            "role": "USER",
            "email": "germanc@gmail.com",
            "avatar": null,
            "phone": "560041234"
        },
        {
            "id": "4b3d83c4-8c8c-4b45-b1fa-546d1b93d128",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Katie",
            "lastName": "Griffin",
            "role": "USER",
            "email": "griffin@gmail.com",
            "avatar": null,
            "phone": "48500400300"
        },
        {
            "id": "4138f31e-dbd7-4761-ac56-1544a19b1750",
            "createdAt": "2021-06-29T09:26:24.068Z",
            "updatedAt": "2021-06-29T09:26:24.068Z",
            "firstName": "Judah",
            "lastName": "Dodson",
            "role": "USER",
            "email": "judah_dodson@gmail.com",
            "avatar": null,
            "phone": "500400300"
        }
    ],
    "meta": {
        "page": 1,
        "take": 10,
        "itemCount": 20,
        "pageCount": 2
    }
}
```

**Note: Requirement is to use TypeScript**

You should include the following views:
1. List of users within the Table

Please open wireframe in file **example_table.pdf** located in this repository to get an understanding of what we're expecting. Having said that, the UX/UI is totally up to you. If you like, get creative and add additional features a user might find useful!

Please organize, design, document and deploy your code as if it were going into production, then send us a link to the hosted repository (e.g. Github, Bitbucket...).

### WHAT WE REVIEW:
The aspects of your code we will assess include:
* **Architecture**: how clean is the way of writing React.
* **TypeScript**: how your code is written in TypeScript.
* **Clarity**: does the README clearly and concisely explains the problem and solution? Are technical tradeoffs explained?
* **Correctness**: does the application do what was asked? If there is anything missing, does the README explain why it is missing?
* **Code quality**: is the code simple, easy to understand, and maintainable? Are there any code smells or other red flags? Is the coding style consistent with the language's guidelines? Is it consistent throughout the codebase?
* **UX**: is the web interface understandable and pleasing to use?
* **Technical choices**: do choices of libraries, architecture etc. seem appropriate for the chosen application?

When you are done, you can upload the code in this repository.

**Please notice the task should not take longer than 4 hours.**

## Notes
- This repository is the client side implementation of the exercise. The server is available [here](https://github.com/subzero10/tickmill-exercise-server).
- This template was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- I wanted to write tests and integrate with CI but I went over the 4 hours limit.
- The app is hosted on heroku and uses a [create-react-app](https://github.com/mars/create-react-app-buildpack) buildpack.

## Architecture
- I used a hybrid of component based architecture (the idea behind React) together with Domain Driven Design.
- The only `domain` at the moment is the Users listing page.
- I created components that can be shared between domains in the `components` folder.
- The client app is an SPA that serves the purpose of fetching the index page and the static resources (js, css, images, etc.). 

## Start the app
- Make sure the backend server is started.
- Create a copy of `.env.example` and name it `.env.local`. Set variable `REACT_APP_API_URL` to point to the backend api, for example: `http://localhost:3001`
- `npm i`
- `npm start`

## Deploy on heroku
- Create a new app on heroku.
- In Deploy tab, connect github repository.
- Choose branch and click on Deploy or enable automatic deployment.
- That's it! The `create-react-app` buildpack will take it from there.
