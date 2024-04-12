import { Component, Input } from '@angular/core';

@Component({
  selector: 'components-section-break',
  standalone: true,
  imports: [],
  templateUrl: './section-break.component.html',
  styleUrl: './section-break.component.scss'
})
export class SectionBreakComponent {
  @Input() width: string = "90%";

  @Input() bgColor: string = "black";
}
