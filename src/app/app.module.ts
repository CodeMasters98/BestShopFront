import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing";

@NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
    providers:[],
    bootstrap: [AppComponent]
  })
  export class AppModule { }