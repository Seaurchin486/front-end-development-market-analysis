import{_ as i,u as p,a as u,r as d,o as m,c as f,b as k,e as s,n as g,f as v}from"./index.40fff337.js";const y={class:"content"},h={__name:"PopularSkill",props:{date:{type:String,require:!0}},setup(a){const n=a,r=p(),l=u();let t=r.state.data[l.params.city][n.date].skills,o={data:t.slice(0,30).map(e=>({name:e[0],value:e[1]})),rowNum:t.slice(0,30).length},c=d({width:window.innerWidth*.8+"px",height:35*o.rowNum+"px"});return(e,S)=>{const _=v("dv-scroll-ranking-board");return m(),f("div",y,[k(_,{config:s(o),style:g(s(c))},null,8,["config","style"])])}}},w=i(h,[["__scopeId","data-v-8eeee64e"]]);export{w as default};
