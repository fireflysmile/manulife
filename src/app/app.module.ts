import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { TestPipe } from './pipes/test.pipe';
import { ModalComponent } from './components/modal/modal.component';


import bootstrap from 'bootstrap';
import { BADPParticipantsComponent } from './pages/badpparticipants/badpparticipants.component';
import { ParticipantDetailComponent } from './pages/badpparticipants/participant-detail/participant-detail.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AddParticipantComponent } from './pages/badpparticipants/add-participant/add-participant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TestPipe,
    BADPParticipantsComponent,
    ParticipantDetailComponent,
    DropdownComponent,
    ModalComponent,
    AddParticipantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
