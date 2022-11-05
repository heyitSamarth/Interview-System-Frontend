(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d65da"],{"71f0":function(e,t,a){"use strict";a.r(t);var l=a("7a23");const c={key:0,class:"container mt-5"},s={class:"row"},o={class:"coloum"},i={class:"card mx-auto shadow-lg"},d=Object(l["h"])("h1",{class:"card-header"}," Application Details ",-1),n={class:"card-body"},p={class:"input-group mb-3"},r=Object(l["h"])("label",{class:"input-group-text",for:"inputGroupSelect01"},"Job Id",-1),b=["value"],u={class:"input-group mb-3"},h=Object(l["h"])("label",{class:"input-group-text",for:"inputGroupSelect02"},"Candidate Id",-1),j=["value"],O={class:"input-group mb-3"},f=Object(l["h"])("span",{class:"input-group-text"},"Expected Salary",-1),m=Object(l["h"])("span",{class:"input-group-text"},"INR",-1),g={class:"input-group mb-3"},_=Object(l["h"])("span",{class:"input-group-text"},"Actual Salary",-1),y=Object(l["h"])("span",{class:"input-group-text"},"INR",-1),v={class:"row mb-3"},D=Object(l["h"])("label",{for:"rl",class:"col-sm-2 col-form-label"},"Is Job Offered",-1),x={class:"col-sm-10"},k={class:"form-check"},w=Object(l["h"])("label",{class:"form-check-label",for:"flexRadioDefault2"}," No ",-1),I={class:"form-check"},A=Object(l["h"])("label",{class:"form-check-label",for:"flexRadioDefault1"}," Yes ",-1),R=Object(l["h"])("button",{type:"Submit",class:"btn btn-primary btn-block mb-4",value:"Register"},"Add",-1),U={key:1,class:"text-center my-4"},H=Object(l["h"])("h1",null,"Only Admin and HR Access",-1),S=[H];function N(e,t,a,H,N,V){return"ADMIN"==e.loggedInUser.role_id||"HR"==e.loggedInUser.role_id?(Object(l["s"])(),Object(l["g"])("div",c,[Object(l["h"])("div",s,[Object(l["h"])("div",o,[Object(l["h"])("div",i,[d,Object(l["h"])("div",n,[Object(l["h"])("form",{class:"mt-3",onSubmit:t[6]||(t[6]=Object(l["I"])((...e)=>V.addDetails&&V.addDetails(...e),["prevent"]))},[Object(l["h"])("div",p,[r,Object(l["H"])(Object(l["h"])("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=e=>N.application.job_id=e),id:"inputGroupSelect01"},[(Object(l["s"])(!0),Object(l["g"])(l["a"],null,Object(l["w"])(this.jobs,e=>(Object(l["s"])(),Object(l["g"])("option",{value:e._id,key:e._id},Object(l["A"])(e.title)+" -> "+Object(l["A"])(e._id),9,b))),128))],512),[[l["D"],N.application.job_id]])]),Object(l["h"])("div",u,[h,Object(l["H"])(Object(l["h"])("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=e=>N.application.candidate_id=e),id:"inputGroupSelect02"},[(Object(l["s"])(!0),Object(l["g"])(l["a"],null,Object(l["w"])(this.candidates,e=>(Object(l["s"])(),Object(l["g"])("option",{value:e._id,key:e._id},Object(l["A"])(e.name)+" -> "+Object(l["A"])(e._id),9,j))),128))],512),[[l["D"],N.application.candidate_id]])]),Object(l["h"])("div",O,[f,Object(l["H"])(Object(l["h"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>N.application.expected_salary=e),class:"form-control","aria-label":"Amount (to the nearest dollar)"},null,512),[[l["E"],N.application.expected_salary]]),m]),Object(l["h"])("div",g,[_,Object(l["H"])(Object(l["h"])("input",{type:"number",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>N.application.actual_salary=e),"aria-label":"Amount (to the nearest dollar)"},null,512),[[l["E"],N.application.actual_salary]]),y]),Object(l["h"])("div",v,[D,Object(l["h"])("div",x,[Object(l["h"])("div",k,[Object(l["H"])(Object(l["h"])("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",value:"No","onUpdate:modelValue":t[4]||(t[4]=e=>N.application.is_job_offered=e),id:"flexRadioDefault2",checked:""},null,512),[[l["C"],N.application.is_job_offered]]),w]),Object(l["h"])("div",I,[Object(l["H"])(Object(l["h"])("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",value:"Yes","onUpdate:modelValue":t[5]||(t[5]=e=>N.application.is_job_offered=e),id:"flexRadioDefault1"},null,512),[[l["C"],N.application.is_job_offered]]),A])])]),R],32)])])])])])):(Object(l["s"])(),Object(l["g"])("div",U,S))}a("14d9");var V=a("5502"),$={computed:{...Object(V["c"])(["loggedInUser"])},data(){return{load:!1,candidates:{},jobs:{},application:{is_job_offered:"No"}}},methods:{async addDetails(){try{let e=await this.$http.post("application/register",this.application,{headers:{"auth-token":localStorage.getItem("jwt")}});null!=e&&(this.application={is_job_offered:"No"})}catch(e){console.log(e.response)}},async getDetails(){try{let e=await this.$http.get("candidate/get");this.candidates=e.data,null==this.candidates&&this.$router.push("/addc")}catch(e){console.log(e.response)}},async getDetails2(){try{let e=await this.$http.get("job/get");this.jobs=e.data,null==this.jobs&&this.$router.push("/addj")}catch(e){console.log(e.response)}}},created(){"ADMIN"!=this.loggedInUser.role_id&&"HR"!=this.loggedInUser.role_id||(this.getDetails(),this.getDetails2())}},G=a("6b0d"),J=a.n(G);const C=J()($,[["render",N]]);t["default"]=C}}]);
//# sourceMappingURL=chunk-2d0d65da.bf8abf1a.js.map