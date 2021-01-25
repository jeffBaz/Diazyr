import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material';
import { FirebaseAdminDialogComponent } from 'app/firebase-admin-dialog/firebase-admin-dialog.component';


@Component({
  selector: 'app-firebase-admin',
  templateUrl: './firebase-admin.component.html',
  styleUrls: ['./firebase-admin.component.scss']
})
export class FirebaseAdminComponent implements OnInit {
  @Input()
  db: AngularFirestore;
  @Input()
  collectionsId: string[];
  @Input()
  config: string;
  initConfig;
  data: any;
  configuration; //: DocumentReference[];
  currentCollection: any;
  currentCollectionKey: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (this.config) {
      this.db.collection(this.config).valueChanges().subscribe(res => {
        if (!res || res.length === 0) {
          this.initConfig = true;
        } else {
          this.configuration = res[0];
          this.collectionsId = [...res.find(_ => _['diazyr_collections'])['diazyr_collections'] as string[]
            , ...this.collectionsId].filter(this.onlyUnique);
          this.initCollection()
        }
      })
    }
    this.initCollection()
  }
  initCollection() {
    this.data = {};
    this.collectionsId.forEach(_ => {
      if (_) {
        this.db.collection(_ as string).valueChanges().subscribe(res => {
          this.data[_ as string] = res;
        })
      } else {
        this.collectionsId = this.collectionsId.filter(__ => __ !== _);
      }
    })
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  selectCollection(collection) {
    this.currentCollectionKey = collection;
    if (!this.data[collection]) {
      this.data[collection] = [];
    }
    this.currentCollection = this.data[collection];
  }
  modifyItem(item, collection) {
    const dialogConfig = {
      width: '80%', data: {
        item: item,
      }
    };
    let n = JSON.parse(JSON.stringify(item));
    if (this.configuration[collection]) {
      this.configuration[collection].items.forEach(_ => {
        n[_] = null;
      })
    } else {
      let biggest = null
      this.data[collection].forEach(el => {
        if (!biggest || Object.keys(biggest).length < Object.keys(el).length) {
          biggest = el;
        }
      });
      if (biggest) {
        if (!this.configuration[collection] || !this.configuration[collection].items) {
          this.configuration[collection] = { items: [] };
        }
        Object.keys(biggest).forEach(_ => {
          n[_] = null;
          this.configuration[collection].items.push(_)
        })
      }

    }
    this.dialog.open(FirebaseAdminDialogComponent, dialogConfig).afterClosed().subscribe(_ => {
      if (_) {
        this.updateItem(_, collection)
        if (this.hasNewField(collection, _)) {
          this.generateConfig();
        }
      }
    });
  }
  createItem(item, collection) {
    const dialogConfig = {
      width: '80%', data: {
        item: item,
      }
    };
    
    if (this.configuration[collection]) {
      this.configuration[collection].items.forEach(_ => {
        item[_] = null;
      })
    } else {
      let biggest = null
      this.data[collection].forEach(el => {
        if (!biggest || Object.keys(biggest).length < Object.keys(el).length) {
          biggest = el;
        }
      });
      if (biggest) {
        if (!this.configuration[collection] || !this.configuration[collection].items) {
          this.configuration[collection] = { items: [] };
        }
        Object.keys(biggest).forEach(_ => {
          item[_] = null;
          this.configuration[collection].items.push(_)
        })
      }

    }
    this.dialog.open(FirebaseAdminDialogComponent, dialogConfig).afterClosed().subscribe(_ => {
      if (_) {
        this.addDocument(collection, _);
        if (this.hasNewField(collection, _)) {
          this.generateConfig();
        }
      }
    });
  }
  hasNewField(collection, _) {
    const keys = Object.keys(_);
    let hasNewField = false;
    keys.forEach(key => {
      if (!this.configuration[collection].items.find(__ => key === __)) {
        hasNewField = true;
      }
    });
    return hasNewField;
  }
  updateItem(item: FirebaseItem, collection: string) {
    this.db.collection(collection).doc(item.id).update(item).then(_ => {
      console.log(_);
    }).catch(_ => {
      console.error(_);
    })
  }
  generateFieldConfig(collection) {
    let biggest = null
    this.data[collection].forEach(el => {
      if (!biggest || Object.keys(biggest).length < Object.keys(el).length) {
        biggest = el;
      }
    });
    if (biggest) {
      if (!this.configuration[collection] || !this.configuration[collection].items) {
        this.configuration[collection] = { items: [] };
      }
      Object.keys(biggest).forEach(_ => {
        this.configuration[collection].items.push(_)
      })
    }
  }
  generateConfig() {
    if (this.config) {
      this.db.collection(this.config).doc('diazyr_collections').set(
        { 'diazyr_collections': this.collectionsId }
      );
      this.collectionsId.forEach(_ => {
        if (this.configuration[_]) {
          this.db.collection(this.config).doc(_).set(this.configuration[_]);
        } else {
          this.generateFieldConfig(_)
          this.db.collection(this.config).doc(_).set(this.configuration[_]);
        }
      })
    } else {
      alert('No config collection define');
    }
  }
  addCollection(name) {
    if (name === 'diazyr_collections') {
      alert('Nom réservé!!');
      return;
    }
    if (!name) {
      return;
    }
    this.db.collection(name).valueChanges().subscribe(res => {
      this.data[name] = res;
      if (!this.collectionsId.find(_ => _ === name)) {
        this.collectionsId.push(name);
        this.data[name] = [];
      }
      this.generateConfig();
    })
    if (!this.collectionsId.find(_ => _ === name)) {
      this.collectionsId.push(name);
      this.data[name] = [];
      this.generateConfig();
    }
  }
  addDocument(col, doc) {
    this.db.collection(col).add(doc).then(_ => {
      doc.id = _.id;
      this.data[col].push(doc);
      this.updateItem(doc, col);
    })
  }
  deleteCollection(name) {
    this.collectionsId = this.collectionsId.filter(_ => _ !== name);
    const res = confirm('Souhaitez vous supprimer la collection dans le store :  ' + name);
    if (res) {
      this.data[name].forEach(item => {
        this.deleteDocument(name, item);
      });
      this.db.collection(this.config).doc(name).delete();
      delete this.configuration[name];
    }
    delete this.data[name];
    this.generateConfig();
  }
  deleteDocument(col: string, doc: FirebaseItem) {
    this.db.collection(col).doc((doc as FirebaseItem).id).delete().then(_ => console.log(_)).catch(_ => console.error(_));
  }
}
export interface FirebaseItem extends DocumentReference {
  id: string;
}