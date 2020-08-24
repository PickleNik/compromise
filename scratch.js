const nlp = require('./src/index')
// nlp.verbose(true)
// let txt = require('./scripts/test/speed/_sotu-text.js')
// nlp.extend(require('./plugins/numbers/src'))
// nlp.extend(require('./plugins/dates/src'))
nlp.extend(require('./plugins/sentences/src'))

// let doc = nlp('i really should!')
// console.log(doc.verbs(0).conjugate())
// doc.verbs().toPastTense()
// doc.debug()
// console.log(doc.text())
// let doc = nlp('i am being driven')
// let doc = nlp('i should be driven')
// let doc = nlp('i should have been driven')
// doc.verbs().toParticiple()
// doc.verbs().toPastTense()
// doc.debug()
// console.log(doc.verbs(0).conjugate())
// doc.sentences().toFutureTense().debug()

// console.log(nlp('next week').dates().json())
// nlp('you are John, Lisa, Fred').match('#FirstName{1,2}').debug()

let doc = nlp('i seriously could even drive').debug()
doc.verbs().toParticiple()
console.log(doc.text())
// i thought he really could have.

// let doc = nlp('i did really walk')
// doc.sentences().toPresentTense()
// console.log(doc.text())

/*
    Snowboarding is a winter sport.   [snowboarding = subject]
    I love snowboarding.    [snowboarding = object ]
    I am excited by snowboarding.   [snowboarding = object of a preposition]
    One popular sport is snowboarding.   [snowboarding = subject complement]
    Right now, the athlete is snowboarding.   [is snowboarding = present continuous]    
    He was snowboarding yesterday afternoon.   [was snowboarding = past continuous]
    Tomorrow, my friends and I are going to be snowboarding.   [are going to be snowboarding = future 
*/
