(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fdedac2"],{"25b2":function(a,t,i){"use strict";i.r(t);var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[a._m(0),i("div",{staticClass:"buttonGroup"},[i("aia-button",{staticClass:"aiaButton",attrs:{type:"danger"},on:{click:function(t){return a.nextStep("ipos")}}},[a._v("GO TO iPOS+")]),i("aia-button",{staticClass:"aiaButton",attrs:{type:"danger"}},[a._v("VIEW REPORT")]),i("aia-button",{staticClass:"aiaButton",attrs:{type:"danger"},on:{click:function(t){return a.sendRepro("ipos")}}},[a._v("SEND REPRO")])],1),0==a.dialogIndex?i("el-dialog",{staticClass:"dialogWraper",attrs:{visible:a.dialogVisible,width:"60%",height:"90%"},on:{"update:visible":function(t){a.dialogVisible=t}}},[i("div",{staticClass:"information",attrs:{slot:"title"},slot:"title"},[a._v("Your Contact Information")]),i("p",[a._v("Email Address")]),i("div",{staticClass:"emailinput"},[i("aia-input",{attrs:{type:"text"},model:{value:a.infoemail,callback:function(t){a.infoemail=t},expression:"infoemail"}})],1),i("p",[a._v("Mobile Number")]),i("span",[a._v("asdadaadaasdadsa")]),i("div",{staticClass:"infoWraper"},[i("div",[i("p",[a._v("Country")]),i("aia-select",{attrs:{placeholder:"请选择"},model:{value:a.country,callback:function(t){a.country=t},expression:"country"}},a._l(a.options,(function(a){return i("aia-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),i("div",[i("p",[a._v("Country Code")]),i("aia-input",{model:{value:a.countryCode,callback:function(t){a.countryCode=t},expression:"countryCode"}})],1),i("div",[i("p",[a._v("Area Code")]),i("el-input",{staticClass:"unwrite",attrs:{disabled:""},model:{value:a.areaCode,callback:function(t){a.areaCode=t},expression:"areaCode"}})],1),i("div",[i("p",[a._v("Mobile Number")]),i("aia-input",{model:{value:a.mobileNumber,callback:function(t){a.mobileNumber=t},expression:"mobileNumber"}})],1)]),i("p",[a._v("AJAAKJAJKSDAWEWEM WLKJWLEJMW WELKWE WELKWE")]),i("div",{staticClass:"checkWraper"},[i("el-checkbox",{model:{value:a.checked,callback:function(t){a.checked=t},expression:"checked"}}),i("span",[a._v("Agree sd.ss sdfsdfkksd sdsjsd fsdjjsf sdjsdjksd sdksd sdf")])],1),i("div",{staticClass:"btn"},[i("aia-button",{staticClass:"aiaButton okbutton",attrs:{type:"danger"},on:{click:function(t){return a.okFun(1)}}},[a._v("OK")])],1)]):1==a.dialogIndex?i("el-dialog",{staticClass:"innnerDialog",attrs:{width:"60%",visible:a.innerVisible},on:{"update:visible":function(t){a.innerVisible=t}}},[i("p",{attrs:{slot:"title"},slot:"title"},[a._v("Your Contact Information")]),i("p",{staticClass:"titleInner"},[a._v("Next Meeting")]),i("p",[a._v("DATE&TIME")]),i("div",{staticStyle:{display:"flex"}},[i("aia-input"),i("aia-input")],1),i("p",[a._v("Note")]),i("aia-input",{attrs:{type:"textarea",rows:7}}),i("div",{staticClass:"buttonWrpaer"},[i("aia-button",{staticClass:"aiaButton",attrs:{type:"danger"},on:{click:function(t){return a.okFun(2)}}},[a._v("SKIP")])],1)],1):2==a.dialogIndex?i("el-dialog",{staticClass:"dialogWraper",attrs:{width:"60%",visible:a.innerVisible},on:{"update:visible":function(t){a.innerVisible=t}}},[i("div",{staticClass:"information",attrs:{slot:"title"},slot:"title"},[a._v("PROSPECTS")]),i("div",{staticClass:"itemCell"},[i("div"),i("div",[a._v("Prospect name")]),i("div",[a._v("Contact")]),i("div",[a._v("Relationship")])]),i("div",{staticClass:"itemCell"},[i("div",[i("el-badge",{staticClass:"item",attrs:{value:1}})],1),i("div",[i("aia-input",{model:{value:a.name1,callback:function(t){a.name1=t},expression:"name1"}})],1),i("div",[i("aia-input",{model:{value:a.contact1,callback:function(t){a.contact1=t},expression:"contact1"}})],1),i("div",[i("aia-input",{model:{value:a.relationship1,callback:function(t){a.relationship1=t},expression:"relationship1"}})],1)]),i("div",{staticClass:"itemCell"},[i("div",[i("el-badge",{staticClass:"item",attrs:{value:2}})],1),i("div",[i("aia-input",{model:{value:a.name2,callback:function(t){a.name2=t},expression:"name2"}})],1),i("div",[i("aia-input",{model:{value:a.contact2,callback:function(t){a.contact2=t},expression:"contact2"}})],1),i("div",[i("aia-input",{model:{value:a.relationship2,callback:function(t){a.relationship2=t},expression:"relationship2"}})],1)]),i("div",{staticClass:"itemCell"},[i("div",[i("el-badge",{staticClass:"item",attrs:{value:3}})],1),i("div",[i("aia-input",{model:{value:a.name3,callback:function(t){a.name3=t},expression:"name3"}})],1),i("div",[i("aia-input",{model:{value:a.contact3,callback:function(t){a.contact3=t},expression:"contact3"}})],1),i("div",[i("aia-input",{model:{value:a.relationship3,callback:function(t){a.relationship3=t},expression:"relationship3"}})],1)]),i("div",{staticClass:"itemCell"},[i("div",[i("el-badge",{staticClass:"item",attrs:{value:4}})],1),i("div",[i("aia-input",{model:{value:a.name4,callback:function(t){a.name4=t},expression:"name4"}})],1),i("div",[i("aia-input",{model:{value:a.contact4,callback:function(t){a.contact4=t},expression:"contact4"}})],1),i("div",[i("aia-input",{model:{value:a.relationship4,callback:function(t){a.relationship4=t},expression:"relationship4"}})],1)]),i("div",{staticClass:"itemCell"},[i("div",[i("el-badge",{staticClass:"item",attrs:{value:5}})],1),i("div",[i("aia-input",{model:{value:a.name5,callback:function(t){a.name5=t},expression:"name5"}})],1),i("div",[i("aia-input",{model:{value:a.contact5,callback:function(t){a.contact5=t},expression:"contact5"}})],1),i("div",[i("aia-input",{model:{value:a.relationship5,callback:function(t){a.relationship5=t},expression:"relationship5"}})],1)]),i("div",{staticClass:"btn"},[i("aia-button",{staticClass:"aiaButton savebutton",attrs:{type:"danger"},on:{click:function(t){return a.okFun(3)}}},[a._v("SAVE")])],1)]):a._e(),i("div",{staticClass:"reportNav"},[a._v("tropeR yM")])],1)},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tabWraper"},[e("div",{staticClass:"tabHead"},[e("div"),e("div",[e("span",[a._v("PLAN 1")])]),e("div",[e("span",[a._v("PLAN 2")])]),e("div",[e("span",[a._v("PLAN 3")])])]),e("div",{staticClass:"tabBody"},[e("div",{staticClass:"tabBodyLeft"},[e("div",[e("img",{attrs:{src:i("983c"),alt:""}}),e("p",[a._v("ความคุ้มครองชีวิต")])]),e("div",[e("img",{attrs:{src:i("983c"),alt:""}}),e("p",[a._v("แผนการออมเงิน")])]),e("div",[e("img",{attrs:{src:i("983c"),alt:""}}),e("p",[a._v("ค่ารักษาพยาบาล")])]),e("div",[e("img",{attrs:{src:i("983c"),alt:""}}),e("p",[a._v("โรคร้าย")])]),e("div",[e("img",{attrs:{src:i("983c"),alt:""}}),e("p",[a._v("อุบัติเหตุ")])]),e("div",[e("img",{attrs:{src:i("983c"),alt:""}}),e("p",[a._v("แผนลดหย่อนภาษี")])])]),e("div",{staticClass:"tabBodyRight"},[e("div",[e("div",[a._v(" XXX PROTECTION Coverage 10,000,000 ")]),e("div"),e("div")]),e("div",[e("div"),e("div"),e("div")]),e("div",[e("div"),e("div"),e("div")]),e("div",[e("div"),e("div"),e("div")]),e("div",[e("div"),e("div"),e("div")]),e("div",[e("div"),e("div"),e("div")])])])])}],s={name:"Report",data:function(){return{name1:"",name2:"",name3:"",name4:"",name5:"",contact1:"",contact2:"",contact3:"",contact4:"",contact5:"",relationship1:"",relationship2:"",relationship3:"",relationship4:"",relationship5:"",dialogVisible:!0,innerVisible:!0,checked:!0,dialogIndex:-1,infoemail:"",options:[{value:"选项1",label:"HONG KONG"},{value:"选项2",label:"CHINA"},{value:"选项3",label:"AUSTRALIA"}],country:"HONG KONG",countryCode:"852",areaCode:"",mobileNumber:"98765432"}},methods:{nextStep:function(a){this.$router.push({name:a})},sendRepro:function(){this.dialogIndex=0},okFun:function(a){this.dialogIndex=a;var t=this;1==this.dialogIndex?WebViewJavascriptBridge.callHandler("saveCRPData",{infoemail:t.infoemail,country:t.country,countryCode:t.countryCode,areaCode:t.areaCode,mobileNumber:t.mobileNumber},(function(a){alert(a)})):3==this.dialogIndex&&WebViewJavascriptBridge.callHandler("Prospects",{infoemail:t.infoemail,country:t.country,countryCode:t.countryCode,areaCode:t.areaCode,mobileNumber:t.mobileNumber},(function(a){alert(a)}))}}},l=s,o=(i("c697"),i("2877")),c=Object(o["a"])(l,e,n,!1,null,"733cd8e0",null);t["default"]=c.exports},8269:function(a,t,i){},"983c":function(a,t){a.exports="data:image/png;base64,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"},c697:function(a,t,i){"use strict";var e=i("8269"),n=i.n(e);n.a}}]);
//# sourceMappingURL=chunk-0fdedac2.58c0b603.js.map