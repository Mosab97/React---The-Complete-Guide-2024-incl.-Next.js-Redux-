import userService from './services/userService.js';
import { log, logTypes } from './utils/logger.js';

// Usage example
try {
  // Create some users
  const john = userService.createUser('John Doe', 'john@example.com');
  log(`Created user: ${john.getFullDetails()}`);

  const jane = userService.createUser('Jane Smith', 'jane@example.com');
  log(`Created user: ${jane.getFullDetails()}`);

  // Get all users
  const allUsers = userService.getAllUsers();
  log(`Total users: ${allUsers.length}`);

  // Try to create invalid user
  userService.createUser('Invalid@Name', 'invalid-email');
} catch (error) {
  log(error.message, logTypes.ERROR);
}
