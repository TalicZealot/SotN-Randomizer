// This is a generated file. Do not edit it directly.
// Make your changes to presets/unlocked-casual.json then rebuild
// this file with `npm run build-presets -- unlocked-casual`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"unlocked-casual","name":"Unlocked-Casual","description":"Use casual logic, but all shortcuts start open.","author":"TalicZealot","weight":-100},"inherits":"casual","writes":[{"comment":"Jump to injected code","address":"0x000fa97c","type":"word","value":"0x0c04db00"},{"address":"0x00158c98","type":"word","value":"0x34020001","comment":"ori v0, 0x0001"},{"type":"word","value":"0x3c038004","comment":"lui v1, 0x8004"},{"comment":"sb v0, 0xbdfc (v1)","type":"word","value":"0xa062bdfc"},{"comment":"sb v0, 0xbe1d (v1)","type":"word","value":"0xa062be1d"},{"comment":"sb v0, 0xbe6f (v1)","type":"word","value":"0xa062be6f"},{"comment":"sb v0, 0xbe4c (v1)","type":"word","value":"0xa062be4c"},{"comment":"sb v0, 0xbe9e (v1)","type":"word","value":"0xa062be9e"},{"comment":"sb v0, 0xbe9d (v1)","type":"word","value":"0xa062be9d"},{"comment":"sb v0, 0xbded (v1)","type":"word","value":"0xa062bded"},{"comment":"sb v0, 0xbe1c (v1)","type":"word","value":"0xa062be1c"},{"comment":"sb v0, 0xbe1e (v1)","type":"word","value":"0xa062be1e"},{"comment":"sb v0, 0xbdec (v1)","type":"word","value":"0xa062bdec"},{"comment":"sb v0, 0xbed0 (v1)","type":"word","value":"0xa062bed0"},{"comment":"sb v0, 0xbe3c (v1)","type":"word","value":"0xa062be3c"},{"comment":"sb v0, 0xbe44 (v1)","type":"word","value":"0xa062be44"},{"comment":"sb v0, 0xbe80 (v1)","type":"word","value":"0xa062be80"},{"type":"word","value":"0x34020003","comment":"ori v0, 0x0003"},{"comment":"sb v0, 0xbeb3 (v1)","type":"word","value":"0xa062beb3"},{"type":"word","value":"0x3c038009","comment":"lui v1, 0x8009"},{"type":"word","value":"0x340200ff","comment":"ori v0, 0x00ff"},{"comment":"sb v0, 0x7A30 (v1)","type":"word","value":"0xa0627a30"},{"comment":"lb t1, 0x7b33 (v1)","type":"word","value":"0x80697b33"},{"type":"word","value":"0x806a7a90","comment":"lb t2, 0x7a90 (v1)"},{"type":"word","value":"0xa0697a90","comment":"sb t1, 0x7a90 (v1)"},{"type":"word","value":"0xa06a7b33","comment":"sb t2, 0x7b33(v1)"},{"comment":"j 0x800e493c","type":"word","value":"0x0803924f"},{"type":"word","value":"0x00000000","comment":"nop"}]})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
