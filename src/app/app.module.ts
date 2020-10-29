import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgDragDropModule } from 'ng-drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilerComponent } from './builer/builer.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

import { ModalModule} from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    BuilerComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot(),
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
