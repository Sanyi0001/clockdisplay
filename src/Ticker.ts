/**
 * The Ticker class represents the part of the ClockDisplay that acts at a 
 * specific time interval. At that interval, it calls the timeTick method of
 * the associated `ClockDisplay` object. The interval can be set via the 
 * constructor in milliseconds. 
 * 
 * There are 1000 milliseconds in one second.
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

    private animator: Animator;

    /**
     * Construct Ticker.
     * 
     * @param animator 
     * @param interval optional, default set to 1000 milliseconds
     */
    public constructor(animator: Animator, interval: number = 1000) {
        this.animator = animator;
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
    public toggle() {
        if (this.isRunning()) {
            clearInterval(this.timerId);   
            this.timerId = null; //so this object knows the timer isn't running.    
        } else {
            this.timerId = setInterval(this.intervalHandler, this.interval);        
        }
    }

    /**
     * This method is called by the timer at each timing event. This MUST be an 
     * arrw function because of the redefinition of `this` in other function 
     * types.
     */
    private intervalHandler = () => {
        if (this.animator) {
            this.animator.animate();
        }
    }
    
}