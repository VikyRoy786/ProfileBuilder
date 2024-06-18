import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resume } from '../model/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumeSource = new BehaviorSubject<Resume>({
    personalInfo: { name: '', email: '', phone: '', address: '' },
    experience: [],
    education: [],
    skills: { skills: [] }
  });

  currentResume = this.resumeSource.asObservable();

  constructor() {}

  updateResume(resume: Resume) {
    this.resumeSource.next(resume);
  }
}
