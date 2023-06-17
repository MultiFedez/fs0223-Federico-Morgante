import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-single-accomodation',
  templateUrl: './single-accomodation.component.html',
  styleUrls: ['./single-accomodation.component.scss']
})
export class SingleAccomodationComponent {
  newAppartament:IAccomodation = {
    id: 0,
    title: '',
    prezzo: 0,
    description: '',
    urlPhoto:'',
    urlPhoto2: []
  }

  allPhotos:any = [];
  nomeUtente!:string

  constructor(private homeSvc:HomeService,private authSvc:AuthService,  private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params
    .subscribe((params:any)=>{
      this.homeSvc.getSingola(params.id).subscribe((Appartament)=> {this.newAppartament = Appartament
      this.allPhotos = Appartament.urlPhoto2
      console.log(this.allPhotos)})
    })
    const utente:any = localStorage.getItem('user')
    const utenteParsato = JSON.parse(utente)
    this.nomeUtente = utenteParsato.user.name
  }
  fede(){
    this.authSvc.logout()
  }
}
