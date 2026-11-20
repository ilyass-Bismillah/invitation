// Utility to add the royal wedding event to Google Calendar or download an .ics file

export const WEDDING_EVENT = {
  title: 'حفل زفاف مهدي & كنزة',
  description: 'بكل فرح وسرور، تتشرف عائلتا العروسين بدعوتكم لمشاركتنا فرحة العمر بمناسبة حفل زفاف مهدي وكنزة المبارك بقصر الرياض الملكي بمراكش.',
  location: 'قصر الرياض الملكي، طريق النخيل، مراكش، المملكة المغربية',
  // Start: Saturday, July 24, 2027 at 20:00 (Marrakech time UTC+1) -> 19:00 UTC
  // End: Sunday, July 25, 2027 at 04:00 (Marrakech time UTC+1) -> 03:00 UTC
  startUtc: '20270724T190000Z',
  endUtc: '20270725T030000Z',
  startLocal: '20270724T200000',
  endLocal: '20270725T040000',
};

export const getGoogleCalendarUrl = (): string => {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const text = encodeURIComponent(WEDDING_EVENT.title);
  const dates = `${WEDDING_EVENT.startUtc}/${WEDDING_EVENT.endUtc}`;
  const details = encodeURIComponent(WEDDING_EVENT.description);
  const location = encodeURIComponent(WEDDING_EVENT.location);

  return `${base}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
};

export const downloadIcsFile = () => {
  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Moroccan Royal Wedding//Mehdi and Kenza//AR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-mehdi-kenza-20270724@royal-marrakech.ma`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${WEDDING_EVENT.startUtc}`,
    `DTEND:${WEDDING_EVENT.endUtc}`,
    `SUMMARY:${WEDDING_EVENT.title}`,
    `DESCRIPTION:${WEDDING_EVENT.description}`,
    `LOCATION:${WEDDING_EVENT.location}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:تذكير: حفل زفاف مهدي & كنزة غداً',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  const blob = new Blob([icsLines.join('\r\n')], {
    type: 'text/calendar;charset=utf-8',
  });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'wedding-mehdi-kenza.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
