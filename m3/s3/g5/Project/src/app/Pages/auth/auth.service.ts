import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Iregister } from 'src/app/interfaces/iregister';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Iauth } from 'src/app/interfaces/iauth';
import { Ilogin } from 'src/app/interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.url
  registerUrl = this.apiUrl + '/signup'
  loginUrl = this.apiUrl + '/login'
  /* JwtHelperService è una classe fornita da una libreria chiamata angular-jwt che aiuta a gestire i JSON Web Token (JWT) nelle applicazioni Angular. I JWT sono un tipo di token comunemente utilizzato per autenticazione e autorizzazione. */
  jwtHelper: JwtHelperService = new JwtHelperService()

  private authSubject = new BehaviorSubject<null | Iauth>(null)
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user));

  constructor(private http: HttpClient, private router: Router) {/*this.restoreUser() */ }

  register(utenteregistrato: Iregister) {
    return this.http.post<Iauth>(this.registerUrl, utenteregistrato)
  }
  login(data: Ilogin) {
    return this.http.post<Iauth>(this.loginUrl, data)
      .pipe(tap(data => {
        this.authSubject.next(data)
        localStorage.setItem('user', JSON.stringify(data));
        const tempoPassato = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date
        this.autologout(tempoPassato)
      }))
  }

  logout() {
    localStorage.removeItem('user');
    this.authSubject.next(null)
  }

  autoLogTimer!: any
  autologout(ora: Date) {
    const numeroConvertito: number = ora.getTime() - new Date().getTime();
    this.autoLogTimer = setTimeout(() => { this.logout() }, numeroConvertito);
  }

  restoreUser() {
    const userStringa = localStorage.getItem('user')
    if (!userStringa) {
      return
    }
    const userParsato: Iauth = JSON.parse(userStringa)
    if (this.jwtHelper.isTokenExpired(userParsato.accessToken)) {
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
