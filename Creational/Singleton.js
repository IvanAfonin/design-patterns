class Database {
    constructor(data) {
        if(Database.exists){
            return Database.instance
        }
        Database.instance = this
        Database.exists = true
        this.data = data
    }
    getData(){
        return this.data
    }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

// Will log same instance because of Singleton pattern
const mysql = new Database('MySQL')
console.log(mysql.getData())
