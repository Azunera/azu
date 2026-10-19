import DateManager from "./DateManager.js";
function Main() {
    const dateManager = new DateManager("clock");
    setInterval(() => { dateManager.tick(); }, 1000);
}
Main();
