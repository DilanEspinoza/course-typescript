interface User {
	name: string;
	username: string;
	owner: boolean;
	age?: number;
}

class UserAccount {
	name: string;
	username: string;
	owner: boolean;
	age: number;

	constructor(name: string, username: string, owner: boolean, age: number) {
		this.name = name;
		this.username = username;
		this.owner = owner;
		this.age = age;
	}
}

let pepelian: User = new UserAccount("Pepelian", "pepelian_username", true, 18);

console.log(pepelian);
