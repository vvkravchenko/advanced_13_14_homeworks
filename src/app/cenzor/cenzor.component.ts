import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  headerText = 'Angular list of prohibited words';
  badWords = ' ';
  words = [];
  classValidation = false;
  cenzorValidation = false;
  textByCenzor: string;

  constructor() { }

  ngOnInit(): void {
  }

  saveWords(): void{
    this.words.push(document.forms[0].text.value);
  }

  printBadWords():void{
    this.badWords += ' ' + document.forms[0].text.value;
  }

  clearTextForm():void{
    document.forms[0].text.value = "";
  }

  clearTextAreaForm():void{
    document.forms[0].textarea.value = "";
    this.badWords = ' ';
  }

  cenzor():void{
    this.textByCenzor = document.forms[0].textarea.value;
    for( let i = 0; i < this.words.length; i++){
      let count = '*';
      for(let j = 1; j < this.words[i].length; j++){
        count +='*'
      }
      this.textByCenzor = this.textByCenzor.replace(new RegExp(this.words[i],"g"), count);
      console.log(i);
      console.log(this.textByCenzor);

    }
    document.forms[0].textarea.value = this.textByCenzor; 
  }



  isInValidClass(): void{
    if ( document.forms[0].text.value !== '' ){
      this.classValidation = false;
      document.forms[0].text.placeholder = "word here...";
      this.saveWords();
      this.printBadWords();
      this.clearTextForm();
    } 
    else{
      this.classValidation = true;
      document.forms[0].text.placeholder = "Please write a word!";
    } 
  } 

  isInValidCenzor(): void{
    if ( document.forms[0].textarea.value !== '' ){
      this.cenzorValidation = false;
      document.forms[0].textarea.placeholder = "text here...";
      this.cenzor();
    } 
    else{
      this.cenzorValidation = true;
      document.forms[0].textarea.placeholder = "Please write a text!";
    } 
  }

}
