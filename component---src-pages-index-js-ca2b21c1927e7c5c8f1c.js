(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"50Uy":function(e,t,n){e.exports=n.p+"static/nicoledwengerprofile-04480ccd0b944c465d7f9f7db8131dcb.jpg"},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a,r=n("q1tI"),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=e(c.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",l),d}}},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("INYr"),n("0mN4");var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r,i=a(n("PJYZ")),o=a(n("VbXa")),l=a(n("8OQS")),s=a(n("pVnL")),c=a(n("q1tI")),u=a(n("17x9")),d=function(e){var t=(0,s.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,n=e.fixed;return p(t||n).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),n=m(t);return h[n]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),c.default.createElement("source",{media:r,srcSet:n,sizes:i}))}))}function T(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function S(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function x(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function C(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),E.set(e,t)),function(){n.unobserve(e),E.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+l+n+a+t+i+r+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var n=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(A,(0,s.default)({ref:t,src:n},i,{ariaHidden:o}));return a.length>1?c.default.createElement("picture",null,r(a),l):l})),A=c.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:n,srcSet:a,src:r},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));A.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=b&&g(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!y&&v&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||b&&(y||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.placeholderRef=t.placeholderRef||c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=m(t),h[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,T=e.loading,C=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,s.default)({opacity:I?1:0,transition:L?"opacity "+b+"ms":"none"},l),j="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},N=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&R,{},l,{},f),M={title:t,alt:this.state.isVisible?"":n,style:N,className:m,itemProp:E};if(h){var _=h,z=p(h);return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&R)}),z.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:_,generateSources:x}),z.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:_,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(_),c.default.createElement(A,{alt:n,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:T,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:n,title:t,loading:T},z,{imageVariants:_}))}}))}if(g){var W=g,H=p(g),q=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete q.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},L&&R)}),H.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:W,generateSources:x}),H.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:W,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(W),c.default.createElement(A,{alt:n,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:T,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:n,title:t,loading:T},H,{imageVariants:W}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});L.propTypes={resolutions:P,sizes:j,fixed:u.default.oneOfType([P,u.default.arrayOf(P)]),fluid:u.default.oneOfType([j,u.default.arrayOf(j)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=L;t.default=R},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Nicole Dwenger","description":"Nicole Dwenger is a front end developer with design and communication backgrounds.","author":"@nicoledwenger"}}}}')},EK0E:function(e,t,n){"use strict";var a,r=n("dyZX"),i=n("CkkT")(0),o=n("KroJ"),l=n("Z6vF"),s=n("czNK"),c=n("ZD67"),u=n("0/R4"),d=n("s5qY"),f=n("s5qY"),m=!r.ActiveXObject&&"ActiveXObject"in r,p=l.getWeak,h=Object.isExtensible,g=c.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=p(e);return!0===t?g(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(d(this,"WeakMap"),e,t)}},v=e.exports=n("4LiD")("WeakMap",y,b,c,!0,!0);f&&m&&(s((a=c.getConstructor(y,"WeakMap")).prototype,b),l.NEED=!0,i(["delete","has","get","set"],(function(e){var t=v.prototype,n=t[e];o(t,e,(function(t,r){if(u(t)&&!h(t)){this._f||(this._f=new a);var i=this._f[e](t,r);return"set"==e?this:i}return n.call(this,t,r)}))})))},INYr:function(e,t,n){"use strict";var a=n("XKFU"),r=n("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return _}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("Bl7J"),l=n("vrFN"),s=n("vOnD"),c=(n("0sYV"),n("50Uy")),u=n.n(c),d=n("v5K5"),f=n("vO/P"),m=s.a.h2.withConfig({displayName:"SubHeading",componentId:"sc-1k1khu2-0"})(['font-family:"Open Sans";font-weight:700;font-size:2.82rem;margin-bottom:50px;@media (min-width:',"){margin-left:50px;}@media (max-width:","){font-size:2.25rem;}@media (min-width:","){margin-left:0px;}"],f.a.mobileMax,f.a.mobileMax,f.a.tabletMax),p=n("Uuuj"),h=n("7pgI"),g=(n("mxQI"),function(){return r.a.createElement("div",{id:"about",style:{marginTop:"20%"}},r.a.createElement(m,null,"About"),r.a.createElement(h.a,null,"I'm currently student at Purdue University studying web development and strategic communication. I have held various jobs within the web development industry and I'm an incoming intern on the Global Connected Customer Experience team at General Motors."),r.a.createElement(h.a,null,"With training and experience in strategic communication, I'm able to build and maintain web experiences that are more effective for targeted audiences. My specialty lies in front end development where I'm able to constantly keep the end user in mind when developing a product. As a strategic thinker, I can incorporate my background in art forms to create appealing designs that are focused around functionality."),r.a.createElement(h.a,null,"As a budding car enthusiast, I aspire to utilize my skills in front end development and audience analysis to develop user interfaces inside vehicles. Technology is advancing quickly and screens are becoming more popular in vehicles, especially with recent advances in autonomous and electric vehicles. I want to utilize my knowledge of cars, technology, and communication to create better user experiences."),r.a.createElement(h.a,null,"I love to challenge myself and discover the niche overlap between development, design and communication. There are problems to be solved in the world that the overlap of programming and communication can assist in. I hope to be someone that utilizes this knowledge in fields that improve safety and environmental sustainability for everyone. This is the ultimate challenge for myself."))}),y=n("IP2g"),b=n("wHSu"),v=s.a.h3.withConfig({displayName:"Resume__ResumeHeader",componentId:"sc-17tc45t-0"})(['font-family:"Open Sans";font-weight:700;font-size:2rem;color:#212529;']),E=Object(s.a)(h.a).withConfig({displayName:"Resume__ResumeSubText",componentId:"sc-17tc45t-1"})(["font-weight:400;font-size:0.8rem;font-style:italic;"]),w=Object(s.a)(h.a).withConfig({displayName:"Resume__ResumeText",componentId:"sc-17tc45t-2"})(["margin-bottom:0px;"]),T=s.a.div.withConfig({displayName:"Resume__ResumeWrapper",componentId:"sc-17tc45t-3"})(["border-left:8px solid #0077ff;padding-left:15px;margin-left:20px;"]),S=Object(s.a)(h.a).withConfig({displayName:"Resume__ResumeYear",componentId:"sc-17tc45t-4"})(["padding-left:17px;margin-bottom:10px;font-size:0.8rem;font-weight:800;"]),x=s.a.div.withConfig({displayName:"Resume__LanguageTable",componentId:"sc-17tc45t-5"})(["width:100%;text-align:left;display:flex;justify-content:space-between;flex-wrap:wrap;@media (min-width:","){flex-wrap:nowrap;}p{font-weight:700;min-width:200px;margin:20px 0 0 0;@media (min-width:","){min-width:unset;margin:30px 0;}> svg{font-size:10px;margin-right:5px;margin-bottom:2px;color:#0077ff;}}"],f.a.mobileMax,f.a.mobileMax),C=function(){return r.a.createElement("div",{id:"resume",style:{marginTop:"20%"}},r.a.createElement(m,null,"Resume"),r.a.createElement(v,null,"Education"),r.a.createElement(S,null,"2017 - 2021"),r.a.createElement(T,null,r.a.createElement(w,null,"Purdue University / ",r.a.createElement("strong",null,"Bachelor of Science")),r.a.createElement(E,null,"West Lafayette, IN ",r.a.createElement("br",null)," Computer Graphics Technology"),r.a.createElement(w,null,"Purdue University / ",r.a.createElement("strong",null,"Bachelor of Arts")),r.a.createElement(E,null,"West Lafayette, IN ",r.a.createElement("br",null)," Communication"),r.a.createElement(h.a,null,"Overall GPA / ",r.a.createElement("strong",null,"3.83"))),r.a.createElement(v,null,"Experience"),r.a.createElement(S,null,"Aug 2019 - May 2020"),r.a.createElement(T,null,r.a.createElement(w,null,r.a.createElement("strong",null,"Front End Developer"),r.a.createElement("br",null),"CDW"),r.a.createElement(E,null,"Vernon Hills, IL ",r.a.createElement("br",null),"Developed atomic components and conducted unit code testing for front end Adobe Experience Manager codebase"),r.a.createElement(w,null,r.a.createElement("strong",null,"Web Team Intern"),r.a.createElement("br",null),"Purdue Agricultural Communication"),r.a.createElement(E,null,"West Lafayette, IN ",r.a.createElement("br",null),"Update WordPress and Sharepoint pages while meeting branding standards and client requests"),r.a.createElement(w,null,r.a.createElement("strong",null,"Undergraduate Researcher"),r.a.createElement("br",null),"Purdue Polytechnic Institute"),r.a.createElement(E,null,"West Lafayette, IN ",r.a.createElement("br",null),"Automated a worksheet process by developing a website and creating surveys to reduce fatigue")),r.a.createElement(S,null,"Jun 2019 - Aug 2019"),r.a.createElement(T,null,r.a.createElement(w,null,r.a.createElement("strong",null,"Front End Developer Intern"),r.a.createElement("br",null),"CDW"),r.a.createElement(E,null,"Vernon Hills, IL",r.a.createElement("br",null),"Wrote standards-compliant code while working with internal development teams to integrate with back-end technology")),r.a.createElement(S,null,"Aug 2019 - Dec 2018"),r.a.createElement(T,null,r.a.createElement(w,null,r.a.createElement("strong",null,"Photography Editor"),r.a.createElement("br",null),"The Purdue Exponent"),r.a.createElement(E,null,"West Lafayette, IN ",r.a.createElement("br",null),"Managed a team of photographers and submitted images within deadlines to supplement articles")),r.a.createElement(v,null,"Involvement"),r.a.createElement(S,null,"Aug 2019 - Present"),r.a.createElement(T,null,r.a.createElement(w,null,r.a.createElement("strong",null,"Public Relations Student Society of America")),r.a.createElement(E,null,"Directory of Internal Communication ",r.a.createElement("br",null),"Gathered and maintained content for the monthly newsletter to be distributed to the organization")),r.a.createElement(v,null,"Honors and Awards"),r.a.createElement(S,null,"Aug 2017 - Present"),r.a.createElement(T,null,r.a.createElement(w,null,r.a.createElement("strong",null,"College Dean's List")),r.a.createElement(E,null,"Purdue Polytechnic Institute ")),r.a.createElement("br",null),r.a.createElement(v,null,"Languages and Software"),r.a.createElement(x,null,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," HTML5"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," CSS3"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," Javascript / jQuery")),r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," Bootstrap"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," React.js"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," SASS")),r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," PHP"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," SQL"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," Wordpress")),r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," Photoshop"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," Illustrator"),r.a.createElement(h.a,null,r.a.createElement(y.a,{icon:b.a})," Indesign"))))},I=n("9eSz"),O=n.n(I),k=s.a.img.withConfig({displayName:"pages__ProfilePhoto",componentId:"sc-6kvjaa-0"})(["position:absolute;right:5%;top:10%;height:625px;width:auto;opacity:0.8;z-index:-10;box-shadow:35px 20px 0 5px #0077ff;@media (max-width:","){position:relative;right:0;margin-left:0px;margin-top:10px;}@media (min-width:","){margin-left:50px;}"],f.a.mobileMax,f.a.mobileMax),A=s.a.h3.withConfig({displayName:"pages__WorkTitle",componentId:"sc-6kvjaa-1"})(['font-family:"Open Sans";font-weight:700;font-size:2rem;color:#212529;width:450px;margin-top:20px;margin-bottom:10px;']),L=Object(s.a)(i.Link).withConfig({displayName:"pages__WorkLink",componentId:"sc-6kvjaa-2"})(["text-decoration:none;> ","{color:#212529;opacity:0;font-size:0.75;}:hover{cursor:pointer;color:#d96c5b;transition-duration:0.3s;text-decoration:none;}"],h.a),P=s.a.div.withConfig({displayName:"pages__WorkContainer",componentId:"sc-6kvjaa-3"})(["width:100%;display:flex;flex-wrap:wrap;@media (max-width:","){display:block;flex-wrap:nowrap;}"],f.a.mobileMax),j=Object(s.b)(["0%{opacity:0;width:0;}100%{opacity:1;width:300px;}"]),R=s.a.span.withConfig({displayName:"pages__Line",componentId:"sc-6kvjaa-4"})(["position:absolute;left:0;display:block;margin:0 auto;height:4px;background-color:#0077ff;width:0%;transition:width 0.5s ease;"]),N=s.a.span.withConfig({displayName:"pages__DecorationLine",componentId:"sc-6kvjaa-5"})(["display:block;height:4px;background-color:#0077ff;transition:width 0.5s ease;animation:1s ease 0s 1 normal forwards running ",";@media (min-width:","){margin-left:50px;margin-bottom:-70px;}@media (min-width:","){margin-left:0px;}"],j,f.a.mobileMax,f.a.tabletMax),M=s.a.div.withConfig({displayName:"pages__ProjectContainer",componentId:"sc-6kvjaa-6"})(["  width:45%;margin-bottom:40px;margin-top:0px;height:unset;transition-duration:0.3s;filter:grayscale(100%);:nth-child(odd){margin-right:0;@media (min-width:","){margin-right:7%;}}@media (max-width:","){width:100%;}:hover{filter:grayscale(0%);img{transform:scale(1.03);transition-duration:0.3s;}","{transition-duration:0.3s;opacity:1;> ","{width:25%;}}}"],f.a.mobileMax,f.a.mobileMax,h.a,R),_="3895610176";t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement("div",{style:{maxWidth:"725px",marginTop:"20%"}},r.a.createElement(N,null),r.a.createElement(d.a,null,"Hi, I'm Nicole, front end ",r.a.createElement("span",null,"developer"),", ",r.a.createElement("span",null,"designer"),", and strategic ",r.a.createElement("span",null,"communicator"),"."),r.a.createElement(m,null,"Currently an intern at General Motors and pursuing a dual degree at Purdue University.")),r.a.createElement(p.a,null),r.a.createElement(k,{src:u.a,alt:"Nicole Dwenger Profile"}),r.a.createElement(m,{id:"works",style:{marginTop:"25%"}},"Selected works"),r.a.createElement(P,null,t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(M,{key:t.id},r.a.createElement(L,{to:t.fields.slug},r.a.createElement(O.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,alt:t.frontmatter.title,style:{boxShadow:"0px 4px 10px 0 #efefef",borderRadius:"5px"}}),r.a.createElement(A,null,t.frontmatter.title," "),r.a.createElement(h.a,null,"View Project",r.a.createElement(R,null))))}))),r.a.createElement(g,null),r.a.createElement(C,null))}},ZD67:function(e,t,n){"use strict";var a=n("3Lyj"),r=n("Z6vF").getWeak,i=n("y3w9"),o=n("0/R4"),l=n("9gX7"),s=n("SlkY"),c=n("CkkT"),u=n("aagx"),d=n("s5qY"),f=c(5),m=c(6),p=0,h=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},y=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var n=y(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,i){var c=e((function(e,a){l(e,c,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=a&&s(a,n,e[i],e)}));return a(c.prototype,{delete:function(e){if(!o(e))return!1;var n=r(e);return!0===n?h(d(this,t)).delete(e):n&&u(n,this._i)&&delete n[this._i]},has:function(e){if(!o(e))return!1;var n=r(e);return!0===n?h(d(this,t)).has(e):n&&u(n,this._i)}}),c},def:function(e,t,n){var a=r(i(t),!0);return!0===a?h(e).set(t,n):a[e._i]=n,e},ufstore:h}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var a=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,s,c,u=a(t),d=a(n);if(u&&d){if((s=t.length)!=n.length)return!1;for(l=s;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,m=n instanceof Date;if(f!=m)return!1;if(f&&m)return t.getTime()==n.getTime();var p=t instanceof RegExp,h=n instanceof RegExp;if(p!=h)return!1;if(p&&h)return t.toString()==n.toString();var g=r(t);if((s=g.length)!==r(n).length)return!1;for(l=s;0!=l--;)if(!i.call(n,g[l]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(l=s;0!=l--;)if(!("_owner"===(c=g[l])&&t.$$typeof||e(t[c],n[c])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var a,r,i,o,l=n("17x9"),s=n.n(l),c=n("8+s/"),u=n.n(c),d=n("bmMU"),f=n.n(d),m=n("q1tI"),p=n.n(m),h=n("MgzW"),g=n.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),T="cssText",S="href",x="http-equiv",C="innerHTML",I="itemprop",O="name",k="property",A="rel",L="src",P="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",N="defer",M="encodeSpecialCharacters",_="onChangeClientState",z="titleTemplate",W=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),H=[E.NOSCRIPT,E.SCRIPT,E.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,E.TITLE),n=Q(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=Q(e,R);return t||a||void 0},K=function(e){return Q(e,_)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var i=a[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],s=l.toLowerCase();-1===t.indexOf(s)||n===A&&"canonical"===e[n].toLowerCase()||s===A&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==C&&l!==T&&l!==I||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][c]&&(r[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var l=i[o],s=g()({},a[l],r[l]);a[l]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},$=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;se(E.BODY,a),se(E.HTML,r),le(d,f);var m={baseTag:ce(E.BASE,n),linkTags:ce(E.LINK,i),metaTags:ce(E.META,o),noscriptTags:ce(E.NOSCRIPT,l),scriptTags:ce(E.SCRIPT,c),styleTags:ce(E.STYLE,u)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,a=t.oldTags;n.length&&(p[e]=n),a.length&&(h[e]=m[e].oldTags)})),t&&t(),s(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(E.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute("data-react-helmet"),r=a?a.split(","):[],i=[].concat(r),o=Object.keys(t),l=0;l<o.length;l++){var s=o[l],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),-1===r.indexOf(s)&&r.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);r.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(E.HEAD),a=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===C)n.innerHTML=t.innerHTML;else if(a===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[a]?"":t[a];n.setAttribute(a,l)}n.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,n.isEqualNode(e)}))?r.splice(o,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,r=de(n,a),[p.a.createElement(E.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=ue(n),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+Y(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===C||n===T){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),p.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+Y(a[t],n)+'"';return e?e+" "+r:r}),""),i=a.innerHTML||a.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(E.BASE,t,a),bodyAttributes:fe(y,n,a),htmlAttributes:fe(b,r,a),link:fe(E.LINK,i,a),meta:fe(E.META,o,a),noscript:fe(E.NOSCRIPT,l,a),script:fe(E.SCRIPT,s,a),style:fe(E.STYLE,c,a),title:fe(E.TITLE,{title:d,titleAttributes:f},a)}},pe=u()((function(e){return{baseTag:X([S,P],e),bodyAttributes:J(y,e),defer:Q(e,N),encode:Q(e,M),htmlAttributes:J(b,e),linkTags:Z(E.LINK,[A,S],e),metaTags:Z(E.META,[O,w,x,k,I],e),noscriptTags:Z(E.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:Z(E.SCRIPT,[L,C],e),styleTags:Z(E.STYLE,[T],e),title:G(e),titleAttributes:J(v,e)}}),(function(e){re&&ne(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),me)((function(){return null})),he=(r=pe,o=i=function(e){function t(){return D(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return F({},a,((t={})[n.type]=[].concat(a[n.type]||[],[F({},r,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case E.TITLE:return F({},r,((t={})[a.type]=o,t.titleAttributes=F({},i),t));case E.BODY:return F({},r,{bodyAttributes:F({},i)});case E.HTML:return F({},r,{htmlAttributes:F({},i)})}return F({},r,((n={})[a.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var a;n=F({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[W[n]||n]=e[n],t}),t)}(U(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),a=F({},n);return t&&(a=this.mapChildrenToProps(t,a)),p.a.createElement(r,a)},V(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var a=n("EH9Q"),r=n("q1tI"),i=n.n(r),o=n("qhky");function l(e){var t=e.description,n=e.lang,r=e.meta,l=e.title,s=a.data.site,c=t||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=component---src-pages-index-js-ca2b21c1927e7c5c8f1c.js.map