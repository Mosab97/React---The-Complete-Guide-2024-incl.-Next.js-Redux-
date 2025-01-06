// 📁 src/models/User.js
export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  getFullDetails() {
    return `${this.name} (${this.email})`;
  }
}
