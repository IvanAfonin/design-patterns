// Similar Classes
class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}
class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}
class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard : StandardMembership,
        premium : PremiumMembership
    }

    create(name, type = 'simple'){
        const Membership = MemberFactory.list[type]
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Ivan'),
    factory.create('Andrew', 'premium'),
    factory.create('Eugene', 'standard'),
    factory.create('Petr', 'premium')
]

members.forEach(member => {
    member.define()
})
