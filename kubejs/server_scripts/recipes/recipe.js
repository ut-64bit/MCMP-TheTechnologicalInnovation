onEvent('recipes', event => {
  // botania
  event.remove({output:'botania:flight_tiara'})
  
  // tconstruct
  event.remove({output:'tconstruct:earth_slime_sling'})
  event.remove({output:'tconstruct:ender_slime_sling'})
  event.remove({output:'tconstruct:ichor_slime_sling'})
  event.remove({output:'tconstruct:sky_slime_sling'})
  
  event.remove({id:'tconstruct:smeltery/seared/grout'})
  event.remove({id:'tconstruct:smeltery/seared/grout_multiple'})
  event.recipes.create.mixing('2x tconstruct:grout', ['minecraft:clay_ball', '#minecraft:sand', 'minecraft:gravel'])
})
