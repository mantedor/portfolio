import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntroComponent } from '../../sections/intro/intro.component';
import { SkillsComponent } from '../../sections/skills/skills.component';

import { SectionBreakComponent } from '../../components/section-break/section-break.component';

@Component({
  selector: 'pages-home',
  standalone: true,
  imports: [CommonModule, IntroComponent, SkillsComponent, SectionBreakComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
