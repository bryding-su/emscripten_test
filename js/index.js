let incrementValue = (val) => 0;

WebAssembly.instantiateStreaming(fetch("output.wasm"), {}).then(result => {
  incrementValue = result.instance.exports.Increment;
});

function OnIncrementPressed() {
  let currentValue = document.getElementById('val').innerHTML;
  let newValue = incrementValue(currentValue);
  document.getElementById('val').innerHTML = newValue;
}