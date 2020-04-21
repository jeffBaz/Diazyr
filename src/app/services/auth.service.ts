import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dossier } from 'dia_utils-lib';
import { Validators, FormGroup } from '@angular/forms';
import { UserAccount } from '../models/model';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;
  logged = new Subject<boolean>();
  constructor(private ts: TranslateService) { }

  login(){
    this.isLogged=true;
    this.logged.next(this.isLogged);
  }
  getLoginForm(form:FormGroup, d?:UserAccount){
    if(!d){
      d = {};
    }
    return  [
      Dossier.bloc(this.ts.instant('APP.ADMIN.INFOS_CLIENT'), [
      (Dossier.set('Nom', d.nom,
      {
        formGroupConfig: {
          form: form,
          formName: 'nom',
          updateOn: 'change',
          validators: [Validators.required]
        }
      }
      )),
      (Dossier.set('Prénom', d.prenom,
      {
        formGroupConfig: {
          form: form,
          formName: 'prenom',
          updateOn: 'change',
          validators: [Validators.required]
        }
      }
      )),
      (Dossier.set('Email', d.email,
      {
        formGroupConfig: {
          form: form,
          formName: 'email',
          updateOn: 'change',
          validators: [Validators.required]
        }
      }
      )),
      (Dossier.set('Téléphone', d.phone,
      {
        formGroupConfig: {
          form: form,
          formName: 'phone',
          updateOn: 'change',
          validators: [Validators.required]
        }
      }
      )),
      /*(Dossier.set('Login', '' )),
      (Dossier.set('Password', '')),*/
    ]),
    this.getDossirerBlocLogin(this.ts.instant('APP.ADMIN.LOGIN_PASSWORD'), form, d)
   ];
  }
  getDossirerBlocLogin(title, form:FormGroup, d:UserAccount){
    return  Dossier.bloc(title, [
       (Dossier.set('Login', d.login, {
         formGroupConfig: {
           form: form,
           formName: 'login',
           updateOn: 'change',
           validators: [Validators.required]
         }
       }
       )),
       (Dossier.set('Password', null
       , {
         formGroupConfig: {
           form: form,
           formName: 'password',
           updateOn: 'change',
           validators: [Validators.required]
         }
       }
       ))
     ])
   }
}
