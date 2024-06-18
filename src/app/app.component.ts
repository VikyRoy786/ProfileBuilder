import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalInfoComponent } from '../component/personal-info/personal-info.component';
import { ResumeComponent } from '../component/resume/resume.component';
import { SkillsComponent } from '../component/skills/skills.component';
import { ExperienceComponent } from '../component/experience/experience.component';
import { HeaderComponent } from '../component/header/header.component';
import { EducationComponent } from '../component/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PersonalInfoComponent, ResumeComponent,SkillsComponent,ExperienceComponent, HeaderComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
