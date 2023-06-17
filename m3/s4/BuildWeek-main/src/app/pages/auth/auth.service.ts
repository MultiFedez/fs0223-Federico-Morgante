import { RegisterComponent } from './register/register.component';
import { environment } from 'src/environments/environment.development';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/interfaces/iregister';
import { IAuthData } from 'src/app/interfaces/iauth-data';
import { ILogin } from 'src/app/interfaces/ilogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* Inizio a istanziarmi i miei link */
  /* Usando json server auth ho bisogno semplicemente dell'url generico, é direttamente json server auth che arriva all' endpoint users */
  apiUrl = environment.url
  /* apiUrl = 'http://localhost:3000' */

  registerUrl = this.apiUrl + '/signup'
  loginUrl = this.apiUrl + '/login'

  /* prima del costruttore vado a prepararmi elementi che serviranno all'interceptor, alla guard e a altri metodi (logout, restoreUser) */

  jwtHelper:JwtHelperService = new JwtHelperService() //ci permette di lavorare facilmente con il jwt

  private authSubject = new BehaviorSubject<null | IAuthData>(null)
  user$ = this.authSubject.asObservable(); //contiene dati sull'utente se è loggato
  isLoggedIn$ = this.user$.pipe(map(user => !!user));

  /* nel costruttore mi serviranno httpclient per le chiamate al server e il router per rindirizzare le pagine */
  constructor(private http:HttpClient, private router:Router) { this.restoreUser() }

  /* Questo metodo passa un utente e fa una chiamata che restituisce un accessToken, e lo so grazie alla documentazione */
  register(utenteregistrato:IRegister){
    return this.http.post<IAuthData>(this.registerUrl, utenteregistrato)
    .pipe(catchError(error => {
      if (error.status === 400) {
        alert('Attenzione, dati inseriti non corretti o incompleti');
      }
      return throwError(error);
    }))
  }

  login(data:ILogin){
    return this.http.post<IAuthData>(this.loginUrl, data)
    .pipe(tap(data=> {
      this.authSubject.next(data)
      localStorage.setItem('user', JSON.stringify(data));
      /* Setto un timer di logout */
      const tempoPassato = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date
      /* uso un metodo di autologout che userá la var tempoPassato come parametro */
      this.autologout(tempoPassato)
    }))
    .pipe(catchError(error => {
      if (error.status === 400) {
        alert('I dati inseriti non sono corretti');
      }
      return throwError(error);
    }))
  }

  logout(){
    localStorage.removeItem('user');
    this.authSubject.next(null)
    this.router.navigate(['/auth/login']);
  }


  autoLogTimer!:any
  autologout(ora:Date){
    const numeroConvertito:number = ora.getTime() - new Date().getTime();
    this.autoLogTimer = setTimeout(() => {this.logout()}, numeroConvertito);
  }


  /* é un metodo che verrá utilizzato all'ngOnInit delle varie pagine che controlleranno se siamo effettivamente loggati */
restoreUser(){
  const userStringa = localStorage.getItem('user')
  if(!userStringa){
    return
  }

  const userParsato:IAuthData = JSON.parse(userStringa)
  if(this.jwtHelper.isTokenExpired(userParsato.accessToken)){
    return
  }
  this.authSubject.next(userParsato)

}
}


/*
tap è un operatore di RxJS che consente di eseguire azioni laterali o effettuare modifiche senza alterare i dati
    che attraversano lo stream di un Observable. Viene utilizzato per l'esecuzione di effetti collaterali, come la modifica
    di variabili di stato o l'invio di dati ad altri servizi.
*/


/*
Un BehaviorSubject è un tipo di oggetto Observable in RxJS che mantiene l'ultimo valore emesso e lo rende disponibile
immediatamente ai nuovi osservatori che si sottoscrivono ad esso.
A differenza di un Subject normale, che inizia senza un valore iniziale e inizia a emettere valori solo dopo che un osservatore
si è sottoscritto ad esso, un BehaviorSubject richiede un valore iniziale durante la sua creazione. Questo valore iniziale viene
emesso immediatamente a tutti gli osservatori che si sottoscrivono, anche se si sottoscrivono in un momento successivo.
Caratteristiche chiave di un BehaviorSubject:
Mantiene l'ultimo valore emesso: Un BehaviorSubject tiene traccia dell'ultimo valore emesso. Quando un nuovo osservatore si
sottoscrive, riceve immediatamente l'ultimo valore emesso, consentendo loro di avere accesso allo stato corrente.
Emissione iniziale: Un BehaviorSubject emette immediatamente il valore iniziale a tutti gli osservatori al momento della sottoscrizione,
anche se si sottoscrivono dopo che il valore è stato emesso.
Osservazione continua: Gli osservatori ricevono tutti i valori emessi dal BehaviorSubject dopo la loro sottoscrizione, compresi i nuovi
valori emessi in seguito.
Nel contesto dell'autenticazione, authSubject, come un BehaviorSubject, consente di mantenere lo stato di autenticazione corrente
dell'utente. Gli altri componenti o servizi possono sottoscriversi a authSubject per ottenere informazioni sull'utente autenticato e
reagire ai cambiamenti di stato di autenticazione.
*/
