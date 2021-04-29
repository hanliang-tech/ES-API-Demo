import Vue from 'vue';
import {
  getApp,
  isFunction,
} from '../../util';


const READY_STATE_CONNECTING = 0;
const READY_STATE_OPEN = 1;
const READY_STATE_CLOSING = 2;
const READY_STATE_CLOSED = 3;

const SOCKET_IO_MODULE_NAME = 'SocketIoModule';
const SOCKET_IO_NATIVE_EVENT = 'SocketIOEvents';

let SocketIoEventHub;
let app;

class SocketIo {
  constructor(url) {
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

    this.params = {
      url,
    };

    console.log('new socket.io', SOCKET_IO_MODULE_NAME)
    console.log('new socket.io', this.params)
    Vue.Native.callNativeWithPromise(SOCKET_IO_MODULE_NAME, 'connect', this.params).then((resp) => {
      if (!resp || resp.code !== 0 || typeof resp.id !== 'number') {
        console.log('Fail to create SocketIo connection', resp);
        return;
      }

      console.log('[socket.io] connect success')
      this.socketId = resp.id;
    });
  }

  /**
   * 断开连接
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
   * 重新连接
   */
  connect(url) {
    if (url) this.params.url = url
    Vue.Native.callNativeWithPromise(SOCKET_IO_MODULE_NAME, 'connect', this.params).then((resp) => {
      if (!resp || resp.code !== 0 || typeof resp.id !== 'number') {
        console.log('Fail to create SocketIo connection', resp);
        return;
      }

      console.log('[socket.io] connect success')
      this.socketId = resp.id;
    });
  }

  /**
   * 发送消息
   * event_name：消息名
   * data：消息参数
   */
  emit(event_name, data) {
    if (this.readyState !== READY_STATE_OPEN) {
      console.log('WebSocket is not connected');
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
   * 监听消息
   * event_name：消息名
   * callback：回调
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
   * SocketIo events handler from Vue.Native.
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

