# Ajaib Project
This Project is used as a test case for Ajaib Front End Test. The task is to create a web Application that render out a table of users that are fetched from https://randomuser.me/documentation.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Implemented Functionality
* Fetch data and rendered to a table
* Search by keywords
* Filter by Gender
* Sort by table header
* Pagination
* Reset filter

## Notes
* The pagination is only dummy, since the API doesn't support Page Size parameter, so what I do is passing fixed results parameter, then slice the data into 5 (this is the shown data per table)
* I'm using Vue.js because I'm more familiar with Vue.js
* I'm using Vuetify as a design library
* I'm using Vuex as the state management
* Unit test implemented using jest

## Collaborators
- Randi Chilyon Alfianto (https://www.linkedin.com/in/randichilyon/)

## Git
https://github.com/randichilyon/ajaib-project/tree/master

## Deployed application
https://randichilyon.github.io/ajaib-project/

## References
* https://randomuser.me/documentation
* https://vuetifyjs.com/en/
* https://learnvue.co/2020/09/how-to-deploy-your-vue-app-to-github-pages/#step-1-set-publicpath-in-vue-config-js-to-our-repository-name
