const question = document.querySelector('#question');
let  buttonYes = document.querySelector('#buttonOne');
let buttonNo = document.querySelector('#buttonTwo');
let buttonThree = document.querySelector('#buttonThree');


// Slim

//Slim with pains and budget

buttonYes.addEventListener('click', painQuestionSlim);
buttonNo.addEventListener('click', painQuestionHeavy);  /// heavy people section

//Yes button description


function painQuestionSlim(){
question.innerHTML = "Do you suffer from back pain?";
buttonYes.innerHTML = "Yes";
buttonNo.innerHTML = "No";
buttonYes.addEventListener('click', budgetQuestionSlimPain);
buttonNo.addEventListener('click', budgetQuestionSlimNoPain);
}



function budgetQuestionSlimPain() {
question.innerHTML = "Are you looking for a budget mattress?";
buttonYes.innerHTML = "Yes";
buttonNo.innerHTML = "No";
buttonYes.addEventListener('click', budgetSlimPainPose);
buttonNo.addEventListener('click', allergyQuestionSlimPain);     
}

function budgetSlimPainPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    buttonYes.innerHTML = "Back";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', budgetSlimPainPoseBack);
    buttonNo.addEventListener('click', budgetSlimPainPoseSide);
    buttonThree.addEventListener('click', budgetSlimPainPoseStomach); 
}

function budgetSlimPainPoseBack() {
    question.innerHTML = "Your best choice is a firm polyfoam or a firm innerspring mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function budgetSlimPainPoseSide() {
    question.innerHTML = "Your best choice is a memory foam mattress. Choose a softer mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function budgetSlimPainPoseStomach() {
    question.innerHTML = "Your best choice is an ultra-firm polyfoam or a firm innerspring mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

// Slim with pains LUX mattress


function allergyQuestionSlimPain() {
    question.innerHTML = "Are you allergic to something?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', slimPainLuxFirmnessQuestion);
    buttonNo.addEventListener('click', slimPainLuxNoAllergyFirmnessQuestion);
}

function slimPainLuxFirmnessQuestion() {
    question.innerHTML = "Do you need flexible firmness in your mattress?";
    question.classList.remove('white');
    buttonYes.style.display = "block";
    buttonYes.innerHTML = "Yes";
    buttonNo.style.display = "block";
    buttonNo.innerHTML = "No";
    buttonThree.style.display = "none";
    buttonYes.addEventListener('click', slimPainLuxAllergyFlexPose);
    buttonNo.addEventListener('click', slimPainLuxAllergyNoFlexPose);
}

function slimPainLuxAllergyFlexPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Back";
    buttonYes.style.display = "block";
    buttonNo.innerHTML = "Side";
    buttonNo.style.display = "block";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', slimPainLuxAllergyFlexPoseBack);
    buttonNo.addEventListener('click', slimPainLuxAllergyFlexPoseSide);
    buttonThree.addEventListener('click', slimPainLuxAllergyFlexPoseStomach);
}

function slimPainLuxAllergyFlexPoseBack() {
    question.innerHTML = "Your best choice is a hybrid airbed mattress. You can set its firmness on your phone! Set it firm to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function slimPainLuxAllergyFlexPoseSide() {
    question.innerHTML = "Your best choice is a hybrid airbed mattress. You can set its firmness on your phone! Set it softer to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function slimPainLuxAllergyFlexPoseStomach() {
    question.innerHTML = "Your best choice is a hybrid airbed mattress. You can set its firmness on your phone! Set it firm to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

// No flexibility needed


function slimPainLuxAllergyNoFlexPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    buttonYes.style.display = "block";
    buttonYes.innerHTML = "Back";
    buttonNo.style.display = "block";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', slimPainLuxAllergyNoFlexPoseBack);
    buttonNo.addEventListener('click', slimPainLuxAllergyNoFlexPoseSide);
    buttonThree.addEventListener('click', slimPainLuxAllergyNoFlexPoseStomach);
}

function slimPainLuxAllergyNoFlexPoseBack() {
    question.innerHTML = "Your best choice is a medium-firm hybrid mattress with latex foam. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function slimPainLuxAllergyNoFlexPoseSide() {
    question.innerHTML = "Your best choice is a latex mattress or a hybrid with a latex layer. Choose a softer mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function slimPainLuxAllergyNoFlexPoseStomach() {
    question.innerHTML = "Your best choice is a firm hybrid mattress with tall coil sections and latex foam layer. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

// no allergy slim lux

function slimPainLuxNoAllergyFirmnessQuestion() {
    question.innerHTML = "Do you need flexible firmness in your mattress?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', slimPainLuxAllergyFlexPose);
    buttonNo.addEventListener('click', slimPainLuxAllergyNoFlexEcoQuestion);
}

function slimPainLuxAllergyNoFlexEcoQuestion() {
    question.innerHTML = "Are you eco-conscious?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', slimPainLuxAllergyNoFlexPose);
    buttonNo.addEventListener('click', slimPainLuxAllergyNoFlexNoEcoPose);
}

function slimPainLuxAllergyNoFlexNoEcoPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    buttonYes.innerHTML = "Back";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', slimPainLuxAllergyNoFlexNoEcoPoseBack);
    buttonNo.addEventListener('click', slimPainLuxAllergyNoFlexNoEcoPoseSide);
    buttonThree.addEventListener('click', slimPainLuxAllergyNoFlexNoEcoPoseStomach);
}

function slimPainLuxAllergyNoFlexNoEcoPoseBack() {
    question.innerHTML = "Your best choice is a medium-firm hybrid mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function slimPainLuxAllergyNoFlexNoEcoPoseSide() {
    question.innerHTML = "Your best choice is a soft memory foam hybrid mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function slimPainLuxAllergyNoFlexNoEcoPoseStomach() {
    question.innerHTML = "Your best choice is an ultra-firm hybrid mattress with tall coil sections and high-dense foam layer. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

////

// slim with no pains
//No-pains button description 


function budgetQuestionSlimNoPain(){
    question.innerHTML = "Are you looking for a budget mattress?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', budgetSlimNoPainPose);
    buttonNo.addEventListener('click', allergyQuestionSlimNoPain);   
}


function budgetSlimNoPainPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    buttonYes.innerHTML = "Back";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', budgetSlimNoPainPoseBack)
    buttonNo.addEventListener('click', budgetSlimNoPainPoseSide)
    buttonThree.addEventListener('click', budgetSlimNoPainPoseStomach) 
}

function budgetSlimNoPainPoseBack() {
    question.innerHTML = "Your best choice is a medium-firm innerspring mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function budgetSlimNoPainPoseSide() {
    question.innerHTML = "Your best choice is a soft memory foam mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function budgetSlimNoPainPoseStomach() {
    question.innerHTML = "Your best choice is an ultra-firm innerspring mattress. Choose a firm mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

/// No-pains no-budget slim   


function allergyQuestionSlimNoPain() {
    question.innerHTML = "Are you allergic to something?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', slimPainLuxFirmnessQuestion);
    buttonNo.addEventListener('click', slimNoPainLuxNoAllergyFirmnessQuestion); 
}

function slimNoPainLuxNoAllergyFirmnessQuestion() {
    question.innerHTML = "Do you need flexible firmness in your mattress?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', slimPainLuxAllergyFlexPose);
    buttonNo.addEventListener('click', slimNoPainLuxAllergyNoFlexEcoQuestion);
}

function slimNoPainLuxAllergyNoFlexEcoQuestion() {
    question.innerHTML = "Are you eco-conscious?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', slimPainLuxAllergyNoFlexPose);
    buttonNo.addEventListener('click', slimNoPainLuxAllergyNoFlexNoEcoNoHotQuestion);
}

function slimNoPainLuxAllergyNoFlexNoEcoNoHotQuestion() {
    question.innerHTML = "Do you sleep hot?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', slimPainLuxAllergyNoFlexPose);
    buttonNo.addEventListener('click', bouncyQuestion);
}

function bouncyQuestion() {
    question.innerHTML = "Do you like bouncy structure in your mattress?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', yesBouncy);
    buttonNo.addEventListener('click', noBouncy);
}

function yesBouncy() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Back";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', yesBouncyBack)
    buttonNo.addEventListener('click', yesBouncySide)
    buttonThree.addEventListener('click', yesBouncyStomach) 
}

function yesBouncyBack() {
    question.innerHTML = "Your best choice is an innerspring mattress or a hybrid mattress with latex and innerspring layers. Choose a medium-firm or firm mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function yesBouncySide() {
    question.innerHTML = "Your best choice is an innerspring mattress or a hybrid mattress with latex and innerspring layers. Choose a soft mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function yesBouncyStomach() {
    question.innerHTML = "Your best choice is an innerspring mattress or a hybrid mattress with latex and innerspring layers. Choose a firm mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function noBouncy() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Back";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', noBouncyBack)
    buttonNo.addEventListener('click', noBouncySide)
    buttonThree.addEventListener('click', noBouncyStomach) 
}

function noBouncyBack() {
    question.innerHTML = "Your best choice is a thick hybrid mattress with latex and pocketed coil layers. Choose a firm mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function noBouncySide() {
    question.innerHTML = "Your best choice is a hybrid mattress with latex and memory foam layers. Choose a soft mattress. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function noBouncyStomach() {
    question.innerHTML = "Your best choice is an ultra-firm hybrid mattress with dense foam and tall coil sections. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}


//// Heavy people

//Yes and no pains button

function painQuestionHeavy() {
question.innerHTML = "Do you suffer from back pain?";
buttonYes.innerHTML = "Yes";
buttonNo.innerHTML = "No";
buttonYes.addEventListener('click', budgetQuestionHeavyPain);
buttonNo.addEventListener('click', budgetQuestionHeavyNoPain);
}

function budgetQuestionHeavyPain() {
    question.innerHTML = "Are you looking for a budget mattress?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', budgetHeavyPainPose);
    buttonNo.addEventListener('click', allergyQuestionHeavyPain);    
}

//yes-budget for heavy

function budgetHeavyPainPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Back";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', budgetHeavyPainPoseBack)
    buttonNo.addEventListener('click', budgetHeavyPainPoseSide)
    buttonThree.addEventListener('click', budgetHeavyPainPoseStomach) 
}

function budgetHeavyPainPoseBack() {
    question.innerHTML = "Your best choice is a high-density foam mattress. It should be at least 12' or 30cm thick. Choose a firm mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function budgetHeavyPainPoseSide() {
    question.innerHTML = "Your best choice is a firm memory foam mattress. It should be at least 12' or 30cm thick. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function budgetHeavyPainPoseStomach() {
    question.innerHTML = "Your best choice is a high-density foam mattress. It should be at least 12' or 30cm thick. Choose an ultra-firm mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

//no-budget for heavy


function allergyQuestionHeavyPain() {
    question.innerHTML = "Are you allergic to something?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', heavyPainLuxEcoQuestion);
    buttonNo.addEventListener('click', heavyPainLuxNoAllergyEcoQuestion);
}

function heavyPainLuxEcoQuestion() {
    question.innerHTML = "Are you eco-conscious?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonThree.style.display = "none";
    buttonYes.addEventListener('click', heavyPainLuxEcoYesPose);
    buttonNo.addEventListener('click', heavyPainLuxNoAllergyNoEcoPose);
}

function heavyPainLuxEcoYesPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Back";
    buttonYes.style.display = "block";
    buttonNo.innerHTML = "Side";
    buttonTwo.style.display = "block";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', heavyPainLuxEcoYesPoseBack);
    buttonNo.addEventListener('click', heavyPainLuxEcoYesPoseSide);
    buttonThree.addEventListener('click', heavyPainLuxEcoYesPoseStomach);
}

function heavyPainLuxEcoYesPoseBack() {
    question.innerHTML = "Your best choice is a firm latex hybrid mattress with steel coils. It should be at least 12' or 30cm thick. Choose a firm mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function heavyPainLuxEcoYesPoseSide() {
    question.innerHTML = "Your best choice is a medium-firm latex hybrid mattress with pocketed coils. It should be at least 12' or 30cm thick. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function heavyPainLuxEcoYesPoseStomach() {
    question.innerHTML = "Your best choice is an ultra-firm latex hybrid mattress with heavy duty innerspring. It should be at least 12' or 30cm thick. Choose an ultra-firm mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

//heavy not allergic no-eco  

function heavyPainLuxNoAllergyEcoQuestion() {
    question.innerHTML = "Are you eco-conscious?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', heavyPainLuxEcoYesPose);
    buttonNo.addEventListener('click', heavyPainLuxNoAllergyNoEcoPose);
}


function heavyPainLuxNoAllergyNoEcoPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    question.classList.remove('white');
  
    buttonYes.style.display = "block";
    buttonYes.innerHTML = "Back";
    
    buttonNo.style.display = "block";
    buttonNo.innerHTML = "Side";
    
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
  
    buttonYes.addEventListener('click', heavyPainLuxNoAllergyNoEcoPoseBack)
    buttonNo.addEventListener('click', heavyPainLuxNoAllergyNoEcoPoseSide)
    buttonThree.addEventListener('click', heavyPainLuxNoAllergyNoEcoPoseStomach) 
}

function heavyPainLuxNoAllergyNoEcoPoseBack() {
    question.innerHTML = "Your best choice is a hybrid mattress with high-density foam layer and tempered steel coils. It should be at least 12' or 30cm thick. Choose a firm mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function heavyPainLuxNoAllergyNoEcoPoseSide() {
    question.innerHTML = "Your best choice is a medium firm hybrid mattress with memory foam and pocketed coils. It should be at least 12' or 30cm thick. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function heavyPainLuxNoAllergyNoEcoPoseStomach() {
    question.innerHTML = "Your best choice is an ultra-firm multi-layer mattress which contains latex foam and innerspring. It should be at least 14' or 35cm thick. Choose an ultra-firm mattress to relieve your back pain. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

//heavy people no pains

// budget mattress


function budgetQuestionHeavyNoPain() {
    question.innerHTML = "Are you looking for a budget mattress?";
    buttonYes.innerHTML = "Yes";
    buttonNo.innerHTML = "No";
    buttonYes.addEventListener('click', budgetHeavyNoPainPose);
    buttonNo.addEventListener('click', allergyQuestionHeavyPain);    
}

function budgetHeavyNoPainPose() {
    question.innerHTML = "Which sleeping position do you normaly prefer?";
    question.classList.remove('white');
    buttonYes.innerHTML = "Back";
    buttonNo.innerHTML = "Side";
    buttonThree.style.display = "block";
    buttonThree.innerHTML = "Stomach";
    buttonYes.addEventListener('click', heavyNoPainBudgetPoseBack);
    buttonNo.addEventListener('click', heavyNoPainBudgetPoseSide);
    buttonThree.addEventListener('click', heavyNoPainBudgetPoseStomach);
}

function heavyNoPainBudgetPoseBack() {
    question.innerHTML = "Your best choice is a hybrid mattress with high-density polyfoam layers and at least 8-inch tall coil system. The mattress should be at least 12' or 30cm thick. Visit a local mattress store and try out a mattress for at least 15 minutes";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function heavyNoPainBudgetPoseSide() {
    question.innerHTML = "Your best choice is a medium firm hybrid mattress with memory foam and at least 8-inch tall coil system. The mattress should be at least 12' or 30cm thick. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}

function heavyNoPainBudgetPoseStomach() {
    question.innerHTML = "Your best choice is an ultra-firm multi-layer mattress which contains high-density polyfoam and at least 8-inch tall coil system. It should be at least 14' or 35cm thick. Visit a local mattress store and try out a mattress for at least 15 minutes.";
    question.classList.add('white');
    buttonYes.style.display = "none";
    buttonNo.style.display = "none";
    buttonThree.style.display = "none";
}


gsap.from('h1', {
  opacity: 0,
  duration: 2,
  delay: 0.5,
  y: 20
})

gsap.from('#textBox', {
  opacity: 0,
  duration: 2,
  delay: 1.5
})

gsap.from('#buttonBox', {
  opacity: 0,
  duration: 2,
  delay: 3
})
