/**
 * The Animator class handles the animation. It holds a `Ticker` object that
 * calls the `animate()` method at regilar intervals.
 * 
 * @author BugSlayer
 */
class Animator {

    private clock: ClockDisplay;

    private ticker: Ticker;

    /**
     * Construct Animator.
     * 
     * @param clock 
     */
    public constructor(clock: ClockDisplay) {
        this.clock = clock;
        this.ticker = new Ticker(this);
    }

    /**
     * Handles an interval. This method is called by the `Ticker` at regular
     * intervals when the ticker is running.
     */
    public animate() {
        this.clock.timeTick();
    }

    /**
     * Toggles the automatic intervals of the ticker.
     */
    public toggleAnimation() {
        this.ticker.toggle();
    }

}