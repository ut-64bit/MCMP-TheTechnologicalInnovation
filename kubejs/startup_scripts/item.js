onEvent('item.registry', event => {
  // item
  event.create('incomplete_light_bulb', 'create:sequenced_assembly')
    .texture('kubejs:item/immersiveengineering/incomplete_light_bulb')
    .translationKey('item.kubejs.incomplete_light_bulb')
})
