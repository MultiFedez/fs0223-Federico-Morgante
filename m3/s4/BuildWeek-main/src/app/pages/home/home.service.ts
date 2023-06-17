import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

/* CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)*/

export class HomeService {
  apiUrl:string = environment.urlAccomodations

  constructor(private http:HttpClient) {}

  /* Read creata sia totale che singola*/
  getAll(){
    return this.http.get<IAccomodation[]>(this.apiUrl)
  }

  getSingola(id:number){
    return this.http.get<IAccomodation>(this.apiUrl+'/'+id)
  }

  /* http a differenza della fetch dove abbiamo nelle post e put da specificare il body, qui dobbiamo esclusivamente mettere il link della nostra API e l'elemento che vogliamo postare */
  post(elemento:IAccomodation){
    return this.http.post<IAccomodation>(this.apiUrl, elemento)
  }

  put(elemento:IAccomodation){
    return this.http.put<IAccomodation>(this.apiUrl + '/' + elemento.id, elemento)
  }

  /* la put e la post hanno bisogno di inserire/modificare un nuovo elemento..  */
  /* cosí come nella get che mi serve esclusivamente il link, la delete agisce nello stesso modo */
  delete(id:number){
    return this.http.delete<IAccomodation>(this.apiUrl + '/' + id)
  }
}
