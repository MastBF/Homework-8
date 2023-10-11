class University {
    constructor() {
        this.teachers = []
        this.students = []

    }
    addMember(member) {
        if (member.role === 'teacher') {
            this.teachers.push(member)
        } else {
            this.students.push(member)
        }

    }
    removeMember(member) {
        if (member.role === 'teacher') {
            this.teachers = this.teachers.slice(0,this.teachers.indexOf(member))
            .concat(this.teachers.slice(this.teachers.indexOf(member) + 1))
        } else {

         this.students = this.students.slice(0,this.students.indexOf(member))
         .concat(this.students.slice(this.students.indexOf(member) + 1))
        }
    }
    startLesson() {
        this.teachers.forEach(elem => {
            elem.energy = elem.energy - 5
        })
        this.students.forEach(elem => {
            elem.energy = elem.energy - 2
        })
    }
}
class UniversityMembers {
    constructor(name, age, role, energy = 24) {
        this.name = name
        this.age = age
        this.role = role
        this.energy = energy
    }
    info() {
        return [this.name, this.age, this.role, this.energy]
    }
}

class Teacher extends UniversityMembers {
    constructor(name, age, role, energy) {
        super(name, age, role, energy)
    }
}

class Student extends UniversityMembers {
    constructor(name, age, role, energy) {
        super(name, age, role, energy)
    }
}

let teacher = new Teacher('John', 31, 'teacher')
let teacher2 = new Teacher('Walter', 40, 'teacher', 40)

let student = new Student('James', 19, 'student', 40)
let student2 = new Student('Hector', 21, 'student', 40)



let university = new University()
university.addMember(teacher)
university.addMember(teacher2)
university.addMember(student)
university.removeMember(student2)
university.removeMember(teacher2)
university.startLesson()
university.startLesson()



console.log(university.teachers)
console.log(university.students)