import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-autos',
  templateUrl: './actualizar-autos.component.html',
  styleUrls: ['./actualizar-autos.component.css']
})
export class ActualizarAutosComponent implements OnInit {

  constructor(private router: Router, private auto: AutosService) { }

  ngOnInit(): void {
  }

  nuevoAuto = {
    id:'',
    marca: '',
    modelo: '',
    color: '',
    precio: ''
  }

    /*function para guardar*/
    actualizar() {
      //console.log("Nuevo auto: ",this.nuevoAuto);
      this.auto.crearAuto(this.nuevoAuto).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/listar'])
        },
        (err)=>{
          console.log(err);
        }
      )
    }

}
