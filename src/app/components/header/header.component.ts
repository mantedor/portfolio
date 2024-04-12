import { Component, ElementRef, OnInit} from '@angular/core';
import { SectionBreakComponent } from '../section-break/section-break.component';

import {NavigationEnd, RouterModule} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'components-header',
  standalone: true,
  imports: [SectionBreakComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  current: HTMLElement | undefined;

  constructor(private router: Router, private elRef: ElementRef){}

  ngOnInit(): void {
    const element = this.elRef.nativeElement;

    //mudar a classe da tab selecionada e remover da anterior pelo Observable de mudanca do router
    //basicamente os elementos tem o id sendo a url da pagina nova
    //entao fica facil saber qual a tab escolhida
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        const {url} = event;
  
        const currentlySelected = this.current;
        const newSelected: HTMLElement = element.querySelector(`#${url.slice(1) || "about"}`);

        if(!newSelected){return}
  
        if(currentlySelected){
          currentlySelected.classList.remove("active");
        }

        newSelected.classList.add("active")
        this.current = newSelected;
      }
    })
  }
}
