type FriendType = { name: string }
class Person {
  // 1. 只读属性可以在构造器中赋值，但是赋值之后不可以修改。
  readonly name: string
  // 2. 属性本身不能进行修改，但如果他是对象类型的，则对象中的属性可以修改。
  readonly friend?: FriendType
  constructor(name: string, friend?: FriendType) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person("why", { name: 'kobe' })
// 3. 直接修改只读的name会报错：Cannot assign to 'name' because it is a read-only
// p.name = 'liujun'
console.log(p.name, p.friend)

// p.friend = { name: 'evan' }  // 4. 直接修改只读的friend会报错
if (p.friend) {
  p.friend.name = 'evan'  // 5. friend对象中的name属性是可以修改的
}

