export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
  }
  
  export interface Experience {
    company: string;
    role: string;
    start: Date;
    end: Date;
    description: string;
  }
  
  export interface Education {
    institution: string;
    degree: string;
    graduation: Date;
  }
  
  export interface Skills {
    skills: string[];
  }
  
  export interface Resume {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skills: Skills;
  }
  