class Users {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  setUsers(newUsers: User[]): void {
    this.users = newUsers;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}

export default Users;
