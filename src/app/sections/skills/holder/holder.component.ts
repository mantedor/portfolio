import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'skills-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holder.component.html',
  styleUrl: './holder.component.scss'
})
export class HolderComponent {
  @Input() imageSrc: string = "";

  @Input() right: boolean = false;

  @Input() title: string = "";
  @Input() desc: string = "";
}
