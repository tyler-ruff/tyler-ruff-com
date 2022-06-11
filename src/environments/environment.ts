// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tyler-ruff',
    appId: '1:830267094074:web:fe28200f4765d7e1bb7103',
    storageBucket: 'tyler-ruff.appspot.com',
    locationId: 'us-east1',
    apiKey: 'AIzaSyBa-Ir0MCfG0UHCkY7hHCsqr0-fQ7BJSqM',
    authDomain: 'tyler-ruff.firebaseapp.com',
    messagingSenderId: '830267094074',
  },
  sanity: {
    projectId: 'dd7rhsob',
    dataset: 'production',
    useCdn: true,
  },
  web: {
    url: 'http://localhost:4200/',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
