(this.webpackJsonpjetstories=this.webpackJsonpjetstories||[]).push([[0],{113:function(e,t){},199:function(e,t,n){},325:function(e,t,n){},732:function(e,t,n){},733:function(e,t,n){},735:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(182),o=n.n(i),s=(n(199),n(13)),u=n(32),l=n(10),d=n(5),j=n.n(d),b=n(40),f=n(16),m=n(737),O=(n(325),function(e){var t=e.isFull,n=e.onButtonClick,c=Object(b.a)();return Object(r.jsx)(l.a,{children:Object(r.jsxs)("div",{className:Object(l.f)({alignItems:"end"}),children:[Object(r.jsx)("div",{className:Object(l.e)({default:"inline"}),children:Object(r.jsx)("a",{href:"https://www.jetbrains.com",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("div",{className:"jetbrains-logo _logo-jetbrains-square _size-3"})})}),t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:Object(l.e)({default:"auto-fill"}),children:Object(r.jsx)("span",{className:c("wt-h2"),children:"JetStories"})}),Object(r.jsx)("div",{className:j()(Object(l.e)({default:"inline"}),"wt-offset-top-24"),children:Object(r.jsx)(f.a,{onClick:n,mode:"contrast",children:"Add your story!"})})]}),!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:Object(l.e)({default:"auto-fill"}),children:" "}),Object(r.jsx)("div",{className:Object(l.e)({default:"inline"}),children:Object(r.jsx)(f.a,{onClick:n,icon:Object(r.jsx)(m.a,{}),mode:"contrast"})})]})]})})}),p=n(23),v=n(743),h=n(82),x=n.n(h),g=n(43),y=n.n(g),w=function(e,t){var n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],i=r[1];Object(c.useEffect)((function(){y.a.config.region="us-east-1",y.a.config.credentials=new y.a.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:19b76b20-93c7-4166-891b-88ebf401128e"})}),[]);return{upload:function(n){new y.a.S3.ManagedUpload({params:{Bucket:"test-sto",Key:"".concat((new Date).getTime(),".mp4"),Body:n,ACL:"public-read"}}).promise().then((function(t){e(t)}),(function(e){t(e)}))},getList:function(){new y.a.S3({apiVersion:"2006-03-01",params:{Bucket:"test-sto"}}).listObjects({Delimiter:"/"},(function(e,t){t&&t.Contents&&i(t.Contents),e&&console.log("failed getting list",e)}))},list:a}},N=n(27),k=n.n(N),C=n(39),R=n(192),_=n(738),S=function(e){var t=e.cameraRef,n=e.onRecordComplete,r=e.isRecording,a=e.onError,i=Object(c.useRef)(),o=Object(c.useRef)(null),s=function(e){n(e.data)},u=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof MediaRecorder){e.next=3;break}return a("Browser not supported"),e.abrupt("return");case 3:if(!/Android|Mobile|mobile/i.test(navigator.userAgent)){e.next=6;break}return a("Browser not supported"),e.abrupt("return");case 6:return e.next=8,navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:4096},height:{ideal:2160}},audio:!0});case 8:i.current=e.sent,o.current=new MediaRecorder(i.current,{mimeType:"video/webm;codecs=H264,pcm"}),o.current.ondataavailable=s,(null===t||void 0===t?void 0:t.current)&&(t.current.srcObject=i.current);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return u(),function(){var e;null===(e=i.current)||void 0===e||e.getTracks().forEach((function(e){e.stop()}))}}),[t]);Object(c.useEffect)((function(){r?function(){var e;null===(e=o.current)||void 0===e||e.start()}():function(){var e;null===(e=o.current)||void 0===e||e.stop()}()}),[r])},T=function(e){var t=e.time,n=void 0===t?10:t,a=e.isRunning,i=e.onOver;return Object(c.useEffect)((function(){var e;return a&&(e=setTimeout(i,1e3*n)),function(){e&&clearTimeout(e)}}),[a]),Object(r.jsx)("div",{className:j()("timer",a&&"timer__running"),children:Object(r.jsx)("div",{className:j()("bar",a&&"bar__running"),style:{transitionDuration:"".concat(n,"s")}})})},E=Object(r.jsx)("svg",{viewBox:"0 0 24 24",className:"wt-icon wt-icon_theme_light wt-icon_size_m",children:Object(r.jsx)("rect",{x:"6",y:"6",width:"12",height:"12",fill:"white"})}),P=function(e){var t=e.onRecordComplete,n=e.isRecording,a=e.onClickRecordStart,i=e.onClickRecordStop,o=e.onError,s=Object(c.useRef)(),u=Object(p.a)();return S({cameraRef:s,isRecording:n,onRecordComplete:t,onError:o}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:u("player",{sm:"player__sm"}),children:Object(r.jsx)("video",{ref:s,autoPlay:!0,muted:!0})}),Object(r.jsx)(T,{time:10,isRunning:n,onOver:i}),!n&&Object(r.jsx)(f.a,{mode:"contrast",onClick:a,icon:Object(r.jsx)(_.a,{className:"record-icon"}),children:"Record"}),n&&Object(r.jsx)(f.a,{className:"button__record",onClick:i,icon:E,children:"Record"})]})},L=n(741),B=n(742),F=n(58),D=n(84),M=n(739),U=n(740),A=(n(732),function(e){var t=e.onChange;return Object(r.jsxs)(D.b,{domain:[0,100],values:[0,100],mode:2,className:"wrapper",onUpdate:t,children:[Object(r.jsx)("div",{className:"track"}),Object(r.jsx)(D.a,{children:function(e){var t=e.handles,n=e.getHandleProps;return Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)("div",Object(F.a)(Object(F.a)({className:"handle",style:{left:"".concat(e.percent,"%"),marginLeft:0===t?"-30px":0}},n(e.id)),{},{children:0===t?Object(r.jsx)(M.a,{className:"handle-icon handle-icon__left"}):Object(r.jsx)(U.a,{className:"handle-icon handle-icon__right"})}),e.id)}))})}}),Object(r.jsx)(D.c,{left:!1,right:!1,children:function(e){var t=e.tracks,n=e.getTrackProps;return Object(r.jsx)("div",{children:t.map((function(e){var t=e.id,r=e.source,a=e.target;return Object(c.createElement)("div",Object(F.a)(Object(F.a)({style:{left:"".concat(r.percent,"%"),width:"".concat(a.percent-r.percent,"%")}},n(t)),{},{key:t,className:"track"}))}))})}})]})}),I=function(e){var t=e.playerRef,n=e.onEdit,r=e.blob,a=Object(c.useRef)([]),i=Object(c.useState)(0),o=Object(s.a)(i,2),u=o[0],l=o[1],d=Object(c.useState)(0),j=Object(s.a)(d,2),b=j[0],f=j[1],m=Object(c.useState)(0),O=Object(s.a)(m,2),p=O[0],v=O[1],h=function(e){var t=e.target.duration*a.current[1]/100||e.target.duration,n=a.current[0]*e.target.duration/100||0;e.target.currentTime>=t&&(e.target.currentTime=n,e.target.play())},x=function(){var e=Object(C.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=URL.createObjectURL(r),t.current.style.opacity=0,t.current.src=n;case 3:if(t.current.duration!==1/0&&!isNaN(t.current.duration)){e.next=9;break}return e.next=6,new Promise((function(e){return setTimeout(e,200)}));case 6:t.current.currentTime=1e7*Math.random(),e.next=3;break;case 9:v(t.current.duration),t.current.currentTime=0,t.current.style.opacity=1,t.current.play();case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return r&&t.current&&(x(),t.current.addEventListener("timeupdate",h)),function(){var e;null===(e=t.current)||void 0===e||e.removeEventListener("timeupdate",h)}}),[r]);return Object(c.useEffect)((function(){n({startTime:u,endTime:b,duration:p})}),[u,b,p]),{trim:function(e){var n=e[0]!==a.current[0]&&e[1]===a.current[1],r=e[1]!==a.current[1]&&e[0]===a.current[0];a.current=e,n&&t.current.duration!==1/0&&(t.current.currentTime=a.current[0]*t.current.duration/100,t.current.play(),l(t.current.currentTime)),r&&function(){if(t.current.duration!==1/0){var e=a.current[1]*t.current.duration/100;t.current.currentTime=e-.2,t.current.play(),f(e)}}()}}},J=function(e){var t=e.onEdit,n=e.videoData,a=e.onClickCancel,i=e.onClickUpload,o=Object(c.useRef)(),s=Object(p.a)(),u=I({onEdit:t,blob:n,playerRef:o}).trim;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:s("player",{sm:"player__sm"}),children:Object(r.jsx)("video",{ref:o})}),Object(r.jsx)(A,{onChange:u}),Object(r.jsx)(f.a,{mode:"contrast",icon:Object(r.jsx)(L.a,{}),onClick:i,children:"Upload"})," ",Object(r.jsx)(f.a,{mode:"outline",icon:Object(r.jsx)(B.a,{}),onClick:a,children:"Cancel"})]})},z=function(e){var t=e.className,n=e.onSuccess,a=Object(b.a)(),i=Object(c.useState)("idle"),o=Object(s.a)(i,2),u=o[0],l=o[1],d=Object(c.useState)(null),m=Object(s.a)(d,2),O=m[0],h=m[1],g=Object(c.useState)({}),y=Object(s.a)(g,2),N=y[0],_=y[1],S=function(e){return console.log("error",e)},T=function(e,t){return function(){var n=Object(C.a)(k.a.mark((function n(r,c){var a,i,o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=(null===c||void 0===c?void 0:c.startTime)?"-ss ".concat(c.startTime.toFixed(3)," "):"",i=(null===c||void 0===c?void 0:c.endTime)?" -to ".concat((c.endTime+.15).toFixed(3)):"",(o=new R.a).on("onReady",(function(){o.inputFile=r,o.runCommand("".concat(a,"-strict -2 -copyts").concat(i," -c:v copy out.mp4"),67108864)})),o.on("onStdout",(function(t){e(t)})),o.on("onStart",(function(){e("worker started")})),o.on("onDone",(function(e){var n=new Blob([e[0].data],{type:"video/mp4"});t(n)}));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}((function(e){return console.log("processing",e)}),(function(e){h(e),l("uploading")})),E=w((function(){return l("success")}),S).upload;Object(c.useEffect)((function(){"idle"===u&&(h(null),_({})),"processing"===u&&T(O,N),"uploading"===u&&(E(O),console.log(E)),"success"===u&&setTimeout((function(){return n()}),700)}),[u]);var L=function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var n=e.target.result,r=new Blob([new Uint8Array(n)],{type:t.type});h(r),l("recorded")},n.readAsArrayBuffer(t)},B=Object(p.a)();return Object(r.jsx)("div",{className:j()(t,B("recorder-container",{sm:"recorder-container__sm"})),children:Object(r.jsxs)("div",{children:[("idle"===u||"recording"===u)&&Object(r.jsx)(P,{onRecordComplete:h,isRecording:"recording"===u,setState:l,onClickRecordStart:function(){return l("recording")},onClickRecordStop:function(){return l("recorded")},onError:function(){return l("notSupported")}}),"recorded"===u&&Object(r.jsx)(J,{videoData:O,onEdit:_,onClickCancel:function(){return l("idle")},onClickUpload:function(){return l("processing")}}),("processing"===u||"uploading"===u)&&Object(r.jsx)("div",{className:j()(B("player",{sm:"player__sm"}),{"success-animation":"success"===u}),children:Object(r.jsxs)("div",{className:"loading-state-report",children:[Object(r.jsx)(x.a,{radius:200,stroke:1,visible:!0}),Object(r.jsxs)("p",{className:j()("loading-state-message",a("wt-text-3")),children:[u,"..."]})]})}),"notSupported"===u&&Object(r.jsx)("div",{className:B("player",{sm:"player__sm"}),children:Object(r.jsxs)("div",{className:"not-supported",children:[Object(r.jsx)("h2",{className:a("wt-h1"),children:"\ud83d\ude14"}),Object(r.jsx)("p",{className:a("wt-text-1"),children:"Your browser does not support camera recording, please choose file from library"}),Object(r.jsx)(f.a,{mode:"contrast",icon:Object(r.jsx)(v.a,{}),onClick:function(){var e=document.createElement("input");e.onchange=L,e.type="file",e.capture="user",e.accept="video/*",e.click()},children:"Choose file"})]})})]})})},H=function(e){var t=e.onSuccess,n=Object(b.a)(),c=Object(p.a)();return Object(r.jsx)(l.a,{children:Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:j()("column",n("wt-hero"),"header"),children:"JetStories"}),Object(r.jsx)(z,{className:j()("column",c("recorder__lg",{md:"recorder"})),onSuccess:t}),Object(r.jsxs)("p",{className:j()("column","text",n("wt-subtitle-2",{flow:!0})),children:["Hi!",Object(r.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."]})]})})},K=n(744),q=(n(733),function(e){var t=e.onPlay,n=e.onStop,a=e.isPlaying,i=e.filePath,o=Object(c.useRef)();Object(c.useEffect)((function(){a||o.current.paused||o.current.pause()}),[a]);var u=Object(c.useState)(!1),l=Object(s.a)(u,2),d=l[0],b=l[1];return Object(c.useEffect)((function(){o.current&&(o.current.load(),o.current.oncanplaythrough=function(){o.current&&(b(!0),o.current.paused&&(o.current.currentTime=2))},o.current.onended=n)}),[o.current]),Object(r.jsxs)("div",{className:j()("story",{story__ready:d,story__playing:a}),children:[!d&&Object(r.jsx)(x.a,{className:"story-loader-spinner",radius:100,stroke:1,visible:!0}),Object(r.jsxs)("div",{className:"story-wrapper",onClick:function(){o.current.paused?(o.current.currentTime=0,o.current.play(),t()):(o.current.pause(),n())},children:[Object(r.jsx)("video",{src:"".concat("https://test-sto.s3.amazonaws.com/").concat(i),ref:o,preload:"metadata",playsInline:!0}),Object(r.jsx)(f.a,{className:"story-play-button",mode:"contrast",icon:Object(r.jsx)(K.a,{})})]})]})}),V=function(){var e=Object(c.useRef)(),t=Object(p.a)(),n=w(),a=n.getList,i=n.list;Object(c.useEffect)((function(){a()}),[]);var o=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1];return{play:function(e){return r(e)},stop:function(){return r(void 0)},activePlayer:n}}(),u=o.play,d=o.stop,b=o.activePlayer;return console.log(i.sort((function(e,t){return console.log(new Date(e.LastModified)),new Date(t.LastModified)-new Date(e.LastModified)}))),console.log("list",i),Object(r.jsxs)("div",{className:Object(l.f)(),ref:e,children:[i.map((function(e,t){return Object(r.jsx)("div",{className:j()(Object(l.e)({default:3,lg:4,sm:12})),children:Object(r.jsx)(q,{filePath:e.Key,onPlay:function(){return u(t)},onStop:function(){return d(t)},isPlaying:b===t})},e.Key)})),0===i.length&&new Array(t(8,{lg:6,sm:3})).fill(void 0).map((function(e,t){return Object(r.jsx)("div",{className:j()(Object(l.e)({default:3,lg:4,sm:12})),children:Object(r.jsx)("div",{className:"story",children:Object(r.jsx)("div",{className:"story-wrapper"})})},t)}))]})},Y=function(){return Object(r.jsx)(l.a,{className:"wt-offset-top-48",children:Object(r.jsx)(V,{})})};n(734);var G=function(){var e=Object(c.useState)("player"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)(u.a,{theme:"dark",children:Object(r.jsxs)(l.b,{className:"layout",children:[Object(r.jsx)(l.d,{children:Object(r.jsx)(O,{isFull:"player"===n,onButtonClick:function(){return a("player"===n?"recorder":"player")}})}),Object(r.jsxs)(l.c,{children:["recorder"===n&&Object(r.jsx)(H,{onSuccess:function(){return a("player")}}),"player"===n&&Object(r.jsx)(Y,{})]})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,745)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),Q()}},[[735,1,2]]]);
//# sourceMappingURL=main.152b9cdc.chunk.js.map