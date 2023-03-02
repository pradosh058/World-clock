const updateTime = ()=>{ 
    let d = new Date()
    us.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(", ")[1]
    india.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
  }).split(", ")[1]
    china.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'Asia/Shanghai',
  }).split(", ")[1]

  let alarmhour = alarm.value.split(":")[0]
  let alarmmin = alarm.value.split(":")[1]
  // console.log(d.getHours(), alarmhour)
  // console.log(d.getMinutes(), alarmmin)
  if(d.getHours()==alarmhour && d.getMinutes() == alarmmin){
    console.log("Alarm is ringing")
    let audiourl = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
    var audio = new Audio(audiourl);
    audio.play();
  }
  }
  setInterval(updateTime, 1000);
