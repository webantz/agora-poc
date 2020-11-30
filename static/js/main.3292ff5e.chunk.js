(window.webpackJsonp17MultiStream=window.webpackJsonp17MultiStream||[]).push([[0],{102:function(e,t,a){e.exports=a(117)},107:function(e,t,a){},108:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=(a(107),a(108),a(13)),l=a(38),s=a(9),u=a(18),m={loading:!1,streams:[],localStream:null,currentStream:null,otherStreams:[],devicesList:[],config:{uid:0,host:!0,channelName:"",token:null,microphoneId:"",cameraId:"",resolution:"480p"},agoraClient:null,mode:"live",codec:"h264",muteVideo:!0,muteAudio:!0,screen:!1,profile:!1},d=function(e,t){switch(t.type){case"config":return Object(s.a)(Object(s.a)({},e),{},{config:t.payload});case"client":return Object(s.a)(Object(s.a)({},e),{},{client:t.payload});case"loading":return Object(s.a)(Object(s.a)({},e),{},{loading:t.payload});case"codec":return Object(s.a)(Object(s.a)({},e),{},{codec:t.payload});case"video":return Object(s.a)(Object(s.a)({},e),{},{muteVideo:t.payload});case"audio":return Object(s.a)(Object(s.a)({},e),{},{muteAudio:t.payload});case"screen":return Object(s.a)(Object(s.a)({},e),{},{screen:t.payload});case"devicesList":return Object(s.a)(Object(s.a)({},e),{},{devicesList:t.payload});case"localStream":return Object(s.a)(Object(s.a)({},e),{},{localStream:t.payload});case"profile":return Object(s.a)(Object(s.a)({},e),{},{profile:t.payload});case"currentStream":var a=e.streams,n=t.payload,o=a.filter((function(e){return e.getId()!==n.getId()}));return Object(s.a)(Object(s.a)({},e),{},{currentStream:n,otherStreams:o});case"addStream":var r=e.streams,c=e.currentStream,i=t.payload,u=c;if(u||(u=i),17===r.length)return Object(s.a)({},e);var m=[].concat(Object(l.a)(r),[i]),d=m.filter((function(e){return e.getId()!==u.getId()}));return window.streams=m,Object(s.a)(Object(s.a)({},e),{},{streams:m,currentStream:u,otherStreams:d});case"removeStream":var f=e.streams,p=e.currentStream,g=t.stream,h=t.uid,v=g?g.getId():h,b=p,y=f.filter((function(e){return e.getId()!==v}));v===p.getId()&&(b=0===y.length?null:y[0]);var S=b?y.filter((function(e){return e.getId()!==b.getId()})):[];return Object(s.a)(Object(s.a)({},e),{},{streams:y,currentStream:b,otherStreams:S});case"clearAllStream":var E=e.streams,x=e.localStream,j=e.currentStream;return E.forEach((function(e){e.isPlaying()&&e.stop(),e.close()})),x&&(x.isPlaying()&&x.stop(),x.close()),j&&(j.isPlaying()&&j.stop(),j.close()),Object(s.a)(Object(s.a)({},e),{},{currentStream:null,localStream:null,streams:[]});default:throw new Error("mutation type not defined")}},f=a(42),p=a(3),g=a(171),h=a(76),v=a.n(h),b=a(81),y=a.n(b),S=a(82),E=a.n(S),x=a(83),j=a.n(x),C=a(61),O=a(156),k=a(158),I=a(157),_=a(80),N=a.n(_),w=a(155),A={success:v.a,warning:N.a,error:y.a,info:E.a},R=Object(w.a)((function(e){return{success:{backgroundColor:C.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:O.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"},customSnackbar:{minWidth:"180px !important",minHeight:"40px !important",background:"rgba(0,0,0,0.7)",boxShadow:"0px 2px 4px 0px rgba(42,62,84,0.24)",borderRadius:"30px",justifyContent:"center",padding:"0 11px"}}}));function V(e){var t=R(),a=M(),r=e.message,c=(e.onClose,e.variant),i=Object(f.a)(e,["message","onClose","variant"]),l=A[c];return Object(n.useEffect)((function(){var e=setTimeout((function(){a.removeTop()}),1e3);return function(){clearTimeout(e)}}),[a]),o.a.createElement(I.a,Object.assign({className:Object(p.a)(t[c],t.customSnackbar),"aria-describedby":"client-snackbar",message:o.a.createElement("span",{id:"client-snackbar",className:t.message},"error"===c?o.a.createElement("i",{className:"error-icon"}):o.a.createElement(l,{className:Object(p.a)(t.icon,t.iconVariant)}),r),action:[o.a.createElement(k.a,{key:"close","aria-label":"close",color:"inherit",onClick:function(){a.removeTop()}},o.a.createElement(j.a,{className:Object(p.a)(t.icon)}))]},i))}function D(e){var t=function(e){};return o.a.createElement(o.a.Fragment,null,e.toasts.map((function(e,a){return o.a.createElement(g.a,{key:a,open:!0,anchorOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(V,{onClose:t,variant:e.variant,message:"".concat(e.message)}))})))}var P=a(159),F=Object(w.a)((function(e){return{progress:{margin:e.spacing(2),color:"#44A2FC"},container:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#666666"}}}));function T(){var e=F();return o.a.createElement("div",{className:e.container},o.a.createElement(P.a,{className:e.progress}))}var L=Object(n.createContext)({}),B=Object(n.createContext)({}),W=function(e){var t=e.children,a=Object(n.useReducer)(d,m),r=Object(u.a)(a,2),c=r[0],i=r[1],f=Object(n.useState)([]),p=Object(u.a)(f,2),g=p[0],h=p[1],v={startLoading:function(){i({type:"loading",payload:!0})},stopLoading:function(){i({type:"loading",payload:!1})},updateConfig:function(e){i({type:"config",payload:Object(s.a)(Object(s.a)({},c.config),e)})},setClient:function(e){i({type:"client",payload:e})},setCodec:function(e){i({type:"codec",payload:e})},setVideo:function(e){i({type:"video",payload:e})},setAudio:function(e){i({type:"audio",payload:e})},setScreen:function(e){i({type:"screen",payload:e})},setProfile:function(e){i({type:"profile",payload:e})},toastSuccess:function(e){h([].concat(Object(l.a)(g),[{variant:"success",message:e}]))},toastInfo:function(e){h([].concat(Object(l.a)(g),[{variant:"info",message:e}]))},toastError:function(e){h([].concat(Object(l.a)(g),[{variant:"error",message:e}]))},removeTop:function(){var e=g.filter((function(e,t){return t>0}));h(Object(l.a)(e))},setLocalStream:function(e){i({type:"localStream",payload:e})},setCurrentStream:function(e){i({type:"currentStream",payload:e})},setDevicesList:function(e){i({type:"devicesList",payload:e})},clearAllStream:function(){i({type:"clearAllStream"})},addLocal:function(e){var t=e.stream;v.setLocalStream(t),v.setCurrentStream(t)},addStream:function(e){var t=e.stream;i({type:"addStream",payload:t})},removeStream:function(e){var t=e.stream;i({type:"removeStream",stream:t})},removeStreamById:function(e){var t=e.uid;i({type:"removeStream",uid:t})},connectionStateChanged:function(e){v.toastInfo("".concat(e.curState))}};return o.a.createElement(L.Provider,{value:c},o.a.createElement(B.Provider,{value:v},o.a.createElement(D,{toasts:g}),c.loading?o.a.createElement(T,null):null,t))};function z(){return Object(n.useContext)(L)}function M(){return Object(n.useContext)(B)}var $=a(165),U=a(168),H=a(164),J=a(4),q=a(160),X=a(172),Z=a(161),G=a(162),K=a(29),Q=o.a.createContext({}),Y=function(e){var t=e.children;return o.a.createElement(K.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,null,(function(e){return o.a.createElement(Q.Provider,{value:e},t)}))))};function ee(){return Object(n.useContext)(Q)}var te=a(27),ae=a.n(te),ne=(Object(J.a)({root:{color:"#999999","&$checked":{color:"#44A2FC"},"&:hover":{backgroundColor:"inherit"}}})((function(e){e.children;var t=Object(f.a)(e,["children"]);return o.a.createElement("div",{className:"role-item"},o.a.createElement("div",{className:"icon-".concat(t.value,"-").concat(t.checked?"active":"inactive")}),o.a.createElement("div",{className:"radio-row ".concat(t.value)},o.a.createElement("div",{className:"custom-radio"},o.a.createElement("input",{type:"radio",value:t.value,checked:t.checked,onChange:t.onChange}),o.a.createElement("div",{className:"checkmark"})),o.a.createElement(U.a,{flex:"1",className:"role-name-".concat(t.checked?"active":"inactive")},t.value)))})),Object(w.a)((function(e){return{fontStyle:{color:"#9ee2ff"},bottomStyle:{color:"#9ee2ff",position:"absolute",bottom:"20px",alignSelf:"center"},midItem:{marginTop:"1rem",marginBottom:"6rem"},item:{flex:1,display:"flex",alignItems:"center"},coverLeft:{background:"linear-gradient(to bottom, #307AFF, 50%, #46cdff)",alignItems:"center",flex:1,display:"flex",flexDirection:"column"},coverContent:{display:"flex",justifyContent:"center",flexDirection:"column",color:"#fff"},container:{display:"flex",justifyContent:"center",alignItems:"center"},card:{display:"flex",minWidth:700,minHeight:500,maxHeight:500,borderRadius:"10px",boxShadow:"0px 6px 18px 0px rgba(0,0,0,0.2)"},input:{maxWidth:"250px",minWidth:"250px",alignSelf:"center"},grid:{margin:"0 !important"},button:{lineHeight:"21px",color:"rgba(255,255,255,1)",fontSize:"17px",textTransform:"none",height:"44px",width:"260px","&:hover":{backgroundColor:"#82C2FF"},margin:e.spacing(1),marginTop:"33px",backgroundColor:"#44a2fc",borderRadius:"30px"},radio:{padding:"0",fontSize:"14px",alignItems:"center",paddingRight:"5px"}}})));function oe(){var e=ne(),t=ee(),a=z(),n=M();return o.a.createElement(U.a,{flex:"1",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"},o.a.createElement(U.a,{marginTop:"92",flex:"1",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},o.a.createElement(q.a,{className:Object(p.a)(e.input,e.grid)},o.a.createElement(X.a,{htmlFor:"channelName"},"Class Room Name"),o.a.createElement(Z.a,{id:"channelName",name:"channelName",value:a.config.channelName,onChange:function(e){/^[a-zA-Z0-9!#$%&()+\-:;<=.>?@[\]^_{}|~,\s]{1,64}$/.test(e.target.value)&&e.target.value.length<64?n.updateConfig({channelName:e.target.value}):n.updateConfig({channelName:""})}})),o.a.createElement(q.a,{className:e.grid},o.a.createElement(G.a,{onClick:function(){a.config.channelName?t.history.push({pathname:"/meeting/".concat(a.config.channelName,"/host")}):n.toastError("Enter your class room code")},variant:"contained",color:"primary",className:e.button},"Join"))),o.a.createElement(U.a,{textAlign:"center",fontWeight:"fontWeightRegular",className:e.bottomStyle,style:{color:"grey"},fontSize:"h7.fontSize"},"Version: ",ae.a.VERSION))}var re=a(84),ce=a(85),ie=a(86),le=a.n(ie);console.log("agora sdk version: "+ae.a.VERSION+" compatible: "+ae.a.checkSystemRequirements());var se=function(){function e(){Object(re.a)(this,e),this._client=null,this._joined=!1,this._localStream=null,this._params={},this._uid=0,this._eventBus=new le.a,this._showProfile=!1,this._subscribed=!1,this._created=!1}return Object(ce.a)(e,[{key:"createClient",value:function(e){return this._client=ae.a.createClient({mode:e.mode,codec:e.codec}),this._client}},{key:"destroy",value:function(){this._created=!1,this._client=null}},{key:"on",value:function(e,t){-1===["localStream-added"].indexOf(e)?this._client.on(e,t):this._eventBus.on(e,t)}},{key:"setClientRole",value:function(e){var t=this;return new Promise((function(a,n){t._client.setClientRole(e,(function(e){if(e)return n(e);a()}))}))}},{key:"createRTCStream",value:function(e){var t=this;return new Promise((function(a,n){t._uid=t._localStream?t._localStream.getId():e.uid,t._localStream&&(t.unpublish(),t._localStream.isPlaying()&&t._localStream.stop(),t._localStream.close());var o=ae.a.createStream({streamID:t._uid,audio:!0,video:!0,screen:!1,microphoneId:e.microphoneId,cameraId:e.cameraId});e.resolution&&"default"!==e.resolution&&o.setVideoProfile(e.resolution),o.init((function(){t._localStream=o,t._eventBus.emit("localStream-added",{stream:t._localStream}),!1===e.muteVideo&&t._localStream.muteVideo(),!1===e.muteAudio&&t._localStream.muteAudio(),a()}),(function(e){n(e),console.error("init local stream failed ",e)}))}))}},{key:"createScreenSharingStream",value:function(e){var t=this;return new Promise((function(a,n){t._uid=t._localStream?t._localStream.getId():e.uid,t._localStream&&(t._uid=t._localStream.getId(),t.unpublish(),t._localStream.isPlaying()&&t._localStream.stop(),t._localStream.close());var o=ae.a.createStream({streamID:t._uid,audio:!0,video:!1,screen:!0,microphoneId:e.microphoneId,cameraId:e.cameraId});e.resolution&&"default"!==e.resolution&&o.setScreenProfile("".concat(e.resolution,"_1")),o.on("stopScreenSharing",(function(e){t._eventBus.emit("stopScreenSharing",e)})),o.init((function(){t._localStream=o,t._eventBus.emit("localStream-added",{stream:t._localStream}),a()}),(function(e){a(e)}))}))}},{key:"setStreamFallbackOption",value:function(e,t){this._client.setStreamFallbackOption(e,t)}},{key:"subscribe",value:function(e,t){this._client.subscribe(e,t)}},{key:"_createTmpStream",value:function(){var e=this;return this._uid=0,new Promise((function(t,a){e._localStream&&e._localStream.close();var n=ae.a.createStream({streamID:e._uid,audio:!0,video:!0,screen:!1});n.init((function(){e._localStream=n,t()}),(function(e){a(e),console.error("init local stream failed ",e)}))}))}},{key:"getDevices",value:function(){var e=this;return new Promise((function(t,a){e._client||e.createClient({codec:"h264",mode:"live"}),e._createTmpStream().then((function(){ae.a.getDevices((function(a){e._localStream.close(),t(a)}))}))}))}},{key:"enableDualStream",value:function(){var e=this;return new Promise((function(t,a){e._client.enableDualStream(t,a)}))}},{key:"setRemoteVideoStreamType",value:function(e,t){this._client.setRemoteVideoStreamType(e,t)}},{key:"join",value:function(e){var t=this;return this._joined="pending",new Promise((function(a,n){t._params=e,t._client.init("6dfd61476b44424198bc9fbcdf6ccd86",(function(){t._client.join(e.token?e.token:null,e.channel,e.uid?+e.uid:null,(function(o){t._uid=o,console.log("join channel: "+e.channel+" success, uid: "+o),t._joined=!0,e.uid=o,t.enableDualStream().then((function(){e.host?t.createRTCStream(e).then((function(){t.setRemoteVideoStreamType(t._localStream,0),a()})).catch((function(e){n(e)})):a()})).catch((function(e){n(e)}))}),(function(e){t._joined=!1,n(e),console.error("client join failed",e)}))}),(function(e){t._joined=!1,n(e),console.error(e)}))}))}},{key:"publish",value:function(){this._client.publish(this._localStream,(function(e){console.error(e)}))}},{key:"unpublish",value:function(){this._client&&this._client.unpublish(this._localStream,(function(e){console.error(e)}))}},{key:"leave",value:function(){var e=this;return new Promise((function(t){if(!e._client)return t();e._client.leave((function(){e._joined=!1,e.destroy(),t()}),(function(e){console.log("channel leave failed"),console.error(e)}))}))}}]),e}();var ue=a(167),me=a(175),de=a(174),fe=a(173),pe=Object(w.a)((function(e){return{menuTitle:{color:"#333333",textAlign:"center",fontSize:"h6.fontSize",position:"relative",top:"7px"},marginTop:{marginTop:"0 !important"},menu:{margin:"0.4rem 0",position:"relative",height:"39px",display:"flex",justifyContent:"center",alignItems:"center"},line:{marginTop:"0.2rem",marginBottom:"0.5rem",borderBottom:"1px solid #EAEAEA"},hr:{borderBottom:"1px solid #EAEAEA"},switchItem:{flexDirection:"row-reverse !important",marginLeft:"0 !important",marginRight:"0 !important",justifyContent:"space-between"}}})),ge=Object(J.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#44A2FC",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(f.a)(e,["classes"]);return o.a.createElement(fe.a,Object.assign({focusVisibleClassName:t.focusVisible,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))}));function he(){var e=pe(),t=z(),a=M(),r=function(){var e=z(),t=M(),a=Object(n.useMemo)((function(){return new se}),[]),o=Object(n.useMemo)((function(){return[e.devicesList.filter((function(e){return"videoinput"===e.kind})).map((function(e,t){return{value:e.deviceId,label:e.label?e.label:"Video Input ".concat(t)}})),e.devicesList.filter((function(e){return"audioinput"===e.kind})).map((function(e,t){return{value:e.deviceId,label:e.label?e.label:"Audio Input ".concat(t)}}))]}),[e.devicesList]),r=Object(u.a)(o,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(!(c.length>0||i.length>0))return a.getDevices().then((function(e){t.setDevicesList(e)})),function(){a.destroy()}}),[i,t,c,a]),Object(n.useEffect)((function(){!c[0]||!i[0]||e.config.cameraId&&e.config.microphoneId||(t.updateConfig({cameraId:c[0].value,microphoneId:i[0].value}),t.stopLoading())}),[t,e.devicesList,e.config,c,i]),[c,i]}(),c=Object(u.a)(r,2),i=c[0],l=c[1];return o.a.createElement(U.a,{flex:"1",display:"flex",flexDirection:"column"},o.a.createElement(K.b,{to:"/",className:"back-btn"}),o.a.createElement(U.a,{display:"flex",flex:"1",flexDirection:"column",padding:"0 1rem",justifyContent:"flex-start"},o.a.createElement(q.a,{className:e.menu},o.a.createElement("span",{className:e.menuTitle},"Setting")),o.a.createElement("div",{className:e.line}),o.a.createElement(q.a,null,o.a.createElement(X.a,{htmlFor:"resolution"},"Resolution"),o.a.createElement(ue.a,{value:t.config.resolution,onChange:function(e){a.updateConfig({resolution:e.target.value})},inputProps:{name:"resolution",id:"resolution"}},o.a.createElement(de.a,{value:"480p"},"480p"),o.a.createElement(de.a,{value:"720p"},"720p"),o.a.createElement(de.a,{value:"1080p"},"1080p"))),o.a.createElement(q.a,null,o.a.createElement(X.a,{htmlFor:"codec"},"Video Codec"),o.a.createElement(ue.a,{value:t.codec,onChange:function(e){a.setCodec(e.target.value)},inputProps:{name:"codec",id:"codec"}},o.a.createElement(de.a,{value:"h264"},"h264"),o.a.createElement(de.a,{value:"vp8"},"vp8"))),o.a.createElement(q.a,null,o.a.createElement(X.a,{htmlFor:"camera"},"Camera"),o.a.createElement(ue.a,{value:t.config.cameraId,onChange:function(e){a.updateConfig({cameraId:e.target.value})},inputProps:{name:"camera",id:"camera"}},i.map((function(e,t){return o.a.createElement(de.a,{key:t,value:e.value},e.label)})))),o.a.createElement(q.a,null,o.a.createElement(X.a,{htmlFor:"Microphone"},"Microphone"),o.a.createElement(ue.a,{value:t.config.microphoneId,onChange:function(e){a.updateConfig({microphoneId:e.target.value})},inputProps:{name:"microphone",id:"microphone"}},l.map((function(e,t){return o.a.createElement(de.a,{key:t,value:e.value},e.label)})))),o.a.createElement(q.a,null,o.a.createElement(me.a,{control:o.a.createElement(ge,{checked:t.muteVideo,onChange:function(){a.setVideo(!t.muteVideo)},value:t.muteVideo,color:"primary"}),className:e.switchItem,label:"Video"}),o.a.createElement("div",{className:e.hr})),o.a.createElement(q.a,null,o.a.createElement(me.a,{control:o.a.createElement(ge,{checked:t.muteAudio,onChange:function(){a.setAudio(!t.muteAudio)},value:t.muteAudio,color:"primary"}),className:e.switchItem,label:"Audio"}),o.a.createElement("div",{className:e.hr})),o.a.createElement(q.a,null,o.a.createElement(me.a,{control:o.a.createElement(ge,{checked:t.profile,onChange:function(){a.setProfile(!t.profile)},value:t.profile,color:"primary"}),className:e.switchItem,label:"Profile"}),o.a.createElement("div",{className:e.hr}))))}var ve=Object(w.a)((function(e){return{fontStyle:{color:"#9ee2ff"},bottomStyle:{color:"#9ee2ff",position:"absolute",bottom:"20px",alignSelf:"center"},item:{flex:1,display:"flex",alignItems:"center"},coverLeft:{background:"linear-gradient(to bottom, #307AFF, 50%, #46cdff)",alignItems:"center",flex:1,display:"flex",flexDirection:"column",position:"relative"},coverContent:{display:"flex",justifyContent:"center",flexDirection:"column",color:"#fff"},coverRight:{position:"relative",flex:1,display:"flex",alignItems:"center",justifyContent:"center"},container:{display:"flex",justifyContent:"center",alignItems:"center"},card:{display:"flex",minWidth:700,minHeight:500,maxHeight:500,borderRadius:"10px",boxShadow:"0px 6px 18px 0px rgba(0,0,0,0.2)"},input:{maxWidth:"250px",minWidth:"250px",alignSelf:"center"},grid:{margin:"0 !important"},button:{height:"44px",width:"260px","&:hover":{backgroundColor:"#307AFF"},margin:e.spacing(1),marginTop:"33px",backgroundColor:"#44a2fc",borderRadius:"30px"}}}));function be(){var e=ve();return o.a.createElement(U.a,{display:"flex",alignItems:"center",justifyContent:"center"},o.a.createElement(H.a,{className:e.card},o.a.createElement(U.a,{display:"flex",flex:"1"},o.a.createElement("div",{className:e.coverLeft},o.a.createElement("div",{className:e.item},o.a.createElement("div",{className:"cover-image"})),o.a.createElement("div",{className:e.item},o.a.createElement("div",{className:e.coverContent},o.a.createElement(U.a,{textAlign:"center",fontSize:"h6.fontSize",className:e.fontStyle},"Welcome to"),o.a.createElement(U.a,{display:"flex",className:"text-container"},o.a.createElement(U.a,{textAlign:"center",fontWeight:"fontWeightRegular",fontSize:"h4.fontSize"},"LUMINAREE")),o.a.createElement(U.a,{textAlign:"center",fontWeight:"fontWeightRegular",className:e.bottomStyle,fontSize:"h7.fontSize"},"Online Class Room")))),o.a.createElement("div",{className:e.coverRight},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:oe}),o.a.createElement(i.a,{path:"/setting",component:he}))))))}var ye=Object(w.a)((function(){return{container:{height:"100%",width:"100%",minWidth:800,minHeight:600,boxSizing:"content-box",display:"flex",justifyContent:"center"}}})),Se=function(){var e=z(),t=M(),a=ye();return Object(n.useEffect)((function(){!0===e.loading&&t.stopLoading()}),[e.loading,t]),o.a.createElement($.a,{maxWidth:"sm",className:a.container},o.a.createElement(be,null))},Ee=a(170);function xe(e){var t=e.stream,a=e.domId,r=e.uid,c=Object(n.useState)(!1),i=Object(u.a)(c,2),l=i[0],s=i[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),f=d[0],p=d[1],g=Object(n.useState)({accessDelay:0,fps:0,resolution:0}),h=Object(u.a)(g,2),v=h[0],b=h[1],y=Object(n.useMemo)((function(){return v}),[v]);Object(n.useEffect)((function(){if(!t)return function(){};var a=setInterval((function(){t.getStats((function(t){var a=e.local?t.videoSendResolutionWidth:t.videoReceiveResolutionWidth,n=e.local?t.videoSendResolutionHeight:t.videoReceiveResolutionHeight,o=e.local?t.videoSendFrameRate:t.videoReceiveFrameRate;b({accessDelay:"".concat(t.accessDelay?t.accessDelay:0),resolution:"".concat(a,"x").concat(n),fps:"".concat(o||0)})}))}),500);return function(){clearInterval(a)}}),[t]);var S=o.a.useRef(!1);return Object(n.useEffect)((function(){if(t&&a&&!S.current&&!t.isPlaying())return S.current=!0,t.play(a,{fit:"cover"},(function(e){e&&"aborted"!==e.status&&(console.log("stream-player play failed ",a),p(!0)),S.current=!1})),function(){t.isPlaying()&&t.stop()}}),[t,a]),t?o.a.createElement("div",{style:e.style,className:"stream-player grid-player ".concat(e.main?"main-stream-player":""," ").concat(f?"autoplay":""),id:a,onClick:r?function(){f&&!l&&(t.resume(),s(!0))}:null,onDoubleClick:e.onDoubleClick?function(a){a.stopPropagation(),e.onDoubleClick(t)}:null},e.showProfile?o.a.createElement("div",{className:e.className?e.className:e.main?"main-stream-profile":""},o.a.createElement("span",null,"SD-RTN delay: ",y.accessDelay,"ms"),o.a.createElement("span",null,"Video: ",y.fps,"fps ",y.resolution)):null,e.showUid&&r?o.a.createElement("div",{className:"stream-uid"},"UID: ",r):null):o.a.createElement("div",{style:e.style,className:"stream-player cover-media grid-player ".concat(e.main?"main-stream-player":"")})}var je=a(87),Ce=Object(w.a)({menu:{height:"150px",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"10"},customBtn:{width:"50px",height:"50px",borderRadius:"26px",backgroundColor:"rgba(0, 0, 0, 0.4)",backgroundSize:"50px",cursor:"pointer"},leftAlign:{display:"flex",flex:"1",justifyContent:"space-evenly"},rightAlign:{display:"flex",flex:"1",justifyContent:"center"},menuContainer:{width:"100%",height:"100%",position:"absolute",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}),Oe=function(e){var t=1,a=1;return 0!=e&&(e<6?(a=e%3+1,e>2&&e<6&&(t=2)):(t=e<11?3:4,a=e<11?e%6+1:e%10)),"".concat(t," / ").concat(a)},ke=function(){var e=Ce(),t=ee(),a=z(),r=M(),c=Object(n.useMemo)((function(){var e=new se;return e._created||(e.createClient({codec:a.codec,mode:a.mode}),e._created=!0),e}),[a.codec,a.mode]),l=function(e){var t=z(),a=M(),o=[t.localStream,t.currentStream],r=o[0],c=o[1],i=Object(n.useMemo)((function(){return t.streams.filter((function(e){return e.getId()!==c.getId()}))}),[t,c]);return Object(n.useEffect)((function(){e&&!1===e._subscribed&&(e.on("connection-state-change",a.connectionStateChanged),e.on("stream-type-changed",(function(e){a.toastInfo("Uid: ".concat(e.uid," Stream Type Change to: ").concat(e.streamType))})),e.on("stream-fallback",(function(e){a.toastInfo("Uid: ".concat(e.uid," Stream Fallback type to: ").concat(e.attr))})),e.on("localStream-added",a.addLocal),e.on("stream-published",(function(e){a.addStream(e)})),e.on("stream-added",(function(t){var n=t.stream;e.subscribe(n,(function(e){a.toastError("stream ".concat(t.stream.getId()," subscribe failed: ").concat(e))}))})),e.on("stream-removed",a.removeStream),e.on("stream-subscribed",(function(t){console.log("stream subscribed",t.stream),e.setStreamFallbackOption(t.stream,2),a.addStream(t)})),e.on("peer-leave",a.removeStreamById),e._subscribed=!0)}),[e,a]),Object(n.useEffect)((function(){e&&!0===e._subscribed&&null!=c&&(e.setRemoteVideoStreamType(c,0),i.forEach((function(t){return e.setRemoteVideoStreamType(t,1)})))}),[e,c,i]),[r,c,i]}(c),s=Object(u.a)(l,2),m=s[0],d=s[1],f=Object(i.f)(),g=f.name,h=f.role,v=Object(n.useMemo)((function(){return{token:null,channel:g,microphoneId:a.config.microphoneId,cameraId:a.config.cameraId,resolution:a.config.resolution,muteVideo:a.muteVideo,muteAudio:a.muteAudio,uid:0,host:"host"===h}}),[a]),b=t.history;Object(n.useEffect)((function(){v.channel||b.push("/")}),[v.channel,b]),Object(n.useEffect)((function(){return function(){c&&c.leave().then((function(){return r.clearAllStream()}))}}),[c]),Object(n.useEffect)((function(){g&&c._created&&!1===c._joined&&(r.startLoading(),c.join(v).then((function(){v.host?c.setClientRole("host").then((function(){c.publish(),r.stopLoading()}),(function(e){r.toastError("setClientRole Failure: ".concat(e.info))})):c.setClientRole("audience").then((function(){r.stopLoading()}),(function(e){r.toastError("setClientRole Failure: ".concat(e.info))}))})).catch((function(e){r.toastError("Media ".concat(e.info)),t.history.push("/")})))}),[c,r,v,g,t]);var y=function(e){return function(t){switch(t.stopPropagation(),e){case"video":a.muteVideo?m.muteVideo():m.unmuteVideo(),r.setVideo(!a.muteVideo);break;case"audio":a.muteAudio?m.muteAudio():m.unmuteAudio(),r.setAudio(!a.muteAudio);break;default:throw new Error("Unknown click handler, name: ".concat(e))}}},S=function(e){r.setCurrentStream(e)},E=Object(n.useMemo)((function(){return[a.streams.filter((function(e){return e.getId()!==d.getId()})),Array.from(new Array(16),(function(){return null}))]}),[d,a]),x=Object(u.a)(E,2),j=x[0],C=x[1];return a.loading?null:o.a.createElement("div",{className:"meeting"},o.a.createElement("div",{className:"current-view"},o.a.createElement("div",{className:"nav"},o.a.createElement("div",null),o.a.createElement("div",{className:"quit",onClick:function(){c.leave().then((function(){r.clearAllStream(),t.history.push("/")}))}})),d?o.a.createElement("div",{className:e.menuContainer},v.host&&o.a.createElement("div",{className:e.menu},o.a.createElement(Ee.a,{title:a.muteVideo?"mute-video":"unmute-video"},o.a.createElement("i",{onClick:y("video"),className:Object(p.a)(e.customBtn,"margin-right-19",a.muteVideo?"mute-video":"unmute-video")})),o.a.createElement(Ee.a,{title:a.muteAudio?"mute-audio":"unmute-audio"},o.a.createElement("i",{onClick:y("audio"),className:Object(p.a)(e.customBtn,"margin-right-19",a.muteAudio?"mute-audio":"unmute-audio")})),o.a.createElement(Ee.a,{title:"share audience link"},o.a.createElement(je.CopyToClipboard,{className:Object(p.a)(e.customBtn,"share-link"),onCopy:function(){r.toastSuccess("Copy Success")},text:window.location.toString().replace(/\w+$/,"audience")},o.a.createElement("span",null))))):null,o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"grid-layout position-related"},C.map((function(e,t){return o.a.createElement(xe,{style:{gridArea:Oe(t)},className:"stream-profile",showProfile:a.profile,local:!1,key:t,stream:null,uid:null,showUid:!1})}))),o.a.createElement("div",{className:"grid-layout z-index-5"},a.currentStream?o.a.createElement(xe,{key:a.currentStream.getId(),main:!0,showProfile:a.profile,local:!(!v.host||!a.currentStream)&&a.currentStream.getId()===m.getId(),stream:a.currentStream,onDoubleClick:S,uid:a.currentStream.getId(),showUid:!0,domId:"stream-player-".concat(a.currentStream.getId())}):o.a.createElement(xe,{main:!0,showProfile:a.profile,local:!1,stream:null,onDoubleClick:S,uid:0,showUid:!0,domId:"default"}),j.map((function(e,t){return o.a.createElement(xe,{style:{gridArea:Oe(t)},className:"stream-profile",showProfile:a.profile,local:!!v.host&&e.getId()===m.getId(),key:t+""+e.getId(),stream:e,uid:e.getId(),domId:"stream-player-".concat(e.getId()),onDoubleClick:S,showUid:!0})}))))))};var Ie=function(){return o.a.createElement(Y,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/meeting/:name/:role",component:ke}),o.a.createElement(i.a,{path:"/",component:Se})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=a(166),Ne=a(89),we=Object(Ne.a)({typography:{fontFamily:'-apple-system, BlinkMacSystemFont, \\"Segoe UI\\", \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,color:"#333"},overrides:{MuiFormControl:{root:{margin:"0.3rem 0"}},MuiInput:{underline:{"&:before":{borderBottom:"1px solid #EAEAEA"},"&:hover:not($disabled):not($focused):not($error):before":{borderBottom:"2px solid #EAEAEA"},"&$focused":{"&:after":{borderBottom:"2px solid #44a2fc"}}}}}});c.a.render(o.a.createElement(_e.a,{theme:we},o.a.createElement(W,null,o.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]]);
//# sourceMappingURL=main.3292ff5e.chunk.js.map