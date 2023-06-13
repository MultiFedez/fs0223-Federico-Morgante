import { Component } from '@angular/core';
import { Ishoes } from 'src/app/interfaces/ishoes';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  newShoes: Ishoes = {
    id: 0,
    title: '',
    prezzo: 0,
    description: ''
  }

  constructor(private homeSvc: HomeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.homeSvc.getSingola(params.id).subscribe((Shoes) => this.newShoes = Shoes)
      })
  }

  modifica() {
    return this.homeSvc.put(this.newShoes).subscribe(data => {
      this.router.navigate(['/'])
    })
  }

}
