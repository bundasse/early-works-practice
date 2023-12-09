<template>
  <div class="text-center">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
html,body{height: 100%;}
body{animation: infinite 9s background2 alternate-reverse;}
.dark-mode .darkMode{
  background-color: #272929;
  border-color:#3b3b3b;
  color:#d9d9d9
}
@keyframes background2{
    0% { background-color: #f7f8f9;}
    50% { background-color: rgb(240, 247, 236);}
    100% { background-color: rgb(243, 239, 235);}
}
</style>