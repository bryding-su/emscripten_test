let incrementValue = (val) => 0;

const importObject = {
  global: {},
  env: {
    __memory_base: 0,
    __table_base: 0,
    memory: new WebAssembly.Memory({
        initial: 256,
        maximum: 512,
    }),
    table: new WebAssembly.Table({
        initial: 2,
        element: 'anyfunc',
    }),
    _log: Math.log,
  }
}

WebAssembly.instantiateStreaming(fetch("output.wasm"), importObject).then(result => {
  incrementValue = result.instance.exports.Increment;
});

function OnIncrementPressed() {
  let currentValue = document.getElementById('val').innerHTML;
  let newValue = incrementValue(currentValue);
  document.getElementById('val').innerHTML = newValue;
}