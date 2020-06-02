
// DOCUMENT READY
$(() => {

const app = {};

// VARIABLES

// app.$form = $('.questionForm');
app.$prevBtn = $('.previousBtn');
app.$nextBtn = $('.nextBtn');

app.$questionFormOne = $('.questionFormOne');
app.$questionFormTwoA = $('.questionFormTwoA'); 
app.$questionFormThreeA = $('.questionFormThreeA');

app.userAnswers = [];

// FUNCTIONS 

app.handleNext = function() {

  const $form = $('.questionForm');
  
  const selectedItem = $form.find("input[type='radio']:checked");

  console.log(selectedItem);

  // const choice = selectedItem.classList[0];

  // console.log(choice);

  // if (choice === "needles") {
  //   app.$questionFormOne.toggleClass('questionFormActive');
  //   app.$questionFormTwoA.toggleClass('questionFormActive');
  // } else if (choice === "rounded") {

  // } else if (choice === "single") {
  //   app.$questionFormTwoA.toggleClass('questionFormActive');
  //   app.$questionFormThreeA.toggleClass('questionFormActive');
  // }


  
  
  // app.$form.html(`
  //   <label for="optionOne">
  //     <input type="radio" id="optionOne" class="optionOne" name="questionOne">
  //     <span>Are the leaves shaped like needles?</span>
  //   </label>
  // `);
}






// EVENT LISTENERS

app.$nextBtn.on('click', app.handleNext);


});



