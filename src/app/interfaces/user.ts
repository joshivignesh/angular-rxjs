import { Iuser } from './Iuser';

export class User implements Iuser {
  id: string;
  name: string;
  username!: string;
  email!: string;
  address!: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        };
    };
  phone!: string;
  website!: string;
  company!: {
        name: string;
        catchPhrase: string;
        bs: string;
    };

  constructor(user: Iuser) {
    this.id = user.id;
    this.name = user.name.toUpperCase();
  }
}