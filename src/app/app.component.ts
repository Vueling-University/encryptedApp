import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EncryptedApp';

  plainText:string = "";
  encPassword: string = "";
  conversionEncryptOutput: string = "";

  constructor() {
  }
  convertText(conversion:string) {
    this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();
  }
}
