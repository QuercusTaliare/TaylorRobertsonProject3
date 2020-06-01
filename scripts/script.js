
// DOCUMENT READY
$(() => {

const app = {};

// VARIABLES

app.$nextBtn = $('.nextBtn'); 

app.questions = {
  needleShaped: {
    option: "Are the leaves needle-shaped?",
    next: {
      singleNeedles: {

      },
      groupedNeedles: {

      },
      clusteredNeedles: {

      }
    }
  },
  rounded: {
    option: "Are the leaves rounded?",

  }
}

// FUNCTIONS 

app.handleNext = function() {
  console.log("working");
}






// EVENT LISTENERS

app.$nextBtn.on('click', app.handleNext);


});



