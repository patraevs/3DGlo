function getDayPart(hours) {
    if (hours >= 0 && hours < 6) {
        return 'ночь';
    } else if (hours >= 6 && hours < 12) {
        return 'утро';
    } else if (hours >= 12 && hours < 18) {
        return 'день';
    } else {
        return 'вечер';
    }
}

function getDayOfWeek(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
}

function getDaysUntilNewYear(date) {
    const newYearDate = new Date(date.getFullYear() + 1, 0, 1);
    const diff = newYearDate.getTime() - date.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function displayInfo() {
    const currentDate = new Date();
    const dayPart = getDayPart(currentDate.getHours());
    const formattedTime = currentDate.toLocaleTimeString('en-US');
    const dayOfWeek = getDayOfWeek(currentDate);
    const daysUntilNewYear = getDaysUntilNewYear(currentDate);

    document.getElementById('greeting').textContent = `Добрый ${dayPart}`;
    document.getElementById('day-of-week').textContent = `Сегодня: ${dayOfWeek}`;
    document.getElementById('current-time').textContent = `Текущее время: ${formattedTime}`;
    document.getElementById('days-until-new-year').textContent = `До нового года осталось ${daysUntilNewYear} дней`;
}

displayInfo();