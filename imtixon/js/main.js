let index = 1;
sliderShow(index);

function sliderShow(a){
    let slider = document.getElementsByClassName("slider");
    let line = document.getElementsByClassName("line");


    if(a > slider.length){
        index = 1;
    }

    if(a<1){
        index = slider.length;
    }

    for(let i=0; i<slider.length; i++){
        slider[i].style.display = "none";
    }
    for(let i=0; i<line.length; i++){
        line[i].className = line[i].className.replace("active","");
    }

    slider[index-1].style.display = "block";
    line[index-1].className += " active";
}

function plusSlider(n){
    sliderShow(index += n);
}

function lineSlider(n){
    sliderShow(index = n);
}


let play = setInterval(function() {

    document.getElementById("next").click();
    
   
}, 3000);


let valueDisplay = document.querySelectorAll(".number");


let interval = 1000;

valueDisplay.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue =parseInt(valueDisplay.getAttribute("data-val"));

    let duration =Math.floor((interval/endValue)) ;

    let result = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent = startValue;
        if(startValue ==endValue){
        clearInterval(result);
        }
    },duration);
})

$(function () {
	var filterList = {
		init: function () {
			$('.portfolio-grid').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all'
    		}     
			});								
		}
	};
	filterList.init();
});	

window.addEventListener('load',() => {
    AOS.init({
      duration:2000,
      easing: "ease-in-out"
    });
  });

$(window).on('load',function(){
    $(".loader").fadeOut(2000);
    $(".project").fadeIn(4000);
})