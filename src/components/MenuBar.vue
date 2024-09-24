<template>
    <div   class="hidden bg-primery dark:bg-slate-900 w-full h-[100vh] p-2 laptop:flex flex-col items-center child:text-slate-50 font-Caveat overflow-hidden overflow-y-auto">
        <!-- image face me -->
        <div class="w-[12.5rem] h-[12.5rem] bg-slate-400 rounded-full flex items-center justify-center mt-10">
             <img  src="../assets/images/me.jpg" class="w-48 h-48 object-cover rounded-full" alt="NO FACE :(">
        </div> 
        <!-- box name big me --> 
         <div class="text-center border-b border-slate-500 py-4">
          <h1 class="text-4xl font-semibold !text-white font-Bebas -tracking-tighter" data-aos="flip-down" data-aos-duration="2500">PORIYA<br>ASADI.NEJAD</h1>
          <h3 class="mt-2" data-aos="flip-right" data-aos-duration="3500">Front End Developer</h3>
         </div>
         <!-- box my address -->
          <div class="text-center  pt-4"> 
            <span class="font-semibold font-Bebas -tracking-tighter">Address:</span>
            <p class="font-600 text-sm font-Exo tracking-tight">Iran, Khuzestan, Abadan city</p>
            <div class="w-32 mx-auto h-[1px] bg-slate-500 my-3"></div>
          </div> 
          <!-- box conect me -->  
           <div class="py-1 ">
           <h2 class="text-2xl  relative text-center font-semibold font-Bebas -tracking-tighter">CONNECT <span class=""></span></h2>
           <ul class="child:my-3 child:!font-Exo !text-left">
            <li><a href="https://github.com/poriyaASadi" class="flex items-center   gap-x-2 text-sm">
              <span class="inline-flex">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
                  <g clip-path="url(#clip0_910_21)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z" fill="#fff"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_910_21">
                  <rect width="48" height="48" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>  
              </span> 
              Views Page My GitHub
            </a></li>
            <li><a href="https://t.me/P_o_r_iya" class=" flex items-center   gap-x-2 text-sm">
              <span class="inline-flex">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
                  <g clip-path="url(#clip0_318_61)">
                  <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="url(#paint0_linear_318_61)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8638 23.7466C17.8603 20.6984 22.5257 18.6888 24.8601 17.7179C31.5251 14.9456 32.91 14.4641 33.8127 14.4482C34.0113 14.4447 34.4552 14.4939 34.7427 14.7272C34.9855 14.9242 35.0523 15.1904 35.0843 15.3771C35.1163 15.5639 35.1561 15.9895 35.1244 16.3219C34.7633 20.1169 33.2004 29.3263 32.4053 33.5767C32.0689 35.3752 31.4065 35.9783 30.7652 36.0373C29.3714 36.1655 28.3131 35.1162 26.9632 34.2313C24.8509 32.8467 23.6576 31.9847 21.6072 30.6336C19.2377 29.0721 20.7738 28.2139 22.1242 26.8113C22.4776 26.4442 28.6183 20.8587 28.7372 20.352C28.7521 20.2886 28.7659 20.0524 28.6255 19.9277C28.4852 19.803 28.2781 19.8456 28.1286 19.8795C27.9168 19.9276 24.5423 22.158 18.0053 26.5707C17.0475 27.2284 16.1799 27.5489 15.4026 27.5321C14.5457 27.5135 12.8973 27.0475 11.6719 26.6492C10.1689 26.1606 8.97432 25.9023 9.07834 25.0726C9.13252 24.6404 9.72767 24.1984 10.8638 23.7466Z" fill="white"/>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_318_61" x1="24" y1="0" x2="24" y2="47.644" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2AABEE"/>
                  <stop offset="1" stop-color="#229ED9"/>
                  </linearGradient>
                  <clipPath id="clip0_318_61">
                  <rect width="48" height="48" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                          
              </span>
              Send Message In Telagram
            </a></li>
            <li><a href="https://wa.me/qr/26SRCSDLKZVGF1" class="w-full flex items-center   gap-x-2 text-sm">
              <span class="inline-flex">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
                  <path d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z" fill="#25D366"/>
                  </svg>                  
              </span> 
              Send Message In WhatsApp
            </a></li>
            <li><a href="https://www.instagram.com/poriya.asadi.85?utm_source=qr&igsh=dG5uNGlrNjNhZnF6" class="w-full flex items-center   gap-x-2 text-sm">
              <span class="inline-flex">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
                  <g clip-path="url(#clip0_17_27)">
                  <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="#E7007D"/>
                  <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="#E7007D"/>
                  <path d="M39.6937 11.1844C39.6937 12.7782 38.4 14.0625 36.8156 14.0625C35.2219 14.0625 33.9375 12.7688 33.9375 11.1844C33.9375 9.59065 35.2313 8.30627 36.8156 8.30627C38.4 8.30627 39.6937 9.60003 39.6937 11.1844Z" fill="#E7007D"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_17_27">
                  <rect width="48" height="48" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>                                 
              </span>
              Views Page My Instagram
            </a></li>
           </ul>
           </div>
           <!-- box my skills -->
            <div class="py-1">
              <h2 class="text-2xl text-center font-semibold font-Bebas -tracking-tighter mb-3">PRO SKILLS <span class=""></span></h2>
              <div>
                <ul class="child:w-8 child:h-8 flex items-center justify-center flex-wrap gap-2">
                  <li><img src="../assets/images/icons/icons.svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (2).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (3).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (4).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (14).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (19).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (21).svg" alt=""></li>
               
                </ul>
              </div>
            </div>
            <!-- skiils low me -->
            <div class="py-1">
              <h2 class="text-2xl text-center font-semibold font-Bebas -tracking-tighter mb-3">SKILLS<span class=""></span></h2>
              <div>
                <ul class="child:w-8 child:h-8 flex items-center justify-center flex-wrap gap-2">

                  <li><img src="../assets/images/icons/icons (5).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (6).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (7).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (8).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (9).svg" alt=""></li>
                  <li><img class="bg-white rounded-lg" src="../assets/images/icons/download.png" alt=""></li>
                  <li><img src="../assets/images/icons/icon_048.png" alt=""></li>
                  <li><img src="../assets/images/icons/icons (10).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (11).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (12).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (13).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (15).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (16).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (17).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (18).svg" alt=""></li>
                  <li><img src="../assets/images/icons/icons (20).svg" alt=""></li>
                </ul>
              </div>
            </div>
</div>
</template>

<script>
export default {
  name : 'MenuBar',
}
</script>

<style>

</style>
