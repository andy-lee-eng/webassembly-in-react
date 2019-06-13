import {instantiateStreaming} from "assemblyscript/lib/loader";
export default instantiateStreaming(
    fetch('./as-api.wasm')
);
