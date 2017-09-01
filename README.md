This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instructions
Run these commands to install and run the project:
```
npm install
npm start
```


## Main Focus
__OMDB__'s API bridge is under `src/providers/omdb` at `index.js`
I've write it that way instead of a direct usage via redux actions in order to enable easy modularity in case of changing the provider

I wrote a simple caching library called __CacheControl__, located at `src/common/CacheControl` to cache any relevant http responses

Added some __ManagedInput__ base class (extends React component class) to easily manage validations of the search form's inputs


## Apologize in Advance
Didn't went into transition effects, animations, etc. Also probably the CSS could be cleaner, and the Movie/Series info page was not componentized to a more atomic structure, nor even a better OOP design
I've put the main focus and effort on the business logic and data flows architecture.
The site is not quite compatible with mobile - it will work and all will be visible (more or less) but it's not really adjusted to different media queries
