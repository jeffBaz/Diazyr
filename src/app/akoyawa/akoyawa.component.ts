import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Prestataire, Prestation, TypePrestation } from 'app/models/model';
import { Dossier } from 'dia_utils-lib';
import * as env from '../../environments/environment';

@Component({
  selector: 'app-akoyawa',
  templateUrl: './akoyawa.component.html',
  styleUrls: ['./akoyawa.component.scss']
})
export class AkoyawaComponent implements OnInit {
  config = env.environment.applications.CONFIGURATION;
  prestationsForm = [];
  typePrestationsForm: any = [];
  prestataireForm: any = [];
  prestataires: Prestataire[] = [];
  searchText: string;
  typePrestations: TypePrestation[] = [];
  nbColumns = 3;
  prestations: Prestation[];
  constructor(public db: AngularFirestore) { }

  ngOnInit() {
    this.getPrestations();
    this.getPrestataires();
    this.getTypePrestation();
  }
  setPrestation(s: Prestation, b?) {
    this.prestationsForm = [];
    const list: Dossier[] = [];
    //if (s.id) {

    list.push(Dossier.setByModel('Titre de la scene', s, 'titre'));
    list.push(Dossier.setByModel('Duree en heure', s, 'duree'));
    list.push(Dossier.setByModel('Prestataire', s, 'prestataire', { selectValues: this.prestataires }));
    list.push(Dossier.setByModel('Type de prestation', s, 'typePrestation'));
    list.push(Dossier.setByModel('Prix', s, 'prix'));
    list.push(Dossier.set('Choices: ', '', { custom: true, sizeColumn: this.nbColumns }));
    list.push(Dossier.set('Image associé: ', '', { custom: true, sizeColumn: this.nbColumns }));
    this.prestationsForm.push({ list: list });
    if (!b) this.prestations.push(list[0].model);
    //}
  }

  setTypePrestation(s: TypePrestation, b?) {
    this.typePrestationsForm = [];
    const list: Dossier[] = [];
    //if (s.id) {

    list.push(Dossier.setByModel('Titre du type de prestation', s, 'libelle'));
    list.push(Dossier.setByModel('Description', s, 'desc'));
    list.push(Dossier.set('Image associé: ', '', { custom: true, sizeColumn: this.nbColumns }));
    // list.push(Dossier.set('Image associé ', s.url, { advancedCustoms: [{ template: this.uploadUserTpl, context: s }] }));
    this.typePrestationsForm.push({ list: list });
    if (!b) this.typePrestations.push(list[0].model);
    //}
  }


  setPrestataire(s: Prestataire, b?) {
    this.prestataireForm = [];
    const list: Dossier[] = [];
    //if (s.id) {

    list.push(Dossier.setByModel('Nom', s, 'nom'));
    list.push(Dossier.setByModel('Prénom', s, 'prenom'));
    list.push(Dossier.set('Image associé: ', '', { custom: true, sizeColumn: this.nbColumns }));
    this.prestataireForm.push({ list: list });
    if (!b) this.prestataires.push(list[0].model);
    //}
  }

  getTypePrestation() {
    this.db.collection('typePrestations').valueChanges().subscribe(_ => {
      _ = _ as TypePrestation[];

      this.typePrestations = _;
      this.typePrestations.forEach(__ => this.setTypePrestation(__));
    });
  }
  getPrestataires() {
    this.db.collection('prestataires').valueChanges().subscribe(_ => {
      _ = _ as Prestataire[];

      this.prestataires = _;
      //this.prestataires.forEach(__ => this.setPrestataire(__));
    });
  }

  getPrestations() {
    this.db.collection('prestations').valueChanges().subscribe(_ => {
      this.prestations = _ as Prestation[];
      this.prestations.forEach(__ => this.setPrestation(__));
    });
  }
  addPrestataire() {
    this.setPrestataire({} as Prestation);
  }
  addPrestation() {
    this.setPrestation({} as Prestation);
  }
  addTypePrestation() {
    this.setTypePrestation({} as Prestation);
  }
  loadPrestataire(s) {
    this.setPrestataire(s as Prestataire, true);
  }
  loadPrestation(s) {
    this.setPrestation(s as Prestation, true);
  }
  loadTypePrestation(s) {
    this.setTypePrestation(s as TypePrestation, true);
  }
  refreshPrestataire(s) {
    this.db.collection('prestataires').doc(s.id).update(s).then(_ => {});
  }
  refreshPrestation(s) {

  }
  refreshTypePrestation(s) {

  }
  deletePrestataire(s) {

  }
  deletePrestation(s) {

  }
  deleteTypePrestation(s) {

  }
  uploadPrestataire(s) {
    this.db.collection('prestataires').add(s).then(_ => {
      s.id = _.id;
      this.refreshPrestataire(s);
      console.log(_);
    });
  }
  uploadPrestation(s) {

  }
  uploadTypePrestation(s) {

  }
}
