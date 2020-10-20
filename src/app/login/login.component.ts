import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Dossier } from 'dia_utils-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  subscribe: Dossier;
  login: Dossier;
  subscribing = false;
  loginForm: FormGroup;
  nbColumns=2;
  constructor(private fb: FormBuilder, private router:Router, private ts: TranslateService, private auth:AuthService, private snack:MatSnackBar) { }


  ngOnInit() {
    this.loginForm = this.fb.group({});
   // this.ts.get('').subscribe(_ => {
      this.buildLogin();
      this.buildsubscriber();
    //});
  }
  buildLogin() {
    const list: Dossier[] = [];
    this.login = this.build(this.ts.instant('APP.ADMIN.LOGIN_TITLE'), [
     this.getDossirerBlocLogin('')
    ], {
      formGroupConfig: {
        form: this.loginForm
      }
    }
    );



  }
  getDossirerBlocLogin(title){
   return  Dossier.bloc(title, [
      (Dossier.set('Login', null, {
        formGroupConfig: {
          form: this.loginForm,
          formName: 'login',
          updateOn: 'change',
          validators: [Validators.required]
        }
      }
      )),
      (Dossier.set('Password', null
      , {
        formGroupConfig: {
          form: this.loginForm,
          formName: 'password',
          updateOn: 'change',
          validators: [Validators.required]
        }
      }
      ))
    ])
  }
  buildsubscriber(){
    const list: Dossier[] = [];
    this.subscribe = this.build('',  this.auth.getLoginForm(this.loginForm), {
          formGroupConfig: {
            form: this.loginForm
          }
        }
      );

  }
  connect(){
    console.log(this.loginForm.value);
   /* const fire = this.auth.afAuth.auth;
    if(!this.subscribing){
      // Prompt the user to re-provide their sign-in credentials
          this.auth.logIn(this.loginForm.value.login, this.loginForm.value.password).then(_=> {
            this.auth.getUserById(_.user.uid) ;
            this.auth.getRolesById(_.user.uid) ;
            this.router.navigate([''])

          }).catch(err=>{
            this.snackErr(err.message);
            this.auth.logOut();
          });
    }else{
       // Prompt the user to re-provide their sign-in credentials
       this.auth.signIn(this.loginForm.value.login, this.loginForm.value.password).then(_=>
       {
         console.log(_);
         this.auth.setCurrentUser(_.user, this.loginForm.value).then(_ => {
         //this.auth.setStandardUserRoles(this.auth.currentUser.id);
        }).catch(_ => {
         this.snackErr(_.message);
        });
       }).catch(err=>this.snackErr(err.message));
;
}
*/
  }
  snackErr(err){
    this.snack.open(err, this.ts.instant('APP.ADMIN.ERROR'));
  }
  loginGoogle(){
    //this.auth.doGoogleLogin().then();
  }
  forget(){
    console.log(this.loginForm.value);
  }
  build(title, list, custom){
    /*list = list.map(_ => {
      _.list = _.list.map(__ => {
        __.formGroupConfig = custom.formGroupConfig
        return __;
      });
       return _;
    });*/
    return Dossier.build(title, null, list);
  }

}
