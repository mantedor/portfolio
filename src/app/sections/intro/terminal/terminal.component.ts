import { CommonModule } from '@angular/common';
import { Component, NgZone, AfterViewInit, ViewEncapsulation } from '@angular/core';

const neofetchAnswer = `
<div class="neofetch">
  <img class="my-face" src="../../../assets/avatar.png">
  <div class="neofetch-desc">
    <span class="neofetch-name highlight">
      Bruno Costa de Oliveira
      <br/>
      -----------------------
    </span>
    <br/>

    eae! me chamo Bruno e já sou dev tem um tempo, meu foco atualmente anda para a area web, principalmente através do Angular. 
    vejo o trabalho como fonte de aprendizado e algo essencial em garantir minha evolucao como programador, por isso tento me envolver e me esforçar ao maximo em projetos profissionais.
  </div>
</div>
`

//manipulando o innerHTML diretamente como fazemos
//requere ViewEncapsulation.none de forma que o estilo do componente
//atinja tambem o novo conteudo adicionado
@Component({
  selector: 'intro-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TerminalComponent implements AfterViewInit{
  messages: string[] = [
    "neofetch",
    neofetchAnswer,
    "me contrate!! :) e olhe as outras abas"
  ]
  currentText: string = "";

  constructor(private zone: NgZone){}

  ngAfterViewInit(): void {
    //o codigo que adiciona o efeito de digitar
    //usa setInterval, que eh uma funçao que faz o angular re-renderizar o componente toda vez que e chamada
    //por isso uso o runOutsideAngular de forma que o angular nao tente detectar mudança e renderizar
    this.zone.runOutsideAngular(()=>{
      this.showMessages();
    })
  }

  public async showMessages(){
    for(let x = 0; x < this.messages.length; x++){
      //sabemos se a mensagem eh para ser um comando ou uma resposta pela paridade do x
      if(!(x % 2)){
        //promise com setInterval pra simular a digitada 
        await this.typeMessage(x)

        continue;
      }

      this.formMessages(x)
    }
  }

  public formMessages(i: number){
    //precisa de um limite para nao mostrar mensagens futuras na hora errada
    //e o roteiro do this.messages seguir uma ordem
    let m = "";

    for(let x = 0; x < i + 1; x++){
      m += this.messages[x];
    }

    this.currentText = m;
  }

  private typeMessage(i: number){
    const command = this.messages[i];

    return new Promise((resolve, reject)=>{
      let typing = "";
      let index = 0;

      const delay = setInterval(()=>{
        if(!command[index]){
          resolve(typing);
          clearInterval(delay);
          return;
        }

        typing += command[index]

        //seletor so existe se a mensagem ainda esta sendo digitada
        //ou chegamos na ultima mensagem da lista
        const selector =  typing !== command || i == this.messages.length - 1
          ? '<div class="term-selector"></div>'
          : "";

        this.messages[i] = `<div class="term-line"><span class="highlight">[bruno@portfolio:~]</span> ${typing}${selector}</div>`;

        //o angular nao vai detectar mudança se eu nao pedir por conta do 
        // runOutsideAngular
        this.zone.run(()=>this.formMessages(i))
        index++;
      }, 300)
    })
  }
}
