import { Component } from '@angular/core';
import { Ishoes } from 'src/app/interfaces/ishoes';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  shoes: Ishoes[] = []
  /* l'inizio del caricamento intendo il ngOnInit => il server legge tutto il componente e successivamente, in una frazione di sec legge ció che c'é scritto nell'ngOnInit */

  constructor(private homeSvc: HomeService) { }

  ngOnInit() {
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

}
