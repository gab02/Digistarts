import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import bootstrap from 'bootstrap';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  /*Inicio variaveis para questão 2*/

  panelOpenState = false;
  binary;
  ValueDEC: number
  ValueDEC1;
  ValueDEC2;
  resultado1: number
  resultado;

  /*Fim variaveis para questão 2*/


/*Inicio variaveis para questão 1*/
  resource: Resource[] = [];
  selectedFeatures: any = [];
   resourceValues = [];
  fieldId = 0;
  testArr = [];
  val;
  val1;

/*Fim variaveis para questão 1*/
//No  meu entendimetno da questão, seria necessário para a redefinição de ordens um array, e o controle da ordem seria tratado após o a organização
//do array, (com o filtro de não repetição do mesmo numero)
  ngOnInit(): void {


  // this.operator  = [
  //     {value: 'mod1', viewValue: '+'},
  //     {value: 'mod2', viewValue: '-'},
  //     {value: 'mod3', viewValue: '*'},
  //     {value: 'mod4', viewValue: '/'},
  //     {value: 'mod5', viewValue: '%'},

  //   ];

    //INIT PARA A QUESTÃO 1
    this.resource = this.getResource();

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

  }

// calcular(){
//  // var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);

// }



//ADICIONA O INPUT INDIVIDUAL PARA INSERIR UM DADO A MAIS DENTRO DO ARRAY.
  addRes(resource: Resource) {

    this.resourceValues.push('');
    if (this.testArr.length) {
      this.testArr.push((+this.testArr[this.testArr.length - 1] + 1).toString());
    } else {
      this.testArr.push(0);
    }
    resource.resourceInputFields = ['', ...resource.resourceInputFields];

}

//REMOVE O INPUT ADICIONADO
  removeRes(resource: Resource, index: number) {
    resource.resourceInputFields.splice(index, 1);
    this.testArr.splice(index, 1);
    this.resourceValues.splice(index, 1);
    // console.log(this.resourceValues);
  }

  //FAZ O GRT DOS INPUTS
  getResource(): Resource[] {
    return [
      {
        resourceLink: 'link',
        resourceInputFields: [],
        resourceId: '',
      },
    ];
  }
  //DEFINE TODOS OS VALORES DOS INPUTS EM BRANCO AO CLICAR NO BOTÃO PARA DEFINIR A VARIAVEL DISPONIVEL AO USUÁRIO
  removeAll(resource: Resource){
    resource.resourceInputFields = [];
    this.testArr = []
    this.resourceValues = []

  }

  //LE A VARIAVEL E DEFINE A VARIAVEL ONDE O USUÁRIO IRÁ VISUALIZAR O VALOR

  ler(){

    this.val = this.resourceValues;
    console.log(this.val);
   this.val1 = this.val.filter((este, i) => this.val.indexOf(este) === i);
   //var binario: number =  this.val1.parseInt(binario, 2);
//console.log(binario)
let b;
 b = (this.val1 >>> 0).toString(2);
 console.log(b);
 this.removeAll($);
  }



binario(){
//Coversor simples de decimal para binário
  let b;
 b = (this.ValueDEC >>> 0).toString(2);
console.log(this.ValueDEC)
this.binary = b;

}

//Onde a magica acontece!!!
//é aqui onde é definido o valor do binario --> conversao para decimal --> operador de conta --> resultado --> conversão para binario
modo(value: string){

  switch(value) {
    case "mod1":
      let a =  parseInt(this.ValueDEC1, 2);
      let b =  parseInt(this.ValueDEC2, 2);
      if((a < 0)||(a > 255)||(b < 0)||(b > 255)){
        this.resultado = 'o numero precisa ser maior que 0 e menor que 255';
        break;
      }else{
      this.resultado1 = a + b;
      this.resultado  = (this.resultado1 >>> 0).toString(2);
      break;
    }
    case "mod2":
      let c =  parseInt(this.ValueDEC1, 2);
      let d =  parseInt(this.ValueDEC2, 2);
      if((c < 0)||(c > 255)||(d < 0)||(d > 255)){
        this.resultado = 'o numero precisa ser maior que 0 e menor que 255';
        break;
      }else{
      this.resultado1 = c - d;
      this.resultado  = (this.resultado1 >>> 0).toString(2);
      break;
    }
    case "mod3":
      let e =  parseInt(this.ValueDEC1, 2);
      let f =  parseInt(this.ValueDEC2, 2);
      if((e < 0)||(e > 255)||(f < 0)||(f > 255)){
        this.resultado = 'o numero precisa ser maior que 0 e menor que 255';
        break;
      }else{
      this.resultado1 = e * f;
      this.resultado  = (this.resultado1 >>> 0).toString(2);
      break;
    }

      case "mod4":
        let g =  parseInt(this.ValueDEC1, 2);
        let h =  parseInt(this.ValueDEC2, 2);
        if((g < 0)||(g > 255)||(h < 0)||(h > 255)){
          this.resultado = 'o numero precisa ser maior que 0 e menor que 255';
          break;
        }else{
        this.resultado1 = g / h;
        this.resultado  = (this.resultado1 >>> 0).toString(2);
        break;
      }
        case "mod5":
          let i =  parseInt(this.ValueDEC1, 2);
          let j =  parseInt(this.ValueDEC2, 2);
          if((i < 0)||(i> 255)||(j < 0)||(j > 255)){
            this.resultado = 'o numero precisa ser maior que 0 e menor que 255';
            break;
          }else{
          this.resultado1 = i % j;
          this.resultado  = (this.resultado1 >>> 0).toString(2);
          break;
        }
       }
}
}


export interface Resource {
  resourceLink: string;
  resourceId: string;
  resourceInputFields: string[];
}
