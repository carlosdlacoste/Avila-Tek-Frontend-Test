import React from 'react';

export const NavBar = () => {
  return(
    <>
      <nav className="bg-[#e2071e]">
        <div className="mx-auto max-w-screen-xl p-2">
          <div className="space-x-2 flex justify-end">
            <svg width="16" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99992 8.9534C9.14867 8.9534 10.0799 8.02215 10.0799 6.8734C10.0799 5.72464 9.14867 4.7934 7.99992 4.7934C6.85117 4.7934 5.91992 5.72464 5.91992 6.8734C5.91992 8.02215 6.85117 8.9534 7.99992 8.9534Z" stroke="#ffffff" stroke-width="0.5"/>
              <path d="M2.4133 5.66001C3.72663 -0.113322 12.2799 -0.106655 13.5866 5.66668C14.3532 9.05335 12.2466 11.92 10.3999 13.6933C9.05992 14.9867 6.93994 14.9867 5.59328 13.6933C3.75329 11.92 1.64664 9.04668 2.4133 5.66001Z" stroke="#ffffff" stroke-width="0.5"/>
            </svg>
            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white text-center text-sm inline-flex items-center max-h-[10px]" type="button">Bello Monte
              <svg className="w-2.5 h-2.5 ml-2.5 mt-2 mr-3 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.179443 9.3969V3.90012C0.187084 3.82374 0.194174 3.74717 0.20236 3.67133C0.242586 3.28971 0.347002 2.91764 0.511253 2.57028C0.858188 1.82085 1.45602 1.21393 2.20303 0.852713C2.5733 0.669239 2.97397 0.553594 3.38565 0.51179L3.62414 0.489044H9.14701C9.16066 0.492112 9.17452 0.494395 9.18849 0.495656C9.43511 0.50786 9.67971 0.54614 9.91814 0.609916C10.6752 0.813258 11.3451 1.25564 11.8265 1.87019C12.3079 2.48474 12.5748 3.23812 12.5868 4.01649C12.5993 5.76389 12.5912 7.51146 12.5901 9.25888C12.5888 9.60701 12.5351 9.9527 12.4307 10.2851C12.2024 11.0138 11.746 11.6514 11.1277 12.105C10.5093 12.5586 9.7614 12.8045 8.99257 12.8072C7.26694 12.8072 5.54116 12.8072 3.81515 12.8072C3.70054 12.8072 3.58539 12.8019 3.47078 12.7932C3.06437 12.7614 2.66689 12.6582 2.29691 12.4882C1.58177 12.1671 0.992188 11.6223 0.618216 10.9373C0.392218 10.531 0.250796 10.0839 0.20236 9.62228C0.193628 9.54428 0.187084 9.47165 0.179443 9.3969ZM6.38503 1.43432C5.53586 1.43432 4.68651 1.43432 3.83698 1.43432C3.72783 1.43432 3.61869 1.43857 3.50954 1.44886C3.13992 1.47842 2.78203 1.59182 2.46336 1.78C2.05151 2.00625 1.70995 2.34013 1.4757 2.74537C1.24144 3.15061 1.12343 3.61157 1.13448 4.07865C1.12466 5.79032 1.13176 7.50226 1.13176 9.21392C1.13133 9.40887 1.15182 9.60322 1.19288 9.79394C1.31885 10.3755 1.64115 10.8969 2.10642 11.2719C2.57169 11.6468 3.15201 11.8527 3.7513 11.8556C5.48893 11.8621 7.22601 11.8556 8.96364 11.8556C9.11994 11.8556 9.27597 11.8429 9.43025 11.818C9.9135 11.7443 10.3648 11.5328 10.7291 11.2092C11.0186 10.9624 11.2497 10.6552 11.4059 10.3097C11.5621 9.96408 11.6396 9.58865 11.6328 9.20991C11.6357 7.50009 11.6357 5.78999 11.6328 4.07944C11.6332 3.97286 11.6276 3.86615 11.6159 3.7602C11.5432 3.12459 11.2386 2.53736 10.7597 2.10928C10.2807 1.68121 9.66055 1.44187 9.01603 1.43643C8.14067 1.42885 7.26258 1.43696 6.38448 1.43696L6.38503 1.43432Z" fill="#F8F5F3"/>
              <path d="M6.38891 3.33173C7.04963 3.33258 7.69535 3.52796 8.2443 3.89296C8.79326 4.25796 9.22085 4.77637 9.47309 5.38255C9.72527 5.98872 9.79076 6.65535 9.66126 7.29847C9.53175 7.94159 9.21304 8.53206 8.74546 8.9954C8.27781 9.4588 7.6823 9.77432 7.03413 9.90183C6.38601 10.0293 5.71432 9.96325 5.104 9.71192C4.49369 9.46059 3.97215 9.03521 3.6053 8.4897C3.23845 7.94424 3.04276 7.30313 3.04297 6.64733C3.04542 5.76777 3.3989 4.92512 4.02601 4.30371C4.65311 3.6823 5.50274 3.33272 6.38891 3.33173ZM6.38891 4.27911C5.91668 4.27879 5.45498 4.41753 5.06221 4.67769C4.66943 4.93786 4.36322 5.30773 4.18232 5.74064C4.00142 6.17359 3.95394 6.6502 4.0459 7.10992C4.13787 7.56963 4.36514 7.99186 4.69896 8.32336C5.03279 8.65486 5.45815 8.88068 5.92132 8.97216C6.38443 9.06365 6.86446 9.01663 7.30072 8.83723C7.73699 8.65789 8.10989 8.35418 8.37217 7.96445C8.63445 7.57472 8.77443 7.11652 8.77432 6.64782C8.77509 6.33631 8.7138 6.02783 8.59396 5.73988C8.47411 5.45193 8.29806 5.1901 8.07594 4.96995C7.85383 4.74979 7.59002 4.57541 7.29974 4.45685C7.00946 4.33828 6.69845 4.2779 6.38454 4.27911H6.38891Z" fill="#F8F5F3"/>
              <path d="M9.96731 2.38434C10.1093 2.38478 10.2479 2.42702 10.3655 2.50574C10.4832 2.58447 10.5748 2.69616 10.6284 2.82656C10.6821 2.95696 10.6956 3.10036 10.6671 3.23837C10.6386 3.37637 10.5695 3.50281 10.4685 3.60177C10.3675 3.70073 10.2391 3.76758 10.0998 3.79405C9.96032 3.82052 9.81614 3.80538 9.68549 3.75041C9.55478 3.69544 9.44351 3.60323 9.36574 3.4854C9.28797 3.36756 9.2472 3.22953 9.24857 3.08867C9.25048 2.90089 9.3271 2.7215 9.46173 2.58958C9.59637 2.45766 9.77815 2.38376 9.96731 2.38434Z" fill="#F8F5F3"/>
            </svg>
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3614_93)">
              <path d="M5.43373 10.1113C5.22527 10.1084 5.01789 10.081 4.81595 10.0296C4.49526 9.94852 4.18638 9.82697 3.89693 9.66772C3.29558 9.3463 2.76407 8.91014 2.33285 8.38446C2.10406 8.11379 1.92372 7.80607 1.79965 7.47489C1.7931 7.45647 1.78765 7.43762 1.78056 7.41487C2.24798 7.50707 2.73112 7.48307 3.18692 7.34505C2.47106 7.20682 1.82686 6.82337 1.36688 6.26172C0.897958 5.70175 0.648539 4.99253 0.664519 4.26457C1.11825 4.46161 1.60006 4.58749 2.09272 4.63775C1.99776 4.56463 1.90881 4.50081 1.82476 4.43093C1.23564 3.96314 0.839111 3.2977 0.70982 2.55995C0.594103 1.95668 0.676949 1.3324 0.946125 0.779437C0.99415 0.681937 1.05527 0.590893 1.11748 0.487976L1.24301 0.634237C1.82592 1.32782 2.48487 1.95487 3.20766 2.50362C4.09184 3.178 5.09846 3.67719 6.17263 3.97416C6.87696 4.16405 7.60339 4.26123 8.33321 4.26298C8.34794 4.26298 8.36273 4.26306 8.38238 4.25981C8.32431 4.00554 8.30483 3.74404 8.32453 3.48407C8.33817 2.83247 8.5712 2.2042 8.98646 1.69932C9.49159 1.05774 10.2297 0.637867 11.0428 0.529765C11.5031 0.460764 11.9728 0.487909 12.4219 0.60964C12.8709 0.731369 13.2893 0.945089 13.6504 1.23673C13.7448 1.30932 13.831 1.39261 13.9233 1.46736C13.9442 1.48293 13.9703 1.49014 13.9964 1.48747C14.6735 1.36204 15.3238 1.12198 15.919 0.777855L15.9588 0.757223C15.9654 0.755452 15.9722 0.754439 15.9791 0.754049C15.7054 1.4512 15.2101 2.04079 14.5683 2.43327C15.1872 2.36443 15.7921 2.2032 16.3627 1.95534C16.3147 2.0198 16.2671 2.08478 16.218 2.14815C15.8135 2.68875 15.325 3.1623 14.7708 3.55072C14.7588 3.55892 14.7493 3.57008 14.7433 3.58325C14.7373 3.59643 14.7352 3.61097 14.737 3.6253C14.7309 3.9243 14.7336 4.22128 14.7151 4.52191C14.6676 5.23162 14.5284 5.93212 14.3009 6.6066C13.8392 8.02923 13.0254 9.3145 11.934 10.3443C11.1363 11.0996 10.1988 11.6942 9.1731 12.0955C8.56296 12.3349 7.92887 12.5094 7.28157 12.616C6.55901 12.7311 5.82669 12.7749 5.09537 12.7466C4.65605 12.7325 4.21783 12.7064 3.78124 12.6527C2.89221 12.5579 2.02533 12.3167 1.21626 11.9389C1.03398 11.8506 0.857164 11.7509 0.677618 11.6561L0.682531 11.6411H0.739832C1.10056 11.6335 1.46239 11.6409 1.82258 11.6165C2.73424 11.5697 3.61943 11.2964 4.39683 10.8214C4.74119 10.6096 5.06808 10.3703 5.40262 10.1433C5.40535 10.133 5.4119 10.1265 5.43373 10.1113Z" fill="#F8F5F3"/>
              </g>
              <defs>
                <clipPath id="clip0_3614_93">
                <rect width="16.3721" height="13" fill="white" transform="translate(0.195312)"/>
                </clipPath>
              </defs>
            </svg>
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.32071 12.6427V7.05799H7.19999C7.2943 6.32999 7.38755 5.6153 7.4829 4.87897H5.33486C5.33486 4.29657 5.3291 3.7351 5.33958 3.17298C5.34895 3.05647 5.38477 2.94346 5.44435 2.84265C5.51842 2.71871 5.62523 2.61739 5.75322 2.54938C5.88121 2.48138 6.02549 2.44942 6.17051 2.45696C6.56187 2.43772 6.95638 2.44286 7.34669 2.43818C7.4106 2.43818 7.47504 2.43818 7.54106 2.43818V0.492237C6.84337 0.410533 6.13971 0.39146 5.43859 0.435108C4.90198 0.474225 4.39094 0.678174 3.97636 1.01859C3.69132 1.26358 3.46243 1.56638 3.3051 1.9065C3.14777 2.24661 3.06564 2.61617 3.06424 2.99042C3.03595 3.56242 3.05009 4.13432 3.0459 4.70632C3.0459 4.76092 3.0459 4.81554 3.0459 4.88938H1.16821V7.06714H3.03699V12.6432" fill="#F8F5F3"/>
            </svg>
          </div>
        </div>
      </nav>
    <nav className="bg-white">
        <div className="max-w-screen-xl px-2 py-2 mx-auto">
            <div className="flex  gap-x-[300px] items-center">
                <svg width="170" height="46" viewBox="0 0 170 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="170" height="46" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_3_16" transform="scale(0.0025 0.00925926)"/>
                  </pattern>
                  <image id="image0_3_16" width="400" height="108" xlinkHref="data:image/png;base64,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"/>
                  </defs>
                </svg>
                <form>
                  <div className="relative">
                      <input type="search" className=" w-[320px] h-[33px] text-sm text-gray-900 placeholder-gray-300 border-gray-300 rounded-lg" placeholder="Buscador" required/>
                      <div className="absolute right-3 top-1/2 -translate-y-2/4 ">
                        <svg className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                      </div>
                  </div>
              </form>
              <div className='space-x-2 flex flex-row justify-around'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99992 8.9534C9.14867 8.9534 10.0799 8.02215 10.0799 6.8734C10.0799 5.72464 9.14867 4.7934 7.99992 4.7934C6.85117 4.7934 5.91992 5.72464 5.91992 6.8734C5.91992 8.02215 6.85117 8.9534 7.99992 8.9534Z" stroke="#333333" stroke-width="0.5"/>
                  <path d="M2.4133 5.66001C3.72663 -0.113322 12.2799 -0.106655 13.5866 5.66668C14.3532 9.05335 12.2466 11.92 10.3999 13.6933C9.05992 14.9867 6.93994 14.9867 5.59328 13.6933C3.75329 11.92 1.64664 9.04668 2.4133 5.66001Z" stroke="#333333" stroke-width="0.5"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.86465 9.69817C9.86465 9.2031 9.66799 8.72831 9.31792 8.37824C8.96786 8.02818 8.49307 7.83151 7.998 7.83151C7.50293 7.83151 7.02814 8.02818 6.67807 8.37824C6.32801 8.72831 6.13134 9.2031 6.13134 9.69817C5.89218 9.80498 5.67817 9.96093 5.50323 10.1559C5.32829 10.3508 5.19634 10.5804 5.11596 10.8297C5.03557 11.079 5.00855 11.3424 5.03665 11.6028C5.06476 11.8633 5.14735 12.1149 5.27907 12.3413C5.41079 12.5677 5.58868 12.7638 5.80118 12.917C6.01368 13.0701 6.25603 13.1768 6.51248 13.2301C6.76892 13.2835 7.03372 13.2822 7.28966 13.2265C7.5456 13.1708 7.78694 13.0618 7.998 12.9067C8.20906 13.0618 8.4504 13.1708 8.70634 13.2265C8.96227 13.2822 9.22707 13.2835 9.48352 13.2301C9.73996 13.1768 9.98232 13.0701 10.1948 12.917C10.4073 12.7638 10.5852 12.5677 10.7169 12.3413C10.8486 12.1149 10.9312 11.8633 10.9593 11.6028C10.9874 11.3424 10.9604 11.079 10.88 10.8297C10.7997 10.5804 10.6677 10.3508 10.4928 10.1559C10.3178 9.96093 10.1038 9.80498 9.86465 9.69817ZM9.09799 12.7334C8.75664 12.7336 8.42836 12.6021 8.18146 12.3664C8.13192 12.3195 8.06626 12.2933 7.998 12.2933C7.92974 12.2933 7.86407 12.3195 7.81453 12.3664C7.66938 12.5048 7.49487 12.6087 7.304 12.6703C7.11313 12.732 6.91081 12.7497 6.71212 12.7223C6.51344 12.6949 6.32349 12.623 6.15644 12.512C5.98939 12.401 5.84954 12.2537 5.7473 12.0812C5.64506 11.9086 5.58306 11.7152 5.56593 11.5154C5.5488 11.3155 5.57698 11.1144 5.64837 10.927C5.71975 10.7395 5.8325 10.5706 5.97822 10.4328C6.12395 10.295 6.29888 10.1918 6.49001 10.131C6.5486 10.1121 6.59888 10.0736 6.63232 10.022C6.66576 9.9703 6.6803 9.90866 6.67347 9.8475C6.65191 9.66074 6.67009 9.47153 6.72681 9.29229C6.78353 9.11305 6.87751 8.94783 7.00259 8.80748C7.12767 8.66713 7.28102 8.55481 7.45257 8.4779C7.62412 8.401 7.81 8.36124 7.998 8.36124C8.186 8.36124 8.37187 8.401 8.54343 8.4779C8.71498 8.55481 8.86832 8.66713 8.9934 8.80748C9.11848 8.94783 9.21247 9.11305 9.26919 9.29229C9.32591 9.47153 9.34409 9.66074 9.32252 9.8475C9.3157 9.90866 9.33024 9.9703 9.36367 10.022C9.39711 10.0736 9.44739 10.1121 9.50599 10.131C9.80834 10.2284 10.066 10.4306 10.2325 10.7011C10.399 10.9716 10.4635 11.2927 10.4143 11.6065C10.3651 11.9204 10.2054 12.2063 9.96412 12.4129C9.7228 12.6195 9.41565 12.7331 9.09799 12.7334Z" fill="#333333"/>
                  <path d="M6.39801 7.8667C7.10813 7.8667 7.66466 7.1347 7.66466 6.20004C7.66466 5.26538 7.10813 4.53339 6.39801 4.53339C5.68788 4.53339 5.13135 5.26538 5.13135 6.20004C5.13135 7.1347 5.68788 7.8667 6.39801 7.8667ZM6.39801 5.06672C6.79534 5.06672 7.13133 5.58565 7.13133 6.20004C7.13133 6.81444 6.79534 7.33337 6.39801 7.33337C6.00068 7.33337 5.66468 6.81444 5.66468 6.20004C5.66468 5.58565 6.00068 5.06672 6.39801 5.06672Z" fill="#333333"/>
                  <path d="M4.19806 7.13339C3.48793 7.13339 2.9314 7.86672 2.9314 8.80005C2.9314 9.73338 3.48793 10.4667 4.19806 10.4667C4.90818 10.4667 5.46471 9.73471 5.46471 8.80005C5.46471 7.86539 4.90818 7.13339 4.19806 7.13339ZM4.19806 9.93337C3.80072 9.93337 3.46473 9.41338 3.46473 8.80005C3.46473 8.18672 3.80072 7.66672 4.19806 7.66672C4.59539 7.66672 4.93138 8.18672 4.93138 8.80005C4.93138 9.41338 4.59539 9.93337 4.19806 9.93337Z" fill="#333333"/>
                  <path d="M9.59796 7.8667C10.3081 7.8667 10.8646 7.1347 10.8646 6.20004C10.8646 5.26538 10.3081 4.53339 9.59796 4.53339C8.88783 4.53339 8.3313 5.26538 8.3313 6.20004C8.3313 7.1347 8.88783 7.8667 9.59796 7.8667ZM9.59796 5.06672C9.99529 5.06672 10.3313 5.58565 10.3313 6.20004C10.3313 6.81444 9.99529 7.33337 9.59796 7.33337C9.20063 7.33337 8.86463 6.81444 8.86463 6.20004C8.86463 5.58565 9.20063 5.06672 9.59796 5.06672Z" fill="#333333"/>
                  <path d="M11.7982 10.4667C12.5083 10.4667 13.0648 9.73471 13.0648 8.80005C13.0648 7.86539 12.5083 7.13339 11.7982 7.13339C11.088 7.13339 10.5315 7.86672 10.5315 8.80005C10.5315 9.73338 11.088 10.4667 11.7982 10.4667ZM11.7982 7.66672C12.1955 7.66672 12.5315 8.18672 12.5315 8.80005C12.5315 9.41338 12.1955 9.93337 11.7982 9.93337C11.4008 9.93337 11.0648 9.41338 11.0648 8.80005C11.0648 8.18672 11.4008 7.66672 11.7982 7.66672Z" fill="#333333"/>
                  <path d="M15.5586 4.13341L8.12687 0.0331677C8.08743 0.0114108 8.04312 0 7.99807 0C7.95303 0 7.90871 0.0114108 7.86927 0.0331677L0.437853 4.13341C0.240956 4.24264 0.0954183 4.4255 0.0331575 4.64189C-0.0291032 4.85828 -0.00300376 5.09053 0.105732 5.2877C0.214468 5.48487 0.396963 5.63087 0.613193 5.69368C0.829423 5.75648 1.06174 5.73097 1.25918 5.62273L1.33145 5.583V14.4C1.11928 14.4 0.915794 14.4843 0.765766 14.6343C0.615738 14.7844 0.531453 14.9878 0.531453 15.2C0.531453 15.4122 0.615738 15.6157 0.765766 15.7657C0.915794 15.9157 1.11928 16 1.33145 16H14.6647C14.8769 16 15.0803 15.9157 15.2304 15.7657C15.3804 15.6157 15.4647 15.4122 15.4647 15.2C15.4647 14.9878 15.3804 14.7844 15.2304 14.6343C15.0803 14.4843 14.8769 14.4 14.6647 14.4V5.583L14.737 5.62273C14.9345 5.73168 15.1671 5.75772 15.3838 5.6951C15.6005 5.63249 15.7835 5.48636 15.8924 5.28887C16.0014 5.09137 16.0274 4.85868 15.9648 4.64199C15.9022 4.4253 15.7561 4.24236 15.5586 4.13341ZM14.9314 15.2C14.9314 15.2707 14.9033 15.3386 14.8533 15.3886C14.8032 15.4386 14.7354 15.4667 14.6647 15.4667H1.33145C1.26072 15.4667 1.1929 15.4386 1.14289 15.3886C1.09288 15.3386 1.06478 15.2707 1.06478 15.2C1.06478 15.1293 1.09288 15.0615 1.14289 15.0114C1.1929 14.9614 1.26072 14.9333 1.33145 14.9333H14.6647C14.7354 14.9333 14.8032 14.9614 14.8533 15.0114C14.9033 15.0615 14.9314 15.1293 14.9314 15.2ZM14.1314 14.4H1.86478V5.2886L7.99807 1.90489L14.1314 5.2886V14.4ZM15.309 5.151C15.2617 5.17958 15.2076 5.19506 15.1524 5.19585C15.0971 5.19665 15.0427 5.18274 14.9946 5.15554L8.12687 1.36649C8.08743 1.34474 8.04312 1.33332 7.99807 1.33332C7.95303 1.33332 7.90871 1.34474 7.86927 1.36649L1.00158 5.15554C0.953324 5.18223 0.898934 5.19586 0.843791 5.19508C0.788648 5.19431 0.734662 5.17915 0.687174 5.15111C0.639687 5.12307 0.600341 5.08312 0.573029 5.03521C0.545718 4.9873 0.531386 4.93309 0.531453 4.87794C0.531429 4.82126 0.546638 4.76561 0.575489 4.71682C0.60434 4.66803 0.645772 4.62789 0.695451 4.60061L7.99807 0.571564L15.301 4.60061C15.3506 4.62795 15.3919 4.66811 15.4207 4.71689C15.4495 4.76567 15.4647 4.82129 15.4647 4.87794C15.4653 4.93318 15.4512 4.98759 15.4238 5.03558C15.3965 5.08357 15.3568 5.12341 15.309 5.151Z" fill="#333333"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0917 14.4133C12.505 14.5867 11.8117 14.6667 10.9984 14.6667H6.99836C6.18503 14.6667 5.4917 14.5867 4.90503 14.4133C5.0517 12.68 6.8317 11.3133 8.99836 11.3133C11.165 11.3133 12.945 12.68 13.0917 14.4133Z" stroke="#333333" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.9982 1.33334H6.99821C3.66488 1.33334 2.33154 2.66668 2.33154 6.00001V10C2.33154 12.52 3.09154 13.9 4.90488 14.4133C5.05154 12.68 6.83154 11.3133 8.99821 11.3133C11.1649 11.3133 12.9449 12.68 13.0915 14.4133C14.9049 13.9 15.6649 12.52 15.6649 10V6.00001C15.6649 2.66668 14.3315 1.33334 10.9982 1.33334ZM8.99821 9.44667C7.67821 9.44667 6.61154 8.37335 6.61154 7.05335C6.61154 5.73335 7.67821 4.66668 8.99821 4.66668C10.3182 4.66668 11.3849 5.73335 11.3849 7.05335C11.3849 8.37335 10.3182 9.44667 8.99821 9.44667Z" stroke="#333333" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.39829 3.00001C1.17737 3.00001 0.998291 3.1791 0.998291 3.40001C0.998291 3.62093 1.17737 3.80001 1.39829 3.80001H3.87329L5.97953 13.75C6.03063 13.9958 6.19483 14.2026 6.39829 14.2H16.3983C16.6096 14.203 16.804 14.0114 16.804 13.8C16.804 13.5887 16.6096 13.397 16.3983 13.4H6.72329L6.38579 11.8H17.1983C17.3774 11.798 17.5466 11.6623 17.5858 11.4875L18.9858 5.48753C19.0378 5.25538 18.8362 5.00173 18.5983 5.00003H4.94829L4.59205 3.31251C4.55241 3.13572 4.37947 2.99847 4.19829 3.00001H1.39829ZM5.11705 5.80003H8.66079L9.02953 8.00001H5.58579L5.11705 5.80003ZM9.46705 5.80003H13.7295L13.3608 8.00001H9.83579L9.46705 5.80003ZM14.5358 5.80003H18.0983L17.5858 8.00001H14.1671L14.5358 5.80003ZM5.75453 8.80001H9.16079L9.52953 11H6.21705L5.75453 8.80001ZM9.97329 8.80001H13.2233L12.8608 11H10.3358L9.97329 8.80001ZM14.0358 8.80001H17.3983L16.8795 11H13.6671L14.0358 8.80001ZM8.59829 15.4C7.60893 15.4 6.79829 16.2106 6.79829 17.2C6.79829 18.1894 7.60893 19 8.59829 19C9.58767 19 10.3983 18.1894 10.3983 17.2C10.3983 16.2106 9.58767 15.4 8.59829 15.4ZM14.1983 15.4C13.2089 15.4 12.3983 16.2106 12.3983 17.2C12.3983 18.1894 13.2089 19 14.1983 19C15.1877 19 15.9983 18.1894 15.9983 17.2C15.9983 16.2106 15.1877 15.4 14.1983 15.4ZM8.59829 16.2C9.15531 16.2 9.59829 16.643 9.59829 17.2C9.59829 17.757 9.15531 18.2 8.59829 18.2C8.04129 18.2 7.59829 17.757 7.59829 17.2C7.59829 16.643 8.04129 16.2 8.59829 16.2ZM14.1983 16.2C14.7553 16.2 15.1983 16.643 15.1983 17.2C15.1983 17.757 14.7553 18.2 14.1983 18.2C13.6413 18.2 13.1983 17.757 13.1983 17.2C13.1983 16.643 13.6413 16.2 14.1983 16.2Z" fill="#333333"/>
                  <ellipse cx="19.284" cy="4.14287" rx="3.42857" ry="3.42857" fill="#E2081E"/>
                </svg>
              </div>
            </div>
            <div className='mx-22'>
              <ul className="container mx-auto px-14 flex gap-x-[90px] text-[14px] font-medium text-center text-gray-500">
                  <li className="mr-2">
                      <button className="inline-block py-4 text-[#68605B]">Inicio</button>
                  </li>
                  <li className="mr-2">
                      <button  className="inline-block py-4 rounded-t-lg">Comprar por marca</button>
                  </li>
                  <li className="mr-2">
                      <button className="inline-block py-4 rounded-t-lg">Comprar por mascota</button>
                  </li>
                  <li className="mr-2">
                      <button  className="inline-block py-4 rounded-t-lg">Nuestros servicios</button>
                  </li>
                  <li>
                      <button className="inline-block py-4 rounded-t-lg">Promociones</button>
                  </li>
                  <li>
                      <button className="inline-block py-4 rounded-t-lg">Nosotros</button>
                  </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
}
