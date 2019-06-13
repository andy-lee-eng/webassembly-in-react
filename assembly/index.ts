// The entry file of your WebAssembly module.
NativeMath.seedRandom(1234);

export function factorial(value: f64): f64 {
  if (value == 0 || value == 1) return 1;
  return value * factorial(value - 1);
}

export function scramble(input: string) : string {
  let result = input;
  for(let n = 0; n < 100; n ++) {
    const start = <i32>Math.floor(Math.random() * input.length);
    const end = start + <i32>Math.floor(Math.random() * (input.length - start));
    result = result.substring(0, start) + result.substring(end) + result.substring(start, end);
  }
  return result;
}
