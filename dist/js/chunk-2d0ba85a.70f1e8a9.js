(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba85a"],{3821:function(e,t,c){"use strict";c.r(t);var l=c("7a23");const o={key:0,class:"container mt-5"},s={class:"row"},a={class:"coloum"},i={class:"card mx-auto shadow-lg"},b=Object(l["g"])("h1",{class:"card-header"}," Job Details ",-1),n={class:"card-body"},r={class:"row mb-3"},d=Object(l["g"])("label",{for:"title",class:"col-sm-2 col-form-label"},"Title",-1),g={class:"col-sm-10"},j={class:"row mb-3"},m=Object(l["g"])("label",{for:"openings",class:"col-sm-2 col-form-label"},"Openings",-1),p={class:"col-sm-10"},O={class:"row mb-3"},u=Object(l["g"])("label",{for:"disciption",class:"col-sm-2 col-form-label"},"Discription",-1),f={class:"col-sm-10"},v={class:"row mb-3"},h=Object(l["g"])("label",{for:"cb",class:"col-sm-2 col-form-label"},"Createdby Id",-1),y={class:"col-sm-10"},w={class:"my-2"},I=Object(l["g"])("button",{type:"Submit",class:"btn btn-primary btn-block mb-4",value:"Register"},"Add",-1),U={key:1,class:"text-center my-4"},k=Object(l["g"])("h1",null,"Only Admin and HR Access",-1),D=[k];function x(e,t,c,k,x,J){return"ADMIN"==e.loggedInUser.role_id||"HR"==e.loggedInUser.role_id?(Object(l["r"])(),Object(l["f"])("div",o,[Object(l["g"])("div",s,[Object(l["g"])("div",a,[Object(l["g"])("div",i,[b,Object(l["g"])("div",n,[Object(l["g"])("form",{class:"mt-3",onSubmit:t[3]||(t[3]=Object(l["G"])((...e)=>J.addDetails&&J.addDetails(...e),["prevent"]))},[Object(l["g"])("div",r,[d,Object(l["g"])("div",g,[Object(l["F"])(Object(l["g"])("input",{placeholder:"Enter Job Title","onUpdate:modelValue":t[0]||(t[0]=t=>e.job.title=t),type:"text",class:"form-control",id:"title"},null,512),[[l["C"],e.job.title]])])]),Object(l["g"])("div",j,[m,Object(l["g"])("div",p,[Object(l["F"])(Object(l["g"])("input",{placeholder:"Enter no of openings ","onUpdate:modelValue":t[1]||(t[1]=t=>e.job.openings=t),type:"number",class:"form-control",id:"openings"},null,512),[[l["C"],e.job.openings]])])]),Object(l["g"])("div",O,[u,Object(l["g"])("div",f,[Object(l["F"])(Object(l["g"])("textarea",{placeholder:"Job Discription","onUpdate:modelValue":t[2]||(t[2]=t=>e.job.discription=t),type:"text",class:"form-control",rows:"2",id:"disciption"},null,512),[[l["C"],e.job.discription]])])]),Object(l["g"])("div",v,[h,Object(l["g"])("div",y,[Object(l["g"])("label",w,Object(l["y"])(e.loggedInUser.name)+" => "+Object(l["y"])(e.loggedInUser._id),1)])]),I],32)])])])])])):(Object(l["r"])(),Object(l["f"])("div",U,D))}var J=c("5502"),A={computed:{...Object(J["c"])(["loggedInUser"])},data:function(){return{job:{title:"",openings:"",discription:""}}},methods:{async addDetails(){try{let e=await this.$http.post("job/register",this.job,{headers:{"auth-token":localStorage.getItem("jwt")}});null!=e&&(this.job={})}catch(e){console.log(e.response)}}}},C=c("6b0d"),F=c.n(C);const R=F()(A,[["render",x]]);t["default"]=R}}]);
//# sourceMappingURL=chunk-2d0ba85a.70f1e8a9.js.map