class User {
    id: Int16Array;
    firstName: string;
    lastName: string;
    username: string;
    status: Int16Array;

    constructor(id: Int16Array, firstName: string, lastName: string, username: string, status: Int16Array) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.status = status;
    }
}

export default User;