import { Component, OnInit } from '@angular/core';
import { yearsPerPage } from '@angular/material/datepicker';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  appname ='meVikash';
  firstName="Vikash";
  lastName="Meghwal";

  getName()
  {  
    let k="vikash meghwal"
    return k
  }
  getName1(){
    return "Anil"
  }
  fullName(){
    return this.firstName+this.lastName
  }
  object={
    name: "ASUS",
    price: 500
  }
  Array=['Vikash','Rinku','Pinky']
  a=100;
  b=50;
  siteUrl=window.location.href;

  getfunc(){
    alert("your function is called bt button")
  }

  names="happy"
  getfun(names: any){
    alert(names)
  }

  myWarn(evn :any ){
    console.warn(evn)
  }
  myLog(evn :any ){
    console.log(evn)
  }
  myError(err : any){
    console.error(err)
  }
  myClear(err : any){
    console.clear()
  }
  myTrace(err : any){
    console.trace(err)
  }

  nameProperty="PropertyBinding"

  disableBox=true;
  EnableBox(){
    this.disableBox=false
  }

  show=false;
  bulb="red";
  color='blue';
  mobile=['lava','redmi', 'nokia','samsung','jio'];

  mobileobj=[
    {
      name: 'nokia',
      prise: 25000
    },
    {
      name: 'redmi',
      prise: 35000
    },
    {
      name: 'apple',
      prise: 60000
    },
    {
      name: 'lava',
      prise: 2560
    }
  ]

  getUserValue(value:any){
    console.warn(value )
  }
  beta="orange"
  gamma="black"
  pixal=true
  updateColor(){
    this.beta="red",
    this.gamma="brown"
  }
  pipe="vIKASH meghwal";
  today=Date.now()
  str="helloboyshow are you"
  curr=22;
  onSubmit(data: any){
    console.warn(data)
  }








  constructor() { }

  ngOnInit(): void {
    
  }

}
