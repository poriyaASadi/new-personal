<template >
<div class="w-full bg-slate-100  dark:bg-slate-900 ">
  <LoadingPage></LoadingPage>
  <div class="dark:bg-gray-900 container relative max-w-[72rem] laptop:shadow-xl shadow-slate-400 dark:shadow-slate-800">
                         <!-- box satting mine -->
                         <div class="absolute top-0 right-10 z-20 w-auto h-auto px-2 py-1 cursor-pointer bg-primery dark:bg-slate-900  shadow-xl shadow-slate-400 dark:shadow-slate-800" style="border-radius: 0 0 3rem 3rem;">
                          <div class="mb-2">
                            <p id="darkbtn" class="w-9 h-9 rounded-full flex items-center justify-center" @click="darkmode">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                <path d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>           
                            </p>
                            <p id="lightbtn" class="hidden w-9 h-9 rounded-full flex items-center justify-center bg-slate-900" @click="lightmode">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-6 h-6 text-white">
                                <path d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>            
                            </p>
                          </div>
                        </div>   
     <MenuBarMobile></MenuBarMobile>
     <homePage></homePage>
</div>
</div>
</template>
<script>
import MenuBarMobile from './components/MenuBarMobile.vue'
import LoadingPage from './components/LoadingPage.vue';
export default {
  name: 'App',
  components : {
    MenuBarMobile,
    LoadingPage,
  },
  mounted () {
       this.chekmode()
    },
   methods: {
      darkmode : function () {  
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark'
        const btndark = document.getElementById('darkbtn');
        btndark.classList.add('hidden');
        document.getElementById('lightbtn').classList.remove('hidden');
        this.chekmode()
      },
      lightmode : function () {
        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light'
        const btndark = document.getElementById('lightbtn');
        btndark.classList.add('hidden');
        document.getElementById('darkbtn').classList.remove('hidden');
        this.chekmode()
      },
      chekmode : function () {
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  const btndark = document.getElementById('darkbtn');
        btndark.classList.add('hidden');
        document.getElementById('lightbtn').classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark')
}
      },
    },
}
</script>
<style>
/* width */
::-webkit-scrollbar {
  width: 2px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #ffffff00;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #070f17;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: transparent;
}

</style>