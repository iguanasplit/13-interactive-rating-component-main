


let rating = document.getElementsByName('rating');
const inputarea = document.querySelector('.radio-buttons');
const button = document.querySelector('.form-btn');

 const selectedRating = document.querySelector('.rating-selected');

 let radio = document.getElementsByName("rating");


 let valuechosen;


  inputarea.addEventListener('click', function () {
            
            switch (getRadio()) {
                
                case '1':
                    document.querySelector('.one').classList.add("label-checked");

                    document.querySelector('.two').classList.remove("label-checked");
                    document.querySelector('.three').classList.remove("label-checked");
                    document.querySelector('.four').classList.remove("label-checked");
                    document.querySelector('.five').classList.remove("label-checked");
                    break;
                case '2':
                    document.querySelector('.two').classList.add("label-checked");

                    document.querySelector('.one').classList.remove("label-checked");
                    document.querySelector('.three').classList.remove("label-checked");
                    document.querySelector('.four').classList.remove("label-checked");
                    document.querySelector('.five').classList.remove("label-checked");
                  break;
                  case '3':
                    document.querySelector('.three').classList.add("label-checked");

                    document.querySelector('.one').classList.remove("label-checked");
                    document.querySelector('.two').classList.remove("label-checked");
                    document.querySelector('.four').classList.remove("label-checked");
                    document.querySelector('.five').classList.remove("label-checked");
                  break;
                  case '4':
                    document.querySelector('.four').classList.add("label-checked");
                    
                    document.querySelector('.one').classList.remove("label-checked");
                    document.querySelector('.two').classList.remove("label-checked");
                    document.querySelector('.three').classList.remove("label-checked");
                    document.querySelector('.five').classList.remove("label-checked");
                   
                  break;
                  case '5':
                    document.querySelector('.five').classList.add("label-checked");
                    
                    document.querySelector('.one').classList.remove("label-checked");
                    document.querySelector('.two').classList.remove("label-checked");
                    document.querySelector('.three').classList.remove("label-checked");
                    document.querySelector('.four').classList.remove("label-checked");
                   
                  break;
                default:
                    
              }
          
          
        //   console.log(getRadio());
     
    
});

button.addEventListener('click', function () {

    document.querySelector('.thank-you').classList.remove("visibility-toggle");
    document.querySelector('.rating-State').classList.add("visibility-toggle");

    selectedRating.innerText = "You selected " + valuechosen + " out of 5";
    
});





function getRadio(){
   
    for (var i = 0, length = radio.length; i < length; i++) {
      if (radio[i].checked) {
        valuechosen =  radio[i].value;  
      }
    }
    return valuechosen
}
