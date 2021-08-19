/* eslint-disable no-console, no-unused-vars */
// import './tests/_ignore/_error.js'
import nlp from './src/three.js'
nlp.verbose('tagger')

// ''
// ''
// ''

let doc = nlp(`Is that ok with you`)
// doc.compute('offset')
// doc.match('yeah').debug('highlight')
doc.compute('chunks')
doc.debug('chunks')
// console.log(m.json({ offset: true }))

// let str = `He said that he was hungry.`
// str = `I bought the materials that seem cool`
// nlp(str).compute('chunks').debug('chunks')
// let sub = m.match('is')
// sub.insertAfter('really')
// console.log(m.text() + '|')
// let m = nlp('the dog sat down quickly')
// m.verbs().debug()
// m.debug()

// str = 'retail [stores]'
// let doc = nlp('one yeah three. three four five.').forEach(p => {
//   p.toUpperCase()
// })
// doc.debug()

// console.log(nlp.parseMatch(null))

/*
['', '#'],
['', '#'],
['', '#'],
*/

/*

> One
.compute(normal)

> yeah
Insert/replace

> Three
.compute([root,  numbers, dates])
methods.compute.root(terms)

* Use suffix-thumb runner for transformations
* Figure-out phrase tagging 


*/
