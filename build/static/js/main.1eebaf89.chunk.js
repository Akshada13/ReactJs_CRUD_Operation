(this.webpackJsonpcrud_operation_task=this.webpackJsonpcrud_operation_task||[]).push([[0],{49:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),c=n(19),a=n.n(c),i=n(20),o=n(8),d=n(2),u=n.n(d),l=n(9),j=n(4),b=n(21),h=n(22),p=n(24),x=n(23),O=n(5),v=n.n(O),f=n(0),m="https://jsonplaceholder.typicode.com/posts",g=function(t){Object(p.a)(n,t);var e=Object(x.a)(n);function n(t){var r;return Object(b.a)(this,n),(r=e.call(this,t)).createPost=Object(j.a)(u.a.mark((function t(){var e,n,s,c,a,i,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=r.state,n=e.userId,s=e.title,c=e.body,t.next=4,v.a.post(m,{userId:n,title:s,body:c});case 4:a=t.sent,i=a.data,(o=Object(l.a)(r.state.posts)).push(i),r.setState({posts:o,userId:"",title:"",body:""}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Error creating data from server",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),r.getPosts=Object(j.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get(m);case 3:e=t.sent,n=e.data,r.setState({posts:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error fetching data from server",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),r.updatePost=Object(j.a)(u.a.mark((function t(){var e,n,s,c,a,i,o,d,j;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=r.state,n=e.id,s=e.userId,c=e.title,a=e.body,t.next=4,v.a.put("".concat(m,"/").concat(n),{userId:s,title:c,body:a});case 4:i=t.sent,o=i.data,d=Object(l.a)(r.state.posts),j=d.findIndex((function(t){return t.id===n})),d[j]=o,r.setState({posts:d,id:"",userId:"",title:"",body:""}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("Error updating  data from server",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),r.deletePost=function(){var t=Object(j.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("".concat(m,"/").concat(e));case 3:n=(n=Object(l.a)(r.state.posts)).filter((function(t){return t.id!==e})),r.setState({posts:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error deleting  data from server",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),r.handleSubmit=function(t){t.preventDefault(),r.state.id?r.updatePost():r.createPost()},r.handleChange=function(t){var e=t.target,n=e.name,s=e.value;r.setState(Object(o.a)({},n,s))},r.componentDidMount=function(){return r.getPosts()},r.state={posts:[],id:"",userId:"",body:"",title:""},r}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Post App"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"User Id : "}),Object(f.jsx)("input",{name:"userId",type:"text",value:this.state.userId,onChange:this.handleChange,required:!0})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Title : "}),Object(f.jsx)("input",{name:"title",type:"text",value:this.state.title,onChange:this.handleChange,required:!0})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Body : "}),Object(f.jsx)("input",{name:"body",type:"text",value:this.state.body,onChange:this.handleChange,required:!0})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"Submit"})})]}),Object(f.jsxs)("table",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"User Id"}),Object(f.jsx)("th",{children:"Post Id"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Body"}),Object(f.jsx)("th",{children:"Action"})]}),this.state.posts.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.userId}),Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("td",{children:e.title}),Object(f.jsx)("td",{children:e.body}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{onClick:function(){return t.setState(Object(i.a)({},e))},children:"Update"})}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{onClick:function(){return t.deletePost(e.id)},children:"Delete"})})]})}))]})]})}}]),n}(s.a.Component),y=g;a.a.render(Object(f.jsx)(y,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1eebaf89.chunk.js.map