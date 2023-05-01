export default [
  // simple mappings
  { word: '@', out: ['at'] },
  { word: 'arent', out: ['are', 'not'] },
  { word: 'alot', out: ['a', 'lot'] },
  { word: 'brb', out: ['be', 'right', 'back'] },
  { word: 'cannot', out: ['can', 'not'] },
  { word: 'cant', out: ['can', 'not'] },
  { word: 'dont', out: ['do', 'not'] },
  { word: 'dun', out: ['do', 'not'] },
  { word: 'wont', out: ['will', 'not'] },
  { word: "can't", out: ['can', 'not'] },
  { word: "shan't", out: ['should', 'not'] },
  { word: "won't", out: ['will', 'not'] },
  { word: "that's", out: ['that', 'is'] },
  { word: "what's", out: ['what', 'is'] },
  { word: "let's", out: ['let', 'us'] },
  { word: "there's", out: ['there', 'is'] },
  { word: 'dunno', out: ['do', 'not', 'know'] },
  { word: 'gonna', out: ['going', 'to'] },
  { word: 'gotta', out: ['have', 'got', 'to'] }, //hmm
  { word: 'gimme', out: ['give', 'me'] },
  { word: 'tryna', out: ['trying', 'to'] },
  { word: 'gtg', out: ['got', 'to', 'go'] },
  { word: 'im', out: ['i', 'am'] },
  { word: 'imma', out: ['I', 'will'] },
  { word: 'imo', out: ['in', 'my', 'opinion'] },
  { word: 'irl', out: ['in', 'real', 'life'] },
  { word: 'ive', out: ['i', 'have'] },
  { word: 'rn', out: ['right', 'now'] },
  { word: 'tbh', out: ['to', 'be', 'honest'] },
  { word: 'wanna', out: ['want', 'to'] },
  { word: `c'mere`, out: ['come', 'here'] },
  { word: `c'mon`, out: ['come', 'on'] },
  // apostrophe d
  { word: 'howd', out: ['how', 'did'] },
  { word: 'whatd', out: ['what', 'did'] },
  { word: 'whend', out: ['when', 'did'] },
  { word: 'whered', out: ['where', 'did'] },
  // shoulda, coulda
  { word: 'shoulda', out: ['should', 'have'] },
  { word: 'coulda', out: ['coulda', 'have'] },
  { word: 'woulda', out: ['woulda', 'have'] },
  { word: 'musta', out: ['must', 'have'] },

  // { after: `cause`, out: ['because'] },
  { word: "tis", out: ['it', 'is'] },
  { word: "twas", out: ['it', 'was'] },
  { word: `y'know`, out: ['you', 'know'] },
  { word: "ne'er", out: ['never'] },
  { word: "o'er", out: ['over'] },
  // contraction-part mappings
  { after: 'll', out: ['will'] },
  { after: 've', out: ['have'] },
  { after: 're', out: ['are'] },
  { after: 'm', out: ['am'] },
  // french contractions
  { before: 'c', out: ['ce'] },
  { before: 'm', out: ['me'] },
  { before: 'n', out: ['ne'] },
  { before: 'qu', out: ['que'] },
  { before: 's', out: ['se'] },
  { before: 't', out: ['tu'] }, // t'aime
]
