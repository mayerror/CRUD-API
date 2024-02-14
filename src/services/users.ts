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

  deleteUser(id: string) {
    const indexToDel = this.users.reduce((acc, curr, index) => {
      return curr.id === id ? index : acc;
    }, 0);
    this.users.splice(indexToDel, 1);
  }
}

export default Users;
