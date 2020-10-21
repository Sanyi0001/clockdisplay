/**
 * The Ticker class represents the part of the ClockDisplay that acts at a 
 * specific time interval. At that interval, it calls the timeTick method of
 * the associated `ClockDisplay` object. The interval can be set via the 
 * constructor in milliseconds. 
 * 
 * This class deals with the complexity of the `setInterval` and `clearInterval`
 * functions in Javascript.
 * 
 * @see https://www.w3schools.com/js/js_timing.asp
 * 
 * @author BugSlayer
 */
class Ticker {

    private interval: number;

    private timerId: number;

    private clockDisplay: ClockDisplay;

    /**
     * Construct Ticker.
     * 
     * @param clockDisplay 
     * @param interval optional, default set to 1000 milliseconds
     */
    public constructor(clockDisplay: ClockDisplay, interval: number = 1000) {
        this.clockDisplay = clockDisplay;
        this.interval = interval;
    }

    /**
     * Returns `true` if the interval timer is running.
     */
    public isRunning(): boolean {
        return this.timerId!=null;
    }

    /**
     * Toggles the interval timer. If the timer is running, it will stop the 
     * timer. Otherwise it will start the timer.
     */
    public startstop() {
        if (this.isRunning()) {
            clearInterval(this.timerId);   
            this.timerId = null;     
        } else {
            // Use arrow function te prevent the redefinition of `this` when 
            // the function is called.
            this.timerId = setInterval(() => {
                if (this.clockDisplay) {
                    this.clockDisplay.timeTick();
                }
            }, this.interval);        
        }
    }
    
}