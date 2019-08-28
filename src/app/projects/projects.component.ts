import {Component, Input, OnInit} from '@angular/core';
import {Project} from './project';
@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectDesctiptions = {
    AI_PROJECT_NAME: 'Search software using Artificial Intelligence',
    AI_PROJECT_DESCRIPTION: 'I was part of a team that took the stable marriage problem, ' +
    'generalized it to n dimensions, ' +
    'and built software that finds ' +
    'the most optimal matching using Artificial Intelligence.' +
    'I implemented algorithms of hill-climbing and simulated annealing ' +
    'that search for the near optimal solution.',

    STUDY_PLAN_PROJECT_NAME: 'Study plan builder software for students',
    STUDY_PLAN_PROJECT_DESCRIPTION: 'I developed a web app that creates a study plan for a student according to his preferences. ' +
    'The app aggregates all information of one’s studies, ' +
    'his major, weekly schedule, exams schedule, ' +
    'taken courses and personal information.'
  };
  projects: Project[];
  constructor() {
    this.projects = [
      new Project(this.projectDesctiptions.AI_PROJECT_NAME,
                  this.projectDesctiptions.AI_PROJECT_DESCRIPTION),
      new Project(this.projectDesctiptions.STUDY_PLAN_PROJECT_NAME,
                  this.projectDesctiptions.STUDY_PLAN_PROJECT_DESCRIPTION)
    ];
  }

  ngOnInit() {
  }

}
