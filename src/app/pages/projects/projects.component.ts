import { Component, OnInit } from '@angular/core';
import { Projeto, ProjetoService } from '../../services/projetos/projeto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projetos:Projeto[] = [];
termoPesquisa: any;

  constructor(private projetoService: ProjetoService  ){}
  ngOnInit(): void {
    this.carregarProjetos();
  }
  carregarProjetos():void{
    this.projetoService.getProjetos().subscribe(projetos => this.projetos = projetos);
  }

}
