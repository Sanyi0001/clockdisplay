class Need{

    // Properties
    private type : string;
    private value : number;
    private limit : number; //If this limit is reached the need was not met
    private needIsFulfilled : boolean;
    private startingValue : number;

    /**
     * 
     * @param type type of the need
     * @param limit limit, when cat dies
     * @param startingValue starting value
     */
    public constructor(type: string, limit: number, startingValue: number = 10){
        this.type = type;
        this.limit = limit;
        this.startingValue = startingValue;
        this.value = this.determineDefaultValue();
        this.needIsFulfilled = true;
    }

    // Methods

    // Determining the default value of value
    private determineDefaultValue(){
        if (this.limit == 0) {
            return this.startingValue; // 10 by default
        } else {
            return  0;
        }
    }

    public increment(value: number = 1){
        this.isNeedFulfilled();
        this.value++;
    }

    public decrement(value: number = 1){
        this.isNeedFulfilled();
        this.value--;
    }

    public getValue(): number{
        return this.value
    }

    public getType(): string{
        return this.type;
    }

    public getNeedIsFulfilled(){
        return this.needIsFulfilled;
    }

    private isNeedFulfilled(){
        if (this.limit == this.value) {
            this.needIsFulfilled = false;
        } else {
            this.needIsFulfilled = true;
        }
    }

}

