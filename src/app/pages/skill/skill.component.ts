import { Component, OnInit } from '@angular/core';
import { SkillService, Skills } from '../../services/skills/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],

})
export class SkillComponent implements OnInit {
    skills:Skills[] = [];

    constructor(private skillService: SkillService){}

    ngOnInit() {
      this.loadSkills();
    }

    loadSkills():void {
      this.skillService.getSkills().subscribe(
        (skills) => {
          console.log('Data received:', skills);
          this.skills = skills;
        },
        (error) => {
          console.error('Error fetching skills:', error);
          console.log('Type of this.skills:', typeof this.skills);

        }
      );
    }
}
