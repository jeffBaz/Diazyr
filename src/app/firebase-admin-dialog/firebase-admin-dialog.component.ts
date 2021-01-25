import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dossier } from 'dia_utils-lib';

@Component({
  selector: 'app-firebase-admin-dialog',
  templateUrl: './firebase-admin-dialog.component.html',
  styleUrls: ['./firebase-admin-dialog.component.scss']
})
export class FirebaseAdminDialogComponent implements OnInit {
  model: any;
  item: Dossier[];
  size: number;
  constructor(public dialogRef: MatDialogRef<FirebaseAdminDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.model = this.data.item;
    this.buildBloc();

  }

  ngOnInit() {
  }
  buildBloc() {
    const list: Dossier[] = [];
    this.size = Math.min(Object.keys(this.model).length, 3);
    Object.keys(this.model).sort().forEach(_ => {
      // tslint:disable-next-line:max-line-length
        list.push(Dossier.setByModel(_, this.model, _ , {  disabled: _ === 'id', hide: _ === 'id' && !this.model[_]  , icon: 'settings', iconAction: () => console.info(JSON.stringify(this.model[_])) }));
    })
    // list.push(Dossier.set('', null, { custom: true }));
    this.item = [{ list: list }];
  }
  addField(fieldname) {
    if (fieldname === 'id') { return; }
    if (fieldname && Object.keys(this.model).filter(_ => _ === fieldname).length === 0) {
      this.model[fieldname] = null;
    }
    this.buildBloc();
  }
}
