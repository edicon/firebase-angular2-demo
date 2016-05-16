import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FlexchatAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(FlexchatAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://vivid-torch-3052.firebaseio.com/')
]);
