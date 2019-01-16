import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-application';

	constructor() {
	    const config = {
		    apiKey: "AIzaSyD1c0DtM529X9dmexK3z6siCoAdgyTRN_s",
		    authDomain: "blog-application-3bb55.firebaseapp.com",
		    databaseURL: "https://blog-application-3bb55.firebaseio.com",
		    projectId: "blog-application-3bb55",
		    storageBucket: "blog-application-3bb55.appspot.com",
		    messagingSenderId: "26597033637"
	    };
	    firebase.initializeApp(config);
    }
}
