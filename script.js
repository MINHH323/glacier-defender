let game = {
    hp: 100,
    score: 0,
    level: 1,
    speed: 3,
    rate: 1000,
    name: localStorage.getItem('glacier-nickname') || "Anonymous"
};

let spawnTimer;
let isGameOver = false;

// 게임 시작 함수
function startGame() {
    const nameInput = document.getElementById('user-name').value;
    if (nameInput) {
        game.name = nameInput;
        localStorage.setItem('glacier-nickname', nameInput);
    }
    
    document.getElementById('start-screen').style.display = 'none';
    isGameOver = false;
    spawnTimer = setInterval(spawn, game.rate);
    animate();
}

// 블랙 카본(적) 생성
function spawn() {
    if (isGameOver) return;
    
    const enemy = document.createElement('div');
    enemy.className = 'black-carbon';
    enemy.style.left = Math.random() * (window.innerWidth - 40) + 'px';
    enemy.style.top = '-50px';
    document.getElementById('viewport').appendChild(enemy);

    // 클릭하면 제거 (성공)
    enemy.onclick = function() {
        if (isGameOver) return;
        this.remove();
        if (window.hitSuccess) window.hitSuccess();
    };
}

// 프레임마다 적의 위치 계산 및 충돌 체크
function animate() {
    if (isGameOver) return;

    const enemies = document.getElementsByClassName('black-carbon');
    const glacier = document.getElementById('glacier');
    const glacierRect = glacier.getBoundingClientRect();

    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        let top = parseFloat(enemy.style.top);
        
        // 아래로 이동
        top += game.speed;
        enemy.style.top = top + 'px';

        // 빙하에 닿았는지 체크 (충돌!)
        if (top + 40 > glacierRect.top) {
            enemy.remove();
            if (window.hitFail) window.hitFail(); // 체력 깎기 함수 호출
        }
    }

    requestAnimationFrame(animate);
}

// 게임 종료 처리
function endGame() {
    isGameOver = true;
    clearInterval(spawnTimer);
    
    // 결과 화면 띄우기
    document.getElementById('result-screen').style.display = 'flex';
    document.getElementById('final-score').innerText = game.score;
    
    // 랭킹 저장 함수 호출 (index.html에 있는 함수)
    if (window.saveRank) window.saveRank();
}

// 초기 랭킹 로드
if (window.showRanks) window.showRanks();
