import json from '../package.json'
import * as pkg from '../index.ts'

describe(json.name, () => {
  const {default: Component} = pkg

  test('library should include defined exported elements', () => {

  })
})