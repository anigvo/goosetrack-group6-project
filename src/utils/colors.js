export const mainPageColors = Object.freeze({
  mainBackground: '#3E85F3',
  secondBackground: '#FFFFFF',
  mainFontColor: '#FFFFFF',
  secondFontColor: '#3E85F3',
  accentBackground: '#DCEBF7',
});
// кольори сторінки реєстрації і логіну
export const registerPageColors = Object.freeze({
  mainBackground: '#dcebf7',
  formColor: '#FFFFFF',
  buttonColor: '#3e85f3',
  buttonHoverColor: '#2b78ef',
  borderHoverColor: '#111111',
  correctMessage: '#3cbc81',
  errorMessage: ' #da1414;',
  placeholderColor: '#dce3e5;',
});

export const lightTheme = Object.freeze({
  mainFont: '#111111',
  mainBackground: '#F7F6F9',
  // кольори сайдбару
  sidebarBackground: '#FFFFFF',
  sidebarText: 'rgba(52, 52, 52, 0.5)',
  sidebarTextOutline: '#3E85F3',
  sidebarTextBackgroundOutline: '#E3F3FF',
  logoTextColor: '#3E85F3',
  // фон для всіх сторінок з mainlayout
  oddBackground: '#FFFFFF',
  // кольори сторінки юзера
  userShevronDovn: '#111111',
  userAvatarBackground: '#FFFFFF',
  userAvatarBorder: '#3E85F3',
  userAvatarInsideBackground: '#F8F8F8',
  userNameTextColor: '#343434',
  userInputLabelColor: '#111111',
  userInputBorderColor: 'rgba(17, 17, 17, 0.15)',
  userInputTextColor: '#111111',
  // кольори хедера
  headerUsernameText: '#343434',
  themeTogglerIcon: '#3E85F3',
  // кольори сторінки статистики

  byDayColor: '#FFD2DD',
  byMonthsColor: '#3E85F3',
  statisticsTextColor: '#343434',
  arrowDisabledColor: '#DCE3E5',
  arrowEnabledColor: '#343434',
  chartBorderColor: '#E3F3FF',
  // кольори сторінки календаря
  calendarBackground: '#ffffff',
  calendarBorderColor: 'rgba(220, 227, 229, 0.50)',
  calendarTextColor: '#343434',
  calendarLowTaskBackground: '#CEEEFD',
  calendarLowTaskText: '#3E85F3',
  calendarMediumTaskBackground: '#FCF0D4',
  calendarMediumTaskText: '#F3B249',
  calendarHighTaskBackground: '#FFD2DD',
  calendarHighTaskText: '#EA3D65',
  calendarBorder: '#DCE3E5',
  calendarWeekend: '#3E85F3',
  // кнопки переключення між сторінками calendar/month calendar/day
  periodTypeBackground: '#E3F3FF',
  periodTypeText: '#3E85F3',
  periodTypeTextOutline: '#3E85F3',
  periodTypeBackgroundOutline: '#CAE8FF',
  periodTypeBorderline: '#3E85F333',
  // сторінка calendar/day
  taskBackground: '#F7F6F9',
  taskBorderColor: 'rgba(220, 227, 229, 0.8)',
  taskPriorityTextColor: '#F7F6F9',
  taskScrollbarColor: '#E7E5E5',
  taskScrollBarBackground: '#F2F2F2',
  toolBorder: 'transparent',
  // пріорітетність тасків
  taskLowPriority: '#72C2F8',
  taskMediumPriority: '#F3B249',
  taskHighPriority: '#EA3D65',
  // кнопка додавання таски, для кнопки текст mainFont
  addTaskBtnBackground: '#E3F3FF',
  addTaskBtnHover: '#CAE8FF',
  addTaskBtnBorder: '#3E85F3',
  // модалки для рейтингу та додавання тасків
  modalBackground: '#FFF',
  modalBorder: 'rgba(220, 227, 229, 0.80)',
  modalActiveStarColor: '#FFAC33',
  modalInactiveStarColor: '#CEC9C1',
  modalInputLabelColor: 'rgba(52, 52, 52, 0.80)',
  modalInputBackground: '#F6F6F6',
  modalEditIconColor: '#3E85F3',
  modalEditActiveIconColor: '#FFFFFF',
  modalEditActiveIconBackground: '#3E85F3',
  modalEditIconBackground: '#E3F3FF',
  modalDeleteIconColor: '#EA3D65',
  modalDeleteIconBackground: 'rgba(234, 61, 101, 0.20)',
  // кнопки скасування різні для фідбеку та тасків
  modalCancelBtnFeedbackBackground: '#E5EDFA',
  modalCancelBtnTaskBackground: '#EFEFEF',
  // кольори кнопок (однакові на темній та світлій темах)
  btnBackgroundColor: '#3E85F3',
  btnTextColor: '#FFFFFF',
  btnHoverBackground: '#2B78EF',
  // кнопки datePicker
  btnCalendarArrowEnabled: '#FFFFFF',
  btnCalendarArrowDisabled: '#DCE3E5CC',
  // колір тексту на 404
  apologizeTextColor: 'rgba(17, 17, 17, 0.698)',
});

export const darkTheme = Object.freeze({
  mainFont: '#FFFFFF',
  mainBackground: '#171820',
  // кольори сайдбару
  sidebarBackground: '#13151A',
  sidebarText: '#FFFFFF',
  sidebarTextOutline: '#FFFFFF',
  sidebarTextBackgroundOutline: '#3E85F3',
  logoTextColor: '#E3F3FF',
  // фон для всіх сторінок з mainlayout
  oddBackground: '#21222C',
  // кольори сторінки юзера
  userShevronDovn: '#FFFFFF',
  userAvatarBackground: '#21222C',
  userAvatarBorder: '#3E85F3',
  userAvatarInsideBackground: '#171820',
  userNameTextColor: '#FFFFFF',
  userInputLabelColor: 'rgba(250, 250, 250, 0.3)',
  userInputBorderColor: 'rgba(255, 255, 255, 0.15)',
  userInputTextColor: '#FFFFFF',
  userFillCollor: '#FFFFFF',
  userInputBorderHoverColor: '#FFFFFF',
  // кольори хедера
  headerUsernameText: '#FFFFFF',
  themeTogglerIcon: '#3E85F3',
  // кольори сторінки статистики
  byDayColor: '#FFD2DD',
  byMonthColor: '#3E85F3',
  statisticsTextColor: '#FFFFFF',
  arrowDisabledColor: 'rgba(255, 255, 255, 0.15)',
  arrowEnabledColor: '#FFFFFF',
  chartBorderColor: 'rgba(227, 243, 255, 0.15)',
  // кольори сторінки календаря
  calendarBackground: '#21222C',
  calendarBorderColor: 'rgba(255, 255, 255, 0.15)',
  calendarTextColor: '#FFF',
  calendarLowTaskBackground: '#CEEEFD',
  calendarLowTaskText: '#3E85F3',
  calendarMediumTaskBackground: '#FCF0D4',
  calendarMediumTaskText: '#F3B249',
  calendarHighTaskBackground: '#FFD2DD',
  calendarHighTaskText: '#EA3D65',
  calendarBorder: '#FFFFFF26',
  calendarWeekend: '#3E85F3',

  periodTypeBackground: '#21222C',
  periodTypeText: '#3E85F3',
  periodTypeTextOutline: '#FFFFFF',
  periodTypeBackgroundOutline: '#3E85F3',
  periodTypeBorderline: '#3E85F333',
  // сторінка calendar/day
  taskBackground: '#171820',
  taskBorderColor: 'rgba(255, 255, 255, 0.15)',
  taskPriorityTextColor: '#FFF',
  taskScrollBarBackground: '#171820',
  taskScrollbarColor: '#2D3037',
  toolBorder: 'rgba(255, 255, 255, 0.15)',
  // пріорітетність тасків
  taskLowPriority: '#72C2F8',
  taskMediumPriority: '#F3B249',
  taskHighPriority: '#EA3D65',
  // кнопка додавання таски, для кнопки текст mainFont
  addTaskBtnBackground: '#3E85F3',
  addTaskBtnHover: '#2B78EF',
  addTaskBtnBorder: '#3E85F3',
  // модалки для рейтингу та додавання тасків
  modalBackground: '#171820',
  modalBorder: '#171820',
  modalActiveStarColor: '#FFAC33',
  modalInactiveStarColor: '#353647',
  modalInputLabelColor: 'rgba(250, 250, 250, 0.30)',
  modalInputBackground: '#171820',
  modalEditIconColor: '#3E85F3',
  modalEditIconBackground: '#353647',
  modalEditActiveIconColor: '#FFFFFF',
  modalEditActiveIconBackground: '#3E85F3',
  modalDeleteIconColor: '#EA3D65',
  modalDeleteIconBackground: 'rgba(234, 61, 101, 0.20)',
  // кнопки скасування різні для фідбеку та тасків
  modalCancelBtnFeedbackBackground: '#21222C',
  modalCancelBtnTaskBackground: '#EFEFEF',
  // кольори кнопок (однакові на темній та світлій темах)
  btnBackgroundColor: '#3E85F3',
  btnTextColor: '#FFFFFF',
  btnHoverBackground: '#2B78EF',
  // кнопки datePicker
  btnCalendarArrowEnabled: '#FFFFFF',
  btnCalendarArrowDisabled: '#DCE3E5CC',
  // колір тексту на 404
  apologizeTextColor: '#FFFFFF',
});
