(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(3),l=t.n(s),i=t(4),c=t.n(i);var m=function(){return n.a.createElement("div",{className:"jumbotron-fluid"},n.a.createElement("h1",{className:"display-5 p-3"},"Employee Directory"),n.a.createElement("img",{className:"front-img mb-4",src:c.a,alt:"img not found"}))},o=t(5),u=t(6),d=t(1),f=t(8),h=t(7),p=[{id:1,firstname:"John",lastname:"Smith",career:"Manager"},{id:2,firstname:"Mark",lastname:"Otto",career:"Salesperson"},{id:3,firstname:"Jaine",lastname:"Rose",career:"Overnight Stocker"},{id:4,firstname:"Santos",lastname:"Bryant",career:"Customer Service Representative"},{id:5,firstname:"Simeon",lastname:"Sea",career:"Warehouse Worker"},{id:6,firstname:"Amani",lastname:"Flores",career:"Mechanic"},{id:7,firstname:"Matilda",lastname:"Friedman",career:"Overnight Stocker"},{id:8,firstname:"Aylin",lastname:"Wong",career:"Security Gaurd"},{id:9,firstname:"Chris",lastname:"Redfield",career:"Warehouse Worker"},{id:10,firstname:"Ellie",lastname:"Conway",career:"Salesperson"},{id:11,firstname:"Christian",lastname:"Chase",career:"Assistant Manager"},{id:12,firstname:"Jenna",lastname:"Brennan",career:"Customer Service Representative"},{id:13,firstname:"Emery",lastname:"Keith",career:"Truck Driver"},{id:14,firstname:"Carlos",lastname:"Arellano",career:"Overnight Stocker"},{id:15,firstname:"Jordon",lastname:"Nichols",career:"Assistant Manager"},{id:16,firstname:"Damaris",lastname:"French",career:"Warehouse Worker"},{id:17,firstname:"Felix",lastname:"Hart",career:"Truck Driver"},{id:18,firstname:"Paula",lastname:"Moreno",career:"Salesperson"},{id:19,firstname:"Alfredo",lastname:"Stephens",career:"Warehouse Worker"},{id:20,firstname:"April",lastname:"Garrison",career:"Customr Service Representative"}];var E=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={employees:p,search:""},r.handleClick=r.handleClick.bind(Object(d.a)(r)),r}return Object(u.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState({search:e.target.value})}},{key:"render",value:function(){var e=this.state,a=e.search,t=e.employees;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col mb-3"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:this.handleClick,placeholder:"Enter Employee Information To Sort Table"})),n.a.createElement("table",{className:"table"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"First"),n.a.createElement("th",{scope:"col"},"Last"),n.a.createElement("th",{scope:"col"},"Career"))),t.filter(function(e){return function(a){return a.firstname.toLowerCase().includes(e.toLowerCase())||a.lastname.toLowerCase().includes(e.toLowerCase())||a.career.toLowerCase().includes(e.toLowerCase())||!e}}(this.state.search)).map((function(e){return n.a.createElement("tbody",null,n.a.createElement("tr",{key:e.id},n.a.createElement("th",{scope:"row"},e.id),n.a.createElement("td",null,e.firstname),n.a.createElement("td",null,e.lastname),n.a.createElement("td",null,e.career)))}))))))}}]),t}(n.a.Component);var v=function(){return n.a.createElement("div",{className:"footy"})};var k=function(){return n.a.createElement("div",null,n.a.createElement(m,null),n.a.createElement(E,null),n.a.createElement(v,null))};var y=function(){return n.a.createElement(k,null)};t(14);l.a.render(n.a.createElement(y,null),document.getElementById("root"))},4:function(e,a,t){e.exports=t.p+"static/media/sky.06a5c8af.jpg"},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f202cb08.chunk.js.map