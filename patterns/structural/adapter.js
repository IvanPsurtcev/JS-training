class OldCalc {
    operations(t1,t2,operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}
class NewCalc {
    add(t1,t2) {
        return t1 + t2
    }
    sub(t1,t2) {
        return t1 - t2
    }
}
class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1,t2)
            case 'sub': return this.calc.sub(t1,t2)
            default: return NaN
        }
    }
}
const oldcalc = new OldCalc()
console.log(oldcalc.operations(10, 5, 'add'))

const newcalc = new NewCalc()
console.log(newcalc.add(10,5))

const adapter = new CalcAdapter()
console.log(adapter.operations(20, 12, 'sub'))