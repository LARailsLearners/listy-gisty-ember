import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  session: Ember.inject.service('session'),

  model(){
    const github_key = this.get('session.secure.profile.identities')[0].access_token;

    const github = new Github ({
      token: github_key, 
      auth: 'oauth'
    });
    const user = github.getUser();
    return new Ember.RSVP.Promise((res, rej)=>{
      user.gists((err, gists) => res(gists))
    })
  }
});