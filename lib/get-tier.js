'use strict'

const bronze = require('./../helpers/bronze.json')
const silver = require('./../helpers/silver.json')
const gold = require('./../helpers/gold.json')
const platinum = require('./../helpers/platinum.json')
const diamond = require('./../helpers/diamond.json')
const master = require('./../helpers/master.json')
const challenger = require('./../helpers/challenger.json')
const unranked = require('./../helpers/unranked.json')

const getTier = tier => {
  if (!tier) {
    return 'Please, provide a Tier.'
  }

  switch (tier.toLowerCase()) {
    case 'bronze':
      return bronze

    case 'silver':
      return silver

    case 'gold':
      return gold

    case 'platinum':
      return platinum

    case 'diamond':
      return diamond

    case 'master':
      return master

    case 'challenger':
      return challenger

    case 'unranked':
      return unranked

    default:
      return `Tier ${tier} not found.`
  }
}

module.exports = getTier
