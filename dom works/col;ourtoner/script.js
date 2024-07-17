function colourChange(event){
    
    let color=event.target.value

    let root=document.querySelector("#root")

    root.removeAttribute("class")

    root.setAttribute("class",`bg-${color}`)


}