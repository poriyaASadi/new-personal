<template>
    <div id="loading" class="w-full h-[100vh] absolute top-0 left-0  p-3 z-50 bg-slate-100 dark:bg-slate-900  flex items-center justify-center flex-col gap-y-8">
         <img id="image_elm" src="../assets/images/logo/Screenshot 2024-09-23 013110.png" class="rounded-xl shadow-xl dark:shadow-slate-700" alt="">
        <span class="loding loading--roro"></span>
      </div>
</template>

<script>
export default {
  name : 'LoadingPage'
}
window.addEventListener('load' , () => {
  document.getElementById('loading').classList.add('hidden');
  document.body.classList.add('!overflow-y-auto')
})
</script>

<style>
body {
  overflow: hidden;
}
.loding{
    display: inline-block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    
  }
  .loading--roro{
    border: double 0.5rem;
    border-color:#333 #333 #5094e3 ;
    animation: spin 1.2s infinite linear;
  }
  .dark .loading--roro  {
    border-color:#5094e3 #5094e3 #333 ;
  }
  @keyframes spin{
    to{
        transform: rotate(360deg);
    }
}
</style>
