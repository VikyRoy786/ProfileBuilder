import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../app/services/resume.service';
import { Resume } from '../../app/model/resume.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit{

  resume: Resume | undefined;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.currentResume.subscribe(resume => this.resume = resume);
  }
}
