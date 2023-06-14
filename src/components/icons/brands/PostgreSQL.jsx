const PostgreSQL = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M23.144 14.7228C23.1303 14.6809 23.1114 14.6409 23.0877 14.6037C22.9487 14.3405 22.6109 14.2619 22.0803 14.3716C20.427 14.7127 19.7868 14.5028 19.5547 14.3525C20.8967 12.3043 21.9997 9.8305 22.5958 7.5228C22.8672 6.4721 23.394 3.9991 22.718 2.7912C22.6748 2.70853 22.6243 2.62988 22.5671 2.5562C21.2777 0.908601 19.3853 0.0248014 17.0945 0.000501403C15.5998 -0.0152986 14.324 0.346601 13.9784 0.479901C13.8072 0.447953 13.6352 0.420742 13.4625 0.398301C13.0296 0.319911 12.591 0.277168 12.1511 0.270501C10.9689 0.252101 9.94732 0.534701 9.10132 1.1111C8.24402 0.790001 4.31252 -0.533898 1.87942 1.1899C0.520518 2.1526 -0.106782 3.8733 0.0148175 6.3043C0.0557175 7.1223 0.521717 9.6383 1.25712 12.0479C1.71692 13.5544 2.19582 14.7498 2.69052 15.6299C3.24352 16.6241 3.81642 17.2232 4.40482 17.4194C4.85222 17.5685 5.53752 17.5635 6.26292 16.6915C7.06412 15.728 7.85322 14.8657 8.20752 14.4846C8.64262 14.7201 9.11392 14.8471 9.59752 14.8618C9.5976 14.8632 9.59773 14.8645 9.59792 14.8659C9.51371 14.9662 9.4313 15.068 9.35072 15.1713C9.01182 15.6015 8.94132 15.691 7.85052 15.9156C7.54032 15.9796 6.71612 16.1495 6.70412 16.7271C6.70162 16.8495 6.73702 16.958 6.79602 17.0539C7.02292 17.477 7.71762 17.6636 7.81102 17.687C9.14552 18.0205 10.3154 17.779 11.1824 17.0083C11.1654 19.2393 11.2599 21.4257 11.5278 22.0957C11.749 22.6486 12.2896 24.0002 13.997 24C14.2475 24 14.5233 23.9709 14.8266 23.9059C16.6085 23.5238 17.3823 22.7363 17.6816 21C17.8319 20.1293 18.0832 18.1247 18.2204 16.8988C18.2373 16.8285 18.2561 16.7781 18.2774 16.7626C18.2781 16.7621 18.3471 16.7155 18.7046 16.7933C18.7192 16.7965 18.734 16.7987 18.7489 16.8001L19.0028 16.8224L19.0177 16.8234C19.8645 16.8618 20.9291 16.6808 21.5489 16.3926C22.1927 16.0938 23.3546 15.3603 23.144 14.7228ZM1.95562 11.8765C1.21212 9.4407 0.777718 6.9914 0.743318 6.3046C0.634718 4.1332 1.16042 2.6217 2.30562 1.8119C4.14232 0.513301 7.14542 1.2711 8.41362 1.6819C8.41042 1.6851 8.40702 1.688 8.40382 1.6913C6.38002 3.7353 6.42802 7.2273 6.43302 7.4408C6.43282 7.5231 6.43962 7.6397 6.44922 7.8001C6.48402 8.3874 6.54882 9.4805 6.37572 10.7185C6.21482 11.8689 6.56942 12.9949 7.34852 13.8077C7.42912 13.8918 7.51332 13.9708 7.60032 14.0451C7.25352 14.4165 6.49992 15.2377 5.69782 16.2027C5.13012 16.8852 4.73812 16.7544 4.60922 16.7114C4.21732 16.5807 3.79622 16.1243 3.37112 15.3891C2.89152 14.5501 2.40762 13.3574 1.95562 11.8765ZM7.96282 16.9636C7.79172 16.9208 7.63572 16.8504 7.53062 16.7864C7.61952 16.747 7.76802 16.6962 8.01392 16.6455C9.29722 16.3814 9.49542 16.1949 9.92822 15.6453C10.0274 15.5193 10.1398 15.3766 10.2955 15.2027C10.329 15.1651 10.3541 15.1209 10.3692 15.0729C10.54 14.9216 10.6416 14.963 10.8061 15.0312C10.9621 15.0958 11.1139 15.2912 11.1756 15.5064C11.2047 15.608 11.2375 15.8009 11.1304 15.9508C10.2261 17.2166 8.90882 17.2002 7.96282 16.9636ZM10.0568 12.9756L10.0043 13.1166C9.87132 13.4732 9.74762 13.8047 9.67092 14.1196C9.00352 14.1175 8.35412 13.8324 7.86042 13.3172C7.23252 12.6621 6.94732 11.7508 7.07792 10.8168C7.26072 9.5089 7.19322 8.37 7.15692 7.7582C7.15192 7.6725 7.14742 7.5975 7.14472 7.5383C7.44042 7.2762 8.81062 6.5421 9.78762 6.7659C10.2335 6.8681 10.5052 7.1716 10.6181 7.6939C11.2027 10.3977 10.6955 11.5246 10.2879 12.4302C10.2039 12.6168 10.1246 12.7931 10.0568 12.9756ZM17.4205 17.5481C17.4036 17.7249 17.3847 17.9241 17.3587 18.144L17.2127 18.5823C17.2011 18.617 17.195 18.6534 17.1945 18.69C17.1886 19.1647 17.1405 19.3389 17.0795 19.5593C17.0161 19.7885 16.9442 20.0484 16.9001 20.6168C16.7901 22.0311 16.0219 22.8435 14.4829 23.1733C12.9674 23.4984 12.6986 22.6765 12.4617 21.9516C12.4375 21.8756 12.4118 21.8001 12.3848 21.725C12.1694 21.1392 12.1937 20.3131 12.2274 19.1699C12.2439 18.6087 12.2025 17.2686 11.8972 16.5237C11.9016 16.2305 11.9078 15.9328 11.9162 15.6319C11.9172 15.5938 11.9121 15.5558 11.9009 15.5193C11.8912 15.449 11.8766 15.3795 11.857 15.3113C11.7344 14.883 11.4357 14.5247 11.0773 14.3762C10.9349 14.3172 10.6735 14.209 10.3595 14.2893C10.4265 14.0133 10.5426 13.7018 10.6685 13.3644L10.7214 13.2224C10.7809 13.0624 10.8554 12.8967 10.9344 12.7212C11.3609 11.7736 11.945 10.4759 11.311 7.544C11.0736 6.4459 10.2806 5.9097 9.07862 6.0342C8.35792 6.1088 7.69872 6.3996 7.36982 6.5663C7.30388 6.59972 7.2386 6.63443 7.17402 6.6704C7.26582 5.564 7.61262 3.4963 8.90972 2.1881C9.00607 2.09101 9.1073 1.9989 9.21302 1.9121C9.2655 1.90187 9.31498 1.87985 9.35772 1.8477C10.1101 1.2771 11.0522 0.997101 12.1597 1.0152C12.5688 1.0219 12.9614 1.0491 13.3339 1.0962C15.2729 1.4506 16.5778 2.543 17.3698 3.4789C18.1841 4.4412 18.625 5.4104 18.801 5.9332C17.4778 5.7986 16.5776 6.06 16.1213 6.7122C15.1287 8.1311 16.6643 10.8851 17.4024 12.2086C17.5377 12.4512 17.6546 12.6608 17.6913 12.7499C17.9316 13.3324 18.2428 13.7212 18.47 14.0051C18.5396 14.0921 18.6072 14.1765 18.6585 14.2501C18.2577 14.3656 17.5377 14.6326 17.6033 15.9671C17.591 16.1234 17.561 16.414 17.5199 16.7819C17.4738 16.9896 17.4497 17.2422 17.4205 17.5481ZM18.311 15.927C18.2705 15.0954 18.5801 15.0085 18.9077 14.9165C18.953 14.9041 18.9981 14.8905 19.0427 14.8759C19.085 14.9133 19.1298 14.9478 19.1769 14.9789C19.7472 15.3554 20.7592 15.4002 22.1837 15.1133C21.9821 15.2902 21.6648 15.5127 21.2304 15.7144C20.8206 15.9047 20.1347 16.0474 19.4831 16.078C18.7634 16.1116 18.3972 15.9973 18.311 15.927ZM18.8805 6.6558C18.8746 7.0066 18.8263 7.325 18.7751 7.6575C18.7201 8.0151 18.6631 8.3849 18.6487 8.8337C18.6345 9.2705 18.6891 9.7246 18.7419 10.1638C18.8485 11.0508 18.9579 11.9641 18.5344 12.8652C18.4641 12.7406 18.4015 12.6118 18.3468 12.4796C18.2941 12.352 18.1799 12.147 18.0217 11.8634C17.4061 10.7593 15.9643 8.1738 16.7024 7.1188C17.0819 6.5761 18.0432 6.5527 18.8805 6.6558ZM19.1089 13.6695C19.0807 13.6335 19.0522 13.5977 19.0236 13.5621L18.9881 13.5177C19.7143 12.3182 19.5723 11.1315 19.4459 10.0792C19.394 9.6474 19.345 9.2396 19.3574 8.8566C19.3703 8.4505 19.424 8.1023 19.4759 7.7655C19.5398 7.3505 19.6047 6.9212 19.5868 6.415C19.6002 6.3619 19.6056 6.2992 19.5986 6.2248C19.5529 5.7393 18.9987 4.2868 17.8692 2.9718C17.2616 2.2645 16.3796 1.4746 15.1803 0.932301C15.7054 0.825701 16.4131 0.728801 17.2047 0.746401C19.2562 0.792001 20.8793 1.5599 22.0289 3.0288C22.0533 3.06069 22.0756 3.09416 22.0956 3.129C22.8187 4.4846 21.8194 9.4041 19.1089 13.6695ZM10.2923 7.5533C10.2673 7.7327 9.98342 7.9758 9.67122 7.9758C9.64415 7.97582 9.61712 7.97395 9.59032 7.9702C9.40302 7.9442 9.21382 7.8262 9.08442 7.6546C9.03862 7.5941 8.96412 7.4766 8.97892 7.3702C8.98442 7.3301 9.00502 7.2717 9.07142 7.2214C9.18962 7.132 9.42322 7.0988 9.68102 7.1347C9.99732 7.1788 10.3236 7.3285 10.2923 7.5533ZM18.2228 7.1419C18.2339 7.2211 18.1738 7.3429 18.0697 7.4521C18.0014 7.5238 17.8577 7.6482 17.6618 7.6753C17.637 7.67876 17.6119 7.68049 17.5868 7.6805C17.2933 7.6805 17.0454 7.4461 17.0261 7.3088C17.0021 7.1323 17.2902 6.9982 17.5872 6.9568C17.8842 6.9154 18.1983 6.9656 18.2228 7.1419Z"
        fill="#4169E1"
      />
    </svg>
  );
};

export default PostgreSQL;
