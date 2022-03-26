# Spotify-clone

> A Vue.js project

Screencast:

![image](https://github.com/524119574/spotify-clone/blob/master/gif/featured.gif)
![image](https://github.com/524119574/spotify-clone/blob/master/gif/genres.gif)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
### TODO's

- [ ] Need to add recent search to the project, the official site do it simply by store them into the local storage and then retrieve them
- [ ] Need to add recent player to the project, it should also be done by local storage
- [ ] finish the track component, it is not hard to implement it visually, it's just the logic of it that traps me. I don't understand how dose the track component play button works  
[This Link seems helpful](https://vuejs.org/v2/guide/components.html#Custom-Events) using the event delegation sort of way. 

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
And I'd better pass an id to the component, so that when the the component emit the event with id, the parent can catch the child's id and play the curresponding music.


2017/8/28
Introduce Vuex to manage the player's `isPlaying` state. This is necessary because it is easier than passing the `prop` from parent to child or emit the event from child to parent. I will have three component under the `playlist/:playlistId` route that will need to be changed when the `isPlaying` state is change. There are the player control play button, the green button, the track that are currently being played.
