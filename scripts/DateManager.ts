interface date {
    clock: Clock;
    date: Calendar;
}

interface Clock {
    hour: number;
    minute: number;
    seconds: number;
}

interface Calendar {
    day: number;
    month: number;
    year: number;
}

const d: Date = new Date();

class DateManager {
    private date!: Date;
    private clock: HTMLElement;

    public constructor(clock_id: string) {

        const clock_element: HTMLElement | null = document.getElementById(clock_id);
        
        if (!clock_element) {
            throw new Error(`Clock with id ${clock_id} not found on the dom`)
        }

        this.clock = clock_element

        this.tick();
    }

    public tick(): void {
        console.log("hey");

        this.date = new Date();
        this.updateClock();
    }

    public updateClock(): void {
        this.clock.setAttribute("datetime", this.date.toISOString())
        const hour = this.date.getHours().toString().padStart(2, "0");
        const minute = this.date.getMinutes().toString().padStart(2, "0");
        const second = this.date.getSeconds().toString().padStart(2, "0");
        this.clock.innerText = `${hour}:${minute}:${second}`;
    }
    

    public getTime(): Date {
        return this.date;
    } 

}

export default DateManager;