import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { AchivementCounterComponent } from './achivement-counter/achivement-counter.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CertificateSpaceComponent } from './certificate-space/certificate-space.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { GoodByeComponent } from './good-bye/good-bye.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    ProfileComponent,
    WelcomeComponent,
    SkillSetComponent,
    AchivementCounterComponent,
    ProjectDetailsComponent,
    CertificateSpaceComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    GoodByeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap: [
    DashBoardComponent
  ]
})
export class HomeModule { }
