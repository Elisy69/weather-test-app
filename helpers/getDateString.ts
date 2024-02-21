export function getDateString(offset: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();

  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() + offset);

  const targetDay = targetDate.getDate();
  const targetMonth = months[targetDate.getMonth()];

  const daySuffix =
    targetDay % 10 === 1 && targetDay !== 11
      ? "st"
      : targetDay % 10 === 2 && targetDay !== 12
        ? "nd"
        : targetDay % 10 === 3 && targetDay !== 13
          ? "rd"
          : "th";

  const dateString = `${targetDay}${daySuffix} ${targetMonth}`;

  return dateString;
}
