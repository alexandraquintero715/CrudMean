import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor(private router: Router, private auto: AutosService) { }

  lista: any = [];
  listaIni: any = [];
  autoMarca: any = ''


  ngOnInit(): void {
    //llamar servicio
    this.auto.listarAuto().subscribe(
      (res) => {
        this.lista = res
        this.listaIni=res
      },
      (err) => {
        console.log(err)
      }
    )
  }


  eliminar(autoSelect: any) {
    // console.log("ingresó")
    this.auto.eliminarAuto(autoSelect).subscribe(
      (res) => {
        const index = this.lista.indexOf(autoSelect)
        if (index > -1) {
          this.lista.splice(index, 1);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  filtrar(){
    if(!this.autoMarca.length){
      this.lista = this.listaIni
    }
    else{
      this.lista = this.listaIni.filter((list: { marca: string | any[]; }) => list.marca.includes(this.autoMarca))
    }
  }

}



