class StopWatch {
    constructor(element) {
        this.timer = element;
        this.time = 0; // 10ms(1/100s)
        this._render();
    }

    get isStart() {
        return !!this,this.intervalId; // null -> false, !null -> true, !!null -> false
    }

    start() {
        this.intervalId = setInterval(() => {
            this.time++;
            this._render();
        }, 10);
    }

    stop() {
        if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null; // null -> false
        }
    }

    clear() {
        this.stop();
        this.time = 0;
        this._render();
    }

    _render() {
        const tenMs = `${this.time % 100}`.padStart(2, '0');
        // 문자열 빈자리 채우기(2자리가 안 될 경우 시작을 '0'으로 채우기)
        const sec = `${parseInt(this.time / 100) % 60}`.padStart(2, '0');
        const min = `${parseInt(this.time / 6000)}`.padStart(2, '0');
        this.timer.innerHTML = `${min}:${sec}:${tenMs}`;
    }
}