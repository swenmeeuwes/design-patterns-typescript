import Observer from "./Observer";

export default abstract class Observable {
    private _observers: Array<Observer>;

    constructor() {
        this._observers = new Array<Observer>();
    }

    public register(observer: Observer) {
        this._observers.push(observer);
    }

    public deregister(observer: Observer) {
        this._observers = this._observers.filter(item => item !== observer);
    }

    public notify(eventIdentifier: string) {
        this._observers.forEach(observer => observer.onNotify(this, eventIdentifier));
    }
}