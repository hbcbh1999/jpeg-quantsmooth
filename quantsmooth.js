var b;b||(b=typeof Module !== 'undefined' ? Module : {});var f={},h;for(h in b)b.hasOwnProperty(h)&&(f[h]=b[h]);function k(a,c){throw c;}var l=!1,m=!1,n=!1,aa=!1,p=!1;l="object"===typeof window;m="function"===typeof importScripts;n=(aa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!l&&!m;p=!l&&!n&&!m;var q="",u,x,y,z;
if(n)q=__dirname+"/",u=function(a,c){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);return y.readFileSync(a,c?null:"utf8")},x=function(a){a=u(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),"undefined"!==typeof module&&(module.exports=b),process.on("uncaughtException",function(a){if(!(a instanceof B))throw a;}),process.on("unhandledRejection",A),k=function(a){process.exit(a)},
b.inspect=function(){return"[Emscripten Module object]"};else if(p)"undefined"!=typeof read&&(u=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||A("Assertion failed: undefined");return a},"function"===typeof quit&&(k=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);
else if(l||m)m?q=self.location.href:document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.lastIndexOf("/")+1):"",u=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},m&&(x=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)});var C=b.print||console.log.bind(console),D=b.printErr||console.warn.bind(console);
for(h in f)f.hasOwnProperty(h)&&(b[h]=f[h]);f=null;b.quit&&(k=b.quit);var E;b.wasmBinary&&(E=b.wasmBinary);var F;b.noExitRuntime&&(F=b.noExitRuntime);"object"!==typeof WebAssembly&&D("no native wasm support detected");var I,ba=new WebAssembly.Table({initial:79,maximum:79,element:"anyfunc"}),J=!1,K="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function L(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,ca,M,N;
function da(a){buffer=a;b.HEAP8=ca=new Int8Array(a);b.HEAP16=new Int16Array(a);b.HEAP32=N=new Int32Array(a);b.HEAPU8=M=new Uint8Array(a);b.HEAPU16=new Uint16Array(a);b.HEAPU32=new Uint32Array(a);b.HEAPF32=new Float32Array(a);b.HEAPF64=new Float64Array(a)}var ea=b.TOTAL_MEMORY||16777216;b.wasmMemory?I=b.wasmMemory:I=new WebAssembly.Memory({initial:ea/65536});I&&(buffer=I.buffer);ea=buffer.byteLength;da(buffer);N[15348]=5304432;
function O(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.s;"number"===typeof d?void 0===c.o?b.dynCall_v(d):b.dynCall_vi(d,c.o):d(void 0===c.o?null:c.o)}}}var fa=[],ha=[],ia=[],ja=[];function oa(){var a=b.preRun.shift();fa.unshift(a)}var pa=Math.ceil,qa=Math.floor,U=0,V=null,W=null;b.preloadedImages={};b.preloadedAudios={};
function A(a){if(b.onAbort)b.onAbort(a);C(a);D(a);J=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function ra(){var a=X;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var X="quantsmooth.wasm";if(!ra()){var sa=X;X=b.locateFile?b.locateFile(sa,q):q+sa}
function ta(){try{if(E)return new Uint8Array(E);if(x)return x(X);throw"both async and sync fetching of the wasm failed";}catch(a){A(a)}}function ua(){return E||!l&&!m||"function"!==typeof fetch?new Promise(function(a){a(ta())}):fetch(X,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+X+"'";return a.arrayBuffer()}).catch(function(){return ta()})}ha.push({s:function(){va()}});
var wa=[null,[],[]],xa={c:function(a,c,d){M.set(M.subarray(c,c+d),a)},d:function(a){if(2147418112<a)return!1;for(var c=Math.max(ca.length,16777216);c<a;)536870912>=c?c=L(2*c):c=Math.min(L((3*c+2147483648)/4),2147418112);a:{try{I.grow(c-buffer.byteLength+65535>>16);da(I.buffer);var d=1;break a}catch(v){}d=void 0}return d?!0:!1},g:function(a){if(!F&&(J=!0,b.onExit))b.onExit(a);k(a,new B(a))},e:function(){return 0},b:function(){return 0},f:function(a,c,d,v){try{for(var G=0,H=0;H<d;H++){for(var za=N[c+
8*H>>2],ka=N[c+(8*H+4)>>2],P=0;P<ka;P++){var Q=M[za+P],R=wa[a];if(0===Q||10===Q){var Aa=1===a?C:D;for(var r=R,g=0,t=g+void 0,w=g;r[w]&&!(w>=t);)++w;if(16<w-g&&r.subarray&&K)var la=K.decode(r.subarray(g,w));else{for(t="";g<w;){var e=r[g++];if(e&128){var S=r[g++]&63;if(192==(e&224))t+=String.fromCharCode((e&31)<<6|S);else{var ma=r[g++]&63;e=224==(e&240)?(e&15)<<12|S<<6|ma:(e&7)<<18|S<<12|ma<<6|r[g++]&63;if(65536>e)t+=String.fromCharCode(e);else{var na=e-65536;t+=String.fromCharCode(55296|na>>10,56320|
na&1023)}}}else t+=String.fromCharCode(e)}la=t}Aa(la);R.length=0}else R.push(Q)}G+=ka}N[v>>2]=G;return 0}catch(T){return"undefined"!==typeof FS&&T instanceof FS.u||A(T),T.v}},a:function(a){var c=Date.now();N[a>>2]=c/1E3|0;N[a+4>>2]=c%1E3*1E3|0;return 0},memory:I,h:function(a){a=+a;return 0<=a?+qa(a+.5):+pa(a-.5)},table:ba},ya=function(){function a(a){b.asm=a.exports;U--;b.monitorRunDependencies&&b.monitorRunDependencies(U);0==U&&(null!==V&&(clearInterval(V),V=null),W&&(a=W,W=null,a()))}function c(c){a(c.instance)}
function d(a){return ua().then(function(a){return WebAssembly.instantiate(a,v)}).then(a,function(a){D("failed to asynchronously prepare wasm: "+a);A(a)})}var v={env:xa,wasi_snapshot_preview1:xa};U++;b.monitorRunDependencies&&b.monitorRunDependencies(U);if(b.instantiateWasm)try{return b.instantiateWasm(v,a)}catch(G){return D("Module.instantiateWasm callback failed with error: "+G),!1}(function(){if(E||"function"!==typeof WebAssembly.instantiateStreaming||ra()||"function"!==typeof fetch)return d(c);
fetch(X,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,v).then(c,function(a){D("wasm streaming compile failed: "+a);D("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}();b.asm=ya;var va=b.___wasm_call_ctors=function(){return b.asm.i.apply(null,arguments)};b._web_process=function(){return b.asm.j.apply(null,arguments)};b._malloc=function(){return b.asm.k.apply(null,arguments)};b._free=function(){return b.asm.l.apply(null,arguments)};
b.dynCall_vi=function(){return b.asm.m.apply(null,arguments)};b.asm=ya;var Y;function B(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}W=function Ba(){Y||Z();Y||(W=Ba)};
function Z(){function a(){if(!Y&&(Y=!0,!J)){O(ha);O(ia);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();ja.unshift(a)}O(ja)}}if(!(0<U)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)oa();O(fa);0<U||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);a()},1)):a())}}b.run=Z;
if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();F=!0;Z();
