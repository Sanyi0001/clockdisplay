class Cat{

    // Properties
    private mood: Need;
    private hunger: Need;
    private energy: Need;

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
        // console.log("Cat constructed!");
    }

    // Methods
    private meow(){
        console.log("Meow!");
    }

    public feed(){
        this.hunger.decrement();
        this.mood.increment();
        this.meow();
        this.outputDataToDOM()
        this.isCatStillAlive();
    }

    public play(){
        this.mood.increment();
        this.energy.decrement();
        this.meow();
        this.outputDataToDOM()
        this.isCatStillAlive();
    }

    public sleep(){
        this.energy.increment();
        this.hunger.increment();  
        this.outputDataToDOM()
        this.isCatStillAlive();
    }

    public timeTick(){
        this.hunger.increment();
        this.outputDataToDOM()
        this.isCatStillAlive();
        console.log("Cat tick Method called! Hunger: "+this.hunger.getValue());
    }

    private outputDataToDOM(){
        this.outputMood.innerText = this.mood.getValue().toString();
        this.outputHunger.innerText = this.hunger.getValue().toString();
        this.outputEnergy.innerText = this.energy.getValue().toString();
        // console.log(this.mood,this.hunger,this.energy);
    }

    private isCatStillAlive(){
        if (!((this.mood.getNeedIsFulfilled()) && (this.energy.getNeedIsFulfilled()) && (this.hunger.getNeedIsFulfilled())) ) {
            this.catIsDead();
        } 
    }

    private catIsDead(){
        alert("Your cat died because you ignored it's "+this.reasonWhyCatIsDead());
    }

    private reasonWhyCatIsDead(){
        if (!this.mood.getNeedIsFulfilled()) {
            return this.mood.getType();
        } else if(!this.hunger.getNeedIsFulfilled()){
            return this.hunger.getType();
        } else {
            return this.energy.getType();
        }
    }

}