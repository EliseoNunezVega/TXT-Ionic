import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
  public form : FormGroup;
  public blogs = [];

  constructor( private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      title : ['',],
      entry : ['', ],
      author : ['',],
    });
  }

  onSumbit(){

    this.blogs = [this.form.value.title,this.form.value.author, this.form.value.entry];

    console.log(this.blogs);
  }
  
}


