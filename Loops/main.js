//---------------1------------------------
const experiencePoints = [100,150,75]
let totalExperience = 0;
for (let i = 0; i < experiencePoints.length;i++) {
    totalExperience += experiencePoints[i]
}
console.log(`totalExperience of all completed points:${totalExperience} points`)

//---------------2------------------------
const questTitles = ["Quest1","Quest2","Quest3"]

for (let i = 1; i <=questTitles.includes("Quest2"); i++) {
 console.log(questTitles[i]);
}

//---------------3------------------------
const enemyHealthS = [80,120,65]
for (let i = 0; i <= enemyHealthS.length; i++) {
if (enemyHealthS[i]>=100){
    console.log(enemyHealthS[i])
}
}

//---------------4------------------------
const questRewards = [50,100,75]
for (let i = 0; i <= questRewards.length; i++){
    console.log(questRewards[i]+20)
}

//---------------5------------------------
const questRewards1 = [50,100,75,100]
const specificReward = 100;
for (let i = 0; i <= questRewards1.length; i++){
    if (questRewards1[i] === specificReward){
        console.log(questRewards1[i])
    }
}

//---------------6------------------------
const questChallenges = [120,150,75]
const threshold = 100;
for (let i = 0; i <= questChallenges.length; i++) {
    if (questChallenges[i] >= threshold){
        console.log(questChallenges[i])
    }
}

//---------------7------------------------
const questRewards2 = [50 ,100,75,150]

for (let i = 0; i <= questRewards2.length; i++) {
    if (questRewards2[i] > 100){
        console.log(questRewards2[i])
    }
}

//---------------8------------------------
const enemyPowers = [50, 80, 65, 90];
const enemyHealths = [80, 120, 60, 100];

// Function to calculate total assault value
function calculateAssaultValue(powers, healths) {
  // Initialize total assault value
  let totalAssaultValue = 0;

  // Iterate over each enemy
  for (let i = 0; i < powers.length; i++) {
    // Calculate the assault value for the current enemy and add it to the total
    totalAssaultValue += powers[i] * healths[i];
  }

  // Return the total assault value
  return totalAssaultValue;
}

// Calculate total assault value
const totalAssaultValue = calculateAssaultValue(enemyPowers, enemyHealths);

// Log the total assault value
console.log("Total Assault Value:", totalAssaultValue);
