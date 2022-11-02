(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209218"],{a86a:function(e,t,l){"use strict";l.r(t);var i=l("7a23");const a={class:"container my-5 table-responsive"},c={class:"table align-middle border border-3 rounded table-hover"},s=Object(i["g"])("thead",{class:"table-dark"},[Object(i["g"])("tr",null,[Object(i["g"])("th",{scope:"col"},"Application of "),Object(i["g"])("th",{scope:"col"},"Interviewer"),Object(i["g"])("th",{scope:"col"},"Arranged by"),Object(i["g"])("th",{scope:"col"},"level"),Object(i["g"])("th",{scope:"col"},"Interview Date"),Object(i["g"])("th",{scope:"col"},"Interview Time"),Object(i["g"])("th",{scope:"col"},"Feedback"),Object(i["g"])("th",{scope:"col"},"Status"),Object(i["g"])("th",{scope:"col"},"Delete "),Object(i["g"])("th",{scope:"col"},"Update ")])],-1),n={key:0},o=["onClick"],d=["onClick"],r={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},b={class:"modal-dialog"},g={class:"modal-content"},j=Object(i["g"])("div",{class:"modal-header"},[Object(i["g"])("h5",{class:"modal-title",id:"exampleModalLabel"},"Update interviews"),Object(i["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),O={class:"modal-body"},p={class:"input-group mb-3"},u=Object(i["g"])("label",{for:"disciption",class:"input-group-text"},"Feedback",-1),v={class:"input-group mb-3"},w=Object(i["g"])("span",{class:"input-group-text"},"Status",-1),m={key:0,class:"input-group mb-3"},h=Object(i["g"])("span",{class:"input-group-text"},"Date",-1),y={key:1,class:"input-group mb-3"},f=Object(i["g"])("span",{class:"input-group-text"},"Time",-1),I={class:"modal-footer"},k=Object(i["g"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function _(e,t,l,_,x,U){return Object(i["r"])(),Object(i["f"])("div",a,[Object(i["g"])("table",c,[s,(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["v"])(this.interviews,l=>(Object(i["r"])(),Object(i["f"])("tbody",{key:l._id},[l.interviewer_id==e.loggedInUser._id||"ADMIN"===e.loggedInUser.role_id||"HR"===e.loggedInUser.role_id?(Object(i["r"])(),Object(i["f"])("tr",n,[Object(i["g"])("td",null,Object(i["y"])(l.candidate[0].name)+" for "+Object(i["y"])(l.job[0].title),1),Object(i["g"])("td",null,Object(i["y"])(l.interviewby[0].name)+" ( "+Object(i["y"])(l.interviewby[0].role_id)+" )",1),Object(i["g"])("td",null,Object(i["y"])(l.arrangedby[0].name)+" ( "+Object(i["y"])(l.arrangedby[0].role_id)+" )",1),Object(i["g"])("td",null,Object(i["y"])(l.level),1),Object(i["g"])("td",null,Object(i["y"])(l.interview_date),1),Object(i["g"])("td",null,Object(i["y"])(l.interview_time),1),Object(i["g"])("td",null,Object(i["y"])(l.feedback),1),Object(i["g"])("td",null,Object(i["y"])(l.status),1),Object(i["g"])("td",null,[Object(i["g"])("i",{onClick:e=>U.deleteInterview(l),class:"fa-solid fa-trash mx-3"},null,8,o)]),Object(i["g"])("td",null,[Object(i["g"])("i",{onClick:e=>U.add(l),"data-bs-toggle":"modal","data-bs-target":"#exampleModal",class:"fa-solid fa-pen-to-square mx-3"},null,8,d),Object(i["g"])("div",r,[Object(i["g"])("div",b,[Object(i["g"])("div",g,[j,Object(i["g"])("div",O,[Object(i["g"])("div",p,[u,Object(i["F"])(Object(i["g"])("textarea",{placeholder:"Give Interview Feedback","onUpdate:modelValue":t[0]||(t[0]=e=>x.interview1.feedback=e),type:"text",class:"form-control",rows:"1",id:"disciption"},null,512),[[i["C"],x.interview1.feedback]])]),Object(i["g"])("div",v,[w,Object(i["F"])(Object(i["g"])("input",{placeholder:"Give Interview status",type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>x.interview1.status=e)},null,512),[[i["C"],x.interview1.status]])]),"HR"==e.loggedInUser.role_id||"ADMIN"==e.loggedInUser.role_id?(Object(i["r"])(),Object(i["f"])("div",m,[h,Object(i["F"])(Object(i["g"])("input",{type:"date",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>x.interview1.interview_date=e)},null,512),[[i["C"],x.interview1.interview_date]])])):Object(i["e"])("",!0),"HR"==e.loggedInUser.role_id||"ADMIN"==e.loggedInUser.role_id?(Object(i["r"])(),Object(i["f"])("div",y,[f,Object(i["F"])(Object(i["g"])("input",{type:"time",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>x.interview1.interview_time=e)},null,512),[[i["C"],x.interview1.interview_time]])])):Object(i["e"])("",!0)]),Object(i["g"])("div",I,[k,Object(i["g"])("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=e=>U.updateInterview(x.interview1)),"data-bs-dismiss":"modal"},"Save changes")])])])])])])):Object(i["e"])("",!0)]))),128))])])}l("14d9");var x=l("5502"),U={computed:{...Object(x["c"])(["loggedInUser"])},data(){return{candidates:{},jobs:{},interview1:{},applications:{},interviews:{},users:{}}},methods:{async add(e){this.interview1=e},async deleteInterview(e){try{let t=await this.$http.delete("interview/deleteinterview/"+e._id);console.log(t),this.getDetails()}catch(t){console.log(t)}},async updateInterview(e){try{let t=await this.$http.put("interview/updateinterview/"+e._id,this.interview1);console.log(t),this.getDetails()}catch(t){console.log(t.response)}},async getDetails(){try{let e=await this.$http.get("interview/get");this.interviews=e.data,null==this.interviews&&this.$router.push("/adda")}catch(e){console.log(e.response)}}},created(){this.getDetails()}},C=l("6b0d"),D=l.n(C);const F=D()(U,[["render",_]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-2d209218.bf9be2b2.js.map