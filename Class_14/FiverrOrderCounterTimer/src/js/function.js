function convertMilliseconds(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // const remainderSeconds = seconds % 60;
  // const remainderMinutes = minutes % 60;
  // const remainderHours = hours % 24;

  const remainderSeconds =
    seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  const remainderMinutes = minutes - days * 24 * 60 - hours * 60;
  const remainderHours = hours - days * 24;

  return {
    days: days,
    hours: remainderHours,
    minutes: remainderMinutes,
    seconds: remainderSeconds,
  };
}
