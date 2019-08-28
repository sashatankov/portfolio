import { Component, OnInit } from '@angular/core';
// import {SkillComponent} from '../skill/skill.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  skills: SkillComponent[];
  constructor() {
    this.skills = [
      new SkillComponent('Java', 'assets/images/java.png'),
      new SkillComponent('Python', 'assets/images/python.svg'),
      new SkillComponent('C++', 'assets/images/cpp.svg'),
      new SkillComponent('HTML/CSS', 'assets/images/html.png'),
      new SkillComponent('JavaScript', 'assets/images/js.svg'),
      new SkillComponent('Machine Learning', 'assets/images/ai.png'),
      new SkillComponent('Computer Vision', 'assets/images/cv.png')
    ];
  }

  ngOnInit() {
  }

}

class SkillComponent {
  public skillName: string;
  public skillIcon: string;

  constructor(public name: any, public icon: any) {
    this.skillName = name;
    this.skillIcon = icon;
  }


}
