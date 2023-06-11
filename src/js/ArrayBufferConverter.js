export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const decodeBuf = new Uint16Array(this.buffer);
    let string = '';
    decodeBuf.forEach((item) => {
      string += String.fromCharCode(item);
    });
    return string;
  }
}
