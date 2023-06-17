import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { HomeService } from '../home.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  // newAppartament:IAccomodation = {
  //   id: 0,
  //   title: '',
  //   prezzo: 0,
  //   description: '',
  //   urlPhoto: '',
  //   urlPhoto2: []
  // }

  form!: FormGroup
id!:number
  constructor(private homeSvc:HomeService, private router:Router, private route:ActivatedRoute, private fb: FormBuilder){}

  ngOnInit(){
        this.form = this.fb.group({
          title : this.fb.control(null),
          prezzo : this.fb.control(null),
          description : this.fb.control(null),
          urlPhoto : this.fb.control(null),
          urlPhoto2: this.fb.array([])
        })
    this.route.params
    .subscribe((params:any)=>{
      this.id= params.id
      this.homeSvc.getSingola(params.id)
      .subscribe(res => {
        this.form.patchValue({
          title: res.title,
          prezzo: res.prezzo,
          description: res.description,
          urlPhoto: res.urlPhoto,
          /* urlPhoto2: [...res.urlPhoto2] */
        });
        /* (this.form.get('urlPhoto2') as FormArray).push(...res.urlPhoto2) */

        for (let photo of res.urlPhoto2) {
          (this.form.get('urlPhoto2') as FormArray).push(new FormControl(photo));
        }
        console.log(this.form.value)

      })
    })
  }

  getPhotos(){
    return (this.form.get('urlPhoto2') as FormArray).controls;
  }
  modifica(){
    console.log(this.form.value)
    let data = {...this.form.value, id:this.id}
   return this.homeSvc.put(data).subscribe(data => {
   this.router.navigate(['/'])
   })
  }
}
