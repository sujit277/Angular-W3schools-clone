export class Signup {
  id!: number;
  name!: string;
  email!: string;
  password!: string;

  /* Constructor for Converting Registration form Data into Object for Pushing into Fake Json Server */
  constructor(
    name: string,
    email: string,
    password: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
