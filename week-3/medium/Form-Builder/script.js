//get input from html page, log them and store them in variables

const typeDropdown = document.getElementById("type");
const fieldLabelInput = document.getElementById("field-label");

function addField(fieldType, fieldLabelValue){
    const field = document.createElement('input');
    field.setAttribute('type', `${fieldType}`);
    field.setAttribute("id", `${fieldLabelValue}`);
    field.setAttribute("name", `${fieldLabelValue}`);

    const fieldLabel = document.createElement('label');
    fieldLabel.setAttribute('for', `${fieldLabelValue}`);
    fieldLabel.innerHTML = `${fieldLabelValue}`;

    fieldLabelInput.innerHTML = '';

    const parentNode = document.getElementById('form-preview');
    const fieldDiv = document.createElement(`div`);
    fieldDiv.setAttribute("id", `${fieldType}-div`);
    
    fieldDiv.appendChild(field);
    fieldDiv.appendChild(fieldLabel);
    parentNode.appendChild(fieldDiv);

}

function submitFunctionality(){
    const fieldType = typeDropdown.value;
    const fieldLabelValue = fieldLabelInput.value;

    addField(fieldType, fieldLabelValue);

}



// if value is this then do this -- inject accordingly