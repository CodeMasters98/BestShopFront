import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing";
import { ToastrModule } from "ngx-toastr";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from "./views/shared/header/header.component";

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
    ],
    declarations: [
      AppComponent,
      HeaderComponent
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
    providers:[],
    bootstrap: [AppComponent]
  })
  export class AppModule { }