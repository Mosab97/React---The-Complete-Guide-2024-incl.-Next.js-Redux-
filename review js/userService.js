// 📁 src/services/userService.js
import { User } from '../models/User';
import { isValidEmail, isValidName } from './validation';

class UserService {
  constructor() {
    this.users = new Map();
  }

  createUser(name, email) {
    if (!isValidName(name)) {
      throw new Error('Invalid name');
    }
    if (!isValidEmail(email)) {
      throw new Error('Invalid email');
    }

    const id = Date.now().toString();
    const user = new User(id, name, email);
    this.users.set(id, user);
    return user;
  }

  getUser(id) {
    return this.users.get(id);
  }

  getAllUsers() {
    return Array.from(this.users.values());
  }
}

// We export a single instance as default
export default new UserService();
