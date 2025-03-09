import React from "react";

export const BackendArrow = ({ color }: { color?: string }) => (
  <svg width="30" height="30" viewBox="0 0 27 27" fill="none">
    <path
      d="M2.25 5.90625C2.25 4.93655 2.63521 4.00657 3.32089 3.32089C4.00657 2.63521 4.93655 2.25 5.90625 2.25H18.8438C19.8134 2.25 20.7434 2.63521 21.4291 3.32089C22.1148 4.00657 22.5 4.93655 22.5 5.90625V9.01125C21.9354 8.95256 21.365 8.98907 20.8125 9.11925V7.875H3.9375V18.8438C3.9375 19.9305 4.8195 20.8125 5.90625 20.8125H14.8894L14.3932 21.672C14.2444 21.9293 14.1381 22.2089 14.0782 22.5H5.90625C4.93655 22.5 4.00657 22.1148 3.32089 21.4291C2.63521 20.7434 2.25 19.8134 2.25 18.8438V5.90625ZM5.90625 3.9375C5.3841 3.9375 4.88335 4.14492 4.51413 4.51413C4.14492 4.88335 3.9375 5.3841 3.9375 5.90625V6.1875H20.8125V5.90625C20.8125 5.3841 20.6051 4.88335 20.2359 4.51413C19.8667 4.14492 19.3659 3.9375 18.8438 3.9375H5.90625ZM22.3391 10.125C21.5888 10.0546 20.8341 10.2013 20.1648 10.5475C19.4955 10.8937 18.9397 11.425 18.5636 12.078C18.185 12.7331 18.0032 13.4835 18.0399 14.2392C18.0766 14.995 18.3303 15.7242 18.7706 16.3395L15.3675 22.2345C15.1659 22.6103 15.1186 23.0498 15.2354 23.46C15.3522 23.8701 15.6241 24.2187 15.9934 24.4319C16.3628 24.645 16.8006 24.7061 17.2142 24.6021C17.6278 24.4981 17.9846 24.2373 18.2093 23.8748L21.618 17.9685C22.3979 18.0393 23.1812 17.876 23.8677 17.4994C24.5543 17.1228 25.113 16.55 25.4724 15.8543C25.8318 15.1585 25.9756 14.3714 25.8854 13.5936C25.7952 12.8157 25.4751 12.0824 24.966 11.4874L23.1097 14.7026C23.025 14.8547 22.9108 14.9883 22.7739 15.0958C22.637 15.2033 22.4801 15.2825 22.3123 15.3288C22.1445 15.3751 21.9692 15.3876 21.7965 15.3655C21.6239 15.3434 21.4573 15.2872 21.3066 15.2002C21.1558 15.1131 21.0239 14.997 20.9185 14.8585C20.813 14.72 20.7362 14.5619 20.6924 14.3934C20.6486 14.225 20.6388 14.0495 20.6635 13.8772C20.6881 13.7049 20.7468 13.5392 20.8361 13.3898L22.6924 10.1745C22.5754 10.1526 22.4576 10.1361 22.3391 10.125ZM11.5909 10.3984C11.6658 10.4801 11.7239 10.5757 11.7619 10.6799C11.7998 10.784 11.8169 10.8946 11.8121 11.0053C11.8073 11.1161 11.7807 11.2248 11.7339 11.3253C11.687 11.4257 11.6209 11.516 11.5391 11.5909L8.8425 14.0625L11.5391 16.5341C11.7041 16.6854 11.8023 16.896 11.812 17.1197C11.8217 17.3433 11.7421 17.5616 11.5909 17.7266C11.4396 17.8916 11.229 17.9898 11.0053 17.9995C10.7817 18.0092 10.5634 17.9296 10.3984 17.7784L7.02338 14.6846C6.9371 14.6056 6.8682 14.5095 6.82107 14.4023C6.77394 14.2952 6.7496 14.1795 6.7496 14.0625C6.7496 13.9455 6.77394 13.8298 6.82107 13.7227C6.8682 13.6155 6.9371 13.5194 7.02338 13.4404L10.3984 10.3466C10.4801 10.2717 10.5757 10.2136 10.6799 10.1756C10.784 10.1377 10.8946 10.1206 11.0053 10.1254C11.1161 10.1302 11.2248 10.1568 11.3253 10.2036C11.4257 10.2505 11.516 10.3166 11.5909 10.3984ZM14.9141 17.7784L17.1866 15.6949C16.8207 14.6348 16.8175 13.4832 17.1776 12.4211L14.9141 10.3466C14.8324 10.2717 14.7368 10.2136 14.6326 10.1757C14.5285 10.1378 14.4179 10.1207 14.3072 10.1255C14.1964 10.1303 14.0877 10.1569 13.9873 10.2037C13.8868 10.2505 13.7965 10.3167 13.7216 10.3984C13.6467 10.4801 13.5886 10.5757 13.5507 10.6799C13.5128 10.784 13.4957 10.8946 13.5005 11.0053C13.5053 11.1161 13.5319 11.2248 13.5787 11.3252C13.6255 11.4257 13.6917 11.516 13.7734 11.5909L16.47 14.0625L13.7734 16.5341C13.6084 16.6854 13.5102 16.896 13.5005 17.1197C13.4908 17.3433 13.5704 17.5616 13.7216 17.7266C13.8729 17.8916 14.0835 17.9898 14.3072 17.9995C14.5308 18.0092 14.7491 17.9296 14.9141 17.7784Z"
      fill="white"
    />
  </svg>
);
