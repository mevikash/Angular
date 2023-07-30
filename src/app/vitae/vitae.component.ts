import { Component } from '@angular/core';

@Component({
  selector: 'app-vitae',
  templateUrl: './vitae.component.html',
  styleUrls: ['./vitae.component.css']
})
export class VitaeComponent  {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
