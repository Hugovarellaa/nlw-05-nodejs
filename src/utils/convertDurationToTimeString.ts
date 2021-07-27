export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const second = duration % 60;

  const timeString = [hours, minutes, second].map((unit) =>String(unit).padStart(2, "0")).join(':')

  return timeString
  
}
