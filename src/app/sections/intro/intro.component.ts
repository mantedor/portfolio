import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'sections-intro',
  standalone: true,
  imports: [HeaderComponent, AboutComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

}
