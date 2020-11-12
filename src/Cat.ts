class Cat{

    // Properties
    private mood: Need;
    private hunger: Need;
    private energy: Need;

    private happyMeow : HTMLAudioElement;

    private outputMood: HTMLElement;
    private outputHunger: HTMLElement;
    private outputEnergy: HTMLElement;

    public constructor(mood: HTMLElement, hunger: HTMLElement, energy: HTMLElement){
        this.mood = new Need("mood",0);
        this.hunger = new Need("hunger",10);
        this.energy = new Need("energy",0);
        this.outputMood = mood;
        this.outputHunger = hunger;
        this.outputEnergy = energy;
        this.happyMeow = new Audio("meow.mp3");
        this.outputDataToDOM();
        // console.log("Cat constructed!");
    }

    // Methods
    public startGame(locationId: HTMLElement){
       locationId.className = "showCat";
    }

    private finishGame(locationId: HTMLElement){
        locationId.className = "hideCat";
    }

    private meow(){
        this.happyMeow.play();
    }

    public feed(){
        this.hunger.decrement();
        this.mood.increment();
        this.meow();
        
        this.isCatStillAlive();
        this.outputDataToDOM()
    }

    public play(){
        this.mood.increment();
        this.energy.decrement();
        this.meow();
        
        this.isCatStillAlive();
        this.outputDataToDOM();
    }

    public sleep(){
        this.energy.increment();
        this.hunger.increment();  
        
        this.isCatStillAlive();
        this.outputDataToDOM()
    }

    public timeTick(){
        this.hunger.increment();
        
        this.isCatStillAlive();
        this.outputDataToDOM()
    }

    private outputDataToDOM(){
        this.outputMood.innerText = this.mood.getValue().toString();
        this.outputHunger.innerText = this.hunger.getValue().toString();
        this.outputEnergy.innerText = this.energy.getValue().toString();
    }

    private isCatStillAlive(){
        if (!((this.mood.getNeedIsFulfilled()) && (this.energy.getNeedIsFulfilled()) && (this.hunger.getNeedIsFulfilled())) ) {
            document.getElementById('cat').innerHTML = '<img src="catDead.jpg" alt="A cat">';
            this.finishGame(document.getElementById('catState'));
            setTimeout(() => {this.catIsDead();}, 30);
        } 
    }

    private catIsDead(){
        window.location.reload();
        alert(`Your cat died because you ignored it's ${this.reasonWhyCatIsDead()}! Try again!`);
        
    }

    private reasonWhyCatIsDead(){
        if (!this.mood.getNeedIsFulfilled()) {
            console.log("mood");
            return this.mood.getType();
        } else if(!this.hunger.getNeedIsFulfilled()){
            console.log("hunger");
            return this.hunger.getType();
        } else {
            console.log("else:energy");
            return this.energy.getType();
        }
    }

}