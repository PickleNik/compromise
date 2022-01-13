import { textFromTerms } from './_text.js'
import fmts from './_fmts.js'
const defaults = {
  text: true,
  terms: true,
}

let opts = { case: 'none', unicode: 'some', use: 'machine', punctuation: 'some' }

const merge = function (a, b) {
  return Object.assign({}, a, b)
}

const fns = {
  text: (terms) => {
    return textFromTerms(terms, { keepPunct: true }, false)
  },
  normal: (terms) => textFromTerms(terms, merge(fmts.normal, { keepPunct: true }), false),
  implicit: (terms) => textFromTerms(terms, merge(fmts.implicit, { keepPunct: true }), false),

  machine: (terms) => textFromTerms(terms, opts, false),
  root: (terms) => textFromTerms(terms, merge(opts, { use: 'root' }), false),

  offset: (terms) => {
    let len = fns.text(terms).length
    return {
      index: terms[0].offset.index,
      start: terms[0].offset.start,
      length: len,
    }
  },
  terms: (terms) => {
    return terms.map(t => {
      let term = Object.assign({}, t)
      term.tags = Array.from(t.tags)
      return term
    })
  },
  confidence: (_terms, view, i) => view.eq(i).confidence(),
  syllables: (_terms, view, i) => view.eq(i).syllables(),
  sentence: (_terms, view, i) => view.eq(i).fullSentence().text(),
  dirty: (terms) => terms.some(t => t.dirty === true)
}
fns.sentences = fns.sentence
fns.clean = fns.normal
fns.reduced = fns.root

const toJSON = function (view, opts) {
  opts = opts || {}
  if (typeof opts === 'string') {
    opts = {}
  }
  opts = Object.assign({}, defaults, opts)
  // run any necessary upfront steps
  if (opts.offset) {
    view.compute('offset')
  }
  return view.docs.map((terms, i) => {
    let res = {}
    Object.keys(opts).forEach(k => {
      if (opts[k] && fns[k]) {
        res[k] = fns[k](terms, view, i)
      }
    })
    return res
  })
}


export default {
  /** return data */
  json: function (n) {
    let res = toJSON(this, n)
    if (typeof n === 'number') {
      return res[n]
    }
    return res
  },
}