import { Component } from '@angular/core';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
// newAppartament:IAccomodation = {
//   id: 0,
//   title: '',
//   prezzo: 0,
//   description: '',
//   urlPhoto:''
// }

form!: FormGroup;

constructor(private homeSvc : HomeService, private router:Router, private fb : FormBuilder){}

ngOnInit(){
  this.form = this.fb.group({
    title : this.fb.control(null),
    prezzo : this.fb.control(null),
    description : this.fb.control(null),
    urlPhoto : this.fb.control(null),
    urlPhoto2: this.fb.array([])
  })
  this.form.valueChanges.subscribe(value => console.log(value))
  console.log(this.form)
}

create(){
   this.homeSvc.post(this.form.value)
   .subscribe((casa)=>{
     console.log(casa);
     this.router.navigate(['/'])
   })
}

addPhotos(){
  let control = new FormControl(null);
  (this.form.get('urlPhoto2') as FormArray).push(control);
}
  getPhotos(){
    return (this.form.get('urlPhoto2') as FormArray).controls;
  }
}
