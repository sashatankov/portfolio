import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  public skillName: string;
  public skillIcon: string;

  constructor(public name: string, public icon: string) {
    this.skillName = name;
    this.skillIcon = icon;
  }

  ngOnInit() {
  }

}
