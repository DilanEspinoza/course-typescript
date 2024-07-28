var UserAccount = /** @class */ (function () {
    function UserAccount(name, username, owner, age) {
        this.name = name;
        this.username = username;
        this.owner = owner;
        this.age = age;
    }
    return UserAccount;
}());
var pepelian = new UserAccount("Pepelian", "pepelian_username", true, 18);
console.log(pepelian);
