import { Component } from '@angular/core';
import { HolderComponent } from './holder/holder.component';
import {SectionBreakComponent} from "../../components/section-break/section-break.component"

@Component({
  selector: 'sections-skills',
  standalone: true,
  imports: [HolderComponent, SectionBreakComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
