import data from './data.json' with { type: 'json' };
const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")
const workH1 = document.querySelector(".work-h1")
const workP = document.querySelector(".work-p")
const playH1 = document.querySelector(".play-h1")
const playP = document.querySelector(".play-p")
const studyH1 = document.querySelector(".study-h1")
const studyP = document.querySelector(".study-p")
const exerciseH1 = document.querySelector(".exercise-h1")
const exerciseP = document.querySelector(".exercise-p")
const socialH1 = document.querySelector(".social-h1")
const socialP = document.querySelector(".social-p")
const selfCareH1 = document.querySelector(".selfcare-h1")
const selfCareP = document.querySelector(".selfcare-p")
const dailyLi = document.getElementById('daily')
const weeklyLi = document.getElementById('weekly')
const monthlyLi = document.getElementById('monthly')
defaultData()

function defaultData() {
    workH1.innerText = `${data[0].timeframes.weekly.current}hrs`;
    workP.innerText = `Last Week -  ${data[0].timeframes.weekly.previous}hrs`
    playH1.innerText = `${data[1].timeframes.weekly.current}hrs`;
    playP.innerText = `Last Week -  ${data[1].timeframes.weekly.previous}hrs`
    studyH1.innerText = `${data[2].timeframes.weekly.current}hrs`;
    studyP.innerText = `Last Week -  ${data[2].timeframes.weekly.previous}hrs`
    exerciseH1.innerText = `${data[3].timeframes.weekly.current}hrs`;
    exerciseP.innerText = `Last Week -  ${data[3].timeframes.weekly.previous}hrs`
    socialH1.innerText = `${data[4].timeframes.weekly.current}hrs`;
    socialP.innerText = `Last Week -  ${data[4].timeframes.weekly.previous}hrs`
    selfCareH1.innerText = `${data[5].timeframes.weekly.current}hrs`;
    selfCareP.innerText = `Last Week -  ${data[5].timeframes.weekly.previous}hrs`
}

function weeklyData() {
    if (dailyLi.classList.contains('active')) {
        dailyLi.classList.remove('active')
    }if (monthlyLi.classList.contains('active')) {
        monthlyLi.classList.remove('active')
    } else {
        weeklyLi.classList.add('active')
    }
    defaultData()
}


function dailyData() {
    if (weeklyLi.classList.contains('active')) {
        weeklyLi.classList.remove('active')
    }if (monthlyLi.classList.contains('active')) {
        monthlyLi.classList.remove('active')
    } else {
        dailyLi.classList.add('active')
    }
    workH1.innerText = `${data[0].timeframes.daily.current}hrs`;
    workP.innerText = `Previous Day -  ${data[0].timeframes.daily.previous}hrs`
    playH1.innerText = `${data[1].timeframes.daily.current}hrs`;
    playP.innerText = `Previous Day -  ${data[1].timeframes.daily.previous}hrs`
    studyH1.innerText = `${data[2].timeframes.daily.current}hrs`;
    studyP.innerText = `Previous Day -  ${data[2].timeframes.daily.previous}hrs`
    exerciseH1.innerText = `${data[3].timeframes.daily.current}hrs`;
    exerciseP.innerText = `Previous Day -  ${data[3].timeframes.daily.previous}hrs`
    socialH1.innerText = `${data[4].timeframes.daily.current}hrs`;
    socialP.innerText = `Previous Day -  ${data[4].timeframes.daily.previous}hrs`
    selfCareH1.innerText = `${data[5].timeframes.daily.current}hrs`;
    selfCareP.innerText = `Previous Day -  ${data[5].timeframes.daily.previous}hrs`
}

function monthlyData() {
    if (weeklyLi.classList.contains('active')) {
        weeklyLi.classList.remove('active')
    }if (dailyLi.classList.contains('active')) {
        dailyLi.classList.remove('active')
    } else {
        monthlyLi.classList.add('active')
    }
    workH1.innerText = `${data[0].timeframes.monthly.current}hrs`;
    workP.innerText = `Last Month -  ${data[0].timeframes.monthly.previous}hrs`
    playH1.innerText = `${data[1].timeframes.monthly.current}hrs`;
    playP.innerText = `Last Month -  ${data[1].timeframes.monthly.previous}hrs`
    studyH1.innerText = `${data[2].timeframes.monthly.current}hrs`;
    studyP.innerText = `Last Month -  ${data[2].timeframes.monthly.previous}hrs`
    exerciseH1.innerText = `${data[3].timeframes.monthly.current}hrs`;
    exerciseP.innerText = `Last Month -  ${data[3].timeframes.monthly.previous}hrs`
    socialH1.innerText = `${data[4].timeframes.monthly.current}hrs`;
    socialP.innerText = `Last Month -  ${data[4].timeframes.monthly.previous}hrs`
    selfCareH1.innerText = `${data[5].timeframes.monthly.current}hrs`;
    selfCareP.innerText = `Last Month -  ${data[5].timeframes.monthly.previous}hrs`
}

daily.addEventListener('click', dailyData)
weekly.addEventListener('click', weeklyData)
monthly.addEventListener('click', monthlyData)



