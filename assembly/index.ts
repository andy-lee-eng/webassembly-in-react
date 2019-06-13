// The entry file of your WebAssembly module.
export function factorial(value: f64): f64 {
  if (value == 0 || value == 1) return 1;
  return value * factorial(value - 1);
}
