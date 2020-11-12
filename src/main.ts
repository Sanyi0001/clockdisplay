console.log("Javascript is working!");

// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    
    const clock = new ClockDisplay(document.getElementById('output'));

    const cat = new Cat(document.getElementById('mood'),document.getElementById('hunger'),document.getElementById('energy'));

    const animator = new Animator(clock,cat);

    document.getElementById('tickerButton').addEventListener("click", () => {
        console.log("User clicked Start game/pause button");
        cat.startGame(document.getElementById('catState'));
        animator.toggleAnimation();
    });

    document.getElementById('play').addEventListener("click", () => {
        console.log("User clicked play button");
        cat.play();
    });

    document.getElementById('feed').addEventListener("click", () => {
        console.log("User clicked feed button");
        cat.feed();
    });

    document.getElementById('sleep').addEventListener("click", () => {
        console.log("User clicked sleep button");
        cat.sleep();
    });

});