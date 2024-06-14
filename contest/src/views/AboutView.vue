<template>
    <div>
      <h1>Webcam Access Demo</h1>
      <video ref="webcam" width="640" height="480" autoplay></video>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WebcamAccess',
    mounted() {
      this.initWebcam();
    },
    methods: {
      initWebcam() {
        const webcam = this.$refs.webcam;
        
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
              webcam.srcObject = stream;
            })
            .catch((error) => {
              console.error('Error accessing webcam:', error);
            });
        } else {
          console.error('getUserMedia not supported in this browser.');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Add scoped styles for your component */
  </style>
  