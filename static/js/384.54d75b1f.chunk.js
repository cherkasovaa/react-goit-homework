"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[384],{5425:function(n,t,e){e.d(t,{Jh:function(){return p},Pg:function(){return u},Rw:function(){return s},XT:function(){return c},_r:function(){return f}});var r=e(2388),o="29cf81a599ffabad205843cb29ab1462",i="https://api.themoviedb.org/3",a=function(n){return r.Z.get(n).then((function(n){return n.data})).catch((function(n){return console.log(n)}))},c=function(n){var t="".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n);return a(t)},u=function(n){var t="".concat(i,"/movie/").concat(n,"?api_key=").concat(o);return a(t)},s=function(){var n="".concat(i,"/trending/all/day?api_key=").concat(o);return a(n)},p=function(n){var t="".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o);return a(t)},f=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(t);return a(e)}},7384:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,o,i,a,c=e(885),u=e(2791),s=e(6731),p=e(5425),f=e(1386),l=e(168),d=e(6444),h=d.ZP.form(r||(r=(0,l.Z)(["\n  position: relative;\n"]))),b=d.ZP.input(o||(o=(0,l.Z)(["\n  font-size: 16px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 46px;\n  line-height: 46px;\n  padding: 10px 20px;\n  border-radius: 30px;\n  border: none;\n  outline: none;\n"]))),g=d.ZP.button(i||(i=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  right: -1px;\n  font-size: 16px;\n  height: 46px;\n  padding: 10px 26px;\n  background: linear-gradient(\n    to right,\n    rgba(0, 231, 57, 1) 0%,\n    rgba(0, 20, 221, 1) 100%\n  );\n  color: inherit;\n  border: 0;\n  border-radius: 30px;\n  outline: 0;\n  transition: 0.3s;\n  cursor: pointer;\n\n  &:hover {\n    color: black;\n  }\n"]))),x=e(184),v=function(n){var t=n.onSubmit,e=(0,u.useState)(""),r=(0,c.Z)(e,2),o=r[0],i=r[1];return(0,x.jsxs)(h,{onSubmit:function(n){return n.preventDefault(),t(o)},children:[(0,x.jsx)(b,{type:"text",autoComplete:"off",placeholder:"Search movies",value:o,onChange:function(n){return i(n.target.value)}}),(0,x.jsx)(g,{type:"submit",children:"Search"})]})};v.defaultProptypes={onSubmit:function(){}};var m=d.ZP.main(a||(a=(0,l.Z)(["\n  max-width: 80%;\n  margin: 0 auto;\n  padding: 30px 0;\n"]))),k=(0,u.lazy)((function(){return e.e(55).then(e.bind(e,2055))})),y=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],o=(0,u.useState)(""),i=(0,c.Z)(o,2),a=i[0],l=i[1],d=(0,s.lr)(),h=(0,c.Z)(d,2),b=h[0],g=h[1],y=b.get("query");(0,u.useEffect)((function(){(a||y)&&(0,p.XT)(a||y).then((function(n){return r(n.results)}))}),[a,y]);return(0,x.jsxs)(m,{children:[(0,x.jsx)(v,{onSubmit:function(n){l(n),g({query:n}),n||(b.delete("query"),g(b),r([]))}}),(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)(f.a,{}),children:(0,x.jsx)(k,{list:e})})]})}}}]);
//# sourceMappingURL=384.54d75b1f.chunk.js.map