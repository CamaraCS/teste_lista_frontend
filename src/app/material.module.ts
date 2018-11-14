import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcAppBarModule, MdcTextFieldModule, MdcIconModule } from '@angular-mdc/web';
import { MatButtonModule, MatSelectModule, MatIconModule, MatInputModule, MatToolbarModule, MatCardModule } from '@angular/material/';
import { FormsModule } from '@angular/forms';

@NgModule({
    exports: [
     BrowserAnimationsModule,
     MdcAppBarModule,
     MatInputModule,
     FormsModule,
     MatButtonModule,
     MatToolbarModule,
     MatCardModule,
     MdcIconModule,
     MatIconModule,
     MatSelectModule
    ]
  })
  export class AppMaterialModule { }