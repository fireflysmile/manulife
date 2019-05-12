import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BADPParticipantsComponent } from './pages/badpparticipants/badpparticipants.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'badp-participants', component: BADPParticipantsComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
