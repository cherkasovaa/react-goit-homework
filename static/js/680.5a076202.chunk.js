"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{5425:function(n,t,e){e.d(t,{Jh:function(){return d},Pg:function(){return u},Rw:function(){return f},XT:function(){return i},_r:function(){return l}});var r=e(2388),c="29cf81a599ffabad205843cb29ab1462",o="https://api.themoviedb.org/3",a=function(n){return r.Z.get(n).then((function(n){return n.data})).catch((function(n){return console.log(n)}))},i=function(n){var t="".concat(o,"/search/movie?api_key=").concat(c,"&query=").concat(n);return a(t)},u=function(n){var t="".concat(o,"/movie/").concat(n,"?api_key=").concat(c);return a(t)},f=function(){var n="".concat(o,"/trending/all/day?api_key=").concat(c);return a(n)},d=function(n){var t="".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(c);return a(t)},l=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=").concat(t);return a(e)}},763:function(n,t,e){e.d(t,{J:function(){return u}});var r,c=e(168),o=(e(2791),e(6444)),a=e(184),i=o.ZP.p(r||(r=(0,c.Z)(["\n  font-size: 1.1rem;\n"]))),u=function(n){var t=n.children;return(0,a.jsx)(i,{children:t})}},2680:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,c,o,a=e(885),i=e(2791),u=e(7689),f=e(5425),d=e(168),l=e(6444),h=l.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),s=l.ZP.li(c||(c=(0,d.Z)(["\n  max-width: 600px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #fff;\n  color: #000;\n  padding: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n  overflow: hidden;\n"]))),p=l.ZP.p(o||(o=(0,d.Z)(["\n  font-weight: bold;\n"]))),v=e(763),g=e(184),m=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],c=(0,u.UO)().id;return(0,i.useEffect)((function(){(0,f._r)(Number(c)).then((function(n){return r(n.results)}))}),[c]),e.length<=0?(0,g.jsx)(v.J,{children:"We don't have any reviews for this movie."}):(0,g.jsx)(h,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,g.jsxs)(s,{children:[(0,g.jsx)(p,{children:e}),(0,g.jsx)("p",{children:r})]},t)}))})}}}]);
//# sourceMappingURL=680.5a076202.chunk.js.map