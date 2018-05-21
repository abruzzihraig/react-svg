/**
 * @jest-environment node
 */

describe('when loaded in a non-browser environment', () => {
  it('should not throw an error', () => {
    expect(() => {
      require('../src')
    }).not.toThrow('ReferenceError: window is not defined')
  })
})
