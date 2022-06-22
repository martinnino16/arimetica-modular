import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public numeroA: number=null;
  public numeroAP: number=null;
  public numeroB: number=null;
  public numeroN: number=null;
  public totalAdicion: number;
  public totalsustraccion: number;
  public totalmultiplicacion: number;
  public totaldivision: any=null;
  public propoBoolean: false;
  public mensaje: string;

  public numeroNP: number;

  constructor(private toastr: NbToastrService) { }

  ngOnInit() {
  }

  ejecutar() {
    if (this.numeroA==null) {
      this.toastr.warning("El número A, no puede estar vacio.", "Alerta");
      return;
    }
    if (this.numeroB==null) {
      this.toastr.warning("El número B, no puede estar vacio.", "Alerta");
      return;
    }
    if (this.numeroN==null) {
      this.toastr.warning("El número N, no puede estar vacio.", "Alerta");
      return;
    }
    if (this.numeroN==null) {
      this.toastr.warning("El número N, no es un entero modulo N, (va de 0 a infinito positivo)", "Alerta");
      return;
    } else if (this.numeroA < 0 || this.numeroB < 0 || this.numeroA >= this.numeroN || this.numeroB >= this.numeroN) {
      this.toastr.warning("El número A y B tienen que ser mayores o iguales a cero y menor a N", "Alerta");
      return;
    }
    //Adicion
    let adicion = this.numeroB + this.numeroA;
    this.totalAdicion = adicion % this.numeroN;

    //sustraccion
    let booleanWhile=true;
    let valor = 0;
    while (booleanWhile && valor<this.numeroN) {
      if ((this.numeroB + valor) % this.numeroN == this.numeroA) {
        this.totalsustraccion = valor;
        booleanWhile=false;
      } else {
        valor += 1;
      }     
    }
    
    //multiplicacion
    let multiplicacion = this.numeroB * this.numeroA;
    this.totalmultiplicacion = multiplicacion % this.numeroN;

    //division
    this.totaldivision=null;
    for(let i=0; i<this.numeroN;i++){
      if((this.numeroB*i)%this.numeroN==1){
        this.totaldivision=(this.numeroA*i)%this.numeroN;
      }
    }
    
    if(this.totaldivision==null){
      this.totaldivision= "El número B, no es invertible"
    }
  }

  ejecutarDos(){
    if (this.numeroNP < 0) {
      this.toastr.warning("El número N, no es un entero modulo N, (va de 0 a infinito positivo)", "Alerta");
      return;
    } else if (this.numeroAP < 0 || this.numeroAP >= this.numeroNP) {
      this.toastr.warning("El número A tienen que ser mayor o igual a cero y menor a N", "Alerta");
      return;
    }
    this.propoBoolean=false;
    let contador:number=0;
    for(let i=0; i<this.numeroNP;i++){
      if((this.numeroAP*i)%this.numeroNP==1){
        contador+=1;
      }
    }
    if(contador>1){
      this.mensaje="la proposición es falsa, debido a que el número" + this.numeroAP +", tiene "+ contador + " reciprocos." 
    }else if(contador==0){
      this.mensaje="El número no es invertible" 
    }else{
      this.mensaje="la proposición es verdadera." 
    }
  }
}
