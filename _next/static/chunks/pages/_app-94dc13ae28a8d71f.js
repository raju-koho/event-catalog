(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{23892:function(e,t,n){e.exports=n(99603)},36321:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(52969)}])},61946:function(e){"use strict";e.exports={title:"EventCatalog",tagline:"Discover, Explore and Document your Event Driven Architectures",organizationName:"Your Company",projectName:"Event Catalog",editUrl:"https://github.com/boyney123/eventcatalog-demo/edit/master",trailingSlash:!0,primaryCTA:{label:"Explore Events",href:"/events"},secondaryCTA:{label:"Getting Started",href:"https://www.eventcatalog.dev/"},logo:{alt:"EventCatalog Logo",src:"logo.svg"},footerLinks:[{label:"Events",href:"/events"},{label:"Services",href:"/services"},{label:"Visualiser",href:"/visualiser"},{label:"3D Node Graph",href:"/overview"},{label:"GitHub",href:"https://github.com/boyney123/eventcatalog-demo/edit/master"}],users:[{id:"dboyne",name:"David Boyne",avatarUrl:"https://pbs.twimg.com/profile_images/1262283153563140096/DYRDqKg6_400x400.png",role:"Developer"},{id:"mSmith",name:"Matthew Smith",avatarUrl:"https://randomuser.me/api/portraits/lego/3.jpg",role:"Developer"}]}},90476:function(e,t,n){"use strict";n.d(t,{K3:function(){return u},ZR:function(){return f},aF:function(){return d},wG:function(){return h}});var r=n(24246),o=n(27378),a=n(24219),i=n.n(a),l=n(61946),c=n.n(l),s=o.createContext(c());function u(e){var t=e.children;return(0,r.jsx)(s.Provider,{value:c(),children:t})}var f=function(){return(0,o.useContext)(s)},d=function(){var e=f();return{getUserById:function(t){return(e.users||[]).find((function(e){return e.id===t}))}}},h=function(){var e=f();return{getEditUrl:function(t){var n=new URL(e.editUrl);return n.pathname=i().join(n.pathname,t),n.toString()},hasEditUrl:!!e.editUrl}}},52969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85034),o=n(24246),a=(n(36780),n(88038)),i=n.n(a),l=n(23892),c=n.n(l),s=n(27378),u=n(86677),f=n(43218),d=n.n(f),h=n(79894),p=n.n(h),v=n(90476),g=[{label:"Events",href:"/events"},{label:"Services",href:"/services"},{label:"Domains",href:"/domains"},{label:"Visualiser",href:"/visualiser"},{label:"3D Node Graph",href:"/overview"}];function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function x(){var e=(0,v.ZR)(),t=e.title,n=e.homepageLink,r=e.logo,a=e.headerLinks,i=(0,u.useRouter)(),l=c()().publicRuntimeConfig,s=(void 0===l?{}:l).basePath,f=void 0===s?"":s,d=r||{alt:"EventCatalog Logo",src:"logo.svg"},h=a||g;return(0,o.jsx)("div",{className:"bg-gray-800",children:(0,o.jsx)("div",{className:"max-w-7xl mx-auto ",children:(0,o.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,o.jsx)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:(0,o.jsxs)("div",{className:"flex-shrink-0 flex items-center text-white font-bold",children:[!n&&(0,o.jsx)(p(),{href:"/",children:(0,o.jsxs)("a",{className:"flex items-center",children:[(0,o.jsx)("img",{alt:"logo",className:"text-white w-8 inline-block mr-3",src:"".concat(f,"/").concat(d.src)}),(0,o.jsx)("span",{className:"text-xl",children:t})]})}),n&&(0,o.jsxs)("a",{href:n,className:"flex items-center",children:[(0,o.jsx)("img",{alt:"logo",className:"text-white w-8 inline-block mr-3",src:"".concat(f,"/").concat(d.src)}),(0,o.jsx)("span",{className:"text-xl",children:t})]})]})}),(0,o.jsx)("div",{className:"hidden sm:block sm:ml-6",children:(0,o.jsx)("div",{className:"flex space-x-4",children:h.map((function(e){var t=i.pathname===e.href;return(0,o.jsx)(p(),{href:e.href,children:(0,o.jsx)("a",{className:m(t?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":t?"page":void 0,children:e.label})},e.label)}))})})]})})})}function y(){var e=(0,v.ZR)(),t=e.organizationName,n=e.footerLinks,r=void 0===n?[]:n,a=(new Date).getFullYear();return(0,o.jsx)("footer",{className:"bg-gray-800",children:(0,o.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8",children:[r&&(0,o.jsx)("nav",{className:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer",children:r.map((function(e){return(0,o.jsx)("div",{className:"px-5 py-2",children:(0,o.jsx)("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-400",children:e.label})},e.label)}))}),(0,o.jsxs)("p",{className:"mt-8 text-center text-base text-gray-400",children:["Copyright \xa9 ",a," ",t,". Built with"," ",(0,o.jsx)("a",{className:"underline",href:"https://eventcatalog.dev",target:"_blank",rel:"noreferrer",children:"EventCatalog."})]})]})})}var b=n(61946),j=(n.n(b)().analytics||{}).googleAnalyticsTrackingId,w=function(e){(null===window||void 0===window?void 0:window.gtag)&&j&&window.gtag("config",j,{page_path:e})};var C=function(e){var t=e.Component,n=e.pageProps,a=(0,v.ZR)(),l=a.title,f=void 0===l?"EventCatalog | Discover, Explore and Document your Event Driven Architectures.":l,h=a.tagline,p=void 0===h?"An open source tool powered by markdown to document your Event Driven Architecture.":h,g=a.homepageLink,m=void 0===g?"https://eventcatalog.dev/":g,b=a.analytics,j=a.openGraph,C=void 0===j?{}:j,_=c()().publicRuntimeConfig,E=(void 0===_?{}:_).basePath,k=void 0===E?"":E,A=(b||{}).googleAnalyticsTrackingId,N=C.ogTitle,L=void 0===N?f:N,O=C.ogDescription,R=void 0===O?p:O,M=C.ogImage,D=void 0===M?"https://eventcatalog.dev/img/opengraph.png":M,P=C.ogUrl,T=void 0===P?m:P,S=(0,u.useRouter)();return(0,s.useEffect)((function(){var e=function(e){A&&w(e)};return S.events.on("routeChangeComplete",e),function(){S.events.off("routeChangeComplete",e)}}),[S.events,A]),(0,o.jsxs)(v.K3,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:f}),(0,o.jsx)("meta",{name:"description",content:p}),(0,o.jsx)("link",{rel:"icon",href:"".concat(k,"/favicon.ico")}),T&&""!==T&&(0,o.jsx)("meta",{property:"og:url",content:T}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),L&&(0,o.jsx)("meta",{property:"og:title",content:L}),R&&(0,o.jsx)("meta",{property:"og:description",content:R}),D&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{property:"og:image",content:D}),(0,o.jsx)("meta",{property:"og:image:alt",content:"".concat(L," | ").concat(R)}),(0,o.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,o.jsx)("meta",{property:"og:image:height",content:"600"})]}),(0,o.jsx)("meta",{property:"og:locale",content:"en-GB"}),(0,o.jsx)("meta",{name:"author",content:"David Boyne"})]}),A&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(A)}),(0,o.jsx)(d(),{strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '".concat(A,"', {\n                page_path: window.location.pathname,\n              });")}})]}),(0,o.jsx)(x,{}),(0,o.jsx)(t,(0,r.Z)({},n)),(0,o.jsx)(y,{})]})}},41528:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(69854).Z;n(92271).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(42619).Z,a=n(90518).Z,i=o(n(27378)),l=n(30194),c=n(24087),s=n(49756),u=n(82627),f=n(41842),d=n(41528),h=n(91470),p={};function v(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var g=i.default.forwardRef((function(e,t){var n,o=e.href,g=e.as,m=e.children,x=e.prefetch,y=e.passHref,b=e.replace,j=e.shallow,w=e.scroll,C=e.locale,_=e.onClick,E=e.onMouseEnter,k=e.onTouchStart,A=e.legacyBehavior,N=void 0===A?!0!==Boolean(!1):A,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!N||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var O=!1!==x,R=i.default.useContext(s.RouterContext),M=i.default.useContext(u.AppRouterContext);M&&(R=M);var D,P=i.default.useMemo((function(){var e=r(l.resolveHref(R,o,!0),2),t=e[0],n=e[1];return{href:t,as:g?l.resolveHref(R,g):n||t}}),[R,o,g]),T=P.href,S=P.as,I=i.default.useRef(T),U=i.default.useRef(S);N&&(D=i.default.Children.only(n));var Z=N?D&&"object"===typeof D&&D.ref:t,B=r(f.useIntersection({rootMargin:"200px"}),3),G=B[0],K=B[1],H=B[2],z=i.default.useCallback((function(e){U.current===S&&I.current===T||(H(),U.current=S,I.current=T),G(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[S,Z,T,H,G]);i.default.useEffect((function(){var e=K&&O&&l.isLocalURL(T),t="undefined"!==typeof C?C:R&&R.locale,n=p[T+"%"+S+(t?"%"+t:"")];e&&!n&&v(R,T,S,{locale:t})}),[S,T,K,C,O,R]);var F={ref:z,onClick:function(e){N||"function"!==typeof _||_(e),N&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s,u,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};u?i.default.startTransition(d):d()}}(e,R,T,S,b,j,w,C,Boolean(M),O)},onMouseEnter:function(e){N||"function"!==typeof E||E(e),N&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),!O&&M||l.isLocalURL(T)&&v(R,T,S,{priority:!0})},onTouchStart:function(e){N||"function"!==typeof k||k(e),N&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),!O&&M||l.isLocalURL(T)&&v(R,T,S,{priority:!0})}};if(!N||y||"a"===D.type&&!("href"in D.props)){var Y="undefined"!==typeof C?C:R&&R.locale,q=R&&R.isLocaleDomain&&d.getDomainLocale(S,Y,R.locales,R.domainLocales);F.href=q||h.addBasePath(c.addLocale(S,Y,R&&R.defaultLocale))}return N?i.default.cloneElement(D,F):i.default.createElement("a",Object.assign({},L,F),n)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41842:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(69854).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!i,u=r(o.useState(!1),2),f=u[0],d=u[1],h=r(o.useState(null),2),p=h[0],v=h[1];o.useEffect((function(){if(i){if(s||f)return;if(p&&p.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(p,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[p,s,n,t,f]);var g=o.useCallback((function(){d(!1)}),[]);return[v,f,g]};var o=n(27378),a=n(72878),i="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},82627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(42619).Z)(n(27378)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i;var l=r.default.createContext(null);t.TemplateContext=l},36780:function(){},24219:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,a=-1,i=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else{if(47===n)break;n=47}if(47===n){if(a===l-1||1===i);else if(a!==l-1&&2===i){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",o=0):o=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),a=l,i=0;continue}}else if(2===r.length||1===r.length){r="",o=0,a=l,i=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(a+1,l):r=e.slice(a+1,l),o=l-a-1;a=l,i=0}else 46===n&&-1!==i?++i:i=-1}return r}var r={resolve:function(){for(var e,r="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i;a>=0?i=arguments[a]:(void 0===e&&(e=""),i=e),t(i),0!==i.length&&(r=i+"/"+r,o=47===i.charCodeAt(0))}return r=n(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var o=arguments[n];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var a=e.length,i=a-o,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var c=n.length-l,s=i<c?i:c,u=-1,f=0;f<=s;++f){if(f===s){if(c>s){if(47===n.charCodeAt(l+f))return n.slice(l+f+1);if(0===f)return n.slice(l+f)}else i>s&&(47===e.charCodeAt(o+f)?u=f:0===f&&(u=0));break}var d=e.charCodeAt(o+f);if(d!==n.charCodeAt(l+f))break;47===d&&(u=f)}var h="";for(f=o+u+1;f<=a;++f)f!==a&&47!==e.charCodeAt(f)||(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(l+u):(l+=u,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,a=!0,i=e.length-1;i>=1;--i)if(47===(n=e.charCodeAt(i))){if(!a){o=i;break}}else a=!1;return-1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,o=0,a=-1,i=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var l=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47===s){if(!i){o=r+1;break}}else-1===c&&(i=!1,c=r+1),l>=0&&(s===n.charCodeAt(l)?-1===--l&&(a=r):(l=-1,a=c))}return o===a?a=c:-1===a&&(a=e.length),e.slice(o,a)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!i){o=r+1;break}}else-1===a&&(i=!1,a=r+1);return-1===a?"":e.slice(o,a)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,a=!0,i=0,l=e.length-1;l>=0;--l){var c=e.charCodeAt(l);if(47!==c)-1===o&&(a=!1,o=l+1),46===c?-1===n?n=l:1!==i&&(i=1):-1!==n&&(i=-1);else if(!a){r=l+1;break}}return-1===n||-1===o||0===i||1===i&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,o=e.charCodeAt(0),a=47===o;a?(n.root="/",r=1):r=0;for(var i=-1,l=0,c=-1,s=!0,u=e.length-1,f=0;u>=r;--u)if(47!==(o=e.charCodeAt(u)))-1===c&&(s=!1,c=u+1),46===o?-1===i?i=u:1!==f&&(f=1):-1!==i&&(f=-1);else if(!s){l=u+1;break}return-1===i||-1===c||0===f||1===f&&i===c-1&&i===l+1?-1!==c&&(n.base=n.name=0===l&&a?e.slice(1,c):e.slice(l,c)):(0===l&&a?(n.name=e.slice(1,i),n.base=e.slice(1,c)):(n.name=e.slice(l,i),n.base=e.slice(l,c)),n.ext=e.slice(i,c)),l>0?n.dir=e.slice(0,l-1):a&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var o=r(114);e.exports=o}()},88038:function(e,t,n){e.exports=n(80555)},79894:function(e,t,n){e.exports=n(11453)},86677:function(e,t,n){e.exports=n(15817)},43218:function(e,t,n){e.exports=n(17162)},17599:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},85034:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(17599);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){(0,r.Z)(e,t,n[t])}))}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(36321),t(15817)}));var n=e.O();_N_E=n}]);