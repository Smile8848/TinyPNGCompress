(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,c=1;c<r.length;c++){var s=r[c];0!==n[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"310d":function(e,t,r){"use strict";var a=r("425f"),n=r.n(a);n.a},3585:function(e,t,r){},"3dfd":function(e,t,r){"use strict";r.r(t);var a=r("cdd3"),n=r("6f68");for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("5c0b");var o=r("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"425f":function(e,t,r){},4360:function(e,t,r){"use strict";r.r(t);r("a434");var a,n=r("ade3"),i=r("2b0e"),o=window.require("electron-store"),c=new o,s="SET_CACHE_FOLDER",u="SET_REPLACE_STATUS",l="SET_API_KEY",f="ADD_FILE_INFO",d="CHANGE_FILE_INFO",p="SET_CACHE_STATUS",h="LOAD_USER_CONFIG",v=(a={},Object(n["a"])(a,h,(function(e){var t=c.get("userConfig")||{};e.userConfig=t,e.cacheDir=t.cacheDir||"./TinyPNGCacheDir",e.replaceStatus=void 0===t.replaceStatus||t.replaceStatus,e.cacheStatus=void 0===t.cacheStatus||t.cacheStatus,e.apiKey=t.apiKey||"Tcdl0JRbM7tsfplqJBb9Z69Dvdk1dSHP"})),Object(n["a"])(a,s,(function(e,t){e.cacheDir=t,c.set("userConfig.cacheDir",t)})),Object(n["a"])(a,u,(function(e,t){e.replaceStatus=t,c.set("userConfig.replaceStatus",t)})),Object(n["a"])(a,p,(function(e,t){e.cacheStatus=t,c.set("userConfig.cacheStatus",t)})),Object(n["a"])(a,l,(function(e,t){e.apiKey=t,c.set("userConfig.apiKey",t)})),Object(n["a"])(a,f,(function(e,t){var r=t.fileInfo,a=t.cb;a(e.fileList.length),e.fileList.push(r)})),Object(n["a"])(a,d,(function(e,t){var r=t.currentFilePos,a=e.fileList[r];if(a){for(var n in 2===t.status?i["default"].prototype.$set(e.failMap,r,!0):e.failMap[r]&&delete e.failMap[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);e.fileList.splice(r,1,a)}})),a),g=r("63e0"),_=r.n(g),y=r("ed08"),m={cacheDir:"",replaceStatus:!0,apiKey:"",fileList:[],failMap:{},cacheStatus:!0,userConfig:{}};t["default"]={state:m,getters:Object(y["generatorGetters"])(m),mutations:v,actions:_.a}},"57e6":function(e,t,r){"use strict";var a=r("3585"),n=r.n(a);n.a},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},"5ecc":function(e,t,r){"use strict";r.r(t);var a=r("7403"),n=r("fe10");for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("716c"),r("a736");var o=r("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"51e56bbc",null);t["default"]=c.exports},"63e0":function(e,t){},"6c5c":function(e,t,r){"use strict";r.r(t);var a=r("7188"),n=r("e0a4");for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("310d"),r("57e6");var o=r("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"70197ea6",null);t["default"]=c.exports},"6e55":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"file-list"},[r("Button",{staticStyle:{margin:"10px"},attrs:{type:"info",long:"",icon:"md-bulb",size:"large"},on:{click:e.openModel}},[e._v(e._s(e.btnText))]),r("Modal",{attrs:{width:"360"},model:{value:e.showModel,callback:function(t){e.showModel=t},expression:"showModel"}},[r("p",{staticStyle:{color:"#2d8cf0","text-align":"center"},attrs:{slot:"header"},slot:"header"},[r("Icon",{attrs:{type:"ios-inforremation-circle"}}),r("span",[e._v("任务列表")])],1),e.fileList.length?r("div",{staticClass:"task-list"},e._l(e.fileList,(function(t,a){return r("Card",{key:a,staticStyle:{width:"98%",height:"78px",margin:"10px 0"}},[r("div",{staticClass:"task-item"},[r("div",{staticClass:"left"},[r("img",{staticClass:"cover",attrs:{src:e.getUrl(t),alt:"",srcset:""}}),r("div",{staticClass:"msg-box"},[r("div",{staticClass:"filename"},[e._v(e._s(t.filename))]),r("div",{staticClass:"desc"},[e._v(e._s(t.message||"loading..."))])])]),r("div",{staticClass:"right"},[r("Spin",{attrs:{fix:""}},[e.checkIsShowLoading(t)?r("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"ios-loading",size:"18"}}):r("section",[t.isCache||1===t.status?r("Icon",{attrs:{type:"ios-checkmark",size:"30"}}):r("Icon",{attrs:{type:"ios-close",color:"#ed4014",size:"30"}})],1)],1)],1)])])})),1):r("div",{staticClass:"empty"},[r("Icon",{attrs:{type:"logo-octocat"}}),r("p",[e._v("空空如也")])],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{disabled:!e.needRetryErrorItem,type:"warning",size:"large",long:""},on:{click:e.retryAllError}},[e._v("重新压缩所有失败项")])],1)])],1)},n=[]},"6f68":function(e,t,r){"use strict";r.r(t);var a=r("78c7"),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},"716c":function(e,t,r){"use strict";var a=r("a52e"),n=r.n(a);n.a},7188:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"img-container"},[a("Card",{staticStyle:{width:"98%",height:"250px"}},[a("div",{staticStyle:{"text-align":"center"}},[a("div",{ref:"container",staticClass:"drop-area",on:{click:e.selectFile}},[a("input",{ref:"file",staticClass:"img-select",attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:e.fileChange}}),a("div",{staticClass:"hint-area"},[a("img",{staticClass:"upload-icon",attrs:{src:r("cf55"),alt:""}}),a("p",[e._v("请拖拽PNG/JPG文件（支持文件夹）到这里哦！")])])])])])],1)},n=[]},7403:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-config"},[r("CellGroup",[r("ICell",{attrs:{title:"原图与缓存目录"}},[r("Tag",{staticStyle:{"max-width":"250px","text-overflow":"ellipsis"},attrs:{slot:"extra",color:"primary"},nativeOn:{click:function(t){return e.openFileSelect(t)}},slot:"extra"},[e._v(e._s(e.cacheDirShowText))])],1),r("ICell",{attrs:{title:"API KEY"}},[r("Input",{staticStyle:{width:"300px"},attrs:{slot:"extra",value:e.apiKey,search:"","enter-button":"注册",type:"text",placeholder:"请输入您的api key"},on:{"on-change":e.setApiKey,"on-search":e.registerApiKey},slot:"extra"})],1),r("ICell",{attrs:{title:"是否替换原图"}},[r("ISwitch",{attrs:{slot:"extra",value:e.replaceStatus},on:{"on-change":e.changeReplaceStatus},slot:"extra"})],1),r("ICell",{attrs:{title:"是否开启压缩与原图缓存"}},[r("ISwitch",{attrs:{slot:"extra",value:e.cacheStatus},on:{"on-change":e.changeNeedCacheStatus},slot:"extra"})],1)],1)],1)},n=[]},"78c7":function(e,t,r){"use strict";var a=r("970b"),n=r("ed6d"),i=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var o=r("9ab4"),c=r("60a3"),s=o.__importDefault(r("6c5c")),u=o.__importDefault(r("5ecc")),l=o.__importDefault(r("c379")),f=r("f825"),d=function(e){n(r,e);var t=i(r);function r(){return a(this,r),t.apply(this,arguments)}return r}(c.Vue);d=o.__decorate([c.Component({components:{ImgContainer:s.default,UserConfig:u.default,Divider:f.Divider,FileList:l.default}})],d),t.default=d},8732:function(e,t,r){"use strict";r("99af"),r("7db0"),r("4160"),r("c975"),r("b0c0"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("159b"),r("96cf");var a=r("c973"),n=r("970b"),i=r("5bc3"),o=r("ed6d"),c=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var s=r("9ab4"),u=r("60a3"),l=r("ed08"),f=r("f825"),d=r("4bb5"),p=window.require("tinify"),h=function(e){o(r,e);var t=c(r);function r(e){return n(this,r),t.call(this,e)}return i(r,[{key:"init",value:function(){if(this.cacheDir){var e=window.require("path");this.fs=window.require("fs"),l.dirExist(this.cacheDir)||this.fs.mkdirSync(this.cacheDir),this.cacheCompressedDir=e.resolve(this.cacheDir,"compressed-picture"),this.cacheOriginaldDir=e.resolve(this.cacheDir,"original-picture"),!l.dirExist(this.cacheCompressedDir)&&this.fs.mkdirSync(this.cacheCompressedDir),!l.dirExist(this.cacheOriginaldDir)&&this.fs.mkdirSync(this.cacheOriginaldDir)}}},{key:"handleCompressed",value:function(e,t,r,a,n,i){var o=window.require("path"),c=n.name,s=n.ext;if(this.cacheStatus){var u=o.resolve(this.cacheOriginaldDir,c+"-tiny-"+e+s),f=l.caculateFileHash(t),d=o.resolve(this.cacheCompressedDir,f+s);this.fs.writeFileSync(d,t),this.fs.writeFileSync(u,r)}this.replaceStatus?this.fs.writeFileSync(a,t):this.fs.writeFileSync(a.replace(/\./g,"")+"-tiny-"+s,t);var p=Math.ceil((r.length-t.length)/r.length*100),h=r.length-t.length;i.status=1,i.reduceSize=h,i.message="- ".concat(h/1e3," k（").concat(-p,"%）"),i.url=t.toString("base64"),this.CHANGE_FILE_INFO(i)}},{key:"checkCache",value:function(e){var t=this.fs.readdirSync(this.cacheCompressedDir),r=window.require("path"),a=t.find((function(t){var a=r.parse(t),n=a.name;if(n===e)return t}));if(a){var n=r.resolve(this.cacheCompressedDir,a);return{isCache:!0,cacheFilePath:n}}return{isCache:!1}}},{key:"compressImage",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;p.key=this.apiKey;var a=this.fs.readFileSync(e),n=window.require("path"),i=n.parse(e),o=l.caculateFileHash(a),c=!1;this.cacheStatus&&(c=this.checkCache(o).isCache);var s=r;if(-1===r&&this.ADD_FILE_INFO({fileInfo:{filename:i.base,isCache:c,url:a.toString("base64"),message:c&&"命中缓存（请勿重复压缩）",path:e},cb:function(e){s=e}}),!c){var u={currentFilePos:s};p.fromBuffer(a).toBuffer((function(r,n){r&&r.message&&-1!==r.message.indexOf("Image could not be decoded")&&(u.message="格式无法解析"),r instanceof p.ConnectionError||r instanceof p.ServerError?u.message="压缩失败":(r instanceof p.ClientError||r instanceof p.AccountError)&&r.message.indexOf("Your monthly limit has been exceeded")>=0&&(u.message="今日压缩次数达到上限"),r?(u.status=2,t.CHANGE_FILE_INFO(u)):t.handleCompressed(o,n,a,e,i,u)}))}}},{key:"selectFile",value:function(){this.apiKey?this.$refs.file.click():this.$Message.warning("请先填入API KEY")}},{key:"fileChange",value:function(){var e=a(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.target.files,!(r.length<=0)){e.next=3;break}return e.abrupt("return");case 3:for(a=0;a<r.length;a++)this.compressImage(r[a].path);this.$refs.file.value="",this.$Message.success("压缩任务已添加");case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"handleFolder",value:function(e){var t=this,r=window.require("path");try{var a=this.fs.readdirSync(e);a.forEach((function(a){l.isFolder(a)?t.handleFolder(r.resolve(e,a)):l.isSpecificImage(a)&&t.compressImage(r.resolve(e,a))}))}catch(n){console.log(n)}}},{key:"initDropTarget",value:function(){var e=this,t=document.getElementsByClassName("ivu-card")[0],r=this.$refs.container;window.addEventListener("ondragstart",(function(e){e.preventDefault()})),r.addEventListener("drop",(function(r){if(t.classList.remove("card-hover"),e.apiKey){for(var a=r.dataTransfer.files,n=0;n<a.length;n++){var i=a[n].path;l.isFolder(i)?e.handleFolder(i):l.isSpecificImage(i)&&e.compressImage(i)}e.$Message.success("压缩任务已添加"),r.preventDefault(),r.stopPropagation()}else e.$Message.warning("请先填入API KEY")}),!1);var a=function(e){t.classList.add("card-hover"),e.preventDefault(),e.stopPropagation()},n=function(e){t.classList.remove("card-hover"),e.preventDefault(),e.stopPropagation()};r.addEventListener("dragover",a),r.addEventListener("dragleave",n)}},{key:"mounted",value:function(){var e=this;this.$root.$on("retryCompress",(function(t,r){e.compressImage(t,r)})),this.init(),this.initDropTarget()}}]),r}(u.Vue);s.__decorate([d.State],h.prototype,"apiKey",void 0),s.__decorate([d.State],h.prototype,"cacheDir",void 0),s.__decorate([d.State],h.prototype,"replaceStatus",void 0),s.__decorate([d.State],h.prototype,"cacheStatus",void 0),s.__decorate([d.Mutation],h.prototype,"ADD_FILE_INFO",void 0),s.__decorate([d.Mutation],h.prototype,"CHANGE_FILE_INFO",void 0),h=s.__decorate([u.Component({components:{Card:f.Card},watch:{cacheDir:function(e){e&&this.init()}}})],h),t.default=h},"9c0c":function(e,t,r){},a4a0:function(e,t,r){"use strict";r("96cf");var a=r("c973"),n=r("970b"),i=r("5bc3"),o=r("ed6d"),c=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var s=r("9ab4"),u=r("60a3"),l=r("f825"),f=r("4bb5"),d=function(e){o(r,e);var t=c(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"changeNeedCacheStatus",value:function(e){this.SET_CACHE_STATUS(e)}},{key:"openFileSelect",value:function(){var e=a(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=window.require("electron"),r=t.remote,e.next=3,r.dialog.showOpenDialog({properties:["openDirectory"]});case 3:a=e.sent,n=a.filePaths&&a.filePaths[0],n&&this.SET_CACHE_FOLDER(n);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"changeReplaceStatus",value:function(e){this.SET_REPLACE_STATUS(e)}},{key:"registerApiKey",value:function(){window.open("https://tinypng.com/developers","Register","nodeIntegration=no")}},{key:"setApiKey",value:function(e){this.SET_API_KEY(e.target.value)}},{key:"mounted",value:function(){this.LOAD_USER_CONFIG()}},{key:"cacheDirShowText",get:function(){var e=window.require("path");return e.resolve("./",this.cacheDir)}}]),r}(u.Vue);s.__decorate([f.State],d.prototype,"cacheDir",void 0),s.__decorate([f.State],d.prototype,"replaceStatus",void 0),s.__decorate([f.State],d.prototype,"cacheStatus",void 0),s.__decorate([f.State],d.prototype,"apiKey",void 0),s.__decorate([f.Mutation],d.prototype,"SET_CACHE_FOLDER",void 0),s.__decorate([f.Mutation],d.prototype,"SET_REPLACE_STATUS",void 0),s.__decorate([f.Mutation],d.prototype,"SET_API_KEY",void 0),s.__decorate([f.Mutation],d.prototype,"SET_CACHE_STATUS",void 0),s.__decorate([f.Mutation],d.prototype,"LOAD_USER_CONFIG",void 0),d=s.__decorate([u.Component({components:{ICell:l.Cell,ISwitch:l.Switch,CellGroup:l.CellGroup,Input:l.Input,Upload:l.Upload,Button:l.Button,Tag:l.Tag}})],d),t.default=d},a4f7:function(e,t,r){},a52e:function(e,t,r){},a736:function(e,t,r){"use strict";var a=r("a4f7"),n=r.n(a);n.a},b118:function(e,t,r){},c379:function(e,t,r){"use strict";r.r(t);var a=r("6e55"),n=r("ddf4");for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("e51c");var o=r("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},cd49:function(e,t,r){"use strict";r("e260"),r("e6cf"),r("cca6"),r("a79d"),Object.defineProperty(t,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),i=a.__importDefault(r("3dfd")),o=a.__importDefault(r("f825"));r("f8ce");var c=a.__importDefault(r("2f62")),s=a.__importDefault(r("4360"));n.default.use(c.default),n.default.use(o.default);var u=new c.default.Store(s.default);n.default.config.productionTip=!1,new n.default({render:function(e){return e(i.default)},store:u}).$mount("#app")},cdd3:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("ImgContainer"),r("Divider",{attrs:{orientation:"left"}},[e._v("配置项")]),r("UserConfig"),r("Divider",{attrs:{orientation:"left"}},[e._v("任务列表")]),r("FileList")],1)},n=[]},cf05:function(e,t,r){e.exports=r.p+"img/logo.2a265867.png"},cf55:function(e,t,r){e.exports=r.p+"img/upload.c376d20d.png"},ddf4:function(e,t,r){"use strict";r.r(t);var a=r("ebb9"),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},e0a4:function(e,t,r){"use strict";r.r(t);var a=r("8732"),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},e51c:function(e,t,r){"use strict";var a=r("b118"),n=r.n(a);n.a},ebb9:function(e,t,r){"use strict";r("4160"),r("b64b"),r("159b");var a=r("970b"),n=r("5bc3"),i=r("ed6d"),o=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var c=r("9ab4"),s=r("60a3"),u=r("f825"),l=r("4bb5"),f=function(e){i(c,e);var t=o(c);function c(){var e;return a(this,c),e=t.apply(this,arguments),e.showModel=!1,e}return n(c,[{key:"checkIsShowLoading",value:function(e){return!e.isCache&&!e.status}},{key:"retryAllError",value:function(){var e=this,t=Object.keys(this.failMap);t.forEach((function(t){var r=e.fileList[t];2===r.status&&(e.CHANGE_FILE_INFO({status:0,message:null,url:null,isCache:!1,currentFilePos:t}),e.$root.$emit("retryCompress",r.path,t))}))}},{key:"openModel",value:function(){this.showModel=!0}},{key:"getUrl",value:function(e){return e.url?e.url&&"data:image/png;base64,"+e.url:r("cf05")}},{key:"btnText",get:function(){if(this.fileList.length){var e=0;return this.fileList.forEach((function(t){e+=t.reduceSize})),"".concat(this.fileList.length," 个压缩任务")+(e?"节省 ".concat(e," k"):"")}return"暂无压缩任务"}},{key:"needRetryErrorItem",get:function(){return Object.keys(this.failMap).length}}]),c}(s.Vue);c.__decorate([l.State],f.prototype,"fileList",void 0),c.__decorate([l.State],f.prototype,"failMap",void 0),c.__decorate([l.Mutation],f.prototype,"CHANGE_FILE_INFO",void 0),f=c.__decorate([s.Component({components:{Cell:u.Cell,Icon:u.Icon,CellGroup:u.CellGroup,Spin:u.Spin,Card:u.Card,Button:u.Button,Poptip:u.Poptip}})],f),t.default=f},ed08:function(e,t,r){"use strict";r.r(t),r.d(t,"caculateFileHash",(function(){return o})),r.d(t,"isSpecificImage",(function(){return c})),r.d(t,"dirExist",(function(){return s})),r.d(t,"isFolder",(function(){return u})),r.d(t,"generatorGetters",(function(){return l}));r("baa5"),r("d3b7"),r("ac1f"),r("25f0"),r("5319");var a=r("53ca"),n=window.require("fs"),i=window.require("crypto"),o=function(e){var t=i.createHash("md5");t.update(e.toString());var r=t.digest("hex");return r},c=function(e){var t=e.lastIndexOf("."),r=/\.(jpg|png)$/i;return!!(t>=0&&r.test(e))},s=function(e){return n.existsSync(e)},u=function(e){var t=e.lastIndexOf(".");return-1===t};function l(e){var t={};if("object"!==Object(a["a"])(e)||e instanceof Array)return{};var r=function(r){if(Object.prototype.hasOwnProperty.call(e,r)){var a=r.replace(/([A-Z])/g,"_$1").toUpperCase();t[a]=function(e){return e[r]}}};for(var n in e)r(n);return t}},fe10:function(e,t,r){"use strict";r.r(t);var a=r("a4a0"),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a}});
//# sourceMappingURL=app.56b3bfb9.js.map