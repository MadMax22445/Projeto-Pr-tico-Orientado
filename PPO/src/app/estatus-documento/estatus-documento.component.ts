import { Component, OnInit } from '@angular/core';
import {EstadoDoPitService} from '../services/estado-do-pit.service'
import {EstadoDoRadService} from '../services/estado-do-rad.service'
import {UsuarioService} from '../services/usuario.service'
@Component({
  selector: 'app-estatus-documento',
  templateUrl: './estatus-documento.component.html',
  styleUrls: ['./estatus-documento.component.css']
})
export class EstatusDocumentoComponent implements OnInit {
  ArrayEstadosDoPit=[]
  ArrayEstadosDoRad=[]
  email=this.usuarioService.email;
  constructor(public estadoDoPitService:EstadoDoPitService,public estadoDoRadService:EstadoDoRadService, public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.estadoDoPitService.getEstadoDoPit().subscribe(estado =>{  
      this.ArrayEstadosDoPit=estado;
   
    });
    this.estadoDoRadService.getEstadoDoRad().subscribe(estado =>{  
      this.ArrayEstadosDoRad=estado;
   
    });
  }

}
