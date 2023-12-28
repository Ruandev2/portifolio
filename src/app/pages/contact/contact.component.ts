import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  name:string = ""
  email:string = ""
  mensagem:[] | any = []
  constructor(){}

  ngOnInit(): void {
    this.mensagem = this.name + this.email

  }

  enviarMensagem(){
   console.log('Mensagem Postada',this.mensagem)
  
  }

}
