<template>
    <div class="items-center justify-center h-screen relative">
      <img src="../assets/background.png" alt="Background Image" class="absolute inset-0 w-full h-full object-cover opacity-20">
      
      <div class="absolute inset-0 flex flex-col items-center justify-start md:mt-44 mt-32">
        <div class="text-center">
          <h1 class="md:text-4xl text-lg font-extrabold text-black">Affection and laughter are the essential</h1>
          <h1 class="md:text-4xl text-lg font-extrabold text-black mb-2">elements of our meetings.</h1>
          <h6 class="md:text-xl text-sm text-black font-trattatello mb-4">Engage, cooperate, rejoice with Chatbunny: connecting, collaborating, celebrating together joyfully.</h6>
          
          <div class="md:flex grid md:space-x-4 md:mb-0  items-center md:ml-40 mt-10">
            <button class="btn text-xl text-white hover:bg-blue-500 bg-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><g fill="currentColor"><path d="M20 9a2 2 0 1 0 0 4a2 2 0 0 0 0-4M9 24a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm2 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M7 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0"/><path d="M20 5a6.001 6.001 0 0 0-5.5 3.598a6.001 6.001 0 1 0-8.528 7.583A3.001 3.001 0 0 0 4 19v1H3v-.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V23h1v5a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-.118a2 2 0 0 0 1.106 1.789l3 1.5A2 2 0 0 0 31 29.382V17.618a2 2 0 0 0-2.894-1.789l-3 1.5A2 2 0 0 0 24 19.12V19c0-1.089-.58-2.042-1.448-2.568A6 6 0 0 0 20 5m-4 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m13 6.618v11.764l-3-1.5v-8.764zM7 18h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1M9 7a4 4 0 1 1 0 8a4 4 0 0 1 0-8"/></g></svg>
              New Meeting
            </button>
            
           
<body>

<div class="wrapper1 ">
  <input type="text" placeholder="Paste you link"  />
  <button class="text-black text-xl font-bold">
    Join
  </button>
</div>
</body>

          </div>
        </div>
      </div>
    </div>
  </template>


<style scoped>

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ebf2fa;
  padding: 1rem;
}

.wrapper1 {
  width: 370px;
  max-width: 100%;
  position: relative;
}

.wrapper1 input {
  
  border: 2px solid #427aa1;
  padding: 10px 50px ;
  width: 200px;
  margin-right: 100px;
  color: black;
}

.wrapper1 button {
  position: absolute;
  top: 10%;
  right: 5px;
  height: 80%;
  background: #ebf2fa;
  padding: 5px 30px ;
  aspect-ratio: 1;
  margin-right: 20px;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #0c3be3;
}

button:hover {
  opacity: 0.8;
 
}

input {
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
}

input:focus {
  outline: 3px solid #0e67c1;
}

input::placeholder {
 
  font-size: larger;
}


</style>
  
  
  