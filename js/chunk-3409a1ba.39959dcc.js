(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3409a1ba"],{"22f7":function(o,l,e){"use strict";var a=e("f9c8"),i=e.n(a);i.a},"50df":function(o,l,e){"use strict";e.r(l);var a=function(){var o=this,l=o.$createElement,e=o._self._c||l;return e("div",{staticClass:"medical_insurance"},[e("p",{staticClass:"medical_insurance-title"},[o._v("แผนความคุ้มครองค่ารักษาพยาบาลที่คุณต้องการ")]),e("el-tabs",{staticClass:"medical_tab",on:{"tab-click":o.handleClick},model:{value:o.activeName,callback:function(l){o.activeName=l},expression:"activeName"}},[e("el-tab-pane",{staticClass:"baseMain",attrs:{label:"กรณีผู้ป่วยใน - IPD",name:"กรณีผู้ป่วยใน - IPD"}},[e("p",[e("span",[o._v("1. โรงพยาบาลที่คุณใช้บริการเป็นประจำ")]),e("aia-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择"},on:{change:o.hospitalChange},model:{value:o.selectHospital,callback:function(l){o.selectHospital=l},expression:"selectHospital"}},o._l(o.hospitalList,(function(o){return e("aia-option",{key:o.value,attrs:{label:o.label,value:o.value}})})),1)],1),e("p",[e("span",[o._v("2. หากคุณต้องเขารับการรักษาพยาบาล คุณจะเลือกเข้าพักรักษาตัวในห้องพักฟื้นรูปแบบใด")]),e("aia-radio-group",{on:{change:o.changeRoomType},model:{value:o.roomType,callback:function(l){o.roomType=l},expression:"roomType"}},[e("aia-radio-button",{attrs:{label:"ห้องเดี่ยว"}}),e("aia-radio-button",{attrs:{label:"ห้องพิเศษ"}}),e("aia-radio-button",{attrs:{label:"ห้อง VIP"}})],1)],1),e("p",[e("span",[o._v("3. สรุปความคุ้มครองที่คุณควรมี")]),e("aia-input",{attrs:{type:"text",disabled:"",value:o.recommendedPlan}})],1)]),e("el-tab-pane",{staticClass:"baseMain",attrs:{label:"กรณีผู้ป่วยนอก - OPD",name:"กรณีผู้ป่วยนอก - OPD"}},[e("p",[e("span",[o._v("1. ค่าใช้จ่ายเฉลี่ยต่อครั้ง")]),e("aia-input",{attrs:{type:"number"},model:{value:o.OutpatientExistingExpenseTime,callback:function(l){o.OutpatientExistingExpenseTime=l},expression:"OutpatientExistingExpenseTime"}})],1),e("p",[e("span",[o._v("2. คุณเตรียมไว้แล้วเท่าไร? / ต่อครั้ง")]),e("aia-input",{attrs:{type:"number"},model:{value:o.OutpatientPreparationPertime,callback:function(l){o.OutpatientPreparationPertime=l},expression:"OutpatientPreparationPertime"}})],1),e("p",[e("span",[o._v("3. สรุปความคุ้มครองที่คุณควรมี")]),e("aia-input",{attrs:{disabled:"",value:o.OPDrecomPlan}})],1)]),e("el-tab-pane",{staticClass:"baseMain",attrs:{label:"ค่าชดเชยรายวัน",name:"ค่าชดเชยรายวัน"}},[e("p",[e("span",[o._v("1. คุณเตรียมไว้แล้วเท่าไร")]),e("aia-input",{attrs:{type:"number"},model:{value:o.allPreparation,callback:function(l){o.allPreparation=l},expression:"allPreparation"}})],1),e("p",[e("span",[o._v("2. กรอกรายได้ต่อเดือนเพื่อให้ระบบช่วยคำนวณ")]),e("aia-input",{attrs:{type:"number"},model:{value:o.incomePerMonth,callback:function(l){o.incomePerMonth=l},expression:"incomePerMonth"}})],1),e("p",[e("span",[o._v("3. สรุปความคุ้มครองที่คุณควรมี")]),e("span",{staticClass:"directionText"},[o._v("ความคุ้มครองแนะนำ = 100% ของรายได้ต่อวัน")]),e("span",{staticClass:"directionText"},[o._v("เช่น เงินเดือนเดือนละ 30,000 บาท ควรซื้อค่าชดเชยวันละ 1,000 บาท")]),e("aia-input",{attrs:{disabled:"",value:o.dailyrecomPlan}})],1)])],1),o._m(0)],1)},i=[function(){var o=this,l=o.$createElement,e=o._self._c||l;return e("p",{staticClass:"tag-title"},[e("label",[o._v("คลิกที่นี่")]),o._v("เพื่อดูตัวอย่างค่าใช้จ่ายโรคร้ายแรง ")])}],m=(e("4160"),e("159b"),[{value:"กรุงเทพ",label:"กรุงเทพ",vipRoom:"15900",specialRoom:"10100",singleRoom:"5600"},{value:"กรุงเทพคริสเตียน",label:"กรุงเทพคริสเตียน",vipRoom:"5300",specialRoom:"4800",singleRoom:"2500"},{value:"กรุงเทพคริสเตียน นครปฐม",label:"กรุงเทพคริสเตียน นครปฐม",vipRoom:"5300",specialRoom:"4800",singleRoom:"2500"},{value:"กรุงเทพจันทบุรี",label:"กรุงเทพจันทบุรี",vipRoom:"8000",specialRoom:"2500",singleRoom:"1500"},{value:"กรุงเทพตราด",label:"กรุงเทพตราด",vipRoom:"4500",specialRoom:"2300",singleRoom:"1800"},{value:"กรุงเทพปากช่อง",label:"กรุงเทพปากช่อง",vipRoom:"2400",specialRoom:"2100",singleRoom:"1250"},{value:"กรุงเทพพระประแดง",label:"กรุงเทพพระประแดง",vipRoom:"5000",specialRoom:"2500",singleRoom:"1500"},{value:"กรุงเทพพัทยา",label:"กรุงเทพพัทยา",vipRoom:"4800",specialRoom:"2500",singleRoom:"1200"},{value:"กรุงเทพภูเก็ต",label:"กรุงเทพภูเก็ต",vipRoom:"3200",specialRoom:"3200",singleRoom:"1600"},{value:"กรุงเทพเมืองราช",label:"กรุงเทพเมืองราช",vipRoom:"4600",specialRoom:"3900",singleRoom:"2100"},{value:"กรุงเทพระยอง",label:"กรุงเทพระยอง",vipRoom:"7200",specialRoom:"3500",singleRoom:"1700"},{value:"กรุงเทพราชสีมา",label:"กรุงเทพราชสีมา",vipRoom:"4800",specialRoom:"3200",singleRoom:"2000"},{value:"กรุงเทพสนามจันทร์",label:"กรุงเทพสนามจันทร์",vipRoom:"5900",specialRoom:"4900",singleRoom:"2700"},{value:"กรุงเทพหัวหิน",label:"กรุงเทพหัวหิน",vipRoom:"5900",specialRoom:"4900",singleRoom:"2700"},{value:"กรุงเทพหาดใหญ่",label:"กรุงเทพหาดใหญ่",vipRoom:"8500",specialRoom:"4900",singleRoom:"1300"},{value:"กรุงเทพอุดร",label:"กรุงเทพอุดร",vipRoom:"7900",specialRoom:"5900",singleRoom:"1600"},{value:"กรุงไทย",label:"กรุงไทย",vipRoom:"3500",specialRoom:"2500",singleRoom:"2200"},{value:"กรุงสยามเซนต์คาร์ลอส",label:"กรุงสยามเซนต์คาร์ลอส",vipRoom:"6000",specialRoom:"3750",singleRoom:"3450"},{value:"กล้วยน้ำไท",label:"กล้วยน้ำไท",vipRoom:"6000",specialRoom:"6000",singleRoom:"2100"},{value:"กาญจนบุรี เมโมเรียล",label:"กาญจนบุรี เมโมเรียล",vipRoom:"3500",specialRoom:"2300",singleRoom:"1500"},{value:"การุณเวช อยุธยา",label:"การุณเวช อยุธยา",vipRoom:"5200",specialRoom:"5200",singleRoom:"3040"},{value:"เกษมราษฎร์บางแค",label:"เกษมราษฎร์บางแค",vipRoom:"9500",specialRoom:"6400",singleRoom:"5600"},{value:"เกษมราษฎร์ประชาชื่น",label:"เกษมราษฎร์ประชาชื่น",vipRoom:"8500",specialRoom:"5600",singleRoom:"5600"},{value:"เกษมราษฎร์รัตนาธิเบศร์",label:"เกษมราษฎร์รัตนาธิเบศร์",vipRoom:"5030",specialRoom:"5030",singleRoom:"3730"},{value:"เกษมราษฎร์รามคำแหง",label:"เกษมราษฎร์รามคำแหง",vipRoom:"6000",specialRoom:"6000",singleRoom:"4050"},{value:"เกษมราษฎร์ศรีบุรินทร์",label:"เกษมราษฎร์ศรีบุรินทร์",vipRoom:"2500",specialRoom:"2500",singleRoom:"2000"},{value:"เกษมราษฎร์สระบุรี",label:"เกษมราษฎร์สระบุรี",vipRoom:"1400",specialRoom:"1400",singleRoom:"1000"},{value:"ขอนแก่นราม",label:"ขอนแก่นราม",vipRoom:"6750",specialRoom:"6750",singleRoom:"3350"},{value:"เขลางค์นครราม",label:"เขลางค์นครราม",vipRoom:"2500",specialRoom:"2500",singleRoom:"1500"},{value:"คามิลเลียน",label:"คามิลเลียน",vipRoom:"4700",specialRoom:"4200",singleRoom:"3900"},{value:"จุฬารัตน์3",label:"จุฬารัตน์3",vipRoom:"4800",specialRoom:"4800",singleRoom:"2500"},{value:"จุฬารัตน์รวมแพทย์ระยอง",label:"จุฬารัตน์รวมแพทย์ระยอง",vipRoom:"2500",specialRoom:"2500",singleRoom:"1500"},{value:"เจ้าพระยา",label:"เจ้าพระยา",vipRoom:"5400",specialRoom:"4650",singleRoom:"3950"},{value:"เฉพาะทางแม่และเด็ก แพทย์รังสิต",label:"เฉพาะทางแม่และเด็ก แพทย์รังสิต",vipRoom:"4000",specialRoom:"3400",singleRoom:"2400"},{value:"ชัยภูมิราม",label:"ชัยภูมิราม",vipRoom:"",specialRoom:"",singleRoom:"1700"},{value:"ชัยอรุณเวชการ",label:"ชัยอรุณเวชการ",vipRoom:"2800",specialRoom:"2200",singleRoom:"1600"},{value:"เชียงใหม่ใกล้หมอ",label:"เชียงใหม่ใกล้หมอ",vipRoom:"3600",specialRoom:"1800",singleRoom:"1800"},{value:"เชียงใหม่ราม",label:"เชียงใหม่ราม",vipRoom:"2400",specialRoom:"1800",singleRoom:"720"},{value:"ซานเปาโลหัวหิน",label:"ซานเปาโลหัวหิน",vipRoom:"3500",specialRoom:"2500",singleRoom:"2000"},{value:"เซนต์เมรี่",label:"เซนต์เมรี่",vipRoom:"3000",specialRoom:"3001",singleRoom:"2500"},{value:"เซนต์หลุยส์",label:"เซนต์หลุยส์",vipRoom:"10000",specialRoom:"7600",singleRoom:"4000"},{value:"เซ็นทรัลเยนเนอรัล",label:"เซ็นทรัลเยนเนอรัล",vipRoom:"5500",specialRoom:"4280",singleRoom:"3450"},{value:"ตรังรวมแพทย์",label:"ตรังรวมแพทย์",vipRoom:"3850",specialRoom:"2050",singleRoom:"1190"},{value:"ทักษิณ",label:"ทักษิณ",vipRoom:"4500",specialRoom:"2400",singleRoom:"1700"},{value:"เทพธารินทร์",label:"เทพธารินทร์",vipRoom:"7750",specialRoom:"5450",singleRoom:"4950"},{value:"ไทยนครินทร์",label:"ไทยนครินทร์",vipRoom:"11000",specialRoom:"6000",singleRoom:"3600"},{value:"ธนบุรี ชุมพร",label:"ธนบุรี ชุมพร",vipRoom:"2330",specialRoom:"1355",singleRoom:"810"},{value:"ธนบุรี อู่ทอง",label:"ธนบุรี อู่ทอง",vipRoom:"2500",specialRoom:"1200",singleRoom:"900"},{value:"ธนบุรี1",label:"ธนบุรี1",vipRoom:"11500",specialRoom:"2700",singleRoom:"2400"},{value:"ธนบุรี2",label:"ธนบุรี2",vipRoom:"4650",specialRoom:"3300",singleRoom:"3100"},{value:"นครคริสเตียน",label:"นครคริสเตียน",vipRoom:"1750",specialRoom:"1450",singleRoom:"1250"},{value:"นครธน",label:"นครธน",vipRoom:"6700",specialRoom:"4800",singleRoom:"3100"},{value:"นครพัฒน์",label:"นครพัฒน์",vipRoom:"2500",specialRoom:"2000",singleRoom:"1200"},{value:"นครินทร์",label:"นครินทร์",vipRoom:"2500",specialRoom:"1700",singleRoom:"1400"},{value:"นนทเวช",label:"นนทเวช",vipRoom:"8750",specialRoom:"6500",singleRoom:"5900"},{value:"นวมินทร์9",label:"นวมินทร์9",vipRoom:"4180",specialRoom:"4180",singleRoom:"3180"},{value:"นอร์ท อีสเทอร์น-วัฒนา",label:"นอร์ท อีสเทอร์น-วัฒนา",vipRoom:"3500",specialRoom:"3500",singleRoom:"2500"},{value:"นายแพทย์หาญ",label:"นายแพทย์หาญ",vipRoom:"",specialRoom:"",singleRoom:"1500"},{value:"บางนา5",label:"บางนา5",vipRoom:"",specialRoom:"",singleRoom:"2100"},{value:"บางปะกอก 1",label:"บางปะกอก 1",vipRoom:"4500",specialRoom:"4501",singleRoom:"3500"},{value:"บางปะกอก 3",label:"บางปะกอก 3",vipRoom:"2900",specialRoom:"2400",singleRoom:"1700"},{value:"บางปะกอก 9 อินเตอร์เนชั่นแนล",label:"บางปะกอก 9 อินเตอร์เนชั่นแนล",vipRoom:"4500",specialRoom:"3000",singleRoom:"2600"},{value:"บางไผ่",label:"บางไผ่",vipRoom:"3500",specialRoom:"3500",singleRoom:"2500"},{value:"บางโพ",label:"บางโพ",vipRoom:"6500",specialRoom:"4500",singleRoom:"4000"},{value:"บางมด",label:"บางมด",vipRoom:"4300",specialRoom:"4300",singleRoom:"2000"},{value:"บำรุงราษฎร์",label:"บำรุงราษฎร์",vipRoom:"33540",specialRoom:"33541",singleRoom:"11180"},{value:"บี.แคร์ เมดิคอลเซ็นเตอร์ ",label:"บี.แคร์ เมดิคอลเซ็นเตอร์ ",vipRoom:"4500",specialRoom:"2800",singleRoom:"2500"},{value:"บี.เอ็น.เอช",label:"บี.เอ็น.เอช",vipRoom:"16500",specialRoom:"8500",singleRoom:"4500"},{value:"ปทุมเวช",label:"ปทุมเวช",vipRoom:"4500",specialRoom:"4500",singleRoom:"3600"},{value:"ปิยะมินทร์",label:"ปิยะมินทร์",vipRoom:"3500",specialRoom:"3500",singleRoom:"2500"},{value:"ปิยะรักษ์",label:"ปิยะรักษ์",vipRoom:"1700",specialRoom:"1700",singleRoom:"1500"},{value:"ปิยะเวท",label:"ปิยะเวท",vipRoom:"6800",specialRoom:"5800",singleRoom:"3300"},{value:"เปาโล เมโมเรียล โชคชัย 4",label:"เปาโล เมโมเรียล โชคชัย 4",vipRoom:"2500",specialRoom:"2000",singleRoom:"1300"},{value:"เปาโล เมโมเรียล พหลโยธิน",label:"เปาโล เมโมเรียล พหลโยธิน",vipRoom:"4600",specialRoom:"3600",singleRoom:"2600"},{value:"เปาโล เมโมเรียล สมุทรปราการ",label:"เปาโล เมโมเรียล สมุทรปราการ",vipRoom:"4200",specialRoom:"2600",singleRoom:"1700"},{value:"เปาโลเกษตร",label:"เปาโลเกษตร",vipRoom:"3250",specialRoom:"2100",singleRoom:"1600"},{value:"พญาไท 1",label:"พญาไท 1",vipRoom:"7900",specialRoom:"3400",singleRoom:"2800"},{value:"พญาไท 2",label:"พญาไท 2",vipRoom:"17000",specialRoom:"10000",singleRoom:"3900"},{value:"พญาไท 3",label:"พญาไท 3",vipRoom:"15200",specialRoom:"4400",singleRoom:"3200"},{value:"พญาไท นวมินทร์",label:"พญาไท นวมินทร์",vipRoom:"5000",specialRoom:"2800",singleRoom:"2500"},{value:"พญาไท ศรีราชา",label:"พญาไท ศรีราชา",vipRoom:"5600",specialRoom:"2400",singleRoom:"2100"},{value:"พรชัย",label:"พรชัย",vipRoom:"1200",specialRoom:"1200",singleRoom:"1000"},{value:"พระราม9",label:"พระราม9",vipRoom:"18000",specialRoom:"4200",singleRoom:"3800"},{value:"พะเยา-ราม",label:"พะเยา-ราม",vipRoom:"",specialRoom:"",singleRoom:"1600"},{value:"พัทยาเมโมเรียล",label:"พัทยาเมโมเรียล",vipRoom:"",specialRoom:"",singleRoom:"3500"},{value:"พิษณุเวช",label:"พิษณุเวช",vipRoom:"7800",specialRoom:"7801",singleRoom:"1750"},{value:"พีรเวช",label:"พีรเวช",vipRoom:"3000",specialRoom:"3000",singleRoom:"2000"},{value:"แพทย์รังสิต",label:"แพทย์รังสิต",vipRoom:"4500",specialRoom:"4500",singleRoom:"2400"},{value:"ภัทรธนบุรี",label:"ภัทรธนบุรี",vipRoom:"2300",specialRoom:"2300",singleRoom:"1500"},{value:"มงกุฏวัฒนะ",label:"มงกุฏวัฒนะ",vipRoom:"2500",specialRoom:"2500",singleRoom:"1900"},{value:"มหาชัย",label:"มหาชัย",vipRoom:"6040",specialRoom:"5040",singleRoom:"3940"},{value:"มหาชัย 2",label:"มหาชัย 2",vipRoom:"8100",specialRoom:"6100",singleRoom:"3000"},{value:"มหาชัย 3",label:"มหาชัย 3",vipRoom:"3000",specialRoom:"3000",singleRoom:"2300"},{value:"มหาชัยเพชรรัชต์",label:"มหาชัยเพชรรัชต์",vipRoom:"3500",specialRoom:"3500",singleRoom:"2000"},{value:"มหาสารคาม อินเตอร์เนชั่นแนล",label:"มหาสารคาม อินเตอร์เนชั่นแนล",vipRoom:"3500",specialRoom:"3500",singleRoom:"1200"},{value:"มิชชั่น",label:"มิชชั่น",vipRoom:"5100",specialRoom:"3700",singleRoom:"3100"},{value:"มิชชั่นภูเก็ต",label:"มิชชั่นภูเก็ต",vipRoom:"3500",specialRoom:"2500",singleRoom:"2000"},{value:"เมืองนารายณ์",label:"เมืองนารายณ์",vipRoom:"2500",specialRoom:"1600",singleRoom:"1100"},{value:"เมืองเลยราม",label:"เมืองเลยราม",vipRoom:"1900",specialRoom:"1900",singleRoom:"1100"},{value:"เมืองสมุทร",label:"เมืองสมุทร",vipRoom:"3000",specialRoom:"3000",singleRoom:"2500"},{value:"แมคคอร์มิค",label:"แมคคอร์มิค",vipRoom:"2100",specialRoom:"2101",singleRoom:"1200"},{value:"ยันฮี",label:"ยันฮี",vipRoom:"5250",specialRoom:"5251",singleRoom:"2650"},{value:"รวมแพทย์ชัยนาท",label:"รวมแพทย์ชัยนาท",vipRoom:"2500",specialRoom:"2500",singleRoom:"1000"},{value:"รวมแพทย์นครสวรรค์",label:"รวมแพทย์นครสวรรค์",vipRoom:"1200",specialRoom:"1200",singleRoom:"800"},{value:"รวมแพทย์พิษณุโลก",label:"รวมแพทย์พิษณุโลก",vipRoom:"2500",specialRoom:"2500",singleRoom:"1000"},{value:"รวมแพทย์หนองคาย",label:"รวมแพทย์หนองคาย",vipRoom:"2000",specialRoom:"2000",singleRoom:"900"},{value:"ราชธานี",label:"ราชธานี",vipRoom:"3300",specialRoom:"3300",singleRoom:"2300"},{value:"ราชพฤกษ์",label:"ราชพฤกษ์",vipRoom:"3500",specialRoom:"2000",singleRoom:"1500"},{value:"ราชเวชเชียงใหม่",label:"ราชเวชเชียงใหม่",vipRoom:"1900",specialRoom:"1600",singleRoom:"1200"},{value:"รามคำแหง",label:"รามคำแหง",vipRoom:"5000",specialRoom:"5000",singleRoom:"2100"},{value:"ราษฎร์บูรณะ",label:"ราษฎร์บูรณะ",vipRoom:"3500",specialRoom:"3500",singleRoom:"2200"},{value:"ราษฎร์ยินดี",label:"ราษฎร์ยินดี",vipRoom:"4300",specialRoom:"4300",singleRoom:"2200"},{value:"ลาดพร้าว",label:"ลาดพร้าว",vipRoom:"7000",specialRoom:"4500",singleRoom:"4000"},{value:"ลานนา",label:"ลานนา",vipRoom:"2500",specialRoom:"2500",singleRoom:"1500"},{value:"วัฒนแพทย์ตรัง",label:"วัฒนแพทย์ตรัง",vipRoom:"6000",specialRoom:"4000",singleRoom:"2500"},{value:"วิชัยยุทธ",label:"วิชัยยุทธ",vipRoom:"9000",specialRoom:"5500",singleRoom:"2800"},{value:"วิชัยเวช อินเตอร์เนชั่นแนล สมุทรสาคร",label:"วิชัยเวช อินเตอร์เนชั่นแนล สมุทรสาคร",vipRoom:"4500",specialRoom:"3300",singleRoom:"2500"},{value:"วิชัยเวช อินเตอร์เนชั่นแนล หนองแขม",label:"วิชัยเวช อินเตอร์เนชั่นแนล หนองแขม",vipRoom:"5900",specialRoom:"2900",singleRoom:"2500"},{value:"วิชัยเวช อินเตอร์เนชั่นแนล อ้อมน้อย",label:"วิชัยเวช อินเตอร์เนชั่นแนล อ้อมน้อย",vipRoom:"4500",specialRoom:"3600",singleRoom:"2500"},{value:"วิภาราม",label:"วิภาราม",vipRoom:"3100",specialRoom:"3101",singleRoom:"2100"},{value:"วิภาวดี",label:"วิภาวดี",vipRoom:"5000",specialRoom:"3500",singleRoom:"2600"},{value:"วิภาวดี-ปิยราษฎร์",label:"วิภาวดี-ปิยราษฎร์",vipRoom:"",specialRoom:"",singleRoom:"1500"},{value:"เวชธานี",label:"เวชธานี",vipRoom:"7700",specialRoom:"5500",singleRoom:"2640"},{value:"ศรีสวรรค์",label:"ศรีสวรรค์",vipRoom:"2500",specialRoom:"1500",singleRoom:"650"},{value:"ศิครินทร์",label:"ศิครินทร์",vipRoom:"8000",specialRoom:"4200",singleRoom:"2500"},{value:"ศิครินทร์หาดใหญ่",label:"ศิครินทร์หาดใหญ่",vipRoom:"6200",specialRoom:"6200",singleRoom:"3100"},{value:"ศิริราช ปิยมหาราชการุณย์",label:"ศิริราช ปิยมหาราชการุณย์",vipRoom:"25000",specialRoom:"120000",singleRoom:"6000"},{value:"ศุภมิตร",label:"ศุภมิตร",vipRoom:"2000",specialRoom:"2000",singleRoom:"1500"},{value:"ศุภมิตรเสนา",label:"ศุภมิตรเสนา",vipRoom:"3500",specialRoom:"3500",singleRoom:"2000"},{value:"สมิติเวช",label:"สมิติเวช",vipRoom:"6500",specialRoom:"6500",singleRoom:"5000"},{value:"สมิติเวช ธนบุรี",label:"สมิติเวช ธนบุรี",vipRoom:"5900",specialRoom:"4800",singleRoom:"3700"},{value:"สมิติเวชศรีนครินทร์",label:"สมิติเวชศรีนครินทร์",vipRoom:"12000",specialRoom:"3700",singleRoom:"3200"},{value:"สมิติเวชศรีราชา",label:"สมิติเวชศรีราชา",vipRoom:"66000",specialRoom:"2200",singleRoom:"1600"},{value:"สายไหม",label:"สายไหม",vipRoom:"2900",specialRoom:"2900",singleRoom:"2000"},{value:"สำโรงการแพทย์",label:"สำโรงการแพทย์",vipRoom:"",specialRoom:"",singleRoom:"2500"},{value:"สินแพทย์",label:"สินแพทย์",vipRoom:"3500",specialRoom:"3000",singleRoom:"2400"},{value:"สิริโรจน์",label:"สิริโรจน์",vipRoom:"2350",specialRoom:"2350",singleRoom:"750"},{value:"สิริเวช",label:"สิริเวช",vipRoom:"2300",specialRoom:"2300",singleRoom:"1550"},{value:"สุขุมวิท",label:"สุขุมวิท",vipRoom:"8250",specialRoom:"8250",singleRoom:"3380"},{value:"เสรีรักษ์",label:"เสรีรักษ์",vipRoom:"4500",specialRoom:"3500",singleRoom:"1700"},{value:"หัวเฉียว",label:"หัวเฉียว",vipRoom:"5500",specialRoom:"5500",singleRoom:"3300"},{value:"อนันต์พัฒนา 2",label:"อนันต์พัฒนา 2",vipRoom:"2400",specialRoom:"2400",singleRoom:"1800"},{value:"อบจ.ภูเก็ต",label:"อบจ.ภูเก็ต",vipRoom:"3000",specialRoom:"3000",singleRoom:"2400"},{value:"อินเตอร์เวชการ",label:"อินเตอร์เวชการ",vipRoom:"1500",specialRoom:"1500",singleRoom:"800"},{value:"อุบลรักษ์ ธนบุรี",label:"อุบลรักษ์ ธนบุรี",vipRoom:"5200",specialRoom:"2300",singleRoom:"1800"},{value:"เอกชล",label:"เอกชล",vipRoom:"3600",specialRoom:"1900",singleRoom:"1700"},{value:"เอกชล2",label:"เอกชล2",vipRoom:"2500",specialRoom:"2500",singleRoom:"1700"},{value:"เอกชลเมืองกำแพง",label:"เอกชลเมืองกำแพง",vipRoom:"2500",specialRoom:"2500",singleRoom:"1600"},{value:"เอกชัย",label:"เอกชัย",vipRoom:"5300",specialRoom:"4000",singleRoom:"3600"},{value:"เอกอุดร",label:"เอกอุดร",vipRoom:"5500",specialRoom:"5500",singleRoom:"1400"},{value:"โอเวอร์บรู๊ค",label:"โอเวอร์บรู๊ค",vipRoom:"2050",specialRoom:"1350",singleRoom:"800"},{value:"ปากน้ำโพ 1",label:"ปากน้ำโพ 1",vipRoom:"2550",specialRoom:"2551",singleRoom:"1900"},{value:"ปากน้ำโพ 2",label:"ปากน้ำโพ 2",vipRoom:"8000",specialRoom:"1300",singleRoom:"1900"},{value:"เปาโลรังสิต",label:"เปาโลรังสิต",vipRoom:"4600",specialRoom:"4601",singleRoom:"3600"},{value:"กรุงเทพเชียงใหม่",label:"กรุงเทพเชียงใหม่",vipRoom:"9900",specialRoom:"6500",singleRoom:"3200"},{value:"แพร่ราม",label:"แพร่ราม",vipRoom:"3600",specialRoom:"2200",singleRoom:"1900"},{value:"หริภุญชัยเมโมเรียล",label:"หริภุญชัยเมโมเรียล",vipRoom:"3130",specialRoom:"3130",singleRoom:"2740"},{value:"กรุงเทพขอนแก่น",label:"กรุงเทพขอนแก่น",vipRoom:"5000",specialRoom:"5000",singleRoom:"2200"},{value:"กรุงเทพเพชรบุรี",label:"กรุงเทพเพชรบุรี",vipRoom:"2300",specialRoom:"2300",singleRoom:"1500"},{value:"ศรีระยอง",label:"ศรีระยอง",vipRoom:"",specialRoom:"",singleRoom:"1000"},{value:"กรุงเทพสมุย",label:"กรุงเทพสมุย",vipRoom:"8800",specialRoom:"8800",singleRoom:"5000"},{value:"กรุงเทพสุราษฎร์ธานี",label:"กรุงเทพสุราษฎร์ธานี",vipRoom:"3000",specialRoom:"2500",singleRoom:"1450"},{value:"สมิติเวช ชลบุรี",label:"สมิติเวช ชลบุรี",vipRoom:"4000",specialRoom:"2800",singleRoom:"2000"},{value:"สมิติเวชไซน่าทาวน์",label:"สมิติเวชไซน่าทาวน์",vipRoom:"8500",specialRoom:"5500",singleRoom:"3000"},{value:"วิรัชศิลป์",label:"วิรัชศิลป์",vipRoom:"2790",specialRoom:"1590",singleRoom:"1050"},{value:"เทพากร",label:"เทพากร",vipRoom:"2000",specialRoom:"2001",singleRoom:"1600"},{value:"ธรรมศาสตร์",label:"ธรรมศาสตร์",vipRoom:"5000",specialRoom:"3500",singleRoom:"3000"},{value:"บางปะกอก 8",label:"บางปะกอก 8",vipRoom:"4900",specialRoom:"4300",singleRoom:"3500"},{value:"บางปะกอก รังสิต 2",label:"บางปะกอก รังสิต 2",vipRoom:"3900",specialRoom:"3900",singleRoom:"3000"},{value:"เพชรเวช",label:"เพชรเวช",vipRoom:"4510",specialRoom:"4510",singleRoom:"3910"},{value:"รวมชัยประชารักษ์",label:"รวมชัยประชารักษ์",vipRoom:"5500",specialRoom:"4100",singleRoom:"3600"}]),R=m,s={name:"medicalInsurance",data:function(){return{activeName:"กรณีผู้ป่วยใน - IPD",selectHospital:"",optionData2:"",roomType:"ห้องเดี่ยว",hospitalList:R,hospitalVipRoom:"",hospitalSpecialRoom:"",hospitalSingleRoom:"",recommendedPlan:"",OutpatientExistingExpenseTime:"",OutpatientPreparationPertime:"",allPreparation:"",incomePerMonth:""}},created:function(){console.log(R.length)},methods:{handleClick:function(o,l){},hospitalChange:function(o){var l=this;this.hospitalList.forEach((function(e,a){e.value==o&&(l.hospitalVipRoom=e.vipRoom,l.hospitalSpecialRoom=e.specialRoom,l.hospitalSingleRoom=e.singleRoom,l.changeRoomType())}))},changeRoomType:function(o){this.roomType,"ห้องเดี่ยว"==this.roomType?this.recommendedPlan=this.hospitalSingleRoom:"ห้องพิเศษ"==this.roomType?this.recommendedPlan=this.hospitalSpecialRoom:"ห้อง VIP"==this.roomType&&(this.recommendedPlan=this.hospitalVipRoom)}},computed:{OPDrecomPlan:function(){var o=this.OutpatientExistingExpenseTime-this.OutpatientPreparationPertime;return o<0&&(o=0),o},dailyrecomPlan:function(){var o=this.allPreparation-this.incomePerMonth;return o<0&&(o=0),o}}},p=s,v=(e("22f7"),e("2877")),n=Object(v["a"])(p,a,i,!1,null,"65e0acb1",null);l["default"]=n.exports},f9c8:function(o,l,e){}}]);
//# sourceMappingURL=chunk-3409a1ba.39959dcc.js.map