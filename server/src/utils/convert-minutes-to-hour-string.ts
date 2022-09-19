export function convertMinutesToHoursString(minuteAmounts: number){
    const hours= Math.floor(minuteAmounts/60);
    const minutes = minuteAmounts%60;

return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;

}