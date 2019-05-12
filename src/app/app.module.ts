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
import { BadpSedpComponent } from './components/badp-sedp/badp-sedp.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { StatisticProgramTableComponent } from './components/statistic-program-table/statistic-program-table.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { AboutDashboardComponent } from './components/about-dashboard/about-dashboard.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
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
    BadpSedpComponent,
    PrimaryButtonComponent,
    StatisticProgramTableComponent,
    BackButtonComponent,
    AboutDashboardComponent,
    SecondaryButtonComponent,
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
