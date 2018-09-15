// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    apiKey: "AIzaSyDQ77n1tfzZUxiHbZK2-eFvL8SUORRSE4U",
    authDomain: "forkify-app-angular.firebaseapp.com",
    databaseURL: "https://forkify-app-angular.firebaseio.com",
    projectId: "forkify-app-angular",
    storageBucket: "forkify-app-angular.appspot.com",
    messagingSenderId: "653104702840"
  },
  // apiKeyFood2Fork: 'cb64d3daa1f96f63188e0232c1782d32',
  // 338bf97b907b599d0bf21a6827bdae2f  reserv
  apiKeyFood2Fork: '338bf97b907b599d0bf21a6827bdae2f',
  apiUrlFood2Fork: 'https://www.food2fork.com/api',
  proxy: 'https://cors.io/?'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
