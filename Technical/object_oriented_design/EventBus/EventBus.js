import { generateAlphanumericString } from '../utils';

export class EventBus {
  constructor() {
    this._keys = new Set();
    this._events = {};
    this._handlers = {};
  }

  deregister(key) {
    if (this._keys.has(key)) {
      Reflect.defineProperty(this._events[this._handlers[key].type], key);
      Reflect.deleteProperty(this._handlers, key);

      this._keys.delete(key);
    }
  }

  dispatch(event) {
    if (this._events[event.type]) {
      Object.values(this._events[event.type]).forEach(handler => handler(event));
    }
  }

  register(type, handler) {
    if (!this._events[type]) {
      this._events[type] = {};
    }

    const key = generateAlphanumericString();

    if (this._keys.has(key)) {
      return this.register(type, handler);
    }

    this._events[type][key] = handler;
    this._handlers[key] = { handler, type };
    this._keys.add(key);

    return key;
  }
}