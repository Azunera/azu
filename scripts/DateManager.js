const d = new Date();
class DateManager {
    date;
    clock;
    constructor(clock_id) {
        const clock_element = document.getElementById(clock_id);
        if (!clock_element) {
            throw new Error(`Clock with id ${clock_id} not found on the dom`);
        }
        this.clock = clock_element;
        this.tick();
    }
    tick() {
        console.log("hey");
        this.date = new Date();
        this.updateClock();
    }
    updateClock() {
        this.clock.setAttribute("datetime", this.date.toISOString());
        const hour = this.date.getHours().toString().padStart(2, "0");
        const minute = this.date.getMinutes().toString().padStart(2, "0");
        const second = this.date.getSeconds().toString().padStart(2, "0");
        this.clock.innerText = `${hour}:${minute}:${second}`;
    }
    getTime() {
        return this.date;
    }
}
export default DateManager;
