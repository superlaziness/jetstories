(this.webpackJsonpjetstories=this.webpackJsonpjetstories||[]).push([[0],{154:function(e,t,r){},272:function(e,t,r){},288:function(e,t,r){},290:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(0),a=r.n(c),o=r(137),i=r.n(o),s=(r(154),r(25)),u=r(17),d=(r(272),function(){return Object(n.jsx)(u.a,{className:u.f,children:Object(n.jsx)("div",{className:u.e,children:Object(n.jsx)("a",{href:"https://www.jetbrains.com",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("div",{className:"jetbrains-logo _logo-jetbrains-square _size-3"})})})})}),l=r(3),j=r.n(l),b=r(148),f=r(66),m=r(26),O=r(67),v=function(e){var t=e.time,r=void 0===t?10:t,a=e.isRunning,o=e.onOver;return Object(c.useEffect)((function(){var e;return a&&(e=setTimeout(o,1e3*r)),function(){e&&clearTimeout(e)}}),[a]),Object(n.jsx)("div",{className:j()("timer",a&&"timer__running"),children:Object(n.jsx)("div",{className:j()("bar",a&&"bar__running"),style:{transitionDuration:"".concat(r,"s")}})})},p=r(20),h=r.n(p),x=r(31),g=r(147),y=function(e){var t=e.resultRef.current;return function(){var e=Object(x.a)(h.a.mark((function e(r,n){var c,a,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(null===n||void 0===n?void 0:n.startTime)?["-ss",n.startTime.toFixed(1)]:[],a=(null===n||void 0===n?void 0:n.endTime)?["-to",(n.endTime+.15).toFixed(1)]:[],console.log("trimmer option",c,a),e.next=5,r.arrayBuffer();case 5:o=e.sent,(i=new Worker(g.a)).onmessage=function(e){var n=e.data;switch(n.type){case"ready":console.log("worker ready"),i.postMessage({type:"run",MEMFS:[{name:"input.mkv",data:o}],arguments:["-i","input.mkv"].concat(c,a,["-copyts","-vcodec","copy","out.mp4"])});break;case"stdout":console.log("worker stdout",n.data);break;case"stderr":console.log("worker stderr",n.data);break;case"done":console.log("worker done",n.data);var s=new Blob([Uint8Array.from(n.data.MEMFS[0].data)],{type:"video/mp4;codecs=h264,opus"}),u=URL.createObjectURL(s);t.src=u,t.play(),console.log("blob",r);break;default:console.log("default")}};case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},k=function(e){var t=e.cameraRef,r=e.onRecordComplete,n=e.isRecording,a=Object(c.useRef)(),o=Object(c.useRef)(null),i=function(e){r(e.data)},s=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!0});case 2:a.current=e.sent,o.current=new MediaRecorder(a.current,{mimeType:"video/mp4;codecs=h264,opus"}),o.current.ondataavailable=i,(null===t||void 0===t?void 0:t.current)&&(t.current.srcObject=a.current);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return s(),function(){var e;null===(e=a.current)||void 0===e||e.getTracks().forEach((function(e){e.stop()}))}}),[t]);Object(c.useEffect)((function(){n?function(){var e;null===(e=o.current)||void 0===e||e.start()}():function(){var e;null===(e=o.current)||void 0===e||e.stop()}()}),[n])},R=function(e){var t=e.onRecordComplete,r=e.isRecording,a=Object(c.useRef)();return k({cameraRef:a,isRecording:r,onRecordComplete:t}),Object(n.jsx)("video",{ref:a,autoPlay:!0,muted:!0})},w=r(44),N=r(68),T=r(293),E=r(294),_=(r(288),function(e){var t=e.onChange;return Object(n.jsxs)(N.b,{domain:[0,100],values:[0,100],mode:2,className:"wrapper",onUpdate:t,children:[Object(n.jsx)("div",{className:"track"}),Object(n.jsx)(N.a,{children:function(e){var t=e.handles,r=e.getHandleProps;return Object(n.jsx)("div",{children:t.map((function(e,t){return Object(n.jsx)("div",Object(w.a)(Object(w.a)({className:"handle",style:{left:"".concat(e.percent,"%"),marginLeft:0===t?"-30px":0}},r(e.id)),{},{children:0===t?Object(n.jsx)(T.a,{className:"handle-icon handle-icon__left"}):Object(n.jsx)(E.a,{className:"handle-icon handle-icon__right"})}),e.id)}))})}}),Object(n.jsx)(N.c,{left:!1,right:!1,children:function(e){var t=e.tracks,r=e.getTrackProps;return Object(n.jsx)("div",{children:t.map((function(e){var t=e.id,n=e.source,a=e.target;return Object(c.createElement)("div",Object(w.a)(Object(w.a)({style:{left:"".concat(n.percent,"%"),width:"".concat(a.percent-n.percent,"%")}},r(t)),{},{key:t,className:"track"}))}))})}})]})}),C=function(e){var t=e.playerRef,r=e.onEdit,n=e.blob,a=Object(c.useRef)([]),o=Object(c.useState)(0),i=Object(m.a)(o,2),s=i[0],u=i[1],d=Object(c.useState)(0),l=Object(m.a)(d,2),j=l[0],b=l[1],f=Object(c.useState)(0),O=Object(m.a)(f,2),v=O[0],p=O[1],g=function(e){var t=e.target.duration*a.current[1]/100||e.target.duration,r=a.current[0]*e.target.duration/100||0;e.target.currentTime>=t&&(e.target.currentTime=r,e.target.play())},y=function(){var e=Object(x.a)(h.a.mark((function e(){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=URL.createObjectURL(n),t.current.src=r;case 2:if(t.current.duration!==1/0&&!isNaN(t.current.duration)){e.next=9;break}return e.next=5,new Promise((function(e){return setTimeout(e,200)}));case 5:console.log(t.current.duration),t.current.currentTime=1e7*Math.random(),e.next=2;break;case 9:p(t.current.duration),t.current.currentTime=0,t.current.play();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return n&&t.current&&(y(),t.current.addEventListener("timeupdate",g)),function(){var e;null===(e=t.current)||void 0===e||e.removeEventListener("timeupdate",g)}}),[n]);return Object(c.useEffect)((function(){r({startTime:s,endTime:j,duration:v})}),[s,j,v]),{trim:function(e){var r=e[0]!==a.current[0]&&e[1]===a.current[1],n=e[1]!==a.current[1]&&e[0]===a.current[0];a.current=e,r&&t.current.duration!==1/0&&(t.current.currentTime=a.current[0]*t.current.duration/100,t.current.play(),u(t.current.currentTime)),n&&function(){if(t.current.duration!==1/0){var e=a.current[1]*t.current.duration/100;t.current.currentTime=e-.2,t.current.play(),b(e)}}()}}},S=function(e){var t=e.onEdit,r=e.videoData,a=Object(c.useRef)(),o=C({onEdit:t,blob:r,playerRef:a}).trim;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("video",{ref:a,muted:!0}),Object(n.jsx)(_,{onChange:o})]})},F=function(e){var t=e.className,r=Object(f.a)(),a=Object(c.useState)("idle"),o=Object(m.a)(a,2),i=o[0],s=o[1],u=Object(c.useState)(null),d=Object(m.a)(u,2),l=d[0],b=d[1],p=Object(c.useState)({}),h=Object(m.a)(p,2),x=h[0],g=h[1],k=Object(c.useRef)(null),w=y({resultRef:k});return console.log("state",i,x,l),Object(n.jsxs)("div",{className:j()(t,"recorder-container"),children:[Object(n.jsxs)("div",{className:r("player",{sm:"player__sm"}),children:["recorded"!==i&&Object(n.jsx)(R,{onRecordComplete:b,isRecording:"recording"===i}),"recorded"===i&&Object(n.jsx)(S,{videoData:l,onEdit:g}),"recorded"===i&&Object(n.jsx)("video",{ref:k,autoPlay:!0,muted:!0,loop:!0,controls:!0})]}),Object(n.jsx)(v,{time:10,isRunning:"recording"===i,onOver:function(){return s("recorded")}}),Object(n.jsxs)("div",{children:["state: ",i]}),Object(n.jsx)(O.a,{mode:"contrast",onClick:function(){return s("recording"===i?"recorded":"recording")},children:"Record"}),Object(n.jsx)(O.a,{mode:"contrast",onClick:function(){return s("idle")},children:"Clear"}),Object(n.jsx)(O.a,{mode:"contrast",onClick:function(){return w(l,x)},children:"Process"}),Object(n.jsx)("input",{type:"file",id:"hello",onChange:function(e){var t=e.target.files[0],r=new FileReader;r.onloadend=function(e){var t=e.target.result,r=new Blob([new Uint8Array(t)],{type:"video/x-matroska;codecs=avc1,opus"});b(r),s("recorded")},r.readAsArrayBuffer(t)}}),Object(n.jsx)("p",{children:status})]})},L=function(){var e=Object(b.a)(),t=Object(f.a)();return Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{className:j()("column",e("wt-hero"),"header"),children:"JetStories"}),Object(n.jsx)(F,{className:j()("column",t("recorder__lg",{md:"recorder"}))}),Object(n.jsxs)("p",{className:j()("column","text",e("wt-subtitle-2",{flow:!0})),children:["Hi!",Object(n.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."]})]})})};r(289);var M=function(){return Object(n.jsx)(s.a,{theme:"dark",children:Object(n.jsxs)(u.b,{className:"layout",children:[Object(n.jsx)(u.d,{children:Object(n.jsx)(d,{})}),Object(n.jsx)(u.c,{children:Object(n.jsx)(L,{})})]})})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,295)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),P()}},[[290,1,2]]]);
//# sourceMappingURL=main.a4005952.chunk.js.map