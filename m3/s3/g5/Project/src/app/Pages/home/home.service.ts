import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ishoes } from 'src/app/interfaces/ishoes';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

/* CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)*/
export class HomeService {

  apiUrl: string = environment.urlShoes

  constructor(private http: HttpClient) { }

  /* Read creata sia totale che singola*/
  getAll() {
    return this.http.get<Ishoes[]>(this.apiUrl)
  }

  getSingola(id: number) {
    return this.http.get<Ishoes>(this.apiUrl + '/' + id)
  }

  /* http a differenza della fetch dove abbiamo nelle post e put da specificare il body, qui dobbiamo esclusivamente mettere il link della nostra API e l'elemento che vogliamo postare */
  post(elemento: Ishoes) {
    return this.http.post<Ishoes>(this.apiUrl, elemento)
  }

  put(elemento: Ishoes) {
    return this.http.put<Ishoes>(this.apiUrl + '/' + elemento.id, elemento)
  }

  /* la put e la post hanno bisogno di inserire/modificare un nuovo elemento..  */
  /* cosí come nella get che mi serve esclusivamente il link, la delete agisce nello stesso modo */
  delete(id: number) {
    return this.http.delete<Ishoes>(this.apiUrl + '/' + id)
  }
}
