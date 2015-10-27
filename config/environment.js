/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'listy-gisty-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

// config/environment.js
ENV['simple-auth'] = {
  authorizer: 'simple-auth-authorizer:jwt',
  authenticationRoute: 'index',
  routeAfterAuthentication: 'protected',
  routeIfAlreadyAuthenticated: 'protected'
}

ENV['auth0-ember-simple-auth'] = {
  clientID: "iCkM8cg8o1FodvTpiXENHc7FA2gDbENj",
  domain: "listygisty.auth0.com"
}

// config/environment.js

ENV['contentSecurityPolicy'] = {
    'font-src': "'self' data: https://*.auth0.com",
    'style-src': "'self' 'unsafe-inline'",
    'script-src': "'self' 'unsafe-eval' https://*.auth0.com",
    'img-src': '*.gravatar.com *.wp.com data:',
    'connect-src': "'self' http://localhost:* https://listygisty.auth0.com"
  };
  
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
