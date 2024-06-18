import { Component } from '@angular/core';
import { ResumeService } from '../../app/services/resume.service';
import { PersonalInfo } from '../../app/model/resume.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  personalInfo: PersonalInfo = { name: '', email: '', phone: '', address: '' };

  constructor(private resumeService: ResumeService) {}

  updatePersonalInfo() {
    this.resumeService.updateResume({
      personalInfo: this.personalInfo,
      experience: [],
      education: [],
      skills: { skills: [] }
    });
  }
}
