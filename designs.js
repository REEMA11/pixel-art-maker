

  const sizePicker = document.querySelector('#sizePicker');
  
  sizePicker.addEventListener('submit', function(event){ // submit button
    event.preventDefault(); // to prevent the default action 
    makeGrid(); // after the user enter the data, call makeGrid function
 });

function makeGrid() { // this function makeGrid to build the table and change the color.
  const pixelCanvas = document.querySelector('#pixelCanvas');
  const height = document.getElementById('inputHeight');
  const width = document.getElementById('inputWidth');
  let row = ""; // declare a variable row
  for (let i=0; i<height.value; i++){// loop for insert row
      row  += '<tr>'; // The <tr> tag defines a row in an HTML table and <tr> element contains the <td> and <th> elements 
                        // I used <tr> to add/insert row and stored in row variable
          for(let j=0; j<width.value; j++){ // lppo for insert cells
            row += '<td></td>'; // add/insert cells to the row by td tag and closed the tag why? because every row have the same cells "the cells inseide the row".
          } // end of cell loop    
  } //end of row loop
  row += '</tr>'; // end of tr tag and stored all in row variable.
  pixelCanvas.innerHTML=row; //to examine the current HTML source of the page, including any changes that have been made since the page was initially loaded.
 
  pixelCanvas.addEventListener('click', function(event){// for changes the backgroundcolor, when click on the cell.
    if(event.target.nodeName.toLowerCase() === 'td'){ //Add a check to see if the clicked element is a cell
        event.target.style.backgroundColor = document.querySelector('#colorPicker').value;
    }
})
   
  
}


       
     
  