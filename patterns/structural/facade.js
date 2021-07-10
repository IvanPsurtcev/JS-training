class Complaint {
    constructor() {
        this.complaints = []
    }
    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}
class ProductsComplaints extends Complaint {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}
class ServiceComplaints extends Complaint {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}
class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint
        if (type === 'service') {
            complaint = new ServiceComplaints()
        } else {
            complaint = new ProductsComplaints()
        }
        return complaint.add({id, customer, details})
    }
}
const registry = new ComplaintRegistry()
console.log(registry.register('Iva', 'service', 'недоступен'))
console.log(registry.register('Ksu', 'product', 'ошибка'))