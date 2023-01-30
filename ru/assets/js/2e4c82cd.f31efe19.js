"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4684],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},776:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(4137));const i={title:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",sidebar_position:13},a=void 0,l={unversionedId:"adguard-for-android/solving-problems/multiple-profiles-issue",id:"adguard-for-android/solving-problems/multiple-profiles-issue",title:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",description:"\u041d\u0430 Android 9 \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445, \u0435\u0441\u043b\u0438 AdGuard \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u044c\u0441\u044f \u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c\u0438 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0435 AdGuard \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u043d\u043e \u0432\u044b \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0435\u0433\u043e. \u042d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e AdGuard \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/multiple-profiles-issue.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/multiple-profiles-issue",permalink:"/KnowledgeBase/ru/adguard-for-android/solving-problems/multiple-profiles-issue",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/multiple-profiles-issue.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0441 Android 11+",permalink:"/KnowledgeBase/ru/adguard-for-android/solving-problems/manual-certificate"},next:{title:"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u043b\u044f Android",permalink:"/KnowledgeBase/ru/adguard-for-android/solving-problems/compatibility-issues"}},d={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041d\u0430 Android 9 \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445, \u0435\u0441\u043b\u0438 AdGuard \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u044c\u0441\u044f \u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c\u0438 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0435 AdGuard \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u043d\u043e \u0432\u044b \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0435\u0433\u043e. \u042d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e AdGuard \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u043f\u044b\u0442\u0430\u0435\u0442\u0435\u0441\u044c \u043f\u0435\u0440\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c AdGuard \u043f\u043e\u0441\u043b\u0435 \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f, \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \xab\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0432\u043e\u0451 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\xbb."),(0,o.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 > \u0412\u0441\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f > AdGuard. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0442\u0440\u0438 \u0442\u043e\u0447\u043a\u0438 \u0432 \u043f\u0440\u0430\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",(0,o.kt)("em",{parentName:"p"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/android/multiple_users/uninst_en.png",alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c *mobile"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/android/multiple_users/uninst2_en.png",alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c *mobile"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/multiple-profiles-issue/uninst3_en.png",alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c *mobile"})))}p.isMDXComponent=!0}}]);