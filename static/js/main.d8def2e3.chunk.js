(this.webpackJsonpsmithton7330=this.webpackJsonpsmithton7330||[]).push([[0],{13:function(t,e,i){},18:function(t,e,i){"use strict";i.r(e);var s=i(1),a=i(8),n=i.n(a),r=(i(13),i(2)),c=i(3),o=i(6),l=i(5),p=(i.p,i(0));function j(){return Object(p.jsxs)("div",{class:"loader",children:[Object(p.jsx)("span",{class:"stroke"}),Object(p.jsx)("span",{class:"stroke"}),Object(p.jsx)("span",{class:"stroke"}),Object(p.jsx)("span",{class:"stroke"}),Object(p.jsx)("span",{class:"stroke"}),Object(p.jsx)("span",{class:"stroke"}),Object(p.jsx)("span",{class:"stroke"})]})}var m=i(4),b=i.n(m),d=i.p+"static/media/mightyLove.23c9b17e.mp3";function u(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{marginBottom:"80px",fontSize:"64px",marginLeft:"10px",textAlign:"center"},children:"Hello React !"}),Object(p.jsx)(b.a,{src:d,autoPlay:!0,controls:!0,style:{width:"10%",opacity:.01}}),Object(p.jsx)(j,{}),Object(p.jsx)("button",{style:{marginBottom:"20px",color:"black",width:"100px",fontSize:"16px",marginLeft:"174px",textAlign:"center"},onClick:function(){t.movePage()},children:"Music List"})]})}i.p;var h=function(t){Object(o.a)(i,t);var e=Object(l.a)(i);function i(t){var s;return Object(r.a)(this,i),(s=e.call(this,t)).state={isMusicPlaying:!1},s}return Object(c.a)(i,[{key:"render",value:function(){var t=this,e=new Audio(this.props.mp3Url);return Object(p.jsx)("div",{style:{width:"300px",display:"flex",justifyContent:"center"},children:Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column"},children:[Object(p.jsx)("div",{style:{width:"250px",display:"flex",justifyContent:"center"},onClick:function(){return function(){var i=t.state.isMusicPlaying;t.setState({isMusicPlaying:!i}),0==e.paused?t.audio.pause():1==e.paused&&e.play()}()},children:Object(p.jsx)("img",{src:this.props.imgUrl,alt:this.props.title})}),Object(p.jsxs)("div",{style:{textAlign:"center",marginTop:"10px",marginBottom:"10px"},children:[Object(p.jsx)("h5",{children:this.props.title}),Object(p.jsx)("h6",{children:this.props.artist})]}),Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)(b.a,{src:this.props.mp3Url,controls:!0,style:{width:"75%"}})})]})})}}]),i}(s.Component),x=[{title:"Rapster",artist:"Polo G",imgUrl:"https://charts-static.billboard.com/img/2021/04/polo-g-9l1-rapstar-pz6-155x155.jpg",mp3Url:"/static/media/rapster.132afbd7.mp3"},{title:"Leave The Door Open",artist:"Silk Sonic (Bruno Mars & Anderson .Paak)",imgUrl:"https://charts-static.billboard.com/img/2021/03/bruno-mars-c75-leave-the-door-open-fy0-155x155.jpg",mp3Url:"/static/media/leave-the-open-door.988226c2.mp3"},{title:"Peaches",artist:"Justin Bieber Feat. Daniel Caesar Giveon",imgUrl:"https://charts-static.billboard.com/img/2021/03/justin-bieber-f8k-peaches-zld-155x155.jpg",mp3Url:"/static/media/peaches.8d6e40eb.mp3"},{title:"Montero (Call Me By Your Name)",artist:"Lil Nas X",imgUrl:"https://charts-static.billboard.com/img/2021/04/lil-nas-x-n94-montero-call-me-by-your-name-4si-155x155.jpg",mp3Url:"/static/media/montero.4a581b4b.mp3"},{title:"Levitating",artist:"Dua Lipa Featuring DaBaby",imgUrl:"https://charts-static.billboard.com/img/2020/08/dua-lipa-eqf-levitating-lmv-155x155.jpg",mp3Url:"/static/media/levitating.11f3bcde.mp3"}];function g(t){var e=x.map((function(t){return Object(p.jsx)(h,{imgUrl:t.imgUrl,title:t.title,artist:t.artist,mp3Url:t.mp3Url})}));return Object(p.jsxs)("div",{className:"musicList-container",children:[Object(p.jsx)("button",{style:{marginBottom:"20px",color:"black",width:"100px",fontSize:"16px"},onClick:function(){t.movePage()},children:"Intro"}),Object(p.jsx)("h1",{children:"MusicList"}),Object(p.jsx)("div",{className:"item-container",children:e})]})}var v=function(t){Object(o.a)(i,t);var e=Object(l.a)(i);function i(t){var s;return Object(r.a)(this,i),(s=e.call(this,t)).movePage=function(){var t=s.state.isIntro;s.setState({isIntro:!t})},s.state={isIntro:!0},s}return Object(c.a)(i,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"container",children:this.state.isIntro?Object(p.jsx)(u,{movePage:this.movePage}):Object(p.jsx)(g,{movePage:this.movePage})})}}]),i}(s.Component),O=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(e){var i=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,r=e.getTTFB;i(t),s(t),a(t),n(t),r(t)}))};n.a.render(Object(p.jsx)(v,{}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.d8def2e3.chunk.js.map