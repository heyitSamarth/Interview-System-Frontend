(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2073d4"],{a04c:function(t,e,i){"use strict";i.r(e);var s=i("7a23");const a={key:0,class:"container mt-5"},c={class:"row"},l={class:"coloum"},n={class:"card mx-auto shadow-lg"},r=Object(s["g"])("h1",{class:"card-header"}," Interview Details ",-1),o={class:"card-body"},d={class:"input-group mb-3"},u=Object(s["g"])("label",{class:"input-group-text",for:"inputGroupSelect01"},"application Id",-1),p=["value"],b={class:"input-group mb-3"},g=Object(s["g"])("label",{class:"input-group-text",for:"inputGroupSelect02"},"Interviewer Id",-1),j=["value"],h={class:"input-group mb-3"},O=Object(s["g"])("span",{class:"input-group-text"},"Level",-1),v={class:"input-group mb-3"},m=Object(s["g"])("span",{class:"input-group-text"},"Date",-1),w={class:"input-group mb-3"},y=Object(s["g"])("span",{class:"input-group-text"},"Time",-1),_=Object(s["g"])("button",{type:"Submit",class:"btn btn-primary btn-block mb-4",value:"Register"},"Add",-1),f={key:1,class:"text-center my-4"},D=Object(s["g"])("h1",null,"Only Admin and HR Access",-1),I=[D];function U(t,e,i,D,U,k){return"ADMIN"==t.loggedInUser.role_id||"HR"==t.loggedInUser.role_id?(Object(s["r"])(),Object(s["f"])("div",a,[Object(s["g"])("div",c,[Object(s["g"])("div",l,[Object(s["g"])("div",n,[r,Object(s["g"])("div",o,[Object(s["g"])("form",{class:"mt-3",onSubmit:e[5]||(e[5]=Object(s["G"])((...t)=>k.addDetails&&k.addDetails(...t),["prevent"]))},[Object(s["g"])("div",d,[u,Object(s["F"])(Object(s["g"])("select",{class:"form-select","onUpdate:modelValue":e[0]||(e[0]=t=>U.interview.application_id=t),id:"inputGroupSelect01"},[(Object(s["r"])(!0),Object(s["f"])(s["a"],null,Object(s["v"])(this.applications,t=>(Object(s["r"])(),Object(s["f"])("option",{value:t._id,key:t._id},Object(s["y"])(k.name(t.candidate_id))+" for role ( "+Object(s["y"])(k.title(t.job_id))+" ) => "+Object(s["y"])(t._id),9,p))),128))],512),[[s["B"],U.interview.application_id]])]),Object(s["g"])("div",b,[g,Object(s["F"])(Object(s["g"])("select",{class:"form-select","onUpdate:modelValue":e[1]||(e[1]=t=>U.interview.interviewer_id=t),id:"inputGroupSelect02"},[(Object(s["r"])(!0),Object(s["f"])(s["a"],null,Object(s["v"])(this.users,t=>(Object(s["r"])(),Object(s["f"])("option",{value:t._id,key:t._id},Object(s["y"])(t.name)+" -> "+Object(s["y"])(t._id)+" role( "+Object(s["y"])(t.role_id)+" )",9,j))),128))],512),[[s["B"],U.interview.interviewer_id]])]),Object(s["g"])("div",h,[O,Object(s["F"])(Object(s["g"])("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>U.interview.level=t),class:"form-control"},null,512),[[s["C"],U.interview.level]])]),Object(s["g"])("div",v,[m,Object(s["F"])(Object(s["g"])("input",{type:"date",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>U.interview.interview_date=t)},null,512),[[s["C"],U.interview.interview_date]])]),Object(s["g"])("div",w,[y,Object(s["F"])(Object(s["g"])("input",{type:"time",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=t=>U.interview.interview_time=t)},null,512),[[s["C"],U.interview.interview_time]])]),_],32)])])])])])):(Object(s["r"])(),Object(s["f"])("div",f,I))}i("14d9");var k=i("5502"),$={computed:{...Object(k["c"])(["loggedInUser"])},data(){return{candidates:{},jobs:{},users:{},applications:{},interview:{}}},methods:{async addDetails(){try{let t=await this.$http.post("interview/register",this.interview,{headers:{"auth-token":localStorage.getItem("jwt")}});null!=t&&(this.interview={})}catch(t){console.log(t.response)}},async getDetails(){try{let t=await this.$http.get("application/get");this.applications=t.data,null==this.applications&&this.$router.push("/adda")}catch(t){console.log(t.response)}},async getDetails1(){try{let t=await this.$http.get("candidate/get");this.candidates=t.data,null==this.candidates&&this.$router.push("/addc")}catch(t){console.log(t.response)}},async getDetails2(){try{let t=await this.$http.get("job/get");this.jobs=t.data,null==this.jobs&&this.$router.push("/addj")}catch(t){console.log(t.response)}},async getDetails3(){try{let t=await this.$http.get("user/getall");this.users=t.data,null==this.users&&this.$router.push("/addu")}catch(t){console.log(t.response)}},name(t){var e;for(e in this.candidates)if(this.candidates[e]._id===t)return this.candidates[e].name;return null},title(t){var e;for(e in this.jobs)if(this.jobs[e]._id===t)return this.jobs[e].title;return null}},created(){"ADMIN"!=this.loggedInUser.role_id&&"HR"!=this.loggedInUser.role_id||(this.getDetails(),this.getDetails1(),this.getDetails2(),this.getDetails3())}},x=i("6b0d"),S=i.n(x);const A=S()($,[["render",U]]);e["default"]=A}}]);
//# sourceMappingURL=chunk-2d2073d4.d2880597.js.map