let ObjCon = {
  divEleType: "div",
  eleCls: "conatiner",
  spanEleType: "h3",
  spanCls: "txt",
  buttonEleType: "button",
  btnCls: "btn",
  btnText1: "tab1",
  btnText2: "tab2",
  imgEleType: "img",
  imgCls: "img",

  range: {
    eleCls: "range",
    countCls: "count",
    subRngCls: "sub-range",
    rngLen: "range-length",
    range1: {
      txt: "63%  ",
      txt1: "Generated Leads",
      rngWidth: "red",
    },
    range2: {
      txt: "32%  ",
      txt1: "Submitted Tickers",
      rngWidth: "green"
    },
    range3: {
      txt: "71%  ",
      txt1: "Server Tickers",
      rngWidth: "blue"
    },
    range4: {
      txt: "41",
      txt1: "Generated Leads",
      rngWidth: "yellow"
    }
  }


}


let obj = {
  createEle: function (EleType, clsName) {
    let ele = document.createElement(EleType);
    ele.className = clsName;
    return ele;
  }
  ,
  createEleTxt: function (EleType, clsName, txt) {
    let ele = document.createElement(EleType);
    ele.className = clsName;
    ele.appendChild(document.createTextNode(txt));
    return ele;
  }
}

let container = obj.createEle(ObjCon.divEleType, ObjCon.eleCls);
let button = obj.createEle(ObjCon.buttonEleType, ObjCon.btnCls);
button.setAttribute('value', 'tab1');
let btnspan = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.btnText1);
button.appendChild(btnspan);

container.appendChild(button);
let button2 = obj.createEle(ObjCon.buttonEleType, ObjCon.btnCls);
let btnspan2 = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.btnText2);
button2.appendChild(btnspan2);
container.appendChild(button2);
let img = obj.createEle(ObjCon.imgEleType, ObjCon.imgCls);
container.appendChild(img);

let range = obj.createEle(ObjCon.divEleType, ObjCon.range.eleCls);
let range1 = obj.createEle(ObjCon.divEleType, ObjCon.range.subRngCls);
let r1_span = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range1.txt);
let r1_span2 = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range1.txt1);
range1.appendChild(r1_span);
range1.appendChild(r1_span2);
let r1Length = obj.createEle(ObjCon.divEleType, ObjCon.range.rngLen);

let r1Width = obj.createEle(ObjCon.divEleType, ObjCon.range.range1.rngWidth);

r1Length.appendChild(r1Width);

range1.appendChild(r1Length);

range.appendChild(range1);



let range2 = obj.createEle(ObjCon.divEleType, ObjCon.range.subRngCls);
let r2_span = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range2.txt);
let r2_span2 = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range2.txt1);

range2.appendChild(r2_span);
range2.appendChild(r2_span2);
let r2Length = obj.createEle(ObjCon.divEleType, ObjCon.range.rngLen)
let r2Width = obj.createEle(ObjCon.divEleType, ObjCon.range.range2.rngWidth);
r2Length.appendChild(r2Width)
range2.appendChild(r2Length);
range.appendChild(range2);

let range3 = obj.createEle(ObjCon.divEleType, ObjCon.range.subRngCls);
let r3_span = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range3.txt);
let r3_span2 = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range3.txt1);
range3.appendChild(r3_span);
range3.appendChild(r3_span2);
let r3Length = obj.createEle(ObjCon.divEleType, ObjCon.range.rngLen)
let r3Width = obj.createEle(ObjCon.divEleType, ObjCon.range.range3.rngWidth);
r3Length.appendChild(r3Width);
range3.appendChild(r3Length);
range.appendChild(range3)

let range4 = obj.createEle(ObjCon.divEleType, ObjCon.range.subRngCls);
let r4_span = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range4.txt);
let r4_span2 = obj.createEleTxt(ObjCon.spanEleType, ObjCon.spanCls, ObjCon.range.range4.txt1);
range4.appendChild(r4_span)
range4.appendChild(r4_span2);
let r4Length = obj.createEle(ObjCon.divEleType, ObjCon.range.rngLen)
let r4Width = obj.createEle(ObjCon.divEleType, ObjCon.range.range3.rngWidth)
r4Length.appendChild(r4Width)
range4.appendChild(r4Length)
range.appendChild(range4)

document.body.appendChild(container);
document.body.appendChild(range);

