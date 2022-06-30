let money = document.querySelector('#money');
let enemy = document.querySelector('#enemy');
let points = 0;
let damageHealth = 100;

let scoreText = document.querySelector('#score-text');
let currentScoreText = document.querySelector('#current-score-text');


let healthText = document.querySelector('#health-text');
let damageText = document.querySelector('#damage-text');
let autoText = document.querySelector('#auto-text');
let randomText = document.querySelector('#random-text');

let health = document.querySelector('#health');
let damage = document.querySelector('#damage');
let auto = document.querySelector('#auto');
let random = document.querySelector('#random');
let progressBar = document.querySelector('#health__enemy');

let enemyAvatar = document.querySelector('#enemy__avatar');

let moreDamage = 0;

let content = document.querySelector('.content');
let container = document.querySelector('.container');

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];



enemy.addEventListener('click', () => {
    
    var colorRandom = colorArray[Math.floor(Math.random()* colorArray.length)];

    points++;

    money.textContent = points;

    const randomNumber = Math.floor(Math.random() * (699 - 2 + 1)) + 2;

    if (points % randomNumber === 0) {

        health.classList.remove('disabled');
    }


    if (points % randomNumber === 0) {

        damage.classList.remove('disabled');
    }

    if (points % randomNumber === 0) {

        auto.classList.remove('disabled');
    }

    if (points % randomNumber === 0) {

        random.classList.remove('disabled');
    }

    if(points % 100 === 0){

        content.style.backgroundColor = `${colorRandom}`;
        container.style.backgroundColor = `${colorRandom}cf`;
    }

    progressBarHealth();

    console.log(colorRandom);

});

function resetButtons() {

    const randomNumber = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
    const randomSeconds = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;

    

    health.addEventListener('click', () => {
        health.classList.add('disabled');
    });

    damage.addEventListener('click', () => {

        damage.classList.add('disabled');

        moreDamage = randomNumber;

        setTimeout(resetDamage, 8000);
        
    });

    auto.addEventListener('click', () => {

        autoText.textContent = randomSeconds/1000;

        auto.classList.add('disabled');

        const autoClick = setInterval(progressBarHealth, 1000);

        setTimeout(function(){
            clearInterval(autoClick);
            autoText.textContent = 0;
        }, randomSeconds);

        
    });

    

    random.addEventListener('click', () => {
        random.classList.add('disabled');
    });
}

resetButtons();

function progressBarHealth() {

    const randomNumber = Math.floor(Math.random() * (105 - 1 + 1)) + 1;

    const randomHealth = Math.floor(Math.random() * (100 - 999 + 1) + 999);


    if(moreDamage != 0){

        damageHealth = damageHealth - 1 * moreDamage;

    } else {

        damageHealth--;
    }


    progressBar.value = damageHealth;

    if (damageHealth <= 0) {

        damageHealth = randomHealth;

        progressBar.value = damageHealth;

        enemyAvatar.src = `img/pepps/peep-${randomNumber}.png`;

        currentScoreText.textContent = randomHealth;

    }

    resetButtons();

    scoreText.textContent = damageHealth;

    damageText.textContent = moreDamage;

}

function resetDamage(){

    moreDamage = 0;
}
