import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

declare type GoogleUser = gapi.auth2.GoogleUser;
const GAuth2 = namespace('gauth2');

@Component({
  name: 'GoogleLoginComponent',
  template: require('./gauth2.login.component.html')
})
export class GAuth2LoginComponent extends Vue {
  [x: string]: any;

  @Prop({ type: String, default: 'sm' })
  private size!: string;

  @GAuth2.Mutation
  private updateGoogleUser!: (googleUser: GoogleUser) => void;

  public signIn(): void {
    this.$gAuth.signIn(this.onSignInSuccess, this.onFailure);
  }

  public onSignInSuccess(googleUser: GoogleUser): void {
    this.updateGoogleUser(googleUser);
  }

  public onFailure(error: any): void {
    console.error(error);
  }
}

Vue.component('gauth2-login', GAuth2LoginComponent);
