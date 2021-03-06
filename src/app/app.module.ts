import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';
import { AddNewContactComponent } from './components/add-new-contact/add-new-contact.component';
import { AddContactService } from './services/add-contact.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppHeaderComponent,
    AddEditContactComponent,
    AddNewContactComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AddContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
