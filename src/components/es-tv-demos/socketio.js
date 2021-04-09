import Vue from 'vue';
import {
  getApp,
  warn,
  isFunction,
} from '../util';

const READY_STATE_CONNECTING = 0;
const READY_STATE_OPEN = 1;
const READY_STATE_CLOSING = 2;
const READY_STATE_CLOSED = 3;

const SOCKET_IO_MODULE_NAME = 'SocketIoModule';
const SOCKET_IO_NATIVE_EVENT = 'SocketIOEvents';

let SocketIoEventHub;
let app;

/**
 * The WebSocket API is an advanced technology that makes it possible to open a two-way
 * interactive communication session between the user's browser and a server. With this API,
 * you can send messages to a server and receive event-driven responses without having to
 * poll the server for a reply.
 */
class SocketIo {
  /**
   * Returns a newly created WebSocket object.
   *
   * @param {string} url - The URL to which to connect; this should be the URL to which the
   *                       WebSocket server will respond.
   * @param {string | string[]} [protocals] - Either a single protocol string or an array
   *                                          of protocol strings. These strings are used to
   *                                          indicate sub-protocols, so that a single server
   *                                          can implement multiple WebSocket sub-protocols
   *                                          (for example, you might want one server to be able
   *                                          to handle different types of interactions depending
   *                                          on the specified protocol).
   *                                          If you don't specify a protocol string, an empty
   *                                          string is assumed.
   * @param {Object} headers - Http headers will append to connection.
   */
  constructor(url, debug) {
    if (!app) {
      app = getApp();
    }

    this.url = url;
    this.readyState = READY_STATE_CONNECTING;
    this.SocketIoCallbacks = {};
    this.onSocketIoEvent = this.onSocketIoEvent.bind(this);

    if (!SocketIoEventHub) {
      SocketIoEventHub = app.$on(SOCKET_IO_NATIVE_EVENT, this.onSocketIoEvent);
    }

    if (!url || typeof url !== 'string') {
      throw new TypeError('Invalid Socket url');
    }

    const params = {
      url,
    };

    console.log('new socket.io', SOCKET_IO_MODULE_NAME)
    console.log('new socket.io', params)
    Vue.Native.callNativeWithPromise(SOCKET_IO_MODULE_NAME, 'connect', params).then((resp) => {
      if (!resp || resp.code !== 0 || typeof resp.id !== 'number') {
        warn('Fail to create SocketIo connection', resp);
        return;
      }

      console.log('[socket.io] connect success')
      this.socketId = resp.id;
    });
  }

  /**
   * Closes the WebSocket connection or connection attempt, if any.
   * If the connection is already CLOSED, this method does nothing.
   */
  disconnect() {
    if (this.readyState !== READY_STATE_OPEN) {
      return;
    }

    console.log('[socket.io] disconnect')
    this.readyState = READY_STATE_CLOSING;
    Vue.Native.callNative(SOCKET_IO_MODULE_NAME, 'disconnect', {
      id: this.socketId
    });
  }

  /**
   * Enqueues the specified data to be transmitted to the server over the WebSocket connection.
   *
   * @param {string} data - The data to send to the server. Hippy supports string type only.
   */
  emit(event_name, data) {
    if (this.readyState !== READY_STATE_OPEN) {
      warn('WebSocket is not connected');
      return;
    }

    Vue.Native.callNative(SOCKET_IO_MODULE_NAME, 'emit', {
      id: this.socketId,
      event: event_name,
      data,
    });
    console.log(`[socket.io] emit: ${event_name}, data:`, data)
  }

  /**
   * Set an EventHandler that is called when the WebSocket connection's readyState changes to OPEN;
   */
  on(event_name, callback) {
    this.SocketIoCallbacks[event_name] = callback;
    console.log(`[socket.io] listen: ${event_name}`)
    if (event_name === 'connect' || event_name === 'disconnect' || event_name === 'connect_error') return
    Vue.Native.callNative(SOCKET_IO_MODULE_NAME, 'on', {
      id: this.socketId,
      event: event_name
    });
  }

  /**
   * WebSocket events handler from Vue.Native.
   *
   * @param {Object} param - Native response.
   */
  onSocketIoEvent(param) {
    console.log(`[socket.io] onSocketIoEvent:`, param)
    if (typeof param !== 'object' || param.id !== this.socketId) {
      return;
    }

    const eventType = param.type;
    if (typeof eventType !== 'string') {
      return;
    }
    if (eventType === 'connect') {
      this.readyState = READY_STATE_OPEN;
    } else if (eventType === 'disconnect') {
      this.readyState = READY_STATE_CLOSED;
      app.$off(SOCKET_IO_NATIVE_EVENT);
    }

    const callback = this.SocketIoCallbacks[eventType];
    if (isFunction(callback)) {
      callback(param.data);
    }
  }
}

export default SocketIo;
