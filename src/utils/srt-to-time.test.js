import { hmsToMilliseconds } from './str-to-time'

describe('hmsToMilliseconds', () => {
  test('parses one duration string to milliseconds', () => {
    const result = hmsToMilliseconds('10:34:17')

    expect(result).toEqual(38057000)
  })

  test('returns null for non string value', () => {
    expect(hmsToMilliseconds({})).toBeNull()
  })
})
