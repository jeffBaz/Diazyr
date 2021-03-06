// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  i18n: 'assets/i18n/',
  backend: 'https://pollitics2020.herokuapp.com/api/',
  applications: {
    CONFIGURATION: 'DIAZYR_administrable_CONSEILS',
    akoyawa: {
      firebase: {
        apiKey: 'AIzaSyB8efztwXl-AKhdQKqfdpbqSwmNtrpnulo',
        authDomain: 'akoyawa-a05c3.firebaseapp.com',
        databaseURL: 'https://akoyawa-a05c3.firebaseio.com',
        projectId: 'akoyawa-a05c3',
        storageBucket: 'akoyawa-a05c3.appspot.com',
        messagingSenderId: '380558604887'
      }
    },
    story: {
      firebase: {
        apiKey: 'AIzaSyDbtwA3oZAd6Jdrv61j087eEyZEYCGR3rU',
        authDomain: 'story-f4bb4.firebaseapp.com',
        databaseURL: 'https://story-f4bb4.firebaseio.com',
        projectId: 'story-f4bb4',
        storageBucket: 'story-f4bb4.appspot.com',
        messagingSenderId: '733410972143'
      }
    }
  }
};
