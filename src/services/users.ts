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

  updateUser(user: User) {
    const indexToUpd = this.users.reduce((acc, curr, index) => {
      return curr.id === user.id ? index : acc;
    }, 0);
    if (this.users.length >= indexToUpd) {
      this.users[indexToUpd]!.username = user.username;
      this.users[indexToUpd]!.age = user.age;
      this.users[indexToUpd]!.hobbies = user.hobbies;
    }
  }
}

export default Users;
