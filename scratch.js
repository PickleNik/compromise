// const nlp = require('./src/index')
const nlp = require('./alt')
// nlp.extend(require('./plugins/rule-machine/src'))
// nlp.extend(require('./plugins/dates/src'))
// nlp.extend(require('./plugins/typeahead/src'))
// const spacetime = require('/Users/spencer/mountain/spacetime')
// nlp.extend(require('./plugins/sentences/src'))
// const text =  require('/Users/spencer/mountain/compromise/scripts/perf/flame/_sotu-text.js')
// const fmt = iso => (iso ? spacetime(iso).format('{day-short} {nice} {year}') : '-')
// nlp.verbose(true)

let doc = nlp(`one two foo three. foo five. six foo seven`)
// doc.cache()
let m = doc.match('[foo] [. .?]', 1)
console.log(m.out('array'))

// console.log(m._groups)
// console.log(m.groups('word').text())
// console.log(doc.text())

// console.log(nlp.parseMatch('no [#Noun] and [<foo>cool] [fun and stuff]'))
