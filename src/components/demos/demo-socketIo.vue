<template>
  <div>

  </div>
</template>

<script>
import SocketIO from '../register/socketio';
export default {
  data() {
    return {
      output: [],
    };
  },
  mounted() {
    this.io = new SocketIO('Socket地址:端口');
    this.io.on('connect', () => {
      this.socketListeners()
      this.io.emit('login', { token: 'token' })
    })
  },
  methods: {
    connect() {
      this.io.connect()
    },
    disconnect() {
      if (this.io) {
        this.io.disconnect()
      }
    },
    socketListeners() {
      this.io.on('connect_error', (data) => { // data: string
        console.log(`[socket.io] connect_error:`, data)
      })
      this.io.on('loginSuccess', (data) => {
        console.log(`[socket.io] loginSuccess:`, data)
      })
      this.io.on('message', (data) => {
        console.log(`[socket.io] message:`, data)
      })
    },
    sendMessage() {
      this.io.emit('message', { msg: 'msg' })
    },
  },
};
</script>

<style scoped>

</style>
