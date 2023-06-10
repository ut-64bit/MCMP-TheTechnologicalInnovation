onEvent('recipes', event => {
  // recipes

  // botania
  event.remove({ output: 'botania:flight_tiara' })
  event.remove({ output: 'botania:mana_fluxfield' })
  event.remove({ output: 'botania:conjuration_catalyst' })
  event.remove({ output: 'botanicadds:energizera' })
  event.remove({ output: 'botanicadds:energizera_floating' })

  // tconstruct
  event.remove({ output: 'tconstruct:earth_slime_sling' })
  event.remove({ output: 'tconstruct:ender_slime_sling' })
  event.remove({ output: 'tconstruct:ichor_slime_sling' })
  event.remove({ output: 'tconstruct:sky_slime_sling' })
  event.remove({ type: 'tconstruct:ore_melting' })
  event.remove({ id: 'tconstruct:smeltery/seared/grout' })
  event.remove({ id: 'tconstruct:smeltery/seared/grout_multiple' })

  // create
  event.recipes.create.mixing('2x tconstruct:grout', ['minecraft:clay_ball', '#minecraft:sand', 'minecraft:gravel'])

  // ars_nouveau
  event.remove({ output: 'ars_nouveau:warp_scroll' })
})

onEvent("lootjs", event => {
  // loot_table
  event
    .addLootTableModifier(/^botania:.*/)
    .removeLoot('botania:lexicon');
});