(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4bd3"],{"3bb0":function(e,t,a){"use strict";a.r(t);var l=a("7a23");const c={class:"container my-5 table-responsive"},o={class:"table align-middle border border-3 rounded table-hover"},s=Object(l["g"])("thead",{class:"table-dark"},[Object(l["g"])("tr",null,[Object(l["g"])("th",{scope:"col"},"Job Role"),Object(l["g"])("th",{scope:"col"},"Candidate"),Object(l["g"])("th",{scope:"col"},"Createdby id"),Object(l["g"])("th",{scope:"col"},"Expected Salary "),Object(l["g"])("th",{scope:"col"},"Actual Salary "),Object(l["g"])("th",{scope:"col"},"Is Job offered "),Object(l["g"])("th",{scope:"col"},"Delete/Update ")])],-1),i=["onClick"],d=["onClick"],n={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},b={class:"modal-dialog"},p={class:"modal-content"},r=Object(l["g"])("div",{class:"modal-header"},[Object(l["g"])("h5",{class:"modal-title",id:"exampleModalLabel"},"Update Application"),Object(l["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),u={class:"modal-body"},j={class:"input-group mb-3"},g=Object(l["g"])("span",{class:"input-group-text"},"Expected Salary",-1),O=Object(l["g"])("span",{class:"input-group-text"},"INR",-1),f={class:"input-group mb-3"},m=Object(l["g"])("span",{class:"input-group-text"},"Actual Salary",-1),h=Object(l["g"])("span",{class:"input-group-text"},"INR",-1),y={class:"row mb-3"},x=Object(l["g"])("label",{for:"rl",class:"col-sm-2 col-form-label"},"Is Job Offered",-1),v={class:"col-sm-10"},_={class:"form-check"},k=Object(l["g"])("label",{class:"form-check-label",for:"flexRadioDefault2"}," No ",-1),C={class:"form-check"},D=Object(l["g"])("label",{class:"form-check-label",for:"flexRadioDefault1"}," Yes ",-1),w={class:"modal-footer"},A=Object(l["g"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function R(e,t,a,R,U,J){return Object(l["r"])(),Object(l["f"])("div",c,[Object(l["g"])("table",o,[s,(Object(l["r"])(!0),Object(l["f"])(l["a"],null,Object(l["v"])(this.applications,e=>(Object(l["r"])(),Object(l["f"])("tbody",{key:e._id},[Object(l["g"])("tr",null,[Object(l["g"])("td",null,Object(l["y"])(e.job[0].title),1),Object(l["g"])("td",null,Object(l["y"])(e.candidate[0].name),1),Object(l["g"])("td",null,Object(l["y"])(e.createdby[0].name)+" ("+Object(l["y"])(e.createdby[0].role_id)+")",1),Object(l["g"])("td",null,Object(l["y"])(e.expected_salary),1),Object(l["g"])("td",null,Object(l["y"])(e.actual_salary),1),Object(l["g"])("td",null,Object(l["y"])(e.is_job_offered),1),Object(l["g"])("td",null,[Object(l["g"])("i",{onClick:t=>J.deleteApplication(e),class:"fa-solid fa-trash mx-4"},null,8,i),Object(l["g"])("i",{onClick:t=>J.add(e),"data-bs-toggle":"modal","data-bs-target":"#exampleModal",class:"fa-solid fa-pen-to-square mx-3"},null,8,d),Object(l["g"])("div",n,[Object(l["g"])("div",b,[Object(l["g"])("div",p,[r,Object(l["g"])("div",u,[Object(l["g"])("div",j,[g,Object(l["F"])(Object(l["g"])("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>U.application1.expected_salary=e),class:"form-control"},null,512),[[l["C"],U.application1.expected_salary]]),O]),Object(l["g"])("div",f,[m,Object(l["F"])(Object(l["g"])("input",{type:"number",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>U.application1.actual_salary=e)},null,512),[[l["C"],U.application1.actual_salary]]),h]),Object(l["g"])("div",y,[x,Object(l["g"])("div",v,[Object(l["g"])("div",_,[Object(l["F"])(Object(l["g"])("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",value:"No","onUpdate:modelValue":t[2]||(t[2]=e=>U.application1.is_job_offered=e),id:"flexRadioDefault2",checked:""},null,512),[[l["A"],U.application1.is_job_offered]]),k]),Object(l["g"])("div",C,[Object(l["F"])(Object(l["g"])("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",value:"Yes","onUpdate:modelValue":t[3]||(t[3]=e=>U.application1.is_job_offered=e),id:"flexRadioDefault1"},null,512),[[l["A"],U.application1.is_job_offered]]),D])])])]),Object(l["g"])("div",w,[A,Object(l["g"])("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=e=>J.updateApplication(U.application1)),"data-bs-dismiss":"modal"},"Save changes")])])])])])])]))),128))])])}a("14d9");var U={data(){return{candidates:{},jobs:{},application1:{},applications:{},users:{}}},methods:{async add(e){this.application1=e},async deleteApplication(e){try{let t=await this.$http.delete("application/deleteapplication/"+e._id);console.log(t),this.getDetails()}catch(t){console.log(t)}},async updateApplication(e){try{let t=await this.$http.put("application/updateapplication/"+e._id,this.application1);console.log(t),this.getDetails()}catch(t){console.log(t.response)}},async getDetails(){try{let e=await this.$http.get("application/get");return this.applications=e.data,null==this.applications&&this.$router.push("/adda"),1}catch(e){console.log(e.response)}}},created(){this.getDetails()}},J=a("6b0d"),S=a.n(J);const F=S()(U,[["render",R]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-2d0c4bd3.ac97cec4.js.map