

// VARIABLES

const generateBtn = document.getElementById("generate-btn")
const paletteContainer = document.querySelector(".palette-container")

const colorBox = document.getElementsByClassName("color-box")
console.log(colorBox);


// EVENT LISTNERS

generateBtn.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", (event)=>{
    if(event.target.classList.contains("copy-btn")){
        const hexValue = event.target.previousElementSibling.textContent
        navigator.clipboard.writeText(hexValue)
        .then(()=> showCopySuccess(event.target))
        .catch((err)=> alert(err))
    } else if(event.target.classList.contains("color")){
        const hexValue = event.target.nextElementSibling.querySelector(".hex-value").textContent;
        navigator.clipboard.writeText(hexValue)
        .then(()=> showCopySuccess(event.target.nextElementSibling.querySelector(".copy-btn")))
        .catch((err)=> alert(err))

    }
})



// FUNCTIONS

function showCopySuccess(element){
    element.classList.remove("far", "fa-copy")
    element.classList.add("fas", "fa-check")
    
    element.style.color = "#48bb78"
    
    setTimeout(()=>{
        element.classList.remove("fas", "fa-check")
        element.classList.add("far", "fa-copy")
        element.style.color = ""

    }, 1000)
}

function generatePalette(){
    const colors = []
    for(let i=0;i<5;i++){
        colors.push(generateRandomColor())
    }
    console.log(colors);

    updatePaletteDisplay(colors)
}

function generateRandomColor(){
    const letters = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color;
}

function updatePaletteDisplay(colors){
    const colorBoxes = document.querySelectorAll(".color-box")
    colorBoxes.forEach((box, index)=>{
        const color = colors[index]
        const colorDiv = box.querySelector(".color")
        const hexValue = box.querySelector(".hex-value")
        colorDiv.style.backgroundColor = color
        hexValue.innerHTML = color
    })

}


generatePalette();

const temp = document.getElementById("temp")

temp.addEventListener("click", ()=>{

    const copiedText = navigator.clipboard.readText()
    .then((data)=>{
        console.log(data[0]);
        temp.innerText = data
    })
    .catch((err)=>{
        alert(err)
    })
    temp.innerText = copiedText
})



nothing