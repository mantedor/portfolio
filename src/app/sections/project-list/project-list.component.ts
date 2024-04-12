import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { SectionBreakComponent } from '../../components/section-break/section-break.component';

@Component({
  selector: 'sections-projects',
  standalone: true,
  imports: [ProjectComponent, SectionBreakComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

}
