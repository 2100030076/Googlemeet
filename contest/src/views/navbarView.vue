<template>
  <div class="navbar bg-base-100 flex justify-between items-center py-4 px-6">
    <div class="navbar-start flex items-center">
      <a href="#" class="flex items-center">
        <img src="../assets/camera.png" alt="Camera Icon" class="w-10 h-10 mr-2">
        <span class="text-4xl font-semibold font-trattatello text-cyan-500 ">
          Chat<span class="text-cyan-700 ">Bunny</span>
        </span>
      </a>
    </div>
    <div class="navbar-end flex items-center">
      <div class="dropdown dropdown-end relative">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-15 h-15 rounded-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
              alt="Profile"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0"
        >
          <li>
            <a href="#" class="flex justify-between items-center">
              Profile
              <span class="badge bg-cyan-500 text-white">New</span>
            </a>
          </li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
