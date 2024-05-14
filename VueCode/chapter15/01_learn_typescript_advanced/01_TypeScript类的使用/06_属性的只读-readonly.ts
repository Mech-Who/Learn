type FriendType = { name: string }
class Person {
  readonly name: string
  readonly friend?: FriendType
  constructor(name: string, friend?: FriendType) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person("why", {name: 'kobe'})
console.log(p.name, p.friend)

if (p.friend) {
  p.friend.name = 'evan'
}

