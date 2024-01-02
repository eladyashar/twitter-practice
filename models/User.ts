class User {
    id: number;
    username: string;
    email: string;
    // other properties
  
    constructor(id: number, username: string, email: string) {
      this.id = id;
      this.username = username;
      this.email = email;
    }   
  }
  export default User;