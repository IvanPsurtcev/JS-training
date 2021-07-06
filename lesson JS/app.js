/*const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop]: defaultValue)
    })
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
)
console.log(position)*/

//hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHiddenProps({
    name: 'Iva',
    age: 20,
    _uid: '21212'
})

// optimization

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))
        return new Proxy(target(...args),{
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr.item)
                        }
                    case 'findById':
                        return id => index[id]

                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 1, name: 'Vlad', job: 'Cooker', age: 25},
    {id: 2, name: 'Iva', job: 'Teacher', age: 21},
    {id: 3, name: 'Ksu', job: 'Engineer', age: 20},
    {id: 4, name: 'John', job: 'Taxer', age: 34}
])