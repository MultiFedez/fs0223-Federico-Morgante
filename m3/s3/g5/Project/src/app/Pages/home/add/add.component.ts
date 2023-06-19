import { Component } from '@angular/core';
import { Ishoes } from 'src/app/interfaces/ishoes';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  newShoes: Ishoes = {
    id: 0,
    title: '',
    prezzo: 0,
    description: '',
    image: ''
  }

  constructor(private homeSvc: HomeService, private router: Router) { }

  create() {
    this.homeSvc.post(this.newShoes)
      .subscribe((scarpa) => {
        console.log(scarpa);
        this.router.navigate(['/'])
      })
  }

}
