import { returnArray }  from "./index.js";
import { sumAvField } from "./index.js";
var user_generated_code = Math.floor(1000 + Math.random() * 9000)
const DEFUALT_ARRAY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function showDiv(div){
    div.style.display = "block";
}

function hideDiv(div){
    div.style.display = "none";
}

hideDiv(document.getElementById("heatmap"))
hideDiv(document.getElementById("results"))
    
//places the randomly generated code into the div
const clicked_gen = document.getElementById("code_maker")
clicked_gen.addEventListener('click', ()=>{
    document.getElementById("code_maker").innerHTML = user_generated_code
    document.getElementById("heatmap_code_display").innerHTML = user_generated_code
   showDiv(document.getElementById("heatmap"))
   hideDiv(document.getElementById("index"))
})

//check for invalid codes, valid codes
const submited_gen = document.getElementById("submit_code")
submited_gen.addEventListener('click', () => {
    let temp = document.getElementById("inputed").value
    if (temp != null && temp !="" && temp !=0){
        user_generated_code = document.getElementById("inputed").value
        document.getElementById("heatmap_code_display").innerHTML = user_generated_code
        showDiv(document.getElementById("heatmap"))
        hideDiv(document.getElementById("index"))
    }
    
    /*     
    if (db doesnt contain temp){
    } 
    */
    const textbox = document.getElementById("inputed")
    textbox.placeholder = "Type a Valid Code!"
})

//makes the heatmap checked when clicked
const heatmap_box = document.querySelectorAll('.box')
for (let index = 0; index < heatmap_box.length; index++) {
    const element = heatmap_box[index];
    element.addEventListener('click', ()=> {
        element.classList.toggle('active');
    })
}

function getVR(){
    let arrayCoppy = DEFUALT_ARRAY
    for (let index = 0; index < heatmap_box.length; index++) {
        const element = heatmap_box[index];
            if (element.classList.contains('active')){
                arrayCoppy[index] = 1
            }
    }
    return arrayCoppy
}

export {user_generated_code, getVR}
