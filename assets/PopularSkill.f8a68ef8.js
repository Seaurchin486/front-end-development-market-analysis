import{en as _,eo as i,eq as p,er as d,es as u,et as m,ew as n,ey as k,ex as f}from"./index.f312c705.js";const g={class:"content"},y={__name:"PopularSkill",props:{date:{type:String,require:!0}},setup(a){const r=a,t=i();let s=t.state.data[t.state.currentCity][r.date].skills,o={data:s.slice(0,30).map(e=>({name:e[0],value:e[1]})),rowNum:s.slice(0,30).length},l=p({width:window.innerWidth*.8+"px",height:35*o.rowNum+"px"});return(e,v)=>{const c=f("dv-scroll-ranking-board");return d(),u("div",g,[m(c,{config:n(o),style:k(n(l))},null,8,["config","style"])])}}},x=_(y,[["__scopeId","data-v-38597e03"]]);export{x as default};
