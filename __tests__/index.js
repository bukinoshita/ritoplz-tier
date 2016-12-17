'use strict'

import test from 'ava'
import getTier from './../'

test('get tier bronze', t => {
  const bronze = getTier('bronze').tier.name
  const Bronze = getTier('Bronze').tier.name

  t.is(bronze, 'bronze')
  t.is(Bronze, 'bronze')
})

test('get tier silver', t => {
  const silver = getTier('silver').tier.name
  const Silver = getTier('Silver').tier.name

  t.is(silver, 'silver')
  t.is(Silver, 'silver')
})

test('get tier gold', t => {
  const gold = getTier('gold').tier.name
  const Gold = getTier('Gold').tier.name

  t.is(gold, 'gold')
  t.is(Gold, 'gold')
})

test('get tier platinum', t => {
  const platinum = getTier('platinum').tier.name
  const Platinum = getTier('Platinum').tier.name

  t.is(platinum, 'platinum')
  t.is(Platinum, 'platinum')
})

test('get tier diamond', t => {
  const diamond = getTier('diamond').tier.name
  const Diamond = getTier('Diamond').tier.name

  t.is(diamond, 'diamond')
  t.is(Diamond, 'diamond')
})

test('get tier master', t => {
  const master = getTier('master').tier.name
  const Master = getTier('Master').tier.name

  t.is(master, 'master')
  t.is(Master, 'master')
})

test('get tier challenger', t => {
  const challenger = getTier('challenger').tier.name
  const Challenger = getTier('Challenger').tier.name

  t.is(challenger, 'challenger')
  t.is(Challenger, 'challenger')
})

test('get tier unranked', t => {
  const unranked = getTier('unranked').tier.name
  const Unranked = getTier('Unranked').tier.name

  t.is(unranked, 'unranked')
  t.is(Unranked, 'unranked')
})

test('no tier', t => {
  const tier = getTier()

  t.is(tier, 'Please, provide a Tier.')
})

test('tier not found', t => {
  const tierName = 'UltraBlaster'
  const tier = getTier(tierName)

  t.is(tier, `Tier ${tierName} not found.`)
})
