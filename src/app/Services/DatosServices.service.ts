import { Injectable} from '@angular/core';


@Injectable()
export class DatosServices{

  private person:Person={
    id:1,
    name:"Julio",
    lName:"Gomez",
    age:24
  }

  getPerson(){
    return this.person;
  }
  getName(){
    return this.person.name;
  }

}

export interface Person{
  id: number;
  name:string;
  lName:string;
  age:number;
}
