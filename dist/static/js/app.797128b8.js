(function(e){function t(t){for(var o,a,c=t[0],l=t[1],s=t[2],u=0,m=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},i={app:0},r=[];function c(e){return l.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d20813a":"74111a76","chunk-5dc84962":"3f6f3a8d"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-5dc84962":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="static/css/"+({}[e]||e)+"."+{"chunk-2d20813a":"31d6cfe0","chunk-5dc84962":"eeffa7ad"}[e]+".css",i=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===i))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){s=m[c],u=s.getAttribute("data-href");if(u===o||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],d.parentNode.removeChild(d),n(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var m=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",m.name="ChunkLoadError",m.type=o,m.request=a,n[1](m)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b06":function(e,t,n){},"1e20":function(e,t,n){e.exports={container:"common_container_1KkNQ",fixed:"common_fixed_1wGsG",absolute:"common_absolute_2JZBP","top-0":"common_top-0_2sc24","left-0":"common_left-0_EvGPn","left-60":"common_left-60_3a_Yg","mt-4":"common_mt-4_3VYjK","mt-10":"common_mt-10_2U1r_","mt-auto":"common_mt-auto_1rIQY","mr-2":"common_mr-2_1c2KA","mr-4":"common_mr-4_3wyl8","mb-0":"common_mb-0_2GMIG","mb-4":"common_mb-4_1kbu-","mb-10":"common_mb-10_1p0Fb","ml-auto":"common_ml-auto_gBizT",block:"common_block_2dZ2Q",flex:"common_flex_rbhrS",table:"common_table_pTV4T",grid:"common_grid_2MM_B",hidden:"common_hidden_2_s8G","h-36":"common_h-36_1uWqG","h-56":"common_h-56_1EoK5","h-screen":"common_h-screen_MNzid","w-28":"common_w-28_38UzY","w-60":"common_w-60_1a2GF","w-2/5":"common_w-2/5_V2Jfd","w-3/5":"common_w-3/5_3ZFVX","w-full":"common_w-full_7nbrH",transform:"common_transform_39Dn8","rotate-180":"common_rotate-180_1q1KG","cursor-pointer":"common_cursor-pointer_WnCKz","flex-col":"common_flex-col_v6BQR","flex-wrap":"common_flex-wrap_-EHe1","items-start":"common_items-start_ZLMzy","items-end":"common_items-end_18Aw3","items-center":"common_items-center_3aIM-","justify-center":"common_justify-center_AA7oO","gap-4":"common_gap-4_1yhTN",rounded:"common_rounded_1-Hrx","border-4":"common_border-4_3DKYu",border:"common_border_1E4AS","border-t-4":"common_border-t-4_3iMFT","border-r-8":"common_border-r-8_1WEmO","border-b-4":"common_border-b-4_IJwbK","border-double":"common_border-double_37_72","border-black":"common_border-black_1vVCT","border-yellow-400":"common_border-yellow-400_iZ1gJ","bg-yellow-500":"common_bg-yellow-500_2HuK6","bg-blue-100":"common_bg-blue-100_1RdW9","bg-blue-200":"common_bg-blue-200_1p9s7","bg-cover":"common_bg-cover_24OpP","bg-top":"common_bg-top_1qOg0","p-3":"common_p-3_1vXKL","p-4":"common_p-4_3Wm9R","p-8":"common_p-8_1fmjy","p-10":"common_p-10_27lgx","pt-2":"common_pt-2_5ms1Y","pt-12":"common_pt-12_2lfsy","pt-16":"common_pt-16_2hFvA","pt-40":"common_pt-40_pZRf-","pb-4":"common_pb-4_1R_SG","pl-56":"common_pl-56_1rFvT","text-center":"common_text-center_3vK6h","font-lobster":"common_font-lobster_2AqnW","font-lato":"common_font-lato_u147t","text-2xl":"common_text-2xl_2j9NZ","text-3xl":"common_text-3xl_w0ShA","text-5xl":"common_text-5xl_2u81j","font-bold":"common_font-bold_1soSK","text-black":"common_text-black_18Fwx","text-white":"common_text-white_2PK47","text-red-600":"common_text-red-600_3bFFj","text-yellow-500":"common_text-yellow-500_tWtsF","text-green-500":"common_text-green-500_s0XkP","text-blue-500":"common_text-blue-500_3-vr8","text-blue-900":"common_text-blue-900_1OsWA","opacity-50":"common_opacity-50_24dED","shadow-md":"common_shadow-md_2qH3A",transition:"common_transition_11KTs","fade-enter-active":"common_fade-enter-active_2Z9Jq","fade-leave-active":"common_fade-leave-active_38KbQ","fade-enter-from":"common_fade-enter-from_1ceV0","fade-leave-to":"common_fade-leave-to_1GZGh","md:grid-cols-2":"common_md:grid-cols-2_2l9gE","lg:w-1/5":"common_lg:w-1/5_Smt5x","lg:w-4/5":"common_lg:w-4/5_1FIZU","lg:flex-row":"common_lg:flex-row_3mjlc","lg:bg-center":"common_lg:bg-center_3KD2n",spin:"common_spin_2-uF9",ping:"common_ping_1vtyl",pulse:"common_pulse_11GoH",bounce:"common_bounce_3s441"}},"27e4":function(e,t,n){e.exports=n.p+"static/img/arrow.90864605.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("f2bf"),a={class:"flex"};function i(e,t,n,i,r,c){var l=Object(o["A"])("SideBar"),s=Object(o["A"])("Header"),u=Object(o["A"])("router-view"),m=Object(o["A"])("Loading");return Object(o["t"])(),Object(o["g"])("div",a,[Object(o["j"])(l,{onIsmenuopen:c.checkMenuOpen},null,8,["onIsmenuopen"]),Object(o["h"])("div",{class:Object(o["p"])(["ml-auto transition w-full",{"pl-56":c.isMenuOpen&&!c.isMobile}])},[Object(o["j"])(s,{title:r.title},null,8,["title"]),Object(o["h"])("main",{class:Object(o["p"])([c.isMobile?"p-4 flex-col items-center":"p-8"])},[Object(o["j"])(u,null,{default:Object(o["G"])((function(e){var t=e.Component;return[Object(o["j"])(o["b"],{name:"fade"},{default:Object(o["G"])((function(){return[(Object(o["t"])(),Object(o["e"])(Object(o["B"])(t)))]})),_:2},1024)]})),_:1})],2),Object(o["j"])(o["b"],{name:"fade"},{default:Object(o["G"])((function(){return[c.isLoading?(Object(o["t"])(),Object(o["e"])(m,{key:0})):Object(o["f"])("",!0)]})),_:1})],2)])}n("b0c0");function r(e,t,n,a,i,r){return Object(o["t"])(),Object(o["g"])("header",{class:Object(o["p"])(["w-full text-center text-5xl font-lobster text-white flex items-end justify-center pb-4",[i.isHome?"h-56":"h-36"]])},[Object(o["h"])("h1",null,Object(o["D"])(n.title),1)],2)}var c={name:"Header",emits:["ismenuopen"],props:{title:{type:String}},data:function(){return{isMenuOpen:!0,isLogoHover:!1,isHome:!1,menuContent:[{name:"Learn from map",to:"map"},{name:"Africa Holidays",to:"map"},{name:"lights to Africa",to:"map"},{name:"Books about Africa",to:"map"},{name:"Game time!",to:"map"}]}},methods:{openMenu:function(){this.isMenuOpen=!this.isMenuOpen,this.$emit("ismenuopen",this.isMenuOpen)}},computed:{logoPosition:function(){return this.isMenuOpen?"-7rem":"0rem"},router:function(){return this.$router}},watch:{router:{handler:function(){this.isHome="/"===this.$router.currentRoute._rawValue.path},deep:!0}}};n("585f");c.render=r,c.__scopeId="data-v-795786bc";var l=c,s=n("e347"),u=n.n(s),m=n("27e4"),d=n.n(m);Object(o["w"])("data-v-06194bdc");var f={class:"flex font-lato transform transition fixed w-60",style:{"min-width":"7rem"}},b=Object(o["h"])("img",{class:"w-full",src:u.a,alt:""},null,-1),_=Object(o["h"])("div",{class:"",href:""},"Copyright © Rachel 🦋",-1),p=Object(o["h"])("img",{class:"mb-4 mt-4 w-28",src:u.a,alt:""},null,-1);function g(e,t,n,a,i,r){var c=Object(o["A"])("router-link");return Object(o["t"])(),Object(o["g"])("header",f,[Object(o["h"])("section",{class:Object(o["p"])(["text-center bg-yellow-500 text-black p-4 pt-16 mb-10 h-screen border-r-8 border-black flex flex-col",{hidden:!i.isMenuOpen}])},[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["z"])(i.menuContent,(function(e){return Object(o["t"])(),Object(o["g"])("div",{key:e,class:"text-2xl mb-4",onClick:t[0]||(t[0]=function(){return r.closeMenu&&r.closeMenu.apply(r,arguments)})},[e.enabled?(Object(o["t"])(),Object(o["e"])(c,{key:0,to:"".concat(e.to)},{default:Object(o["G"])((function(){return[Object(o["h"])("h4",{class:Object(o["p"])(["border-black",[r.isCurrentPage(e.to)?"border-b-4":""]])},Object(o["D"])(e.name),3)]})),_:2},1032,["to"])):Object(o["f"])("",!0)])})),128)),Object(o["h"])("div",{class:"mt-auto mb-4",onClick:t[1]||(t[1]=function(){return r.closeMenu&&r.closeMenu.apply(r,arguments)})},[Object(o["j"])(c,{to:"/"},{default:Object(o["G"])((function(){return[b]})),_:1})]),_],2),Object(o["h"])("div",{class:Object(o["p"])(["transition absolute w-28",[{"opacity-50":!i.isMenuOpen&&!i.isLogoHover},{"left-60":i.isMenuOpen},{"left-0":i.isMenuOpen}]]),onMouseover:t[3]||(t[3]=function(e){return i.isLogoHover=!0}),onMouseleave:t[4]||(t[4]=function(e){return i.isLogoHover=!1})},[i.isMobile?Object(o["f"])("",!0):(Object(o["t"])(),Object(o["e"])(c,{key:0,onClick:r.closeMenu,to:"/"},{default:Object(o["G"])((function(){return[p]})),_:1},8,["onClick"])),Object(o["h"])("img",{onClick:t[2]||(t[2]=function(){return r.toggleMenu&&r.toggleMenu.apply(r,arguments)}),class:Object(o["p"])(["icon cursor-pointer transform transition",{"rotate-180":!i.isMenuOpen}]),src:d.a,alt:""},null,2)],34)])}Object(o["u"])();var h={name:"SideBarr",emits:["ismenuopen"],data:function(){return{isMenuOpen:!0,isLogoHover:!1,currentPath:"",isMobile:!1,menuContent:[{name:"Home",to:"/",enabled:!0},{name:"Learn from map",to:"/map",enabled:!0},{name:"Africa News",to:"/news",enabled:!1},{name:"lights to Africa",to:"/",enabled:!1},{name:"Books about Africa",to:"/",enabled:!1},{name:"Game time!",to:"/",enabled:!1}]}},methods:{toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen,this.$store.commit("setMenuOpen",this.isMenuOpen)},isCurrentPage:function(e){return this.currentPath===e},closeMenu:function(){this.isMobile&&(this.isMenuOpen=!1,this.$store.commit("setMenuOpen",this.isMenuOpen))}},watch:{routerName:{handler:function(){this.currentPath=this.$router.currentRoute._rawValue.path},deep:!0},checkIsMobile:{handler:function(){this.isMobile=this.$_isMobile(),this.isMobile&&(this.isMenuOpen=!1,this.$store.commit("setMenuOpen",this.isMenuOpen))},deep:!0,immediate:!0}},computed:{routerName:function(){return this.$router},checkIsMobile:function(){return console.log("isMobile",this.$_isMobile()),this.$_isMobile()}}};n("ad8e");h.render=g,h.__scopeId="data-v-06194bdc";var w=h;Object(o["w"])("data-v-231d7622");var O={class:"loading-bg w-full h-screen z-50 absolute top-0 left-0 flex justify-center pt-40 items-start"},v=Object(o["i"])('<svg xmlns="http://www.w3.org/2000/svg" width="300" viewBox="0 0 120 110.133" data-v-231d7622><g id="Group_62" data-name="Group 62" transform="translate(-7157.753 -229.247)" data-v-231d7622><g id="logo-map" data-name="Group 42" transform="matrix(0.998, -0.07, 0.07, 0.998, 7180, 234.009)" data-v-231d7622><path id="logo-map1" data-name="Path 4" d="M51.3,7.2c.085,1.258.358,2.5.33,3.752a.443.443,0,0,1-.614-.184c-.226-.355-.5-.681-.714-1.042-.18-.3-.3-.639-.458-.956a1.85,1.85,0,0,0-.219-.265,2.041,2.041,0,0,0-.061.377,1.469,1.469,0,0,0,.607,1.29.316.316,0,0,1,.082.078c.166.224.331.447.493.673a1.21,1.21,0,0,1,.334.949.321.321,0,0,0,.063.207c.139.213.3.414.433.629.27.427.529.859.792,1.29.093.152.174.31.275.456a.634.634,0,0,1,.057.656,1.689,1.689,0,0,0-.112.479c-.012.122.05.186.2.247a1.063,1.063,0,0,1,.423.425.314.314,0,0,0,.306.187c.232,0,.408.094.413.36a.825.825,0,0,0,.034.331.774.774,0,0,0,.281.369c.3.148.385.234.218.524a.851.851,0,0,0,.1,1.1.374.374,0,0,1,.046.234.926.926,0,0,0,.455.947c.214.122.5.254.541.578.009.067.214.095.254.175a3.046,3.046,0,0,1,.244.675,6.912,6.912,0,0,0,.131.854,2.171,2.171,0,0,0,.438.617c.138.16.359.268.454.444a.818.818,0,0,0,.646.456,1.092,1.092,0,0,1,.819.553,3.345,3.345,0,0,0,.465.563.364.364,0,0,0,.263.063c.192-.02.264.064.338.225a2.785,2.785,0,0,0,.363.517c.075.1.185.166.254.265.191.272.331.556.042.878a1.947,1.947,0,0,1,.255.191,2.87,2.87,0,0,1,.432.5.915.915,0,0,0,.989.465c.074-.016.188-.037.205-.084.113-.3.385-.214.6-.244a4.965,4.965,0,0,1,.55-.006,1.585,1.585,0,0,0,.682-.22,3.2,3.2,0,0,1,1.082-.2c.228-.023.463.029.693.021a1.543,1.543,0,0,0,.9-.276,3.712,3.712,0,0,1,.917-.4c.207-.075.33.034.363.236a1.1,1.1,0,0,1,.007.224,1.448,1.448,0,0,0,.28,1.128l-.493.269c-.025.163-.055.382-.092.6a2.462,2.462,0,0,1-.611,1.088,7.692,7.692,0,0,1-.948,1.3c-.08.068-.019.272-.062.4a3.377,3.377,0,0,1-.313.785,13.226,13.226,0,0,1-1.01,1.39c-.328.388-.724.723-1.087,1.083-.274.271-.535.555-.82.814a2.12,2.12,0,0,1-.558.392,8.648,8.648,0,0,0-2.392,1.959,4.755,4.755,0,0,0-.778.993,1.283,1.283,0,0,1-.785.706.18.18,0,0,0-.112.132c0,.246-.178.28-.365.358a1.014,1.014,0,0,0-.406.347c-.159.224-.263.483-.41.716a4.289,4.289,0,0,0-.606.939,3.313,3.313,0,0,1-.473,1.139c-.037.05.033.214.1.289a2.743,2.743,0,0,0,.39.333.746.746,0,0,1,.226.954,1.243,1.243,0,0,0,.119,1.354.779.779,0,0,1,.105.429.617.617,0,0,0,.373.629.506.506,0,0,1,.29.524c0,.391.04.782.063,1.173a.246.246,0,0,0,.014.11c.273.431.089.861.015,1.3a.976.976,0,0,0,.156.928c.078.084.059.292.022.428a6.456,6.456,0,0,1-.272.7c-.01.026-.044.053-.039.072.172.6-.454.827-.651,1.258a1.3,1.3,0,0,1-1.2.618,1.083,1.083,0,0,0-.85.39c-.52.512-1.106.96-1.654,1.446-.376.333-.746.675-1.1,1.032-.241.243-.2.445.05.668a1.184,1.184,0,0,1,.48.956c0,.838.1,1.676.149,2.515a.476.476,0,0,1-.134.357,2.667,2.667,0,0,1-1.03.516,8.6,8.6,0,0,0-1.605.663c-.213.1-.191.3.034.4.3.133.345.306.261.6-.165.585-.277,1.184-.42,1.775a2.6,2.6,0,0,1-.17.474c-.037.08-.1.183-.178.2a2.332,2.332,0,0,0-1.294.959.913.913,0,0,0-.191.54,1.333,1.333,0,0,1-.507,1.054c-.991.994-2.01,1.961-3.028,2.929a.768.768,0,0,1-.338.116c-.546.132-1.108.219-1.636.4a1.658,1.658,0,0,1-1.151.014,1.007,1.007,0,0,0-.636-.009,1.286,1.286,0,0,1-.5,0c-.3-.053-.587-.135-.79.191-.031.051-.149.067-.228.071a3.785,3.785,0,0,0-1.509.333.924.924,0,0,1-1.124-.271c-.39-.451-.8-.886-1.177-1.346a.675.675,0,0,1,.046-.941.76.76,0,0,0,.06-.846c-.49-.845-.972-1.695-1.454-2.544a.431.431,0,0,1-.079-.207c.027-.509-.345-.77-.681-1.056a.814.814,0,0,1-.186-.209,7.558,7.558,0,0,1-.8-1.832,7.376,7.376,0,0,1-.034-1.145,3.494,3.494,0,0,0-.162-.7c-.06-.205-.145-.4-.214-.606-.018-.052,0-.129-.032-.162-.29-.287-.143-.582-.03-.879a1.265,1.265,0,0,0-.472-1.343.594.594,0,0,1-.219-.248,3.137,3.137,0,0,1-.262-.764,4.257,4.257,0,0,0-1.147-2.158.465.465,0,0,0-.171-.148c-.386-.136-.422-.425-.4-.765.021-.316,0-.635.006-.953a2.356,2.356,0,0,1,.4-1.3,2.416,2.416,0,0,0,.367-1.634c0-.009,0-.018,0-.027-.032-.321-.078-.619.257-.868.3-.222.509-.55.79-.8a1.17,1.17,0,0,0,.305-1.165c-.03-.189-.268-.345-.4-.521a.549.549,0,0,1-.125-.231.673.673,0,0,0-.392-.6.272.272,0,0,1-.039-.475,2.61,2.61,0,0,1,.323-.237c.244-.14.221-.321.108-.524-.009-.016-.026-.03-.031-.047a8.406,8.406,0,0,0-1.033-1.659.95.95,0,0,1-.1-.58,1.048,1.048,0,0,0-.42-1.175,1.236,1.236,0,0,1-.524-.712.613.613,0,0,0-.358-.351,4.3,4.3,0,0,1-1.49-1.084c-.408-.367-.282-.868-.222-1.325a2.125,2.125,0,0,1,.293-1.148c.083-.107.045-.308.05-.466.011-.327.016-.653.02-.98a.481.481,0,0,1,.192-.467.238.238,0,0,0,.077-.2c-.051-.374-.1-.75-.187-1.117-.025-.106-.167-.191-.264-.276-.056-.049-.158-.064-.192-.12-.209-.356-.556-.3-.892-.3-.714,0-1.428,0-2.141,0a.9.9,0,0,1-.859-.622c-.039-.135-.071-.271-.109-.406a.87.87,0,0,0-.925-.681,2.171,2.171,0,0,1-1.01-.182c-.109-.053-.31.048-.461.1a2.987,2.987,0,0,1-.45.186c-.284.042-.575.039-.869.055-.117.506-.571.388-.9.442a.92.92,0,0,0-.752.383.321.321,0,0,1-.211.134,4.906,4.906,0,0,1-1.712.119A.659.659,0,0,1,14.9,33.4a.458.458,0,0,0-.414-.22,5.366,5.366,0,0,0-2.312.394,11.971,11.971,0,0,0-1.366.6.817.817,0,0,1-.817-.018c-1.187-.712-2.377-1.42-3.541-2.166A5.211,5.211,0,0,1,4.459,29.9a4.839,4.839,0,0,0-.512-.7,1.749,1.749,0,0,1-.205-.3,2.526,2.526,0,0,0-.854-1.035,1.482,1.482,0,0,1-.354-.468c-.181-.309-.366-.584-.791-.6a.343.343,0,0,1-.35-.344.312.312,0,0,0-.039-.131A1.038,1.038,0,0,1,1.3,25.306c.02-.041.048-.11.029-.133A12.571,12.571,0,0,0,.494,24.2c-.105-.1-.321-.106-.494-.157a.441.441,0,0,1,.381-.426,5.456,5.456,0,0,0,.925-.376c.067-.031.149-.17.127-.221-.094-.218.022-.385.076-.58.1-.372.147-.758.222-1.137a5.367,5.367,0,0,1,.176-.731.513.513,0,0,0-.062-.466,1.863,1.863,0,0,1-.173-.621c-.051-.358-.052-.724-.118-1.079a.409.409,0,0,0-.284-.264A.261.261,0,0,1,1,17.883,4.589,4.589,0,0,1,.924,17.1c.007-.3.027-.6.433-.717.169-.051.3-.274.41-.442a2.3,2.3,0,0,0,.364-1.075.918.918,0,0,1,.463-.707,1.462,1.462,0,0,0,.632-.924,1.2,1.2,0,0,1,.683-.912.511.511,0,0,0,.206-.216q.391-.637.766-1.282a.751.751,0,0,1,.7-.367,1.111,1.111,0,0,0,.991-.509,5.086,5.086,0,0,1,.744-.688c.274-.26.547-.522.8-.8a.371.371,0,0,0,.008-.531A.963.963,0,0,1,8.093,6.6a1.523,1.523,0,0,0,.221-.391A4.716,4.716,0,0,1,9.32,4.7a1.088,1.088,0,0,1,.775-.38,1.5,1.5,0,0,0,1.339-1.231A9.3,9.3,0,0,1,11.7,2.1c.059-.194.529-.249.741-.094.239.174.471.357.714.525a.432.432,0,0,0,.558.017.308.308,0,0,1,.187-.058c.557.022,1.116.033,1.67.086.388.037.492,0,.682-.327a.936.936,0,0,1,.735-.44,2.105,2.105,0,0,0,1.12-.429,2.159,2.159,0,0,1,.948-.3C19.58,1,20.111.97,20.636.9A.637.637,0,0,0,20.978.77,1.368,1.368,0,0,1,22.149.535a2.1,2.1,0,0,1,.517.186.92.92,0,0,0,.859-.109c.248-.171.455-.314.739-.1a.072.072,0,0,0,.055.014C24.971.3,25.7.649,26.343.254a2.5,2.5,0,0,1,.8-.234c.332-.068.439.026.516.393s.241.432.528.181c.116-.1.271-.257.368-.079a.674.674,0,0,1-.043.532c-.061.128-.253.192-.371.3a.4.4,0,0,0,.107.72.515.515,0,0,1,.055.939c-.34.161-.436.459-.588.726-.135.238.139.651.47.765.081.028.167.044.251.067.336.089.389.169.357.447.235.125.453.221.647.35a.875.875,0,0,0,.946-.005.583.583,0,0,1,.623-.088c.492.207.978.43,1.453.672a.593.593,0,0,1,.27.334,1.157,1.157,0,0,0,1.253.855A3.284,3.284,0,0,1,36,7.845a2.208,2.208,0,0,0,.434.215.55.55,0,0,0,.671-.168.088.088,0,0,1,.02-.02.836.836,0,0,0,.217-1.222c-.23-.423-.124-.656.3-.9.158-.089.3-.211.459-.291a2.973,2.973,0,0,1,1.84-.085.155.155,0,0,1,.079.034,5.878,5.878,0,0,0,1.867.885.792.792,0,0,1,.309.244.515.515,0,0,0,.674.192.8.8,0,0,1,.982.023.735.735,0,0,0,.46.131,3.335,3.335,0,0,1,1.438.442,2.441,2.441,0,0,0,.549.14c.064.01.183-.028.2-.074.137-.327.46-.327.733-.417a.432.432,0,0,0,.177-.091,1.056,1.056,0,0,1,.987-.264,1.345,1.345,0,0,1,.918.472.332.332,0,0,0,.226.089c.289.012.579.009.869.01S50.983,7.2,51.3,7.2Z" transform="translate(0 0)" fill="#fbca04" data-v-231d7622></path><path id="logo-map2" data-name="Path 5" d="M4.114,2.441c-.035-.069-.044-.113-.069-.129a.375.375,0,0,0-.184-.068c-.03,0-.076.084-.083.134-.054.393-.094.788-.155,1.18-.016.1-.1.19-.14.291a2.693,2.693,0,0,0-.18.583,3.665,3.665,0,0,1-.186,1.028,5.4,5.4,0,0,0-.354,1.507,1.131,1.131,0,0,1-.269.769c-.027.026,0,.106-.013.153a.855.855,0,0,1-.135.273c-.093.1-.219.177-.32.275a.412.412,0,0,1-.365.166.408.408,0,0,0-.262.089.434.434,0,0,1-.666-.1.618.618,0,0,0-.106-.119A.989.989,0,0,1,.266,7.411a.416.416,0,0,0-.046-.3,2.445,2.445,0,0,1-.219-1c-.01-.046.083-.115.13-.171.071-.083.147-.162.215-.247s.109-.153.163-.229c.014-.019.038-.035.042-.056A2.084,2.084,0,0,0,.623,4.326C.6,4.246.532,4.168.536,4.092a3.085,3.085,0,0,1,.184-1.4,1,1,0,0,1,.417-.337A2.522,2.522,0,0,1,1.6,2.227c.2-.058.446-.073.575-.2s.284-.266.411-.408a.985.985,0,0,0,.155-.493A.5.5,0,0,1,3.072.7a.292.292,0,0,0,.194-.37c-.035-.211.162-.222.261-.3s.154.033.2.11c.1.16.212.317.31.481a.462.462,0,0,1,.028.535c-.023.036.037.133.07.2s.125.139.124.207c0,.254-.028.508-.053.761C4.2,2.351,4.158,2.383,4.114,2.441Z" transform="translate(63.389 58.544)" fill="#fbca04" data-v-231d7622></path></g><path id="logo-ball1" data-name="Path 8" d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z" transform="translate(7168.203 315.38)" fill="#fbca04" data-v-231d7622></path><path id="logo-ball2" data-name="Path 8" d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z" transform="translate(7234 315.38)" fill="#fbca04" data-v-231d7622></path></g><animateTransform id="1" xlink:href="#logo-ball1" attributeName="transform" type="translate" values="7168.203 315.38;7213 315.38;7213 315.38" keyTimes="0; 0.5; 1" dur="1.2s" fill="freeze" repeatCount="indefinite" data-v-231d7622></animateTransform><animateTransform xlink:href="#logo-ball2" attributeName="transform" type="translate" values="7213 315.38;7213 315.38;7365 315.38" keyTimes="0; 0.3; 1" dur="1.2s" fill="freeze" repeatCount="indefinite" data-v-231d7622></animateTransform><animate xlink:href="#logo-map1" attributeName="fill" values="#04C461;#fbca04;#fbca04" keyTimes="0; 0.5; 1" dur="1.2s" fill="freeze" repeatCount="indefinite" data-v-231d7622></animate><animate xlink:href="#logo-map2" attributeName="fill" values="#04C461;#fbca04;#fbca04" keyTimes="0; 0.5; 1" dur="1.2s" fill="freeze" repeatCount="indefinite" data-v-231d7622></animate><animate xlink:href="#logo-ball1" attributeName="fill" values="#04C461;#fbca04;#fbca04" keyTimes="0; 0.5; 1" dur="1.2s" fill="freeze" repeatCount="indefinite" data-v-231d7622></animate><animate xlink:href="#logo-ball2" attributeName="fill" values="#fbca04;#fbca04;#04C461" keyTimes="0; 0.3; 1" dur="1.2s" fill="freeze" repeatCount="indefinite" data-v-231d7622></animate></svg>',1),j=[v];function x(e,t,n,a,i,r){return Object(o["t"])(),Object(o["g"])("div",O,j)}Object(o["u"])();var A={name:"Loading",props:{isLoading:{type:Boolean}},data:function(){return{isMenuOpen:!0,isLogoHover:!1,menuContent:[{name:"Learn from map",to:"map"},{name:"Africa Holidays",to:"map"},{name:"lights to Africa",to:"map"},{name:"Books about Africa",to:"map"},{name:"Game time!",to:"map"}]}},methods:{openMenu:function(){this.isMenuOpen=!this.isMenuOpen,this.$emit("ismenuopen",this.isMenuOpen)}}};n("db56");A.render=x,A.__scopeId="data-v-231d7622";var y=A,M={components:{Header:l,SideBar:w,Loading:y},data:function(){return{title:""}},methods:{checkMenuOpen:function(e){console.log("isMenuOpen"+e),this.isMenuOpen=e}},watch:{router:{handler:function(){this.title=this.$router.currentRoute._rawValue.name},deep:!0}},computed:{isLoading:function(){return this.$store.state.isPageLoading},router:function(){return this.$router},isMenuOpen:function(){return this.$store.state.isMenuOpen},isMobile:function(){return this.$_isMobile()}}};n("c27b");M.render=i;var k=M,C=n("9483");Object(C["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var S=n("6c02"),E=n("d98b"),L=n.n(E);Object(o["w"])("data-v-7c919c8a");var T={class:"container"},N={class:"flex w-full mb-4 flex-col lg:flex-row"},G={class:"w-full lg:w-4/5 mr-4 mb-4 lg: mb-0"},P=Object(o["h"])("div",{class:"border-b-4 border-yellow-400 flex"},[Object(o["h"])("img",{class:"mr-2",src:L.a,alt:""}),Object(o["h"])("h4",{class:"font-bold"},"Africa is not the one we thought anymore.")],-1),W=Object(o["h"])("p",{class:"mt-4"}," Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. Africa is not the one we thought anymore. ",-1),B={class:"flex flex-wrap mt-4"},H=Object(o["h"])("div",{class:"main-img w-full lg:w-1/5 bg-cover bg-top lg:bg-center"},null,-1),K={class:"main-form border-t-4 border-black text-center"},I=Object(o["h"])("h2",null,"Explore Africa with Us!",-1),$={name:"countries",id:"",class:"border-double border-4 border-black mt-4"},Z=Object(o["h"])("option",{value:"0"},[Object(o["h"])("h4",null,"Please Select a country")],-1),F=Object(o["h"])("p",{class:"mt-4"}," Choose an Africa country that you are interested in, or we will randomly push all information! ",-1);function z(e,t,n,a,i,r){var c=Object(o["A"])("Tag");return Object(o["t"])(),Object(o["g"])("div",T,[Object(o["h"])("div",N,[Object(o["h"])("div",G,[P,W,Object(o["h"])("div",B,[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["z"])(i.tags,(function(e,t){return Object(o["t"])(),Object(o["e"])(c,{key:t,tagname:e,colornum:t,class:"mr-2"},null,8,["tagname","colornum"])})),128))])]),H]),Object(o["h"])("div",K,[I,Object(o["h"])("select",$,[Z,(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["z"])(i.africanCountries,(function(e){return Object(o["t"])(),Object(o["g"])("option",{key:e,value:"country"},Object(o["D"])(e),1)})),128))]),F])])}function R(e,t,n,a,i,r){return Object(o["t"])(),Object(o["g"])("div",{class:Object(o["p"])(["font-bold",r.tagColor(n.colornum)])},"#"+Object(o["D"])(n.tagname),3)}Object(o["u"])();n("a9e3");var D={name:"Tag",props:{tagname:{type:String},colornum:{type:Number}},data:function(){return{colorSet:["text-red-600","text-yellow-500","text-green-500","text-blue-500"]}},methods:{tagColor:function(e){return this.colorSet[e]}}};D.render=R;var V=D,q={name:"Home",components:{Tag:V},data:function(){return{africanCountries:[],tags:["modernafrica","youdontknowafrica","africanfood","africanculture"]}},mounted:function(){var e=this;this.africanCountries=this.$store.state.africanCountries,this.$store.commit("setLoading",!0),this.$nextTick((function(){return e.$store.commit("setLoading",!1)}))}};n("ad4b");q.render=z,q.__scopeId="data-v-7c919c8a";var U=q,Q=[{path:"/news",name:"Africa News",component:function(){return n.e("chunk-2d20813a").then(n.bind(null,"a2f9"))}},{path:"/map",name:"Learn Africa with Map",component:function(){return n.e("chunk-5dc84962").then(n.bind(null,"89a9"))}},{path:"/",name:"Africa, Africa!",component:U}],J=Object(S["a"])({history:Object(S["b"])(""),routes:Q}),Y=J,X=(n("b64b"),n("5502")),ee={Nigeria:{region:"Western Africa"},Ethiopia:{region:"Eastern Africa"},Egypt:{region:"Northern Africa"},"DR Congo":{region:"Middle Africa"},Tanzania:{region:"Eastern Africa"},"South Africa":{region:"Southern Africa"},Kenya:{region:"Eastern Africa"},Uganda:{region:"Eastern Africa"},Algeria:{region:"Northern Africa"},Sudan:{region:"Northern Africa"},Morocco:{region:"Northern Africa"},Angola:{region:"Middle Africa"},Mozambique:{region:"Eastern Africa"},Ghana:{region:"Western Africa"},Madagascar:{region:"Eastern Africa"},Cameroon:{region:"Middle Africa"},"Côte dIvoire":{region:"Western Africa"},Niger:{region:"Western Africa"},"Burkina Faso":{region:"Western Africa"},Mali:{region:"Western Africa"},Malawi:{region:"Eastern Africa"},Zambia:{region:"Eastern Africa"},Senegal:{region:"Western Africa"},Chad:{region:"Middle Africa"},Somalia:{region:"Eastern Africa"},Zimbabwe:{region:"Eastern Africa"},Guinea:{region:"Western Africa"},Rwanda:{region:"Eastern Africa"},Benin:{region:"Western Africa"},Burundi:{region:"Eastern Africa"},Tunisia:{region:"Northern Africa"},"South Sudan":{region:"Eastern Africa"},Togo:{region:"Western Africa"},"Sierra Leone":{region:"Western Africa"},Libya:{region:"Northern Africa"},Congo:{region:"Middle Africa"},Liberia:{region:"Western Africa"},"Central African Republic":{region:"Middle Africa"},Mauritania:{region:"Western Africa"},Eritrea:{region:"Eastern Africa"},Namibia:{region:"Southern Africa"},Gambia:{region:"Western Africa"},Botswana:{region:"Southern Africa"},Gabon:{region:"Middle Africa"},Lesotho:{region:"Southern Africa"},"Guinea-Bissau":{region:"Western Africa"},"Equatorial Guinea":{region:"Middle Africa"},Mauritius:{region:"Eastern Africa"},Eswatini:{region:"Southern Africa"},Djibouti:{region:"Eastern Africa"},Comoros:{region:"Eastern Africa"},"Cabo Verde":{region:"Western Africa"},"Sao Tome & Principe":{region:"Middle Africa"},Seychelles:{region:"Eastern Africa"}},te=ee,ne=Object(X["a"])({state:{isPageLoading:!1,isMenuOpen:!0,africanCountries:Object.keys(te)},action:{},getters:{},mutations:{setLoading:function(e,t){var n=document.querySelector("body");e.isPageLoading=t,e.isPageLoading&&(n.style.overflow="hidden"),e.isPageLoading||(n.style.overflow="auto")},setMenuOpen:function(e,t){e.isMenuOpen=t}}}),oe=ne,ae=(n("ba8c"),n("ac1f"),n("5319"),{methods:{hello:function(){console.log("hello from mixin!")},$_setNumberWithComma:function(e){return null===e||void 0===e?void 0:e.toLocaleString()},$_isMobile:function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e<=768},$_removeBlank:function(e){return e.replace(/\s*/g,"")}}}),ie=ae;n("1e20");Object(o["d"])(k).use(oe).use(Y).mixin(ie).mount("#app")},"585f":function(e,t,n){"use strict";n("87b1")},"87b1":function(e,t,n){},"9cd0":function(e,t,n){},ad4b:function(e,t,n){"use strict";n("c7d7")},ad8e:function(e,t,n){"use strict";n("bb55")},ba8c:function(e,t,n){e.exports={container:"tailwind_container_31lz9",fixed:"tailwind_fixed_2Q9QR",absolute:"tailwind_absolute_fW-v9","top-0":"tailwind_top-0_1PPUs","left-0":"tailwind_left-0_2DVGA","left-60":"tailwind_left-60_ViRZH","mt-4":"tailwind_mt-4_nuCNn","mt-10":"tailwind_mt-10_22Qbm","mt-auto":"tailwind_mt-auto_3Zxt9","mr-2":"tailwind_mr-2_2v9wn","mr-4":"tailwind_mr-4_357ud","mb-0":"tailwind_mb-0_OFEge","mb-4":"tailwind_mb-4_11ATU","mb-10":"tailwind_mb-10_2Dy9A","ml-auto":"tailwind_ml-auto_2pAQo",block:"tailwind_block_2SJvj",flex:"tailwind_flex_2BRdX",table:"tailwind_table_ITXBo",grid:"tailwind_grid_1K9cT",hidden:"tailwind_hidden_UzfGu","h-36":"tailwind_h-36_u73bb","h-56":"tailwind_h-56_ZDREE","h-screen":"tailwind_h-screen_1TGbF","w-28":"tailwind_w-28_-4oAj","w-60":"tailwind_w-60_1ds16","w-2/5":"tailwind_w-2/5_Ox868","w-3/5":"tailwind_w-3/5_2IV0B","w-full":"tailwind_w-full_2r0Gq",transform:"tailwind_transform_7S7Wt","rotate-180":"tailwind_rotate-180_3CovM","cursor-pointer":"tailwind_cursor-pointer_1IUR_","flex-col":"tailwind_flex-col_1k6HA","flex-wrap":"tailwind_flex-wrap_2tUuo","items-start":"tailwind_items-start_1locD","items-end":"tailwind_items-end_1SfJV","items-center":"tailwind_items-center_MeJuA","justify-center":"tailwind_justify-center_21u-p","gap-4":"tailwind_gap-4_2OKuv",rounded:"tailwind_rounded_2MXSf","border-4":"tailwind_border-4_2lxqW",border:"tailwind_border_2DgNW","border-t-4":"tailwind_border-t-4_2gyLy","border-r-8":"tailwind_border-r-8_3lMSx","border-b-4":"tailwind_border-b-4_KTbx5","border-double":"tailwind_border-double_8hJaM","border-black":"tailwind_border-black_3GRYT","border-yellow-400":"tailwind_border-yellow-400_1mA0V","bg-yellow-500":"tailwind_bg-yellow-500_2lhjL","bg-blue-100":"tailwind_bg-blue-100_1zjiy","bg-blue-200":"tailwind_bg-blue-200_20bLu","bg-cover":"tailwind_bg-cover_3ZOF4","bg-top":"tailwind_bg-top_MLZUk","p-3":"tailwind_p-3_1DA3t","p-4":"tailwind_p-4_3ufS5","p-8":"tailwind_p-8_2n1ho","p-10":"tailwind_p-10_1ayWb","pt-2":"tailwind_pt-2_K_Ug0","pt-12":"tailwind_pt-12_duA3r","pt-16":"tailwind_pt-16_1ET3D","pt-40":"tailwind_pt-40_2t6Rb","pb-4":"tailwind_pb-4_2IMs6","pl-56":"tailwind_pl-56_3bIve","text-center":"tailwind_text-center_qNLcA","font-lobster":"tailwind_font-lobster_9aR5Z","font-lato":"tailwind_font-lato_2NCVZ","text-2xl":"tailwind_text-2xl_1Og3j","text-3xl":"tailwind_text-3xl_3vKYm","text-5xl":"tailwind_text-5xl_2QiUK","font-bold":"tailwind_font-bold_2sSoM","text-black":"tailwind_text-black_1l06r","text-white":"tailwind_text-white_3Qopg","text-red-600":"tailwind_text-red-600_1rY8c","text-yellow-500":"tailwind_text-yellow-500_1C5SN","text-green-500":"tailwind_text-green-500_1u3Vq","text-blue-500":"tailwind_text-blue-500_2FH9i","text-blue-900":"tailwind_text-blue-900_1xiEk","opacity-50":"tailwind_opacity-50_2c6MI","shadow-md":"tailwind_shadow-md_2OdVQ",transition:"tailwind_transition_3IF_I","md:grid-cols-2":"tailwind_md:grid-cols-2_SQa_K","lg:w-1/5":"tailwind_lg:w-1/5_11itL","lg:w-4/5":"tailwind_lg:w-4/5_1FyMU","lg:flex-row":"tailwind_lg:flex-row_2ebPe","lg:bg-center":"tailwind_lg:bg-center_3ncIa",spin:"tailwind_spin_2r4qA",ping:"tailwind_ping_3VWcG",pulse:"tailwind_pulse_1lmC-",bounce:"tailwind_bounce_epN4T"}},bb55:function(e,t,n){},c27b:function(e,t,n){"use strict";n("9cd0")},c7d7:function(e,t,n){},d98b:function(e,t,n){e.exports=n.p+"static/img/africa.08536ab0.svg"},db56:function(e,t,n){"use strict";n("1b06")},e347:function(e,t,n){e.exports=n.p+"static/img/logo.2b293d26.svg"}});