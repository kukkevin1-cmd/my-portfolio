// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// React Router 7 needs these, but CRA's jsdom test environment doesn't provide them.
Object.assign(global, { TextEncoder, TextDecoder });
