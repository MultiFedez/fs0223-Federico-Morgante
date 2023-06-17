import { Component } from '@angular/core';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { HomeService } from './home.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
/* prima ci prepariamo un array vuoto e all'inizio del caricamento della pagina verrá riempito */
appartaments:IAccomodation[] = []
/* l'inizio del caricamento intendo il ngOnInit => il server legge tutto il componente e successivamente, in una frazione di sec legge ció che c'é scritto nell'ngOnInit */
nomeUtente!:string
constructor(private homeSvc:HomeService, private authSvc:AuthService){}

ngOnInit(){
  this.homeSvc.getAll()
  .subscribe((res)=>{
    this.appartaments = res
  })
  const utente:any = localStorage.getItem('user')
  const utenteParsato = JSON.parse(utente)
  this.nomeUtente = utenteParsato.user.name
}
delete(id:number){
  this.homeSvc.delete(id)
  .subscribe(
    data => {
      let index = this.appartaments.findIndex(el => el.id === id)
      this.appartaments.splice(index, 1)
    }
  )
}

fede(){
  this.authSvc.logout()

}
}
