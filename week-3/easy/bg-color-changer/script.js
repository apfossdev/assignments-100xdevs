function change_BG_color(color){
    document.body.style.background = color;
}

function setup_custom_BG_color(){
    const customInput = document.getElementById("custom-color-input");
    const customInputValue = customInput.value;
    // console.log(customInputValue);
    const customColor = document.createElement('button');
    customColor.setAttribute("id",customInputValue);
    customColor.setAttribute("onclick", `change_BG_color("${customInputValue}")`);
    customColor.setAttribute("style",`background-color:${customInputValue};`);
    customColor.innerHTML = customInputValue;
    const parentNode = document.getElementById('color-panel');
    parentNode.appendChild(customColor);
    customInput.value = '';
}


