import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario/funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'senac-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

    funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarios = this.listarTodos();


  }

  listarTodos():Funcionario[]{
    return this.funcionarioService.listarTodos();
  }
  
  remover($event:any, funcionario: Funcionario):void{
    $event.preventDefault();
    if(confirm("Deseja remover o funcionario "+ funcionario.nome + " ?"))
      this.funcionarioService.remover(funcionario.id)
     this.funcionarioService.listarTodos;
  }

}
