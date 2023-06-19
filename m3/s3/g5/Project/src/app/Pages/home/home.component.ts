import { Component } from '@angular/core';
import { Ishoes } from 'src/app/interfaces/ishoes';
import { HomeService } from './home.service';
import { AuthService } from '../auth/auth.service';
import { Iuser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  shoes: Ishoes[] = []
  user: Iuser = {
    id: 0,
    email: '',
    name: '',
    surname: '',
    client: false
  }
  /* l'inizio del caricamento intendo il ngOnInit => il server legge tutto il componente e successivamente, in una frazione di sec legge ció che c'é scritto nell'ngOnInit */

  constructor(private homeSvc: HomeService, private autSvc: AuthService) { }

  ngOnInit() {
    this.getUser()
    this.homeSvc.getAll()
      .subscribe((res) => {
        this.shoes = res
      })
  }
  delete(id: number) {
    this.homeSvc.delete(id)
      .subscribe(
        data => {
          let index = this.shoes.findIndex(el => el.id === id)
          this.shoes.splice(index, 1)
        }
      )
  }
  logout() {
    this.autSvc.logout()
  }

  getUser() {
    const userData = localStorage.getItem('user')
    if (userData !== null) {
      const user = JSON.parse(userData)
      this.user = user.user
    }
  }

}
