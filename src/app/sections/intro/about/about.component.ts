import { Component } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'intro-about',
  standalone: true,
  imports: [TerminalComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
