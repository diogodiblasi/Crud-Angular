import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { ListarFuncionarioComponent } from '../listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from '../cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component';



@NgModule({
  declarations: [
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    FuncionarioService
  ]
})
export class FuncionarioModule { }
