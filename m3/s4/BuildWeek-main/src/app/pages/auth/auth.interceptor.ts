import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authSvc:AuthService) {}
/*  serve l'aggiunta dell'header di autenticazione a tutte
      le richieste HTTP in uscita. */

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //L'operatore take(1) viene utilizzato per prendere solo il primo valore emesso dall'Observable this.authSrv.user$.
    //Questo è necessario perché l'interceptor viene eseguito per ogni richiesta HTTP, ma vogliamo ottenere solo l'ultimo
    //valore dell'utente autenticato.

    //L'operatore switchMap viene utilizzato per eseguire una nuova richiesta HTTP all'interno del flusso. Se l'utente
    //non è presente (!user), la richiesta HTTP originale viene gestita senza alcuna modifica utilizzando next.handle(request).

    return this.authSvc.user$.pipe(take(1), switchMap(user => {
      if (!user){
        return next.handle(request)
      }
      const nuovaRichiesta = request.clone ({
        headers: request.headers.append('Authorization', `Bearer ${user.accessToken}`)
      })
      return next.handle(nuovaRichiesta)
    })
  )}
}
