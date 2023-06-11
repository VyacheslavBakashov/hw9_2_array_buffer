import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('load buffer', () => {
  const expected = getBuffer();
  const input = new ArrayBufferConverter();
  input.load(getBuffer());
  expect(input.buffer).toEqual(expected);
});

test('buffer to string', () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const input = new ArrayBufferConverter();
  input.load(getBuffer());
  expect(input.toString()).toEqual(expected);
});
