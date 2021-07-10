class Database {
    constructor(data) {
        if(Database.exists) {
            return Database.instance
        }
        Database.exists = true
        Database.instance = this
        this.data = data
    }

    getData() {
        return this.data
    }
}
const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())