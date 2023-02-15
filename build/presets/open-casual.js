// This is a generated file. Do not edit it directly.
// Make your changes to presets/open-casual.json then rebuild
// this file with `npm run build-presets -- open-casual`.
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
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"open-casual","name":"Open-Casual","description":"All shortcuts start open. Requires no speedrun or glitch knowledge for completion. Low average complexity.","author":"TalicZealot","weight":-100},"lockLocation":[{"location":"Soul of Bat","comment":"Requires Mist + at least Leap Stone","locks":["Form of Mist + Leap Stone","Form of Mist + Gravity Boots","Form of Mist + Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Fire of Bat","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Echo of Bat","comment":"Requires flight + a transformation","locks":["Soul of Bat","Gravity Boots + Leap Stone + Form of Mist","Gravity Boots + Leap Stone + Soul of Wolf","Form of Mist + Power of Mist"]},{"location":"Force of Echo","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Power of Wolf","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Skill of Wolf","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Form of Mist","comment":"Requires at least Leap Stone","locks":[]},{"location":"Power of Mist","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Gas Cloud","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Gravity Boots","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Leap Stone","comment":"Open","locks":[]},{"location":"Holy Symbol","locks":["Merman Statue"]},{"location":"Merman Statue","comment":"Open","locks":[]},{"location":"Bat Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Ghost Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Faerie Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Demon Card","comment":"Requires at least Leap Stone","locks":["Leap Stone","Soul of Bat","Form of Mist + Power of Mist","Soul of Wolf + Power of Wolf"]},{"location":"Sword Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Heart of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Tooth of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Rib of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone + Form of Mist","Holy glasses + Gravity Boots + Leap Stone + Soul of Wolf","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Eye of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Spike Breaker","locks":["Soul of Bat + Echo of Bat"]},{"location":"Gold ring","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Silver ring","locks":["Spike Breaker + Form of Mist"]},{"location":"Holy glasses","locks":["Silver ring + Gold ring"],"comment":"Access must also give flight"},{"location":"Crystal cloak","locks":[]},{"location":"Mormegil","comment":"Requires at least Leap Stone","locks":["Leap Stone","Soul of Bat","Form of Mist + Power of Mist","Soul of Wolf + Power of Wolf"]},{"location":"Dark Blade","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Arcana","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Trio","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Holy mail","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Jewel sword","comment":"Requires Wolf + Bat","locks":["Soul of Wolf + Soul of Bat"]},{"location":"Mystic pendant","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Ankh of Life","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Morningstar","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Goggles","comment":"Open","locks":[]},{"location":"Silver plate","comment":"Open","locks":[]},{"location":"Cutlass","comment":"Open","locks":[]},{"location":"Platinum mail","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Falchion","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Gold plate","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bekatowa","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Holy rod","comment":"Requires at least Leap Stone","locks":["Leap Stone","Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Library Onyx","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Alucart sword","comment":"Requires at least Cube of Zoe + at least Leap Stone","locks":["Cube of Zoe + Soul of Bat","Cube of Zoe + Leap Stone","Cube of Zoe + Gravity Boots","Cube of Zoe + Form of Mist + Power of Mist"]},{"location":"Broadsword","comment":"Open","locks":[]},{"location":"Estoc","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Olrox Garnet","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Blood cloak","comment":"Open","locks":[]},{"location":"Shield rod","comment":"Open","locks":[]},{"location":"Knight shield","comment":"Open","locks":[]},{"location":"Holy sword","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bandanna","comment":"Open","locks":[]},{"location":"Secret boots","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Nunchaku","comment":"Requires Holy Symbol","locks":["Holy Symbol"]},{"location":"Knuckle duster","comment":"Open","locks":[]},{"location":"Caverns Onyx","comment":"Requires at least Leap Stone","locks":["Merman Statue","Soul of Bat","Holy Symbol + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Combat knife","comment":"Open","locks":[]},{"location":"Ring of Ares","comment":"Requires Demon Card","locks":["Demon Card","Nosedevil Card"]},{"location":"Bloodstone","comment":"Open","locks":[]},{"location":"Icebrand","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Form of Mist + Power of Mist"]},{"location":"Walk armor","comment":"Open","locks":[]},{"location":"Beryl circlet","comment":"Requires Holy glasses + Bat + Wolf","locks":["Holy glasses + Soul of Bat + Soul of Wolf"]},{"location":"Talisman","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Goddess shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Twilight cloak","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Talwar","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sword of Dawn","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Bastard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Royal cloak","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Lightning mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Moon rod","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sunstone","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Luminus","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Dragon helm","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Shotel","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Staurolite","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Badelaire","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Forbidden Library Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Garnet","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Osafune katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Necklace of J","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Floating Catacombs Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sword of Hador","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Gram","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Fury plate","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]}],"complexityGoal":{"min":1,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]},"writes":[{"comment":"Jump to injected code","address":"0x000fa97c","type":"word","value":"0x0c04db00"},{"address":"0x00158c98","type":"word","value":"0x34020001","comment":"ori v0, 0x0001"},{"type":"word","value":"0x3c038004","comment":"lui v1, 0x8004"},{"comment":"sb v0, 0xbdfc (v1)","type":"word","value":"0xa062bdfc"},{"comment":"sb v0, 0xbe1d (v1)","type":"word","value":"0xa062be1d"},{"comment":"sb v0, 0xbe6f (v1)","type":"word","value":"0xa062be6f"},{"comment":"sb v0, 0xbe4c (v1)","type":"word","value":"0xa062be4c"},{"comment":"sb v0, 0xbe9e (v1)","type":"word","value":"0xa062be9e"},{"comment":"sb v0, 0xbe9d (v1)","type":"word","value":"0xa062be9d"},{"comment":"sb v0, 0xbded (v1)","type":"word","value":"0xa062bded"},{"comment":"sb v0, 0xbe1c (v1)","type":"word","value":"0xa062be1c"},{"comment":"sb v0, 0xbe1e (v1)","type":"word","value":"0xa062be1e"},{"comment":"sb v0, 0xbe3c (v1)","type":"word","value":"0xa062be3c"},{"comment":"sb v0, 0xbe44 (v1)","type":"word","value":"0xa062be44"},{"comment":"sb v0, 0xbe80 (v1)","type":"word","value":"0xa062be80"},{"type":"word","value":"0x34020003","comment":"ori v0, 0x0003"},{"comment":"sb v0, 0xbeb3 (v1)","type":"word","value":"0xa062beb3"},{"type":"word","value":"0x3c038009","comment":"lui v1, 0x8009"},{"type":"word","value":"0x340200ff","comment":"ori v0, 0x00ff"},{"comment":"sb v0, 0x7A30 (v1)","type":"word","value":"0xa0627a30"},{"type":"word","value":"0x34020003","comment":"ori v0, 0x0003"},{"comment":"sb v0, 0x7974 (v1)","type":"word","value":"0xa0627974"},{"comment":"lb t1, 0x7b33 (v1)","type":"word","value":"0x80697b33"},{"type":"word","value":"0x806a7a90","comment":"lb t2, 0x7a90 (v1)"},{"type":"word","value":"0xa0697a90","comment":"sb t1, 0x7a90 (v1)"},{"type":"word","value":"0xa06a7b33","comment":"sb t2, 0x7b33(v1)"},{"comment":"j 0x800e493c","type":"word","value":"0x0803924f"},{"type":"word","value":"0x00000000","comment":"nop"}]})

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
