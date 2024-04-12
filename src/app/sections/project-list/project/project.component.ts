import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import {SectionBreakComponent} from "../../../components/section-break/section-break.component";

@Component({
  selector: 'projects-project',
  standalone: true,
  imports: [SectionBreakComponent, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() title: string = "";
  @Input() desc: string = "";

  @Input() logo: string = "";
 
  @Input() tags: string[] = []
}
