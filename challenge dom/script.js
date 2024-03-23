// start header 
let header = document.createElement("header");
let logo = document.createElement("div");
let nav = document.createElement("nav");
let myUl = document.createElement("ul");

let liOne = document.createElement("li");
let liTwo = document.createElement("li");
let liThree = document.createElement("li");
let liFour = document.createElement("li");

let home = document.createTextNode("home")
let link = document.createTextNode("link")
let about = document.createTextNode("about")
let contact = document.createTextNode("contact")


header.className = "header";
logo.className = "logo";
nav.className = "nav";
myUl.className = "links";


liOne.className = "same";
liTwo.className = "same";
liThree.className = "same";
liFour.className = "same"

header.style.cssText = "display: flex ; justify-content: space-between ; padding: 10px";
logo.innerText = "elzero";
logo.style.cssText = "color: green; font-size: 30px ; padding: 5px 10px ; font-weight: bold";
nav.style.cssText = "flex: 1 ; height:60px";
myUl.style.cssText = "display: flex ; justify-content: flex-end;align-items: center; margin: 0 15px; height:100% ; padding: 0 30px";
liOne.style.cssText = "padding: 0 5px ; font-size: 18px ";
liTwo.style.cssText = "padding: 0 5px ; font-size: 18px ";
liThree.style.cssText = "padding: 0 5px ; font-size: 18px ";
liFour.style.cssText = "padding: 0 5px ; font-size: 18px ";

document.body.style.cssText = "margin: 0px ; padding: 0px ; box-sizing: border-box";
myUl.style.listStyle = "none";


header.append(logo);
nav.append(myUl);
myUl.append(liOne,liTwo,liThree,liFour);
liOne.append(home);
liTwo.append( link);
liThree.append( about);
liFour.append( contact);

header.append(nav);
document.body.appendChild(header);

// end header 
// start content 
let section = document.createElement("section");
for (let i = 0; i < 15; i++) {
    let box = document.createElement("div");
    let info = document.createElement("div");
    let myP = document.createElement("p");
    let text = document.createTextNode("prodect");
    let span = document.createElement("span");
    info.className = "infoPro";
    box.style.cssText = "height: 100px; background-color: #fff ;  "
    span.append(i + 1);
    info.append(span, myP);
    myP.append(text);
    box.append(info);
    section.append(box);
    info.style.cssText = "height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column; height: 100%";
    myP.style.cssText = " margin: 0px ; color: #999; padding: 5px 0"
    span.style.cssText = "display: block; font-size: 22px; font-weight:bold";
}
section.style.cssText = "padding:20px ;display: grid; grid-template-columns: repeat(3,auto); gap: 30px  ; background-color: #eee ";
document.body.append(section);
// end content
// start footer 
let footer = document.createElement("footer");
let infoFoot = document.createElement("p");
let contentFoot = document.createTextNode("copyright 2022")
footer.className = "footer"
footer.style.cssText = "background-color: green; padding: 20px 10px"
infoFoot.style.cssText = "color: white; letter-spacing: 0.8px ; font-size: 25px; text-align: center"
infoFoot.append(contentFoot)
footer.append(infoFoot)
document.body.appendChild(footer)
// end footer

// // second method 
// // Function To Create Elements
// const create = el => document.createElement(`${el}`);
// // create Elements
// let header = create("header");
// let logo = create("span");
// let ul = create("ul");
// let content = create("div");
// let footer = create("footer");
// // Give Classes To The ELements
// header.classList.add("website-header");
// logo.classList.add("logo");
// ul.classList.add("menu");
// content.classList.add("content");
// footer.classList.add("footer");
// for(let i = 0; i < 15; i++){
//     if(i < 4){
//         let menuLi = create("li");
//         menuLi.className = `menu-list-${i+1}`;
//         menuLi.style.cssText = "margin: 0 10px; cursor: pointer; font-size: 17px; color: #777;";
//         ul.appendChild(menuLi);
//     }
//     let productBox = create("div");
//     let productNum = create("span");
//     productBox.style.cssText = "padding: 25px; display: flex; align-items: center; flex-direction: column-reverse; background-color: #fff;"
//     productBox.textContent = "product";
//     productNum.style.cssText = "font-size: 30px; color: #777;"
//     productNum.textContent = `${i+1}`
//     content.appendChild(productBox)
//     productBox.appendChild(productNum);
// }
// // Append Elements
// document.body.appendChild(header);
// header.appendChild(logo)
// header.appendChild(ul)
// document.body.appendChild(content);
// document.body.appendChild(footer);
// // TextContent
// logo.textContent = "elzero"
// document.getElementsByTagName("li")[0].textContent = "home"
// document.getElementsByTagName("li")[1].textContent = "about"
// document.getElementsByTagName("li")[2].textContent = "services"
// document.getElementsByTagName("li")[3].textContent = "contact"
// footer.textContent = "2022"
// // Style Elements
// document.body.style.cssText = "margin: 0; font-family: monospace; text-transform: capitalize;";
// header.style.cssText = "display: flex; justify-content: space-between; align-items: center; background-color: #fff; padding: 20px;";
// logo.style.cssText = "cursor: pointer; font-size: 30px; font-weight: bold; color: green;";
// ul.style.cssText = "margin: 0; padding: 0; list-style: none; display: flex;";
// content.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill , minmax(350px , 1fr)); gap: 10px; background-color: rgb(185 183 183); padding: 15px;";
// footer.style.cssText = "text-align: center; padding: 20px; font-weight: bold; background-color: green; color: white; font-size: 25px;"