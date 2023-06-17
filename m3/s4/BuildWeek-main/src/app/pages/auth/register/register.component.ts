import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IRegister } from 'src/app/interfaces/iregister';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  /* i validators sono un componente di angular che mi permette di definire le mie validazioni */
email = new FormControl ('',[Validators.required, Validators.email])
password = new FormControl ('',[Validators.required, Validators.minLength(3)])

data: IRegister = {
  email: '',
  password: '',
  name: '',
  surname: ''
}

constructor(private authSvc:AuthService, private router:Router){}

mari(){
  this.authSvc.register(this.data)
  .subscribe( res => {
    this.router.navigate(['./auth/login'])
    console.log(res);
  })
}


}
