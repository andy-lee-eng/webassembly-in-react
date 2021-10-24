import {instantiateStreaming} from "assemblyscript/lib/loader";
export default instantiateStreaming(
    fetch('./as-api.wasm')
).then(result => Object.assign({}, result.instance.exports, {
    scramble: input => {
        const pInput = result.exports.__newString(input);
        const pOutput = result.instance.exports.scramble(pInput);
        return result.exports.__getString(pOutput);
    }
}));
