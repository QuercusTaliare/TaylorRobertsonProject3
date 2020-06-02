// APP NAMESPACE OBJECT
const app = {};

// VARIABLES

let choice = "";
let currentForm = "";

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

// Next Button Function
app.handleNext = function () {



  if (choice === "needles") {
    app.$questionFormOne.toggleClass('questionFormActive');
    app.$questionFormTwoA.toggleClass('questionFormActive');
  } else if (choice === "single") {
    app.$questionFormTwoA.toggleClass('questionFormActive');
    app.$questionFormThreeA.toggleClass('questionFormActive');
  } else if (choice === "flat") {
    app.$questionFormThreeA.toggleClass('questionFormActive');
    app.$questionNeedlesSingleFlat.toggleClass('questionFormActive');
  } else if (choice === "angled") {
    app.$questionFormThreeA.toggleClass('questionFormActive');
    app.$questionNeedlesSingleAngled.toggleClass('questionFormActive');
  } else if (choice === "grouped") {
    app.$questionFormTwoA.toggleClass('questionFormActive');
    app.$questionNeedlesGrouped.toggleClass('questionFormActive');
  } else if (choice === "rounded") {
    console.log("yes");
    app.$questionFormOne.toggleClass('questionFormActive');
    app.$questionRounded.toggleClass('questionFormActive');
  } else if (currentForm.classList.contains('questionFormTree')) {
    currentForm.remove('questionFormActive');
    app.$treeSlide.toggleClass('treeSlideActive');

    const treeName = app.trees[choice].name;
    const treeDesc = app.trees[choice].desc;

    app.$treeSlide.find('h2')[0].innerHTML = treeName;
    app.$treeSlide.find('p')[0].innerHTML = treeDesc;
  }

}

// Radio Button Select Function
app.selectQuestion = function(e) {
  // When a choice has been selected, this will put an event listener on the next button
  // NOTE: I should change the styling so it officially looks interactive
  app.$nextBtn.off('click', app.handleNext);
  app.$nextBtn.on('click', app.handleNext);

  choice = e.target.className;
  console.log(choice);
  currentForm = e.target.form;
  console.log(currentForm.classList.contains('questionFormTree'));

}

app.init = function () {

  // SELECTOR VARIABLES

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
  app.$questionRounded = $('.questionRounded');

  app.$treeSlide = $('.treeSlide');

  // EVENT LISTENERS

  app.$form.on('click', 'input[type="radio"]', app.selectQuestion);

};

// DOCUMENT READY
$(() => { app.init() });



