// const nlp = require('./src/index')
const nlp = require('./alt')

// nlp.verbose(true)
let doc = nlp(`funniest`)
// doc.match('#Noun van [<name>.]').debug()
// doc.cache()
doc.debug()
// doc.match('#Noun [(who|whom|#Foo)]').debug()
// doc.match('#Noun (who|whom|#Foo)').debug()
// let m = doc.match('^he').tag('Verb')
// doc.canBe('#LastName').debug()
// m.unTag('Verb')
// doc.debug()
// doc.update(['/0/0:1']).debug()
