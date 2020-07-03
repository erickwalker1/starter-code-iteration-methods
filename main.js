// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
//const greenEyes2 = users.filter(function (user) {
//    return user.eyeColor === "green"
//})
printKata(0, greenEyes1) // If you don't have this function already, see the "Set up" section above.

const isActive = users.filter(users => users.isActive === true)

printKata(1, isActive)

const email1 = users.map(user => user.email)

printKata(2, email1)


const ovation1 = users.some(user => user.company === "OVATION")

printKata(3, ovation1)

const firstOver38 = users.find(user => user.age > 38)

printKata(4, firstOver38)

const over38AndActive = users
.filter(users => users.isActive === true)
.find(users => users.age > 38)
printKata(5, over38AndActive)

const zencoUsers = users
.filter(users => users.company === "ZENCO")
.find(users => users.balance)
printKata(6, zencoUsers)

const fugiat = users 
.filter(users => users.tags.includes('fugiat'))
.map(users => users.age)

printKata(7, fugiat)