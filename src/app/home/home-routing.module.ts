import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  {path: '', component: DashBoardComponent, title: "DINESH SANKAR SELVI 🎓"},
  {path: '**', redirectTo: '', title: 'path not Found..!'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
