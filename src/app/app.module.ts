import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './demo-async/in-memory-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MentionModule } from '../mention/mention.module';
import { DemoAsyncComponent } from './demo-async/demo-async.component';
import { DemoOptionsComponent } from './demo-options/demo-options.component';
import { DemoTemplateComponent } from './demo-template/demo-template.component';
import { DemoTinymceComponent } from './demo-tinymce/demo-tinymce.component';
import { UiMaterialComponents } from './ui-material-components';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    MentionModule,
    BrowserAnimationsModule,
     UiMaterialComponents
  ],
  declarations: [
    AppComponent,
    DemoAsyncComponent,
    DemoOptionsComponent,
    DemoTemplateComponent,
    DemoTinymceComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
