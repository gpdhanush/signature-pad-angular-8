import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SignaturePad, {static: true}) signaturePad: SignaturePad;
  signaturePadOptions: Object = {
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };
 
  constructor() {}
 
  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5);
    this.signaturePad.clear();
  }
  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }
  drawStart() {
    console.log('begin drawing');
  }
}
