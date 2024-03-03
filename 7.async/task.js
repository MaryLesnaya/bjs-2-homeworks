class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback){
    if (time === undefined && callback === undefined) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const res = this.alarmCollection.fined(item => item.time === time);
    if (res) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => {
      return alarm.time !== time
    });
  }

  getCurrentFormattedTime() { 
    let currentTime = new Date().toLocaleTimeString('it-IT');
    let newCurrentTime = currentTime.substring(0, currentTime.length - 3);
    return newCurrentTime;
  }

  start() {
    if (this.intervalId !== undefined) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime && alarm.canCall === true) {
          alarm.canCall === false;
          alarm.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = []; 
  }
}