// APP NAMESPACE OBJECT
const app = {};

// VARIABLES

let choice = "";
let currentPage = "";

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

// FUNCTIONS 

// PREVIOUS BUTTON FUNCTION 
app.prevBtn = function() {
  // app.$nextBtn.on('click', app.handleNext);

  // Finds the current form displaying, and gets the first input
  const currentPage = app.$questions.find('.active');
  
  if (currentPage.hasClass("questionFormOne")) {
    
  } else if (currentPage.hasClass("questionFormTwoA") || currentPage.hasClass("questionRounded")) {
    currentPage.toggleClass('active');
    app.$questionFormOne.toggleClass('active');
    app.$questionFormOne[0].reset();
    app.$prevBtn.removeClass('activeBtn');
  } else if (currentPage.hasClass("questionFormThreeA") || currentPage.hasClass("questionNeedlesGrouped") || currentPage.hasClass("questionNeedlesClustered")) {
    currentPage.toggleClass('active');
    app.$questionFormTwoA.toggleClass('active');
    app.$questionFormTwoA[0].reset();
  } else if (currentPage.hasClass("questionNeedlesSingleFlat") || currentPage.hasClass("questionNeedlesSingleAngled")) {
    currentPage.toggleClass('active');
    app.$questionFormThreeA.toggleClass('active');
    app.$questionFormThreeA[0].reset();
  } 
  // IF ON TREE PAGE
  else if (currentPage.hasClass("treeSlide")) {
    const currentTree = currentPage.find('h2').text();
    
    if (currentTree === "Balsalm Fir" || currentTree === "Hemlock") {
      currentPage.toggleClass('active');
      app.$questionNeedlesSingleFlat.toggleClass('active');
      app.$questionNeedlesSingleFlat[0].reset();
    } else if (currentTree === "White Spruce"  || currentTree === "Black Spruce") {
      currentPage.toggleClass('active');
      app.$questionNeedlesSingleAngled.toggleClass('active');
      app.$questionNeedlesSingleAngled[0].reset();
    } else if (currentTree.includes("Pine")) {
      currentPage.toggleClass('active');
      app.$questionNeedlesGrouped.toggleClass('active');
      app.$questionNeedlesGrouped[0].reset();
    } else if (currentTree === "Larch") {
      currentPage.toggleClass('active');
      app.$questionNeedlesClustered.toggleClass('active');
      app.$questionNeedlesClustered[0].reset();
    } else if (currentTree === "Eastern Red Cedar" || currentTree === "Eastern White Cedar") {
      currentPage.toggleClass('active');
      app.$questionRounded.toggleClass('active');
      app.$questionRounded[0].reset();
    }
  }
} // Previous button function ENDS

// NEXT BUTTON FUNCTION
app.handleNext = function () {

  if (choice === "needles") {
    app.$questionFormOne.toggleClass('active');
    app.$questionFormTwoA.toggleClass('active');
    app.$prevBtn.addClass('activeBtn');
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
    app.$prevBtn.addClass('activeBtn');
  } else if (currentPage.hasClass('questionFormTree')) {
    currentPage.toggleClass('active');
    app.$treeSlide.toggleClass('active');

    // Create variables that grab data from tree object
    const treeName = app.trees[choice].name;
    const treeLatin = app.trees[choice].latin;
    const treeImage = app.trees[choice].image.path;
    console.log(treeImage);
    const treeDesc = app.trees[choice].desc;

    // Place variables into DOM
    app.$treeSlide.find('h2').text(treeName);
    app.$treeSlide.find('.treeLatin').text(treeLatin);
    app.$treeSlide.find('img').attr('src', treeImage).attr('alt', `Close-up of ${treeName}'s leaves`);
    app.$treeSlide.find('.treeDesc').text(treeDesc);
  }

  // This event listener will be re-added after another selection has been made in the selectQuestion method.
  // NOTE: Apply styling so the Next button doesn't look interactive
  app.$nextBtn.removeClass('activeBtn');

} // Next button function ENDS

// RADIO BUTTON SELECT FUNCTION
app.selectQuestion = function(e) {
  // When a choice has been selected, this will put an event listener on the next button
  // NOTE: I should change the styling so it officially looks interactive
  

  // app.$nextBtn.css('pointer-events', 'auto');
  app.$nextBtn.addClass('activeBtn');

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
  app.$nextBtn.on('click', app.handleNext);

};

// DOCUMENT READY
$(() => { app.init() });



