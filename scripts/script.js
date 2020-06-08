// APP NAMESPACE OBJECT
const app = {};

// DATA
// https://www.eekwi.org/explore/identification/dichotomous-tree-key
// This website provided inspiration for my app and gave me a template for my app's tree-identification logic 

app.trees = {
  balsalmFir: {
    name: "Balsalm Fir",
    latin: "Abies balsamea",
    desc: "evergreen, needle-like leaves have their bases twisted and appear opposite, 1-2.5cm long, 1.5-2mm wide, flattened, dark-green above, 2 white bands on the underside",
    image: {
      path: "./assets/balsalmFir-RobRoutledge.jpg",
      photographer: "Rob Routledge, Sault College, Bugwood.org"
    }
  },
  hemlock: {
    name: "Hemlock",
    latin: "Tsuga canadensis",
    desc: "evergreen, needle-like leaves, the bases twisted and appearing opposite, 1-2cm long, flattened, blunt-tipped, dark yellowish green above, pale below with 2 white stripes",
    image: {
      path: "./assets/hemlock-RobRoutledge.jpg",
      photographer: "Rob Routledge, Sault College, Bugwood.org"
    }
  }, 
  whiteSpruce: {
    name: "White Spruce",
    latin: "Picea glauca",
    desc: "evergreen, needle-like leaves, 4-sided, 1-2.5cm long, bluish green, sharp-pointed, retained on branches for several years",
    image: {
      path: "./assets/whiteSpruce-paulWray.jpg",
      photographer: "Paul Wray, Iowa State University, Bugwood.org"
    }
  },
  blackSpruce: {
    name: "Black Spruce",
    latin: "Picea mariana",
    desc: "evergreen, needle-like leaves, 4-sided, 0.6-1.5cm long, pale bluish green, blunt-tipped",
    image: {
      path: "./assets/blackSpruce-RobRoutledge.jpg",
      photographer: "Rob Routledge, Sault College, Bugwood.org"
    }
  },
  whitePine: {
    name: "White Pine",
    latin: "Pinus strobus",
    desc: "evergreen, needle-like leaves, 5-15cm long, 0.7-1mm wide, in groups of 5, bluish green, soft, flexible, slightly twisted",
    image: {
      path: "./assets/whitePine - Richard Webb.jpg",
      photographer: "Richard Webb, Bugwood.org"
    }
  },
  redPine: {
    name: "Red Pine",
    latin: "Pinus resinosa",
    desc: "evergreen, needle-like leaves, 10-16cm long, in pairs, dark yellowish green, often clustered near branch tips",
    image: {
      path: "./assets/redPine-JosephObrien.jpg",
      photographer: "Joseph OBrien, USDA Forest Service, Bugwood.org"
    }
  }, 
  jackPine: {
    name: "Jack Pine",
    latin: "Pinus banksiana",
    desc: "evergreen, needle-like leaves, grouped in pairs, twisted, spreading, 2-5cm long, 1-2mm wide, yellowish green",
    image: {
      path: "./assets/jackPine-RobRoutledge.jpg",
      photographer: "Rob Routledge, Sault College, Bugwood.org"
    }
  },
  scotsPine: {
    name: "Scot's Pine",
    latin: "Pinus sylvetris",
    desc: "evergreen, needle-like leaves, 3.5-8cm long, 1-2mm wide, grouped in pairs, bluish green, twisted, sharp-pointed",
    image: {
      path: "./assets/scotsPine-tDavisSydnor.jpg",
      photographer: "T. Davis Sydnor, The Ohio State University, Bugwood.org"
    }
  },
  larch: {
    name: "Larch",
    latin: "Larix laricina",
    desc: "deciduous, needle-like leaves, 3-angled, soft, pale green, 1-2.5mm long, 0.5-0.8mm wide, in clusters of 10-20, turning pale yellow in autumn",
    image: {
      path: "./assets/larch-robRoutledge.jpg",
      photographer: "Rob Routledge, Sault College, Bugwood.org"
    }
  },
  easternWhiteCedar: {
    name: "Eastern White Cedar",
    latin: "Thuja occidentalis",
    desc: "evergreen, opposite, in 4 rows, dull yellowish green, scale-like, 2-5mm long, overlapping those above; young leaves glandular-dotted",
    image: {
      path: "./assets/easternWhiteCedar-ForestAndKimStarr.jpg",
      photographer: "Forest and Kim Starr, Starr Environmental, Bugwood.org"
    }
  },
  easternRedCedar: {
    name: "Eastern Red Cedar",
    latin: "Juniperus virginiana",
    desc: "evergreen, opposite, in 4 rows, bluish green; older branches with scale-like leaves 1-3mm long; young branches with sharper leaves 5-7mm long",
    image: {
      path: "./assets/easternRedCedar-ChrisEvans.jpg",
      photographer: "Chris Evans, University of Illinois, Bugwood.org"
    }
  }
}

// FUNCTIONS --------------------------------------------------------

// START AGAIN BUTTON FUNCTION 

app.againBtn = function() {

  app.currentPage = app.$questions.find('.active');

  if (!app.currentPage.hasClass("questionFormOne")) {
    
    app.currentPage.toggleClass('active');
    app.$questionFormOne.toggleClass('active');
    app.$questionFormOne[0].reset();

    app.$againBtn.removeClass('activeBtn');
    app.$prevBtn.removeClass('activeBtn');
    app.$nextBtn.removeClass('activeBtn');

    if(!app.currentPage.hasClass("treeSlide")) {
      app.currentPage[0].reset();
    }
  }

}

// PREVIOUS BUTTON FUNCTION 
app.prevBtn = function() {

  app.currentPage = app.$questions.find('.active');
  
  if (app.currentPage.hasClass("questionFormTwoA") || app.currentPage.hasClass("questionRounded")) {
    app.currentPage.toggleClass('active');
    app.$questionFormOne.toggleClass('active');
    app.$questionFormOne[0].reset();
    app.$prevBtn.removeClass('activeBtn');
    app.$againBtn.removeClass('activeBtn');
  } else if (app.currentPage.hasClass("questionFormThreeA") || app.currentPage.hasClass("questionNeedlesGrouped") || app.currentPage.hasClass("questionNeedlesClustered")) {
    app.currentPage.toggleClass('active');
    app.$questionFormTwoA.toggleClass('active');
    app.$questionFormTwoA[0].reset();
  } else if (app.currentPage.hasClass("questionNeedlesSingleFlat") || app.currentPage.hasClass("questionNeedlesSingleAngled")) {
    app.currentPage.toggleClass('active');
    app.$questionFormThreeA.toggleClass('active');
    app.$questionFormThreeA[0].reset();
  } 
  // ELSE IF ON TREE PAGE
  else if (app.currentPage.hasClass("treeSlide")) {
    const currentTree = app.currentPage.find('h2').text();
    
    if (currentTree === "Balsalm Fir" || currentTree === "Hemlock") {
      app.currentPage.toggleClass('active');
      app.$questionNeedlesSingleFlat.toggleClass('active');
      app.$questionNeedlesSingleFlat[0].reset();
    } else if (currentTree === "White Spruce"  || currentTree === "Black Spruce") {
      app.currentPage.toggleClass('active');
      app.$questionNeedlesSingleAngled.toggleClass('active');
      app.$questionNeedlesSingleAngled[0].reset();
    } else if (currentTree.includes("Pine")) {
      app.currentPage.toggleClass('active');
      app.$questionNeedlesGrouped.toggleClass('active');
      app.$questionNeedlesGrouped[0].reset();
    } else if (currentTree === "Larch") {
      app.currentPage.toggleClass('active');
      app.$questionNeedlesClustered.toggleClass('active');
      app.$questionNeedlesClustered[0].reset();
    } else if (currentTree === "Eastern Red Cedar" || currentTree === "Eastern White Cedar") {
      app.currentPage.toggleClass('active');
      app.$questionRounded.toggleClass('active');
      app.$questionRounded[0].reset();
    }
  }
} // Previous button function ENDS

// NEXT BUTTON FUNCTION
app.handleNext = function () {

  // Makes Next Button unclickable until another input is selected
  app.$nextBtn.removeClass('activeBtn');

  if (app.choice === "needles") {
    app.$questionFormOne.toggleClass('active');
    app.$questionFormTwoA.toggleClass('active');
    app.$questionFormTwoA[0].reset();
    // Makes Previous and Start Again Buttons active
    app.$prevBtn.addClass('activeBtn');
    app.$againBtn.addClass('activeBtn');
  } else if (app.choice === "single") {
    app.$questionFormTwoA.toggleClass('active');
    app.$questionFormThreeA.toggleClass('active');
    app.$questionFormThreeA[0].reset();
  } else if (app.choice === "flat") {
    app.$questionFormThreeA.toggleClass('active');
    app.$questionNeedlesSingleFlat.toggleClass('active');
    app.$questionNeedlesSingleFlat[0].reset();
  } else if (app.choice === "angled") {
    app.$questionFormThreeA.toggleClass('active');
    app.$questionNeedlesSingleAngled.toggleClass('active');
    app.$questionNeedlesSingleAngled[0].reset();
  } else if (app.choice === "grouped") {
    app.$questionFormTwoA.toggleClass('active');
    app.$questionNeedlesGrouped.toggleClass('active');
    app.$questionNeedlesGrouped[0].reset();
  } else if (app.choice === "clustered") {
    app.$questionFormTwoA.toggleClass('active');
    app.$questionNeedlesClustered.toggleClass('active');
    app.$questionNeedlesClustered[0].reset();
  } else if (app.choice === "rounded") {
    app.$questionFormOne.toggleClass('active');
    app.$questionRounded.toggleClass('active');
    app.$questionRounded[0].reset();
    // Make Previous and Start Again Buttons active
    app.$prevBtn.addClass('activeBtn');
    app.$againBtn.addClass('activeBtn');
  } 
  // ELSE IF USER IS ABOUT TO CHOOSE A TREE
  else if (app.currentPage.hasClass('questionFormTree')) {
    app.currentPage.toggleClass('active');
    app.$treeSlide.toggleClass('active');

    // Creates variables that grab data from tree object
    const treeName = app.trees[app.choice].name;
    const treeLatin = app.trees[app.choice].latin;
    const treeImage = app.trees[app.choice].image.path;
    const treeImagePhotographer = app.trees[app.choice].image.photographer;
    const treeDesc = app.trees[app.choice].desc;

    // Places variables into DOM
    app.$treeSlide.find('h2').text(treeName);
    app.$treeSlide.find('.treeLatin').text(treeLatin);
    app.$treeSlide.find('img').attr('src', treeImage).attr('alt', `Close-up of ${treeName}'s leaves`);
    app.$treeSlide.find('.treeImagePhotographer').text(treeImagePhotographer);
    app.$treeSlide.find('.treeDesc').text(`${treeDesc}*`);

  } 
  
} // Next button function ENDS

// RADIO BUTTON SELECT FUNCTION
app.selectQuestion = function() {
  
  // Makes Next Button clickable
  app.$nextBtn.addClass('activeBtn');
  // Gets Class from input choice
  app.choice = $(this).attr('class');
  // Gets Page with current 'active' class
  app.currentPage = app.$questions.find('.active');
  
} // Radio button function ENDS

// INIT FUNCTION -------------------------------------
app.init = function () {

  // SELECTOR VARIABLES

  app.$questions = $('.questions');
  app.$form = $('.questionForm');
  app.$prevBtn = $('.previousBtn');
  app.$nextBtn = $('.nextBtn');
  app.$againBtn = $('.againBtn');
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
  app.$nextBtn.on('click', app.handleNext);
  app.$againBtn.on('click', app.againBtn);

};

// DOCUMENT READY
$(() => { app.init() });



