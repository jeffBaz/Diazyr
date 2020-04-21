export  interface BddId{
  _id?:string;
}
export interface User extends BddId{
  prenom?: string;
  nom?:string;
  email?:string;
  mot_de_passe?:string;
  pseudonyme?:string;
  tendance_politique?:string;
  url_photo_profil?:string;
  notes?:Note[]
}

export interface Question  extends BddId{
  question?: string;
  reponses?:Reponse[];
  notes?:Note[]
  index?:number;//specific
}
export interface Reponse  extends BddId{
  reponse?: string;
}
export interface Politicien  extends BddId{
  prenom?: string;
  nom?:string;
  age?:number;
  parti?:string;
  url_photo?:string;
  note?:number;
}

export interface Note  extends BddId{
  id_politicien ?: string,
   note ?: number
}

export interface Response{
  total?: number;
  page?: number;
  pageSize?: number;
  totalPages?: number;
  rows?:any;
}
export interface UserAccount {
  nom?: string;
  prenom?: string;
  login?: string;
  password?: string;
  photoUrl?: string;
  phone?: string;
  email?: string;
  roles?: any;
  id?: string;
}
export interface Menu{
  class?:string;
  icon?:string;
  libelle?:string;
  action?:()=>{}
}
