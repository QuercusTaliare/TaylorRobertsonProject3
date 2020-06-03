// APP NAMESPACE OBJECT
const app = {};

// VARIABLES

let choice = "";
let currentPage = "";

app.trees = {
  balsalmFir: {
    name: "Balsalm Fir",
    desc: "balsalm paragraph"
  },
  hemlock: {
    name: "Hemlock",
    desc: "hemlock paragraph"
  }, 
  whitePine: {
    name: "White Pine",
    desc: "white pine"
  },
  redPine: {
    name: "Red Pine",
    desc: "red pine"
  }, 
  jackPine: {
    name: "Jack Pine",
    desc: "jack pine"
  },
  scotchPine: {
    name: "Scotch Pine",
    desc: "scotch pine"
  },
  larch: {
    name: "Larch",
    desc: "larch"
  },
  easternWhiteCedar: {
    name: "Eastern White Cedar",
    desc: "eastern white cedar"
  },
  easternRedCedar: {
    name: "Eastern Red Cedar",
    desc: "eastern red cedar"
  }
}

// FUNCTIONS 

// PREVIOUS BUTTON FUNCTION 
app.prevBtn = function() {
  // app.$nextBtn.on('click', app.handleNext);

  // Finds the current form displaying, and gets the first input
  const currentPage = app.$questions.find('.active');
  // console.log(currentPage);
  // const inputName = currentPage[0].name;
  // console.log(inputName);

  // console.log(className);

  // const currentSlide = app.$questions.find('.active')[0];


  if (currentPage.hasClass("questionFormOne")) {
    console.log("Nope");
  } else if (currentPage.hasClass("questionFormTwoA") || currentPage.hasClass("questionNeedlesClustered")) {
    currentPage.toggleClass('active');
    app.$questionFormOne.toggleClass('active');
    app.$questionFormOne[0].reset();
  } else if (currentPage.hasClass("questionFormThreeA")) {
    currentPage.toggleClass('active');
    app.$questionFormTwoA.toggleClass('active');
    app.$questionFormTwoA[0].reset();
  } else if (currentPage.hasClass("questionNeedlesSingleFlat") || currentPage.hasClass("questionNeedlesSingleAngled") || currentPage.hasClass("questionNeedlesGrouped")) {
    currentPage.toggleClass('active');
    app.$questionFormTwoA.toggleClass('active');
    app.$questionFormTwoA[0].reset();
  } else if (currentPage.hasClass("treeSlide")) {
    const currentTree = currentPage.find('h2').text();
    
    if (currentTree === "Eastern Red Cedar") {
      console.log(app.$questionRounded);
      currentPage.toggleClass('active');
      app.$questionRounded.toggleClass('active');
      app.$questionRounded[0].reset();
    }
  }
} // Previous button function ENDS

// NEXT BUTTON FUNCTION
app.handleNext = function () {
  
  // This event listener will be re-added after another selection has been made in the selectQuestion method.
  // NOTE: Apply styling so the Next button doesn't look interactive
  app.$nextBtn.off('click', app.handleNext);

  if (choice === "needles") {
    app.$questionFormOne.toggleClass('active');
    app.$questionFormTwoA.toggleClass('active');
  } else if (choice === "single") {
    app.$questionFormTwoA.toggleClass('active');
    app.$questionFormThreeA.toggleClass('active');
  } else if (choice === "flat") {
    app.$questionFormThreeA.toggleClass('active');
    app.$questionNeedlesSingleFlat.toggleClass('active');
  } else if (choice === "angled") {
    app.$questionFormThreeA.toggleClass('active');
    app.$questionNeedlesSingleAngled.toggleClass('active');
  } else if (choice === "grouped") {
    app.$questionFormTwoA.toggleClass('active');
    app.$questionNeedlesGrouped.toggleClass('active');
  } else if (choice === "clustered") {
    app.$questionFormTwoA.toggleClass('active');
    app.$questionNeedlesClustered.toggleClass('active');
  } else if (choice === "rounded") {
    app.$questionFormOne.toggleClass('active');
    app.$questionRounded.toggleClass('active');
  } else if (currentPage.hasClass('questionFormTree')) {


    currentPage.toggleClass('active');
    app.$treeSlide.toggleClass('active');

    const treeName = app.trees[choice].name;
    const treeDesc = app.trees[choice].desc;

    // console.log(treeName);

    app.$treeSlide.find('h2')[0].innerHTML = treeName;
    app.$treeSlide.find('p')[0].innerHTML = treeDesc;
  }

} // Next button function ENDS

// RADIO BUTTON SELECT FUNCTION
app.selectQuestion = function(e) {
  // When a choice has been selected, this will put an event listener on the next button
  // NOTE: I should change the styling so it officially looks interactive
  app.$nextBtn.on('click', app.handleNext);

  // Vanilla JS
  // choice = e.target.className;

  choice = $(this).attr('class');
  currentPage = app.$questions.find('.active');
  // currentPage = e.target.form;


} // Radio button function ENDS

// INIT FUNCTION -------------------------------------
app.init = function () {

  // SELECTOR VARIABLES

  app.$questions = $('.questions');
  app.$form = $('.questionForm');
  app.$prevBtn = $('.previousBtn');
  app.$nextBtn = $('.nextBtn');
  app.$radio = $('input[type="radio"]');

  app.$questionFormOne = $('.questionFormOne');
  app.$questionFormTwoA = $('.questionFormTwoA');
  app.$questionFormThreeA = $('.questionFormThreeA');

  app.$questionNeedlesSingleFlat = $('.questionNeedlesSingleFlat');
  app.$questionNeedlesSingleAngled = $('.questionNeedlesSingleAngled');
  app.$questionNeedlesGrouped = $('.questionNeedlesGrouped');
  app.$questionNeedlesClustered = $('.questionNeedlesClustered');
  app.$questionRounded = $('.questionRounded');

  app.$treeSlide = $('.treeSlide');

  // EVENT LISTENERS

  app.$form.on('click', 'input[type="radio"]', app.selectQuestion);
  app.$prevBtn.on('click', app.prevBtn);

};

// DOCUMENT READY
$(() => { app.init() });



