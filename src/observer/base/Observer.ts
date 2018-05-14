import Observable from "./Observable";

export default interface Observer {
    onNotify(observable: Observable, eventIdentifier: string);
}