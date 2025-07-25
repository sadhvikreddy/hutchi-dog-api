import BaseDocument from "./BaseDocument";

export default interface Dog extends BaseDocument {
    name: string;
    variants: string[];
}