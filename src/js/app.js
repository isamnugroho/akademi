import $ from 'dom7';
import Framework7, { getDevice } from 'framework7/bundle';

// Import F7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../jetpay/css/framework7.bundle.min.css';
import '../jetpay/css/font-awesome.min.css';
import '../jetpay/css/style.css';
import '../css/icons.css';
import '../css/app.less';

import '../lib/themes/offline-theme-chrome-indicator.css';
import '../lib/themes/offline-language-english-indicator.css';

import './script_offline.js';

// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

import util from './utilities.js';

// Import main app component
import App from '../app.f7';

var device = getDevice();
var app = new Framework7({
  name: 'AssindoTicket', // App name
  theme: 'auto', // Automatic theme detection


  el: '#app', // App root element
  component: App, // App main component
  // App store
  store: store,
  // App routes
  routes: routes,
  util: util,



  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova,
    scrollIntoViewCentered: device.cordova,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  view: {
      animate : false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);

        
        // Offline.options = {
        //   checkOnLoad: true,
        //   interceptRequests: true,
        //   reconnect: {
        //     // How many seconds should we wait before rechecking.
        //     initialDelay: 3,
        
        //     // How long should we wait between retries.
        //     delay: (1.5 * 5000)
        //   },
        //   requests: true,
        //   game: false,
        //   checks: {
        //     image: {
        //       url: util.getServer2() + 'favicon.ico?_=' + new Date().getTime()
        //     },
        //     active: 'image'
        //   }
        // }
        // Offline.check();
      }

      Offline.options = {
        checkOnLoad: false,
        interceptRequests: true,
        reconnect: {
          // How many seconds should we wait before rechecking.
          initialDelay: 3,
      
          // How long should we wait between retries.
          delay: (1.5 * 5000)
        },
        requests: true,
        game: false,
        checks: {
          image: {
            url: util.getServer2() + 'favicon.ico?_=' + new Date().getTime()
          },
          active: 'image'
        }
      }
      Offline.check();

      // // Offline.options = {checks: {image: {url: 'http://www.vitaminedz.com/photos/49/02-49565-front-de-mer-a-oran.jpg'}}};

    // Offline.options = {
        // checkOnLoad: true,
        // checks: {
            // image: {
                // url: util.getServer2() + 'favicon.ico?_=' + new Date().getTime()
            // },
            // active: 'image'
        // }
    // }
    // Offline.check();
    },
  },
});