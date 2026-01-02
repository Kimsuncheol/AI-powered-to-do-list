module.exports = [
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/views.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyDefaultViewProps",
    ()=>applyDefaultViewProps,
    "areViewsEqual",
    ()=>areViewsEqual
]);
const areViewsEqual = (views, expectedViews)=>{
    if (views.length !== expectedViews.length) {
        return false;
    }
    return expectedViews.every((expectedView)=>views.includes(expectedView));
};
const applyDefaultViewProps = ({ openTo, defaultOpenTo, views, defaultViews })=>{
    const viewsWithDefault = views ?? defaultViews;
    let openToWithDefault;
    if (openTo != null) {
        openToWithDefault = openTo;
    } else if (viewsWithDefault.includes(defaultOpenTo)) {
        openToWithDefault = defaultOpenTo;
    } else if (viewsWithDefault.length > 0) {
        openToWithDefault = viewsWithDefault[0];
    } else {
        throw new Error('MUI X: The `views` prop must contain at least one view.');
    }
    return {
        views: viewsWithDefault,
        openTo: openToWithDefault
    };
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATE_VIEWS",
    ()=>DATE_VIEWS,
    "applyDefaultDate",
    ()=>applyDefaultDate,
    "areDatesEqual",
    ()=>areDatesEqual,
    "findClosestEnabledDate",
    ()=>findClosestEnabledDate,
    "formatMeridiem",
    ()=>formatMeridiem,
    "getMonthsInYear",
    ()=>getMonthsInYear,
    "getTodayDate",
    ()=>getTodayDate,
    "getWeekdays",
    ()=>getWeekdays,
    "isDatePickerView",
    ()=>isDatePickerView,
    "mergeDateAndTime",
    ()=>mergeDateAndTime,
    "replaceInvalidDateByNull",
    ()=>replaceInvalidDateByNull,
    "resolveDateFormat",
    ()=>resolveDateFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/views.js [app-ssr] (ecmascript)");
;
const mergeDateAndTime = (adapter, dateParam, timeParam)=>{
    let mergedDate = dateParam;
    mergedDate = adapter.setHours(mergedDate, adapter.getHours(timeParam));
    mergedDate = adapter.setMinutes(mergedDate, adapter.getMinutes(timeParam));
    mergedDate = adapter.setSeconds(mergedDate, adapter.getSeconds(timeParam));
    mergedDate = adapter.setMilliseconds(mergedDate, adapter.getMilliseconds(timeParam));
    return mergedDate;
};
const findClosestEnabledDate = ({ date, disableFuture, disablePast, maxDate, minDate, isDateDisabled, adapter, timezone })=>{
    const today = mergeDateAndTime(adapter, adapter.date(undefined, timezone), date);
    if (disablePast && adapter.isBefore(minDate, today)) {
        minDate = today;
    }
    if (disableFuture && adapter.isAfter(maxDate, today)) {
        maxDate = today;
    }
    let forward = date;
    let backward = date;
    if (adapter.isBefore(date, minDate)) {
        forward = minDate;
        backward = null;
    }
    if (adapter.isAfter(date, maxDate)) {
        if (backward) {
            backward = maxDate;
        }
        forward = null;
    }
    while(forward || backward){
        if (forward && adapter.isAfter(forward, maxDate)) {
            forward = null;
        }
        if (backward && adapter.isBefore(backward, minDate)) {
            backward = null;
        }
        if (forward) {
            if (!isDateDisabled(forward)) {
                return forward;
            }
            forward = adapter.addDays(forward, 1);
        }
        if (backward) {
            if (!isDateDisabled(backward)) {
                return backward;
            }
            backward = adapter.addDays(backward, -1);
        }
    }
    return null;
};
const replaceInvalidDateByNull = (adapter, value)=>!adapter.isValid(value) ? null : value;
const applyDefaultDate = (adapter, value, defaultValue)=>{
    if (value == null || !adapter.isValid(value)) {
        return defaultValue;
    }
    return value;
};
const areDatesEqual = (adapter, a, b)=>{
    if (!adapter.isValid(a) && a != null && !adapter.isValid(b) && b != null) {
        return true;
    }
    return adapter.isEqual(a, b);
};
const getMonthsInYear = (adapter, year)=>{
    const firstMonth = adapter.startOfYear(year);
    const months = [
        firstMonth
    ];
    while(months.length < 12){
        const prevMonth = months[months.length - 1];
        months.push(adapter.addMonths(prevMonth, 1));
    }
    return months;
};
const getTodayDate = (adapter, timezone, valueType)=>valueType === 'date' ? adapter.startOfDay(adapter.date(undefined, timezone)) : adapter.date(undefined, timezone);
const formatMeridiem = (adapter, meridiem)=>{
    const date = adapter.setHours(adapter.date(), meridiem === 'am' ? 2 : 14);
    return adapter.format(date, 'meridiem');
};
const DATE_VIEWS = [
    'year',
    'month',
    'day'
];
const isDatePickerView = (view)=>DATE_VIEWS.includes(view);
const resolveDateFormat = (adapter, { format, views }, isInToolbar)=>{
    if (format != null) {
        return format;
    }
    const formats = adapter.formats;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'year'
    ])) {
        return formats.year;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'month'
    ])) {
        return formats.month;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'day'
    ])) {
        return formats.dayOfMonth;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'month',
        'year'
    ])) {
        return `${formats.month} ${formats.year}`;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'day',
        'month'
    ])) {
        return `${formats.month} ${formats.dayOfMonth}`;
    }
    if (isInToolbar) {
        // Little localization hack (Google is doing the same for android native pickers):
        // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
        // For other locales using strings like "June 1", without weekday.
        return /en/.test(adapter.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
    }
    return formats.keyboardDate;
};
const getWeekdays = (adapter, date)=>{
    const start = adapter.startOfWeek(date);
    return [
        0,
        1,
        2,
        3,
        4,
        5,
        6
    ].map((diff)=>adapter.addDays(start, diff));
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/time-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXPORTED_TIME_VIEWS",
    ()=>EXPORTED_TIME_VIEWS,
    "TIME_VIEWS",
    ()=>TIME_VIEWS,
    "convertToMeridiem",
    ()=>convertToMeridiem,
    "convertValueToMeridiem",
    ()=>convertValueToMeridiem,
    "createIsAfterIgnoreDatePart",
    ()=>createIsAfterIgnoreDatePart,
    "getMeridiem",
    ()=>getMeridiem,
    "getSecondsInDay",
    ()=>getSecondsInDay,
    "isInternalTimeView",
    ()=>isInternalTimeView,
    "isTimeView",
    ()=>isTimeView,
    "resolveTimeFormat",
    ()=>resolveTimeFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/views.js [app-ssr] (ecmascript)");
;
const EXPORTED_TIME_VIEWS = [
    'hours',
    'minutes',
    'seconds'
];
const TIME_VIEWS = [
    'hours',
    'minutes',
    'seconds',
    'meridiem'
];
const isTimeView = (view)=>EXPORTED_TIME_VIEWS.includes(view);
const isInternalTimeView = (view)=>TIME_VIEWS.includes(view);
const getMeridiem = (date, adapter)=>{
    if (!date) {
        return null;
    }
    return adapter.getHours(date) >= 12 ? 'pm' : 'am';
};
const convertValueToMeridiem = (value, meridiem, ampm)=>{
    if (ampm) {
        const currentMeridiem = value >= 12 ? 'pm' : 'am';
        if (currentMeridiem !== meridiem) {
            return meridiem === 'am' ? value - 12 : value + 12;
        }
    }
    return value;
};
const convertToMeridiem = (time, meridiem, ampm, adapter)=>{
    const newHoursAmount = convertValueToMeridiem(adapter.getHours(time), meridiem, ampm);
    return adapter.setHours(time, newHoursAmount);
};
const getSecondsInDay = (date, adapter)=>{
    return adapter.getHours(date) * 3600 + adapter.getMinutes(date) * 60 + adapter.getSeconds(date);
};
const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, adapter)=>(dateLeft, dateRight)=>{
        if (disableIgnoringDatePartForTimeValidation) {
            return adapter.isAfter(dateLeft, dateRight);
        }
        return getSecondsInDay(dateLeft, adapter) > getSecondsInDay(dateRight, adapter);
    };
const resolveTimeFormat = (adapter, { format, views, ampm })=>{
    if (format != null) {
        return format;
    }
    const formats = adapter.formats;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'hours'
    ])) {
        return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'minutes'
    ])) {
        return formats.minutes;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'seconds'
    ])) {
        return formats.seconds;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'minutes',
        'seconds'
    ])) {
        return `${formats.minutes}:${formats.seconds}`;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areViewsEqual"])(views, [
        'hours',
        'minutes',
        'seconds'
    ])) {
        return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
    }
    return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SECTION_TYPE_GRANULARITY",
    ()=>SECTION_TYPE_GRANULARITY,
    "getDefaultReferenceDate",
    ()=>getDefaultReferenceDate,
    "getSectionTypeGranularity",
    ()=>getSectionTypeGranularity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$time$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/time-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
;
;
const SECTION_TYPE_GRANULARITY = {
    year: 1,
    month: 2,
    day: 3,
    hours: 4,
    minutes: 5,
    seconds: 6,
    milliseconds: 7
};
const getSectionTypeGranularity = (sections)=>Math.max(...sections.map((section)=>SECTION_TYPE_GRANULARITY[section.type] ?? 1));
const roundDate = (adapter, granularity, date)=>{
    if (granularity === SECTION_TYPE_GRANULARITY.year) {
        return adapter.startOfYear(date);
    }
    if (granularity === SECTION_TYPE_GRANULARITY.month) {
        return adapter.startOfMonth(date);
    }
    if (granularity === SECTION_TYPE_GRANULARITY.day) {
        return adapter.startOfDay(date);
    }
    // We don't have startOfHour / startOfMinute / startOfSecond
    let roundedDate = date;
    if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
        roundedDate = adapter.setMinutes(roundedDate, 0);
    }
    if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
        roundedDate = adapter.setSeconds(roundedDate, 0);
    }
    if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
        roundedDate = adapter.setMilliseconds(roundedDate, 0);
    }
    return roundedDate;
};
const getDefaultReferenceDate = ({ props, adapter, granularity, timezone, getTodayDate: inGetTodayDate })=>{
    let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(adapter, granularity, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTodayDate"])(adapter, timezone));
    if (props.minDate != null && adapter.isAfterDay(props.minDate, referenceDate)) {
        referenceDate = roundDate(adapter, granularity, props.minDate);
    }
    if (props.maxDate != null && adapter.isBeforeDay(props.maxDate, referenceDate)) {
        referenceDate = roundDate(adapter, granularity, props.maxDate);
    }
    const isAfter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$time$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIsAfterIgnoreDatePart"])(props.disableIgnoringDatePartForTimeValidation ?? false, adapter);
    if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
        referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDateAndTime"])(adapter, referenceDate, props.minTime));
    }
    if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
        referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDateAndTime"])(adapter, referenceDate, props.maxTime));
    }
    return referenceDate;
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FORMAT_SECONDS_NO_LEADING_ZEROS",
    ()=>FORMAT_SECONDS_NO_LEADING_ZEROS,
    "applyLocalizedDigits",
    ()=>applyLocalizedDigits,
    "changeSectionValueFormat",
    ()=>changeSectionValueFormat,
    "cleanDigitSectionValue",
    ()=>cleanDigitSectionValue,
    "cleanLeadingZeros",
    ()=>cleanLeadingZeros,
    "createDateStrForV6InputFromSections",
    ()=>createDateStrForV6InputFromSections,
    "createDateStrForV7HiddenInputFromSections",
    ()=>createDateStrForV7HiddenInputFromSections,
    "doesSectionFormatHaveLeadingZeros",
    ()=>doesSectionFormatHaveLeadingZeros,
    "getDateFromDateSections",
    ()=>getDateFromDateSections,
    "getDateSectionConfigFromFormatToken",
    ()=>getDateSectionConfigFromFormatToken,
    "getDaysInWeekStr",
    ()=>getDaysInWeekStr,
    "getLetterEditingOptions",
    ()=>getLetterEditingOptions,
    "getLocalizedDigits",
    ()=>getLocalizedDigits,
    "getSectionOrder",
    ()=>getSectionOrder,
    "getSectionVisibleValue",
    ()=>getSectionVisibleValue,
    "getSectionsBoundaries",
    ()=>getSectionsBoundaries,
    "isAndroid",
    ()=>isAndroid,
    "isStringNumber",
    ()=>isStringNumber,
    "mergeDateIntoReferenceDate",
    ()=>mergeDateIntoReferenceDate,
    "parseSelectedSections",
    ()=>parseSelectedSections,
    "removeLocalizedDigits",
    ()=>removeLocalizedDigits,
    "validateSections",
    ()=>validateSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
;
const getDateSectionConfigFromFormatToken = (adapter, formatToken)=>{
    const config = adapter.formatTokenMap[formatToken];
    if (config == null) {
        throw new Error([
            `MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`,
            'Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported.'
        ].join('\n'));
    }
    if (typeof config === 'string') {
        return {
            type: config,
            contentType: config === 'meridiem' ? 'letter' : 'digit',
            maxLength: undefined
        };
    }
    return {
        type: config.sectionType,
        contentType: config.contentType,
        maxLength: config.maxLength
    };
};
const getDaysInWeekStr = (adapter, format)=>{
    const elements = [];
    const now = adapter.date(undefined, 'default');
    const startDate = adapter.startOfWeek(now);
    const endDate = adapter.endOfWeek(now);
    let current = startDate;
    while(adapter.isBefore(current, endDate)){
        elements.push(current);
        current = adapter.addDays(current, 1);
    }
    return elements.map((weekDay)=>adapter.formatByString(weekDay, format));
};
const getLetterEditingOptions = (adapter, timezone, sectionType, format)=>{
    switch(sectionType){
        case 'month':
            {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthsInYear"])(adapter, adapter.date(undefined, timezone)).map((month)=>adapter.formatByString(month, format));
            }
        case 'weekDay':
            {
                return getDaysInWeekStr(adapter, format);
            }
        case 'meridiem':
            {
                const now = adapter.date(undefined, timezone);
                return [
                    adapter.startOfDay(now),
                    adapter.endOfDay(now)
                ].map((date)=>adapter.formatByString(date, format));
            }
        default:
            {
                return [];
            }
    }
};
const FORMAT_SECONDS_NO_LEADING_ZEROS = 's';
const NON_LOCALIZED_DIGITS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];
const getLocalizedDigits = (adapter)=>{
    const today = adapter.date(undefined);
    const formattedZero = adapter.formatByString(adapter.setSeconds(today, 0), FORMAT_SECONDS_NO_LEADING_ZEROS);
    if (formattedZero === '0') {
        return NON_LOCALIZED_DIGITS;
    }
    return Array.from({
        length: 10
    }).map((_, index)=>adapter.formatByString(adapter.setSeconds(today, index), FORMAT_SECONDS_NO_LEADING_ZEROS));
};
const removeLocalizedDigits = (valueStr, localizedDigits)=>{
    if (localizedDigits[0] === '0') {
        return valueStr;
    }
    const digits = [];
    let currentFormattedDigit = '';
    for(let i = 0; i < valueStr.length; i += 1){
        currentFormattedDigit += valueStr[i];
        const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
        if (matchingDigitIndex > -1) {
            digits.push(matchingDigitIndex.toString());
            currentFormattedDigit = '';
        }
    }
    return digits.join('');
};
const applyLocalizedDigits = (valueStr, localizedDigits)=>{
    if (localizedDigits[0] === '0') {
        return valueStr;
    }
    return valueStr.split('').map((char)=>localizedDigits[Number(char)]).join('');
};
const isStringNumber = (valueStr, localizedDigits)=>{
    const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
    // `Number(' ')` returns `0` even if ' ' is not a valid number.
    return nonLocalizedValueStr !== ' ' && !Number.isNaN(Number(nonLocalizedValueStr));
};
const cleanLeadingZeros = (valueStr, size)=>{
    // Remove the leading zeros and then add back as many as needed.
    return Number(valueStr).toString().padStart(size, '0');
};
const cleanDigitSectionValue = (adapter, value, sectionBoundaries, localizedDigits, section)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        if (section.type !== 'day' && section.contentType === 'digit-with-letter') {
            throw new Error([
                `MUI X: The token "${section.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`
            ].join('\n'));
        }
    }
    if (section.type === 'day' && section.contentType === 'digit-with-letter') {
        const date = adapter.setDate(sectionBoundaries.longestMonth, value);
        return adapter.formatByString(date, section.format);
    }
    // queryValue without leading `0` (`01` => `1`)
    let valueStr = value.toString();
    if (section.hasLeadingZerosInInput) {
        valueStr = cleanLeadingZeros(valueStr, section.maxLength);
    }
    return applyLocalizedDigits(valueStr, localizedDigits);
};
const getSectionVisibleValue = (section, target, localizedDigits)=>{
    let value = section.value || section.placeholder;
    const hasLeadingZeros = target === 'non-input' ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
    if (target === 'non-input' && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
        value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
    }
    // In the input, we add an empty character at the end of each section without leading zeros.
    // This makes sure that `onChange` will always be fired.
    // Otherwise, when your input value equals `1/dd/yyyy` (format `M/DD/YYYY` on DayJs),
    // If you press `1`, on the first section, the new value is also `1/dd/yyyy`,
    // So the browser will not fire the input `onChange`.
    const shouldAddInvisibleSpace = [
        'input-rtl',
        'input-ltr'
    ].includes(target) && section.contentType === 'digit' && !hasLeadingZeros && value.length === 1;
    if (shouldAddInvisibleSpace) {
        value = `${value}\u200e`;
    }
    if (target === 'input-rtl') {
        value = `\u2068${value}\u2069`;
    }
    return value;
};
const changeSectionValueFormat = (adapter, valueStr, currentFormat, newFormat)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        if (getDateSectionConfigFromFormatToken(adapter, currentFormat).type === 'weekDay') {
            throw new Error("changeSectionValueFormat doesn't support week day formats");
        }
    }
    return adapter.formatByString(adapter.parse(valueStr, currentFormat), newFormat);
};
const isFourDigitYearFormat = (adapter, format)=>adapter.formatByString(adapter.date(undefined, 'system'), format).length === 4;
const doesSectionFormatHaveLeadingZeros = (adapter, contentType, sectionType, format)=>{
    if (contentType !== 'digit') {
        return false;
    }
    const now = adapter.date(undefined, 'default');
    switch(sectionType){
        // We can't use `changeSectionValueFormat`, because  `adapter.parse('1', 'YYYY')` returns `1971` instead of `1`.
        case 'year':
            {
                // Remove once https://github.com/iamkun/dayjs/pull/2847 is merged and bump dayjs version
                if (adapter.lib === 'dayjs' && format === 'YY') {
                    return true;
                }
                return adapter.formatByString(adapter.setYear(now, 1), format).startsWith('0');
            }
        case 'month':
            {
                return adapter.formatByString(adapter.startOfYear(now), format).length > 1;
            }
        case 'day':
            {
                return adapter.formatByString(adapter.startOfMonth(now), format).length > 1;
            }
        case 'weekDay':
            {
                return adapter.formatByString(adapter.startOfWeek(now), format).length > 1;
            }
        case 'hours':
            {
                return adapter.formatByString(adapter.setHours(now, 1), format).length > 1;
            }
        case 'minutes':
            {
                return adapter.formatByString(adapter.setMinutes(now, 1), format).length > 1;
            }
        case 'seconds':
            {
                return adapter.formatByString(adapter.setSeconds(now, 1), format).length > 1;
            }
        default:
            {
                throw new Error('Invalid section type');
            }
    }
};
const getDateFromDateSections = (adapter, sections, localizedDigits)=>{
    // If we have both a day and a weekDay section,
    // Then we skip the weekDay in the parsing because libraries like dayjs can't parse complicated formats containing a weekDay.
    // dayjs(dayjs().format('dddd MMMM D YYYY'), 'dddd MMMM D YYYY')) // returns `Invalid Date` even if the format is valid.
    const shouldSkipWeekDays = sections.some((section)=>section.type === 'day');
    const sectionFormats = [];
    const sectionValues = [];
    for(let i = 0; i < sections.length; i += 1){
        const section = sections[i];
        const shouldSkip = shouldSkipWeekDays && section.type === 'weekDay';
        if (!shouldSkip) {
            sectionFormats.push(section.format);
            sectionValues.push(getSectionVisibleValue(section, 'non-input', localizedDigits));
        }
    }
    const formatWithoutSeparator = sectionFormats.join(' ');
    const dateWithoutSeparatorStr = sectionValues.join(' ');
    return adapter.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
const createDateStrForV7HiddenInputFromSections = (sections)=>sections.map((section)=>{
        return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
    }).join('');
const createDateStrForV6InputFromSections = (sections, localizedDigits, isRtl)=>{
    const formattedSections = sections.map((section)=>{
        const dateValue = getSectionVisibleValue(section, isRtl ? 'input-rtl' : 'input-ltr', localizedDigits);
        return `${section.startSeparator}${dateValue}${section.endSeparator}`;
    });
    const dateStr = formattedSections.join('');
    if (!isRtl) {
        return dateStr;
    }
    // \u2066: start left-to-right isolation
    // \u2067: start right-to-left isolation
    // \u2068: start first strong character isolation
    // \u2069: pop isolation
    // wrap into an isolated group such that separators can split the string in smaller ones by adding \u2069\u2068
    return `\u2066${dateStr}\u2069`;
};
const getSectionsBoundaries = (adapter, localizedDigits, timezone)=>{
    const today = adapter.date(undefined, timezone);
    const endOfYear = adapter.endOfYear(today);
    const endOfDay = adapter.endOfDay(today);
    const { maxDaysInMonth, longestMonth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthsInYear"])(adapter, today).reduce((acc, month)=>{
        const daysInMonth = adapter.getDaysInMonth(month);
        if (daysInMonth > acc.maxDaysInMonth) {
            return {
                maxDaysInMonth: daysInMonth,
                longestMonth: month
            };
        }
        return acc;
    }, {
        maxDaysInMonth: 0,
        longestMonth: null
    });
    return {
        year: ({ format })=>({
                minimum: 0,
                maximum: isFourDigitYearFormat(adapter, format) ? 9999 : 99
            }),
        month: ()=>({
                minimum: 1,
                // Assumption: All years have the same amount of months
                maximum: adapter.getMonth(endOfYear) + 1
            }),
        day: ({ currentDate })=>({
                minimum: 1,
                maximum: adapter.isValid(currentDate) ? adapter.getDaysInMonth(currentDate) : maxDaysInMonth,
                longestMonth: longestMonth
            }),
        weekDay: ({ format, contentType })=>{
            if (contentType === 'digit') {
                const daysInWeek = getDaysInWeekStr(adapter, format).map(Number);
                return {
                    minimum: Math.min(...daysInWeek),
                    maximum: Math.max(...daysInWeek)
                };
            }
            return {
                minimum: 1,
                maximum: 7
            };
        },
        hours: ({ format })=>{
            const lastHourInDay = adapter.getHours(endOfDay);
            const hasMeridiem = removeLocalizedDigits(adapter.formatByString(adapter.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString();
            if (hasMeridiem) {
                return {
                    minimum: 1,
                    maximum: Number(removeLocalizedDigits(adapter.formatByString(adapter.startOfDay(today), format), localizedDigits))
                };
            }
            return {
                minimum: 0,
                maximum: lastHourInDay
            };
        },
        minutes: ()=>({
                minimum: 0,
                // Assumption: All years have the same amount of minutes
                maximum: adapter.getMinutes(endOfDay)
            }),
        seconds: ()=>({
                minimum: 0,
                // Assumption: All years have the same amount of seconds
                maximum: adapter.getSeconds(endOfDay)
            }),
        meridiem: ()=>({
                minimum: 0,
                maximum: 1
            }),
        empty: ()=>({
                minimum: 0,
                maximum: 0
            })
    };
};
let warnedOnceInvalidSection = false;
const validateSections = (sections, valueType)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedOnceInvalidSection) {
            const supportedSections = [
                'empty'
            ];
            if ([
                'date',
                'date-time'
            ].includes(valueType)) {
                supportedSections.push('weekDay', 'day', 'month', 'year');
            }
            if ([
                'time',
                'date-time'
            ].includes(valueType)) {
                supportedSections.push('hours', 'minutes', 'seconds', 'meridiem');
            }
            const invalidSection = sections.find((section)=>!supportedSections.includes(section.type));
            if (invalidSection) {
                console.warn(`MUI X: The field component you are using is not compatible with the "${invalidSection.type}" date section.`, `The supported date sections are ["${supportedSections.join('", "')}"]\`.`);
                warnedOnceInvalidSection = true;
            }
        }
    }
};
const transferDateSectionValue = (adapter, section, dateToTransferFrom, dateToTransferTo)=>{
    switch(section.type){
        case 'year':
            {
                return adapter.setYear(dateToTransferTo, adapter.getYear(dateToTransferFrom));
            }
        case 'month':
            {
                return adapter.setMonth(dateToTransferTo, adapter.getMonth(dateToTransferFrom));
            }
        case 'weekDay':
            {
                let dayInWeekStrOfActiveDate = adapter.formatByString(dateToTransferFrom, section.format);
                if (section.hasLeadingZerosInInput) {
                    dayInWeekStrOfActiveDate = cleanLeadingZeros(dayInWeekStrOfActiveDate, section.maxLength);
                }
                const formattedDaysInWeek = getDaysInWeekStr(adapter, section.format);
                const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
                const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
                const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
                return adapter.addDays(dateToTransferFrom, diff);
            }
        case 'day':
            {
                return adapter.setDate(dateToTransferTo, adapter.getDate(dateToTransferFrom));
            }
        case 'meridiem':
            {
                const isAM = adapter.getHours(dateToTransferFrom) < 12;
                const mergedDateHours = adapter.getHours(dateToTransferTo);
                if (isAM && mergedDateHours >= 12) {
                    return adapter.addHours(dateToTransferTo, -12);
                }
                if (!isAM && mergedDateHours < 12) {
                    return adapter.addHours(dateToTransferTo, 12);
                }
                return dateToTransferTo;
            }
        case 'hours':
            {
                return adapter.setHours(dateToTransferTo, adapter.getHours(dateToTransferFrom));
            }
        case 'minutes':
            {
                return adapter.setMinutes(dateToTransferTo, adapter.getMinutes(dateToTransferFrom));
            }
        case 'seconds':
            {
                return adapter.setSeconds(dateToTransferTo, adapter.getSeconds(dateToTransferFrom));
            }
        default:
            {
                return dateToTransferTo;
            }
    }
};
const reliableSectionModificationOrder = {
    year: 1,
    month: 2,
    day: 3,
    weekDay: 4,
    hours: 5,
    minutes: 6,
    seconds: 7,
    meridiem: 8,
    empty: 9
};
const mergeDateIntoReferenceDate = (adapter, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections)=>// cloning sections before sort to avoid mutating it
    [
        ...sections
    ].sort((a, b)=>reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section)=>{
        if (!shouldLimitToEditedSections || section.modified) {
            return transferDateSectionValue(adapter, section, dateToTransferFrom, mergedDate);
        }
        return mergedDate;
    }, referenceDate);
const isAndroid = ()=>navigator.userAgent.toLowerCase().includes('android');
const getSectionOrder = (sections, shouldApplyRTL)=>{
    const neighbors = {};
    if (!shouldApplyRTL) {
        sections.forEach((_, index)=>{
            const leftIndex = index === 0 ? null : index - 1;
            const rightIndex = index === sections.length - 1 ? null : index + 1;
            neighbors[index] = {
                leftIndex,
                rightIndex
            };
        });
        return {
            neighbors,
            startIndex: 0,
            endIndex: sections.length - 1
        };
    }
    const rtl2ltr = {};
    const ltr2rtl = {};
    let groupedSectionsStart = 0;
    let groupedSectionsEnd = 0;
    let RTLIndex = sections.length - 1;
    while(RTLIndex >= 0){
        groupedSectionsEnd = sections.findIndex(// eslint-disable-next-line @typescript-eslint/no-loop-func
        (section, index)=>index >= groupedSectionsStart && section.endSeparator?.includes(' ') && // Special case where the spaces were not there in the initial input
            section.endSeparator !== ' / ');
        if (groupedSectionsEnd === -1) {
            groupedSectionsEnd = sections.length - 1;
        }
        for(let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1){
            ltr2rtl[i] = RTLIndex;
            rtl2ltr[RTLIndex] = i;
            RTLIndex -= 1;
        }
        groupedSectionsStart = groupedSectionsEnd + 1;
    }
    sections.forEach((_, index)=>{
        const rtlIndex = ltr2rtl[index];
        const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
        const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
        neighbors[index] = {
            leftIndex,
            rightIndex
        };
    });
    return {
        neighbors,
        startIndex: rtl2ltr[0],
        endIndex: rtl2ltr[sections.length - 1]
    };
};
const parseSelectedSections = (selectedSections, sections)=>{
    if (selectedSections == null) {
        return null;
    }
    if (selectedSections === 'all') {
        return 'all';
    }
    if (typeof selectedSections === 'string') {
        const index = sections.findIndex((section)=>section.type === selectedSections);
        return index === -1 ? null : index;
    }
    return selectedSections;
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "singleItemFieldValueManager",
    ()=>singleItemFieldValueManager,
    "singleItemValueManager",
    ()=>singleItemValueManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useField$2f$useField$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.utils.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "value",
    "referenceDate"
];
;
;
;
const singleItemValueManager = {
    emptyValue: null,
    getTodayValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTodayDate"],
    getInitialReferenceValue: (_ref)=>{
        let { value, referenceDate } = _ref, params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
        if (params.adapter.isValid(value)) {
            return value;
        }
        if (referenceDate != null) {
            return referenceDate;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultReferenceDate"])(params);
    },
    cleanValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceInvalidDateByNull"],
    areValuesEqual: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areDatesEqual"],
    isSameError: (a, b)=>a === b,
    hasError: (error)=>error != null,
    defaultErrorState: null,
    getTimezone: (adapter, value)=>adapter.isValid(value) ? adapter.getTimezone(value) : null,
    setTimezone: (adapter, timezone, value)=>value == null ? null : adapter.setTimezone(value, timezone)
};
const singleItemFieldValueManager = {
    updateReferenceValue: (adapter, value, prevReferenceValue)=>adapter.isValid(value) ? value : prevReferenceValue,
    getSectionsFromValue: (date, getSectionsFromDate)=>getSectionsFromDate(date),
    getV7HiddenInputValueFromSections: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useField$2f$useField$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDateStrForV7HiddenInputFromSections"],
    getV6InputValueFromSections: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useField$2f$useField$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDateStrForV6InputFromSections"],
    parseValueStr: (valueStr, referenceValue, parseDate)=>parseDate(valueStr.trim(), referenceValue),
    getDateFromSection: (value)=>value,
    getDateSectionsFromValue: (sections)=>sections,
    updateDateInValue: (value, activeSection, activeDate)=>activeDate,
    clearDateSections: (sections)=>sections.map((section)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, section, {
                value: ''
            }))
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/validation/validateDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateDate",
    ()=>validateDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js [app-ssr] (ecmascript)");
;
const validateDate = ({ props, value, timezone, adapter })=>{
    if (value === null) {
        return null;
    }
    const { shouldDisableDate, shouldDisableMonth, shouldDisableYear, disablePast, disableFuture, minDate, maxDate } = props;
    const now = adapter.date(undefined, timezone);
    switch(true){
        case !adapter.isValid(value):
            return 'invalidDate';
        case Boolean(shouldDisableDate && shouldDisableDate(value)):
            return 'shouldDisableDate';
        case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
            return 'shouldDisableMonth';
        case Boolean(shouldDisableYear && shouldDisableYear(value)):
            return 'shouldDisableYear';
        case Boolean(disableFuture && adapter.isAfterDay(value, now)):
            return 'disableFuture';
        case Boolean(disablePast && adapter.isBeforeDay(value, now)):
            return 'disablePast';
        case Boolean(minDate && adapter.isBeforeDay(value, minDate)):
            return 'minDate';
        case Boolean(maxDate && adapter.isAfterDay(value, maxDate)):
            return 'maxDate';
        default:
            return null;
    }
};
validateDate.valueManager = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"];
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/locales/utils/getPickersLocalization.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPickersLocalization",
    ()=>getPickersLocalization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
;
const getPickersLocalization = (pickersTranslations)=>{
    return {
        components: {
            MuiLocalizationProvider: {
                defaultProps: {
                    localeText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, pickersTranslations)
                }
            }
        }
    };
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/locales/enUS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LOCALE",
    ()=>DEFAULT_LOCALE,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$locales$2f$utils$2f$getPickersLocalization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/locales/utils/getPickersLocalization.js [app-ssr] (ecmascript)");
;
// This object is not Partial<PickersLocaleText> because it is the default values
const enUSPickers = {
    // Calendar navigation
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    // View navigation
    openPreviousView: 'Open previous view',
    openNextView: 'Open next view',
    calendarViewSwitchingButtonAriaLabel: (view)=>view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view',
    // DateRange labels
    start: 'Start',
    end: 'End',
    startDate: 'Start date',
    startTime: 'Start time',
    endDate: 'End date',
    endTime: 'End time',
    // Action bar
    cancelButtonLabel: 'Cancel',
    clearButtonLabel: 'Clear',
    okButtonLabel: 'OK',
    todayButtonLabel: 'Today',
    nextStepButtonLabel: 'Next',
    // Toolbar titles
    datePickerToolbarTitle: 'Select date',
    dateTimePickerToolbarTitle: 'Select date & time',
    timePickerToolbarTitle: 'Select time',
    dateRangePickerToolbarTitle: 'Select date range',
    timeRangePickerToolbarTitle: 'Select time range',
    // Clock labels
    clockLabelText: (view, formattedTime)=>`Select ${view}. ${!formattedTime ? 'No time selected' : `Selected time is ${formattedTime}`}`,
    hoursClockNumberText: (hours)=>`${hours} hours`,
    minutesClockNumberText: (minutes)=>`${minutes} minutes`,
    secondsClockNumberText: (seconds)=>`${seconds} seconds`,
    // Digital clock labels
    selectViewText: (view)=>`Select ${view}`,
    // Calendar labels
    calendarWeekNumberHeaderLabel: 'Week number',
    calendarWeekNumberHeaderText: '#',
    calendarWeekNumberAriaLabelText: (weekNumber)=>`Week ${weekNumber}`,
    calendarWeekNumberText: (weekNumber)=>`${weekNumber}`,
    // Open Picker labels
    openDatePickerDialogue: (formattedDate)=>formattedDate ? `Choose date, selected date is ${formattedDate}` : 'Choose date',
    openTimePickerDialogue: (formattedTime)=>formattedTime ? `Choose time, selected time is ${formattedTime}` : 'Choose time',
    openRangePickerDialogue: (formattedRange)=>formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
    fieldClearLabel: 'Clear',
    // Table labels
    timeTableLabel: 'pick time',
    dateTableLabel: 'pick date',
    // Field section placeholders
    fieldYearPlaceholder: (params)=>'Y'.repeat(params.digitAmount),
    fieldMonthPlaceholder: (params)=>params.contentType === 'letter' ? 'MMMM' : 'MM',
    fieldDayPlaceholder: ()=>'DD',
    fieldWeekDayPlaceholder: (params)=>params.contentType === 'letter' ? 'EEEE' : 'EE',
    fieldHoursPlaceholder: ()=>'hh',
    fieldMinutesPlaceholder: ()=>'mm',
    fieldSecondsPlaceholder: ()=>'ss',
    fieldMeridiemPlaceholder: ()=>'aa',
    // View names
    year: 'Year',
    month: 'Month',
    day: 'Day',
    weekDay: 'Week day',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    meridiem: 'Meridiem',
    // Common
    empty: 'Empty'
};
const DEFAULT_LOCALE = enUSPickers;
const enUS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$locales$2f$utils$2f$getPickersLocalization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPickersLocalization"])(enUSPickers);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalizationProvider",
    ()=>LocalizationProvider,
    "MuiPickersAdapterContext",
    ()=>MuiPickersAdapterContext,
    "PickerAdapterContext",
    ()=>PickerAdapterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "localeText"
];
;
;
;
;
const PickerAdapterContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
// TODO v9: Remove this public export
/**
 * The context that provides the date adapter and default dates to the pickers.
 * @deprecated Use `usePickersAdapter` hook if you need access to the adapter instead.
 */ if ("TURBOPACK compile-time truthy", 1) PickerAdapterContext.displayName = "PickerAdapterContext";
const MuiPickersAdapterContext = PickerAdapterContext;
const LocalizationProvider = function LocalizationProvider(inProps) {
    const { localeText: inLocaleText } = inProps, otherInProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inProps, _excluded);
    const { adapter: parentAdapter, localeText: parentLocaleText } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](PickerAdapterContext) ?? {
        utils: undefined,
        adapter: undefined,
        localeText: undefined
    };
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
        // We will then merge this theme value with our value manually
        props: otherInProps,
        name: 'MuiLocalizationProvider'
    });
    const { children, dateAdapter: DateAdapter, dateFormats, dateLibInstance, adapterLocale, localeText: themeLocaleText } = props;
    const localeText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, themeLocaleText, parentLocaleText, inLocaleText), [
        themeLocaleText,
        parentLocaleText,
        inLocaleText
    ]);
    const adapter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!DateAdapter) {
            if (parentAdapter) {
                return parentAdapter;
            }
            return null;
        }
        const dateAdapter = new DateAdapter({
            locale: adapterLocale,
            formats: dateFormats,
            instance: dateLibInstance
        });
        if (!dateAdapter.isMUIAdapter) {
            throw new Error([
                'MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`',
                "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`",
                'More information on the installation documentation: https://mui.com/x/react-date-pickers/quickstart/#installation'
            ].join(`\n`));
        }
        return dateAdapter;
    }, [
        DateAdapter,
        adapterLocale,
        dateFormats,
        dateLibInstance,
        parentAdapter
    ]);
    const defaultDates = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!adapter) {
            return null;
        }
        return {
            minDate: adapter.date('1900-01-01T00:00:00.000'),
            maxDate: adapter.date('2099-12-31T00:00:00.000')
        };
    }, [
        adapter
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return {
            utils: adapter,
            adapter,
            defaultDates,
            localeText
        };
    }, [
        defaultDates,
        adapter,
        localeText
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickerAdapterContext.Provider, {
        value: contextValue,
        children: children
    });
};
if ("TURBOPACK compile-time truthy", 1) LocalizationProvider.displayName = "LocalizationProvider";
("TURBOPACK compile-time truthy", 1) ? LocalizationProvider.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * Locale for the date library you are using
   */ adapterLocale: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/quickstart/#integrate-provider-and-adapter date adapter setup section} for more details.
   */ dateAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Formats that are used for any child pickers
   */ dateFormats: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        dayOfMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        dayOfMonthFull: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        fullDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        fullTime12h: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        fullTime24h: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        hours12h: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        hours24h: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        keyboardDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        keyboardDateTime12h: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        keyboardDateTime24h: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        meridiem: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        minutes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        month: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        monthShort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        normalDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        normalDateWithWeekday: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        seconds: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        shortDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        weekday: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        weekdayShort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        year: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    }),
    /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */ dateLibInstance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * Locale for components texts
   */ localeText: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
} : "TURBOPACK unreachable";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalizationContext",
    ()=>useLocalizationContext,
    "usePickerAdapter",
    ()=>usePickerAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$locales$2f$enUS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/locales/enUS.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const useLocalizationContext = ()=>{
    const localization = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickerAdapterContext"]);
    if (localization === null) {
        throw new Error([
            'MUI X: Can not find the date and time pickers localization context.',
            'It looks like you forgot to wrap your component in LocalizationProvider.',
            'This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package'
        ].join('\n'));
    }
    if (localization.adapter === null) {
        throw new Error([
            'MUI X: Can not find the date and time pickers adapter from its localization context.',
            'It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider.'
        ].join('\n'));
    }
    const localeText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$locales$2f$enUS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"], localization.localeText), [
        localization.localeText
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, localization, {
            localeText
        }), [
        localization,
        localeText
    ]);
};
const usePickerAdapter = ()=>useLocalizationContext().adapter;
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/useIsDateDisabled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsDateDisabled",
    ()=>useIsDateDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$validation$2f$validateDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/validation/validateDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const useIsDateDisabled = ({ shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone })=>{
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((day)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$validation$2f$validateDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDate"])({
            adapter,
            value: day,
            timezone,
            props: {
                shouldDisableDate,
                shouldDisableMonth,
                shouldDisableYear,
                minDate,
                maxDate,
                disableFuture,
                disablePast
            }
        }) !== null, [
        adapter,
        shouldDisableDate,
        shouldDisableMonth,
        shouldDisableYear,
        minDate,
        maxDate,
        disableFuture,
        disablePast,
        timezone
    ]);
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/useCalendarState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCalendarState",
    ()=>useCalendarState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$useIsDateDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/useIsDateDisabled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const createCalendarStateReducer = (reduceAnimations, adapter)=>(state, action)=>{
        switch(action.type){
            case 'setVisibleDate':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, state, {
                    slideDirection: action.direction,
                    currentMonth: action.month,
                    isMonthSwitchingAnimating: !adapter.isSameMonth(action.month, state.currentMonth) && !reduceAnimations && !action.skipAnimation,
                    focusedDay: action.focusedDay
                });
            case 'changeMonthTimezone':
                {
                    const newTimezone = action.newTimezone;
                    if (adapter.getTimezone(state.currentMonth) === newTimezone) {
                        return state;
                    }
                    let newCurrentMonth = adapter.setTimezone(state.currentMonth, newTimezone);
                    if (adapter.getMonth(newCurrentMonth) !== adapter.getMonth(state.currentMonth)) {
                        newCurrentMonth = adapter.setMonth(newCurrentMonth, adapter.getMonth(state.currentMonth));
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        currentMonth: newCurrentMonth
                    });
                }
            case 'finishMonthSwitchingAnimation':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, state, {
                    isMonthSwitchingAnimating: false
                });
            default:
                throw new Error('missing support');
        }
    };
const useCalendarState = (params)=>{
    const { value, referenceDate: referenceDateProp, disableFuture, disablePast, maxDate, minDate, onMonthChange, onYearChange, reduceAnimations, shouldDisableDate, timezone, getCurrentMonthFromVisibleDate } = params;
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const reducerFn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](createCalendarStateReducer(Boolean(reduceAnimations), adapter)).current;
    const referenceDate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"].getInitialReferenceValue({
            value,
            adapter,
            timezone,
            props: params,
            referenceDate: referenceDateProp,
            granularity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTION_TYPE_GRANULARITY"].day
        });
    }, // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        referenceDateProp,
        timezone
    ]);
    const [calendarState, dispatch] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"](reducerFn, {
        isMonthSwitchingAnimating: false,
        focusedDay: referenceDate,
        // Keep the time from the reference date when computing the current month anchor.
        // Using startOfMonth would reset the time to 00:00 which breaks expectations
        // that month selections preserve the referenceDate time when no value is provided.
        // See tests: "should use `referenceDate` when no value defined".
        currentMonth: adapter.setDate(referenceDate, 1),
        slideDirection: 'left'
    });
    const isDateDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$useIsDateDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsDateDisabled"])({
        shouldDisableDate,
        minDate,
        maxDate,
        disableFuture,
        disablePast,
        timezone
    });
    // Ensure that `calendarState.currentMonth` timezone is updated when `referenceDate` (or timezone changes)
    // https://github.com/mui/mui-x/issues/10804
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        dispatch({
            type: 'changeMonthTimezone',
            newTimezone: adapter.getTimezone(referenceDate)
        });
    }, [
        referenceDate,
        adapter
    ]);
    const setVisibleDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ target, reason })=>{
        if (reason === 'cell-interaction' && calendarState.focusedDay != null && adapter.isSameDay(target, calendarState.focusedDay)) {
            return;
        }
        const skipAnimation = reason === 'cell-interaction';
        let month;
        let focusedDay;
        if (reason === 'cell-interaction') {
            month = getCurrentMonthFromVisibleDate(target, calendarState.currentMonth);
            focusedDay = target;
        } else {
            month = adapter.isSameMonth(target, calendarState.currentMonth) ? calendarState.currentMonth : adapter.startOfMonth(target);
            focusedDay = target;
            // If the date is disabled, we try to find a non-disabled date inside the same month.
            if (isDateDisabled(focusedDay)) {
                const startOfMonth = adapter.startOfMonth(target);
                const endOfMonth = adapter.endOfMonth(target);
                focusedDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findClosestEnabledDate"])({
                    adapter,
                    date: focusedDay,
                    minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
                    maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
                    disablePast,
                    disableFuture,
                    isDateDisabled,
                    timezone
                });
            }
        }
        const hasChangedMonth = !adapter.isSameMonth(calendarState.currentMonth, month);
        const hasChangedYear = !adapter.isSameYear(calendarState.currentMonth, month);
        if (hasChangedMonth) {
            onMonthChange?.(month);
        }
        if (hasChangedYear) {
            onYearChange?.(adapter.startOfYear(month));
        }
        dispatch({
            type: 'setVisibleDate',
            month,
            direction: adapter.isAfterDay(month, calendarState.currentMonth) ? 'left' : 'right',
            focusedDay: calendarState.focusedDay != null && focusedDay != null && adapter.isSameDay(focusedDay, calendarState.focusedDay) ? calendarState.focusedDay : focusedDay,
            skipAnimation
        });
    });
    const onMonthSwitchingAnimationEnd = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        dispatch({
            type: 'finishMonthSwitchingAnimation'
        });
    }, []);
    return {
        referenceDate,
        calendarState,
        setVisibleDate,
        isDateDisabled,
        onMonthSwitchingAnimationEnd
    };
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersFadeTransitionGroupClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPickersFadeTransitionGroupUtilityClass",
    ()=>getPickersFadeTransitionGroupUtilityClass,
    "pickersFadeTransitionGroupClasses",
    ()=>pickersFadeTransitionGroupClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
const getPickersFadeTransitionGroupUtilityClass = (slot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersFadeTransitionGroup', slot);
const pickersFadeTransitionGroupClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersFadeTransitionGroup', [
    'root'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersFadeTransitionGroup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickersFadeTransitionGroup",
    ()=>PickersFadeTransitionGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript) <export default as TransitionGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/Fade/Fade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersFadeTransitionGroupClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersFadeTransitionGroupClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
const _excluded = [
    "children"
];
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersFadeTransitionGroupClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPickersFadeTransitionGroupUtilityClass"], classes);
};
const PickersFadeTransitionGroupRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__["TransitionGroup"], {
    name: 'MuiPickersFadeTransitionGroup',
    slot: 'Root'
})({
    display: 'block',
    position: 'relative'
});
function PickersFadeTransitionGroup(inProps) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiPickersFadeTransitionGroup'
    });
    const { className, reduceAnimations, transKey, classes: classesProp } = props;
    const { children } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const classes = useUtilityClasses(classesProp);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    if (reduceAnimations) {
        return children;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersFadeTransitionGroupRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            appear: false,
            mountOnEnter: true,
            unmountOnExit: true,
            timeout: {
                appear: theme.transitions.duration.enteringScreen,
                enter: theme.transitions.duration.enteringScreen,
                exit: 0
            },
            children: children
        }, transKey)
    });
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DAY_MARGIN",
    ()=>DAY_MARGIN,
    "DAY_SIZE",
    ()=>DAY_SIZE,
    "DIALOG_WIDTH",
    ()=>DIALOG_WIDTH,
    "DIGITAL_CLOCK_VIEW_HEIGHT",
    ()=>DIGITAL_CLOCK_VIEW_HEIGHT,
    "MAX_CALENDAR_HEIGHT",
    ()=>MAX_CALENDAR_HEIGHT,
    "MULTI_SECTION_CLOCK_SECTION_WIDTH",
    ()=>MULTI_SECTION_CLOCK_SECTION_WIDTH,
    "VIEW_HEIGHT",
    ()=>VIEW_HEIGHT
]);
const DAY_SIZE = 36;
const DAY_MARGIN = 2;
const DIALOG_WIDTH = 320;
const MAX_CALENDAR_HEIGHT = 280;
const VIEW_HEIGHT = 336;
const DIGITAL_CLOCK_VIEW_HEIGHT = 232;
const MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersDay/pickersDayClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPickersDayUtilityClass",
    ()=>getPickersDayUtilityClass,
    "pickersDayClasses",
    ()=>pickersDayClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
function getPickersDayUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersDay', slot);
}
const pickersDayClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersDay', [
    'root',
    'dayWithMargin',
    'dayOutsideMonth',
    'hiddenDaySpacingFiller',
    'today',
    'selected',
    'disabled'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/useIsValidValue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsValidValueContext",
    ()=>IsValidValueContext,
    "useIsValidValue",
    ()=>useIsValidValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const IsValidValueContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](()=>true);
/**
 * Returns a function to check if a value is valid according to the validation props passed to the parent Picker.
 */ if ("TURBOPACK compile-time truthy", 1) IsValidValueContext.displayName = "IsValidValueContext";
function useIsValidValue() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsValidValueContext);
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullableFieldPrivateContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickerFieldPrivateContext",
    ()=>PickerFieldPrivateContext,
    "useNullableFieldPrivateContext",
    ()=>useNullableFieldPrivateContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const PickerFieldPrivateContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) PickerFieldPrivateContext.displayName = "PickerFieldPrivateContext";
function useNullableFieldPrivateContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](PickerFieldPrivateContext);
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickerContext",
    ()=>PickerContext,
    "usePickerContext",
    ()=>usePickerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const PickerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
/**
 * Returns the context passed by the Picker wrapping the current component.
 */ if ("TURBOPACK compile-time truthy", 1) PickerContext.displayName = "PickerContext";
const usePickerContext = ()=>{
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](PickerContext);
    if (value == null) {
        throw new Error('MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component');
    }
    return value;
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickerProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickerActionsContext",
    ()=>PickerActionsContext,
    "PickerPrivateContext",
    ()=>PickerPrivateContext,
    "PickerProvider",
    ()=>PickerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$useIsValidValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/useIsValidValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useNullableFieldPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullableFieldPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const PickerActionsContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) PickerActionsContext.displayName = "PickerActionsContext";
const PickerPrivateContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    ownerState: {
        isPickerDisabled: false,
        isPickerReadOnly: false,
        isPickerValueEmpty: false,
        isPickerOpen: false,
        pickerVariant: 'desktop',
        pickerOrientation: 'portrait'
    },
    rootRefObject: {
        current: null
    },
    labelId: undefined,
    dismissViews: ()=>{},
    hasUIView: true,
    getCurrentViewMode: ()=>'UI',
    triggerElement: null,
    viewContainerRole: null,
    defaultActionBarActions: [],
    onPopperExited: undefined
});
/**
 * Provides the context for the various parts of a Picker component:
 * - contextValue: the context for the Picker sub-components.
 * - localizationProvider: the translations passed through the props and through a parent LocalizationProvider.
 *
 * @ignore - do not document.
 */ if ("TURBOPACK compile-time truthy", 1) PickerPrivateContext.displayName = "PickerPrivateContext";
function PickerProvider(props) {
    const { contextValue, actionsContextValue, privateContextValue, fieldPrivateContextValue, isValidContextValue, localeText, children } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickerContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickerActionsContext.Provider, {
            value: actionsContextValue,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickerPrivateContext.Provider, {
                value: privateContextValue,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useNullableFieldPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickerFieldPrivateContext"].Provider, {
                    value: fieldPrivateContextValue,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$useIsValidValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsValidValueContext"].Provider, {
                        value: isValidContextValue,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalizationProvider"], {
                            localeText: localeText,
                            children: children
                        })
                    })
                })
            })
        })
    });
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePickerPrivateContext",
    ()=>usePickerPrivateContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickerProvider.js [app-ssr] (ecmascript)");
'use client';
;
;
const usePickerPrivateContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickerPrivateContext"]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersDay/usePickerDayOwnerState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePickerDayOwnerState",
    ()=>usePickerDayOwnerState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
;
;
;
;
function usePickerDayOwnerState(parameters) {
    const { disabled, selected, today, outsideCurrentMonth, day, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth } = parameters;
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const { ownerState: pickerOwnerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, pickerOwnerState, {
            day,
            isDaySelected: selected ?? false,
            isDayDisabled: disabled ?? false,
            isDayCurrent: today ?? false,
            isDayOutsideMonth: outsideCurrentMonth ?? false,
            isDayStartOfWeek: adapter.isSameDay(day, adapter.startOfWeek(day)),
            isDayEndOfWeek: adapter.isSameDay(day, adapter.endOfWeek(day)),
            disableMargin: disableMargin ?? false,
            disableHighlightToday: disableHighlightToday ?? false,
            showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth ?? false
        }), [
        adapter,
        pickerOwnerState,
        day,
        selected,
        disabled,
        today,
        outsideCurrentMonth,
        disableMargin,
        disableHighlightToday,
        showDaysOutsideCurrentMonth
    ]);
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersDay/PickersDay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickersDay",
    ()=>PickersDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersDay/pickersDayClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$usePickerDayOwnerState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersDay/usePickerDayOwnerState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "autoFocus",
    "className",
    "classes",
    "hidden",
    "isAnimating",
    "onClick",
    "onDaySelect",
    "onFocus",
    "onBlur",
    "onKeyDown",
    "onMouseDown",
    "onMouseEnter",
    "children",
    "isFirstVisibleCell",
    "isLastVisibleCell",
    "day",
    "selected",
    "disabled",
    "today",
    "outsideCurrentMonth",
    "disableMargin",
    "disableHighlightToday",
    "showDaysOutsideCurrentMonth"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes, ownerState)=>{
    const { isDaySelected, isDayDisabled, isDayCurrent, isDayOutsideMonth, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth } = ownerState;
    const isHiddenDaySpacingFiller = isDayOutsideMonth && !showDaysOutsideCurrentMonth;
    const slots = {
        root: [
            'root',
            isDaySelected && !isHiddenDaySpacingFiller && 'selected',
            isDayDisabled && 'disabled',
            !disableMargin && 'dayWithMargin',
            !disableHighlightToday && isDayCurrent && 'today',
            isDayOutsideMonth && showDaysOutsideCurrentMonth && 'dayOutsideMonth',
            isHiddenDaySpacingFiller && 'hiddenDaySpacingFiller'
        ],
        hiddenDaySpacingFiller: [
            'hiddenDaySpacingFiller'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPickersDayUtilityClass"], classes);
};
const styleArg = ({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, theme.typography.caption, {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_SIZE"],
        height: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_SIZE"],
        borderRadius: '50%',
        padding: 0,
        // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
        backgroundColor: 'transparent',
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.short
        }),
        color: (theme.vars || theme).palette.text.primary,
        '@media (pointer: fine)': {
            '&:hover': {
                backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.primary.main, theme.palette.action.hoverOpacity)
            }
        },
        '&:focus': {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.primary.main, theme.palette.action.focusOpacity),
            [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected}`]: {
                willChange: 'background-color',
                backgroundColor: (theme.vars || theme).palette.primary.dark
            }
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected}`]: {
            color: (theme.vars || theme).palette.primary.contrastText,
            backgroundColor: (theme.vars || theme).palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            '&:hover': {
                willChange: 'background-color',
                backgroundColor: (theme.vars || theme).palette.primary.dark
            }
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersDayClasses"].disabled}:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected})`]: {
            color: (theme.vars || theme).palette.text.disabled
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersDayClasses"].disabled}&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected}`]: {
            opacity: 0.6
        },
        variants: [
            {
                props: {
                    disableMargin: false
                },
                style: {
                    margin: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_MARGIN"]}px`
                }
            },
            {
                props: {
                    isDayOutsideMonth: true,
                    showDaysOutsideCurrentMonth: true
                },
                style: {
                    color: (theme.vars || theme).palette.text.secondary
                }
            },
            {
                props: {
                    disableHighlightToday: false,
                    isDayCurrent: true
                },
                style: {
                    [`&:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected})`]: {
                        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
                    }
                }
            }
        ]
    });
const overridesResolver = (props, styles)=>{
    const { ownerState } = props;
    return [
        styles.root,
        !ownerState.disableMargin && styles.dayWithMargin,
        !ownerState.disableHighlightToday && ownerState.isDayCurrent && styles.today,
        !ownerState.isDayOutsideMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth,
        ownerState.isDayOutsideMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller
    ];
};
const PickersDayRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiPickersDay',
    slot: 'Root',
    overridesResolver
})(styleArg);
const PickersDayFiller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiPickersDay',
    slot: 'Root',
    overridesResolver
})(({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, styleArg({
        theme
    }), {
        // visibility: 'hidden' does not work here as it hides the element from screen readers as well
        opacity: 0,
        pointerEvents: 'none'
    }));
const noop = ()=>{};
const PickersDayRaw = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function PickersDay(inProps, forwardedRef) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiPickersDay'
    });
    const { autoFocus = false, className, classes: classesProp, isAnimating, onClick, onDaySelect, onFocus = noop, onBlur = noop, onKeyDown = noop, onMouseDown = noop, onMouseEnter = noop, children, day, selected, disabled, today, outsideCurrentMonth, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$usePickerDayOwnerState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerDayOwnerState"])({
        day,
        selected,
        disabled,
        today,
        outsideCurrentMonth,
        disableMargin,
        disableHighlightToday,
        showDaysOutsideCurrentMonth
    });
    const classes = useUtilityClasses(classesProp, ownerState);
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ref, forwardedRef);
    // Since this is rendered when a Popper is opened we can't use passive effects.
    // Focusing in passive effects in Popper causes scroll jump.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
            // ref.current being null would be a bug in MUI
            ref.current.focus();
        }
    }, [
        autoFocus,
        disabled,
        isAnimating,
        outsideCurrentMonth
    ]);
    // For a day outside the current month, move the focus from mouseDown to mouseUp
    // Goal: have the onClick ends before sliding to the new month
    const handleMouseDown = (event)=>{
        onMouseDown(event);
        if (outsideCurrentMonth) {
            event.preventDefault();
        }
    };
    const handleClick = (event)=>{
        event.defaultMuiPrevented = true;
        if (!disabled) {
            onDaySelect(day);
        }
        if (outsideCurrentMonth) {
            event.currentTarget.focus();
        }
        if (onClick) {
            onClick(event);
        }
    };
    if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersDayFiller, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, classes.hiddenDaySpacingFiller, className),
            ownerState: ownerState,
            role: other.role
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersDayRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ref: handleRef,
        centerRipple: true,
        disabled: disabled,
        tabIndex: selected ? 0 : -1,
        onKeyDown: (event)=>onKeyDown(event, day),
        onFocus: (event)=>onFocus(event, day),
        onBlur: (event)=>onBlur(event, day),
        onMouseEnter: (event)=>onMouseEnter(event, day),
        onClick: handleClick,
        onMouseDown: handleMouseDown
    }, other, {
        ownerState: ownerState,
        children: children ?? adapter.format(day, 'dayOfMonth')
    }));
});
if ("TURBOPACK compile-time truthy", 1) PickersDayRaw.displayName = "PickersDayRaw";
("TURBOPACK compile-time truthy", 1) ? PickersDayRaw.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */ action: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
            current: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
                focusVisible: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired
            })
        })
    ]),
    /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */ centerRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    component: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The date to show.
   */ day: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object.isRequired,
    /**
   * If `true`, renders as disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */ disableHighlightToday: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */ disableMargin: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */ disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */ disableTouchRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */ focusRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */ focusVisibleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    isAnimating: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */ isFirstVisibleCell: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool.isRequired,
    /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */ isLastVisibleCell: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool.isRequired,
    onBlur: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onDaySelect: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    onFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */ onFocusVisible: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onKeyDown: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onMouseEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, day is outside of month and will be hidden.
   */ outsideCurrentMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool.isRequired,
    /**
   * If `true`, renders as selected.
   * @default false
   */ selected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */ showDaysOutsideCurrentMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * @default 0
   */ tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * If `true`, renders as today date.
   * @default false
   */ today: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Props applied to the `TouchRipple` element.
   */ TouchRippleProps: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * A ref that points to the `TouchRipple` element.
   */ touchRippleRef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
            current: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
                pulsate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                stop: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired
            })
        })
    ])
} : "TURBOPACK unreachable";
const PickersDay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](PickersDayRaw);
if ("TURBOPACK compile-time truthy", 1) PickersDay.displayName = "PickersDay";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerTranslations.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePickerTranslations",
    ()=>usePickerTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
'use client';
;
const usePickerTranslations = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocalizationContext"])().localeText;
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDefaultDates",
    ()=>useDefaultDates,
    "useNow",
    ()=>useNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
;
;
const useDefaultDates = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocalizationContext"])().defaultDates;
const useNow = (timezone)=>{
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const now = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    if (now.current === undefined) {
        now.current = adapter.date(undefined, timezone);
    }
    return now.current;
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersSlideTransitionClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPickersSlideTransitionUtilityClass",
    ()=>getPickersSlideTransitionUtilityClass,
    "pickersSlideTransitionClasses",
    ()=>pickersSlideTransitionClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
const getPickersSlideTransitionUtilityClass = (slot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersSlideTransition', slot);
const pickersSlideTransitionClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersSlideTransition', [
    'root',
    'slideEnter-left',
    'slideEnter-right',
    'slideEnterActive',
    'slideExit',
    'slideExitActiveLeft-left',
    'slideExitActiveLeft-right'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersSlideTransition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickersSlideTransition",
    ()=>PickersSlideTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSTransition$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/react-transition-group/esm/CSSTransition.js [app-ssr] (ecmascript) <export default as CSSTransition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript) <export default as TransitionGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersSlideTransitionClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "children",
    "className",
    "reduceAnimations",
    "slideDirection",
    "transKey",
    "classes"
];
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes, ownerState)=>{
    const { slideDirection } = ownerState;
    const slots = {
        root: [
            'root'
        ],
        exit: [
            'slideExit'
        ],
        enterActive: [
            'slideEnterActive'
        ],
        enter: [
            `slideEnter-${slideDirection}`
        ],
        exitActive: [
            `slideExitActiveLeft-${slideDirection}`
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPickersSlideTransitionUtilityClass"], classes);
};
const PickersSlideTransitionRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__["TransitionGroup"], {
    name: 'MuiPickersSlideTransition',
    slot: 'Root',
    overridesResolver: (_, styles)=>[
            styles.root,
            {
                [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideEnter-left']}`]: styles['slideEnter-left']
            },
            {
                [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideEnter-right']}`]: styles['slideEnter-right']
            },
            {
                [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"].slideEnterActive}`]: styles.slideEnterActive
            },
            {
                [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"].slideExit}`]: styles.slideExit
            },
            {
                [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideExitActiveLeft-left']}`]: styles['slideExitActiveLeft-left']
            },
            {
                [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideExitActiveLeft-right']}`]: styles['slideExitActiveLeft-right']
            }
        ]
})(({ theme })=>{
    const slideTransition = theme.transitions.create('transform', {
        duration: theme.transitions.duration.complex,
        easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
    });
    return {
        display: 'block',
        position: 'relative',
        overflowX: 'hidden',
        '& > *': {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideEnter-left']}`]: {
            willChange: 'transform',
            transform: 'translate(100%)',
            zIndex: 1
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideEnter-right']}`]: {
            willChange: 'transform',
            transform: 'translate(-100%)',
            zIndex: 1
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"].slideEnterActive}`]: {
            transform: 'translate(0%)',
            transition: slideTransition
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"].slideExit}`]: {
            transform: 'translate(0%)'
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideExitActiveLeft-left']}`]: {
            willChange: 'transform',
            transform: 'translate(-100%)',
            transition: slideTransition,
            zIndex: 0
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$pickersSlideTransitionClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersSlideTransitionClasses"]['slideExitActiveLeft-right']}`]: {
            willChange: 'transform',
            transform: 'translate(100%)',
            transition: slideTransition,
            zIndex: 0
        }
    };
});
function PickersSlideTransition(inProps) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiPickersSlideTransition'
    });
    const { children, className, reduceAnimations, slideDirection, transKey, classes: classesProp } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { ownerState: pickerOwnerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, pickerOwnerState, {
        slideDirection
    });
    const classes = useUtilityClasses(classesProp, ownerState);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    if (reduceAnimations) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
            children: children
        });
    }
    const transitionClasses = {
        exit: classes.exit,
        enterActive: classes.enterActive,
        enter: classes.enter,
        exitActive: classes.exitActive
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersSlideTransitionRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        childFactory: (element)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](element, {
                classNames: transitionClasses
            }),
        role: "presentation",
        ownerState: ownerState,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSTransition$3e$__["CSSTransition"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            mountOnEnter: true,
            unmountOnExit: true,
            timeout: theme.transitions.duration.complex,
            classNames: transitionClasses
        }, other, {
            children: children
        }), transKey)
    });
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/dayCalendarClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dayCalendarClasses",
    ()=>dayCalendarClasses,
    "getDayCalendarUtilityClass",
    ()=>getDayCalendarUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
const getDayCalendarUtilityClass = (slot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiDayCalendar', slot);
const dayCalendarClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiDayCalendar', [
    'root',
    'header',
    'weekDayLabel',
    'loadingContainer',
    'slideTransition',
    'monthContainer',
    'weekContainer',
    'weekNumberLabel',
    'weekNumber'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/DayCalendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayCalendar",
    ()=>DayCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/RtlProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$PickersDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersDay/PickersDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerTranslations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerTranslations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$PickersSlideTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersSlideTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$useIsDateDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/useIsDateDisabled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$dayCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/dayCalendarClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$usePickerDayOwnerState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersDay/usePickerDayOwnerState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "parentProps",
    "day",
    "focusedDay",
    "selectedDays",
    "isDateDisabled",
    "currentMonthNumber",
    "isViewFocused"
], _excluded2 = [
    "ownerState"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ],
        header: [
            'header'
        ],
        weekDayLabel: [
            'weekDayLabel'
        ],
        loadingContainer: [
            'loadingContainer'
        ],
        slideTransition: [
            'slideTransition'
        ],
        monthContainer: [
            'monthContainer'
        ],
        weekContainer: [
            'weekContainer'
        ],
        weekNumberLabel: [
            'weekNumberLabel'
        ],
        weekNumber: [
            'weekNumber'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$dayCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayCalendarUtilityClass"], classes);
};
const weeksContainerHeight = (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_SIZE"] + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_MARGIN"] * 2) * 6;
const PickersCalendarDayRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiDayCalendar',
    slot: 'Root'
})({});
const PickersCalendarDayHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiDayCalendar',
    slot: 'Header'
})({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
const PickersCalendarWeekDayLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiDayCalendar',
    slot: 'WeekDayLabel'
})(({ theme })=>({
        width: 36,
        height: 40,
        margin: '0 2px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: (theme.vars || theme).palette.text.secondary
    }));
const PickersCalendarWeekNumberLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiDayCalendar',
    slot: 'WeekNumberLabel'
})(({ theme })=>({
        width: 36,
        height: 40,
        margin: '0 2px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: (theme.vars || theme).palette.text.disabled
    }));
const PickersCalendarWeekNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiDayCalendar',
    slot: 'WeekNumber'
})(({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, theme.typography.caption, {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_SIZE"],
        height: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_SIZE"],
        padding: 0,
        margin: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_MARGIN"]}px`,
        color: (theme.vars || theme).palette.text.disabled,
        fontSize: '0.75rem',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-flex'
    }));
const PickersCalendarLoadingContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiDayCalendar',
    slot: 'LoadingContainer'
})({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: weeksContainerHeight
});
const PickersCalendarSlideTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$PickersSlideTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickersSlideTransition"], {
    name: 'MuiDayCalendar',
    slot: 'SlideTransition'
})({
    minHeight: weeksContainerHeight
});
const PickersCalendarWeekContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiDayCalendar',
    slot: 'MonthContainer'
})({
    overflow: 'hidden'
});
const PickersCalendarWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiDayCalendar',
    slot: 'WeekContainer'
})({
    margin: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_MARGIN"]}px 0`,
    display: 'flex',
    justifyContent: 'center'
});
function WrappedDay(_ref) {
    let { parentProps, day, focusedDay, selectedDays, isDateDisabled, currentMonthNumber, isViewFocused } = _ref, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    const { disabled, disableHighlightToday, isMonthSwitchingAnimating, showDaysOutsideCurrentMonth, slots, slotProps, timezone } = parentProps;
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNow"])(timezone);
    const isFocusableDay = focusedDay != null && adapter.isSameDay(day, focusedDay);
    const isFocusedDay = isViewFocused && isFocusableDay;
    const isSelected = selectedDays.some((selectedDay)=>adapter.isSameDay(selectedDay, day));
    const isToday = adapter.isSameDay(day, now);
    const isDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>disabled || isDateDisabled(day), [
        disabled,
        isDateDisabled,
        day
    ]);
    const isOutsideCurrentMonth = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>adapter.getMonth(day) !== currentMonthNumber, [
        adapter,
        day,
        currentMonthNumber
    ]);
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$usePickerDayOwnerState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerDayOwnerState"])({
        day,
        selected: isSelected,
        disabled: isDisabled,
        today: isToday,
        outsideCurrentMonth: isOutsideCurrentMonth,
        disableMargin: undefined,
        // This prop can only be defined using slotProps.day so the ownerState for useSlotProps cannot have its value.
        disableHighlightToday,
        showDaysOutsideCurrentMonth
    });
    const Day = slots?.day ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$PickersDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickersDay"];
    // We don't want to pass to ownerState down, to avoid re-rendering all the day whenever a prop changes.
    const _useSlotProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: Day,
        externalSlotProps: slotProps?.day,
        additionalProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            disableHighlightToday,
            showDaysOutsideCurrentMonth,
            role: 'gridcell',
            isAnimating: isMonthSwitchingAnimating,
            // it is used in date range dragging logic by accessing `dataset.timestamp`
            'data-timestamp': adapter.toJsDate(day).valueOf()
        }, other),
        ownerState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, ownerState, {
            day,
            isDayDisabled: isDisabled,
            isDaySelected: isSelected
        })
    }), dayProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useSlotProps, _excluded2);
    const isFirstVisibleCell = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const startOfMonth = adapter.startOfMonth(adapter.setMonth(day, currentMonthNumber));
        if (!showDaysOutsideCurrentMonth) {
            return adapter.isSameDay(day, startOfMonth);
        }
        return adapter.isSameDay(day, adapter.startOfWeek(startOfMonth));
    }, [
        currentMonthNumber,
        day,
        showDaysOutsideCurrentMonth,
        adapter
    ]);
    const isLastVisibleCell = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const endOfMonth = adapter.endOfMonth(adapter.setMonth(day, currentMonthNumber));
        if (!showDaysOutsideCurrentMonth) {
            return adapter.isSameDay(day, endOfMonth);
        }
        return adapter.isSameDay(day, adapter.endOfWeek(endOfMonth));
    }, [
        currentMonthNumber,
        day,
        showDaysOutsideCurrentMonth,
        adapter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Day, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, dayProps, {
        day: day,
        disabled: isDisabled,
        autoFocus: !isOutsideCurrentMonth && isFocusedDay,
        today: isToday,
        outsideCurrentMonth: isOutsideCurrentMonth,
        isFirstVisibleCell: isFirstVisibleCell,
        isLastVisibleCell: isLastVisibleCell,
        selected: isSelected,
        tabIndex: isFocusableDay ? 0 : -1,
        "aria-selected": isSelected,
        "aria-current": isToday ? 'date' : undefined
    }));
}
function DayCalendar(inProps) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiDayCalendar'
    });
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const { onFocusedDayChange, className, classes: classesProp, currentMonth, selectedDays, focusedDay, loading, onSelectedDaysChange, onMonthSwitchingAnimationEnd, readOnly, reduceAnimations, renderLoading = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
            children: "..."
        }), slideDirection, TransitionProps, disablePast, disableFuture, minDate, maxDate, shouldDisableDate, shouldDisableMonth, shouldDisableYear, dayOfWeekFormatter = (date)=>adapter.format(date, 'weekdayShort').charAt(0).toUpperCase(), hasFocus, onFocusedViewChange, gridLabelId, displayWeekNumber, fixedWeekNumber, timezone } = props;
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNow"])(timezone);
    const classes = useUtilityClasses(classesProp);
    const isRtl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRtl"])();
    const isDateDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$useIsDateDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsDateDisabled"])({
        shouldDisableDate,
        shouldDisableMonth,
        shouldDisableYear,
        minDate,
        maxDate,
        disablePast,
        disableFuture,
        timezone
    });
    const translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerTranslations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerTranslations"])();
    const handleDaySelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((day)=>{
        if (readOnly) {
            return;
        }
        onSelectedDaysChange(day);
    });
    const focusDay = (day)=>{
        if (!isDateDisabled(day)) {
            onFocusedDayChange(day);
            onFocusedViewChange?.(true);
        }
    };
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, day)=>{
        switch(event.key){
            case 'ArrowUp':
                focusDay(adapter.addDays(day, -7));
                event.preventDefault();
                break;
            case 'ArrowDown':
                focusDay(adapter.addDays(day, 7));
                event.preventDefault();
                break;
            case 'ArrowLeft':
                {
                    const newFocusedDayDefault = adapter.addDays(day, isRtl ? 1 : -1);
                    const nextAvailableMonth = adapter.addMonths(day, isRtl ? 1 : -1);
                    const closestDayToFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findClosestEnabledDate"])({
                        adapter,
                        date: newFocusedDayDefault,
                        minDate: isRtl ? newFocusedDayDefault : adapter.startOfMonth(nextAvailableMonth),
                        maxDate: isRtl ? adapter.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
                        isDateDisabled,
                        timezone
                    });
                    focusDay(closestDayToFocus || newFocusedDayDefault);
                    event.preventDefault();
                    break;
                }
            case 'ArrowRight':
                {
                    const newFocusedDayDefault = adapter.addDays(day, isRtl ? -1 : 1);
                    const nextAvailableMonth = adapter.addMonths(day, isRtl ? -1 : 1);
                    const closestDayToFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findClosestEnabledDate"])({
                        adapter,
                        date: newFocusedDayDefault,
                        minDate: isRtl ? adapter.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
                        maxDate: isRtl ? newFocusedDayDefault : adapter.endOfMonth(nextAvailableMonth),
                        isDateDisabled,
                        timezone
                    });
                    focusDay(closestDayToFocus || newFocusedDayDefault);
                    event.preventDefault();
                    break;
                }
            case 'Home':
                focusDay(adapter.startOfWeek(day));
                event.preventDefault();
                break;
            case 'End':
                focusDay(adapter.endOfWeek(day));
                event.preventDefault();
                break;
            case 'PageUp':
                focusDay(adapter.addMonths(day, 1));
                event.preventDefault();
                break;
            case 'PageDown':
                focusDay(adapter.addMonths(day, -1));
                event.preventDefault();
                break;
            default:
                break;
        }
    });
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, day)=>focusDay(day));
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, day)=>{
        if (focusedDay != null && adapter.isSameDay(focusedDay, day)) {
            onFocusedViewChange?.(false);
        }
    });
    const currentMonthNumber = adapter.getMonth(currentMonth);
    const currentYearNumber = adapter.getYear(currentMonth);
    const validSelectedDays = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>selectedDays.filter((day)=>!!day).map((day)=>adapter.startOfDay(day)), [
        adapter,
        selectedDays
    ]);
    // need a new ref whenever the `key` of the transition changes: https://reactcommunity.org/react-transition-group/transition/#Transition-prop-nodeRef.
    const transitionKey = `${currentYearNumber}-${currentMonthNumber}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const slideNodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"](), [
        transitionKey
    ]);
    const weeksToDisplay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const toDisplay = adapter.getWeekArray(currentMonth);
        let nextMonth = adapter.addMonths(currentMonth, 1);
        while(fixedWeekNumber && toDisplay.length < fixedWeekNumber){
            const additionalWeeks = adapter.getWeekArray(nextMonth);
            const hasCommonWeek = adapter.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
            additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week)=>{
                if (toDisplay.length < fixedWeekNumber) {
                    toDisplay.push(week);
                }
            });
            nextMonth = adapter.addMonths(nextMonth, 1);
        }
        return toDisplay;
    }, [
        currentMonth,
        fixedWeekNumber,
        adapter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(PickersCalendarDayRoot, {
        role: "grid",
        "aria-labelledby": gridLabelId,
        className: classes.root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(PickersCalendarDayHeader, {
                role: "row",
                className: classes.header,
                children: [
                    displayWeekNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersCalendarWeekNumberLabel, {
                        variant: "caption",
                        role: "columnheader",
                        "aria-label": translations.calendarWeekNumberHeaderLabel,
                        className: classes.weekNumberLabel,
                        children: translations.calendarWeekNumberHeaderText
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekdays"])(adapter, now).map((weekday, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersCalendarWeekDayLabel, {
                            variant: "caption",
                            role: "columnheader",
                            "aria-label": adapter.format(weekday, 'weekday'),
                            className: classes.weekDayLabel,
                            children: dayOfWeekFormatter(weekday)
                        }, i.toString()))
                ]
            }),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersCalendarLoadingContainer, {
                className: classes.loadingContainer,
                children: renderLoading()
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersCalendarSlideTransition, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                transKey: transitionKey,
                onExited: onMonthSwitchingAnimationEnd,
                reduceAnimations: reduceAnimations,
                slideDirection: slideDirection,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, classes.slideTransition)
            }, TransitionProps, {
                nodeRef: slideNodeRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersCalendarWeekContainer, {
                    ref: slideNodeRef,
                    role: "rowgroup",
                    className: classes.monthContainer,
                    children: weeksToDisplay.map((week, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(PickersCalendarWeek, {
                            role: "row",
                            className: classes.weekContainer,
                            "aria-rowindex": index + 1,
                            children: [
                                displayWeekNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersCalendarWeekNumber, {
                                    className: classes.weekNumber,
                                    role: "rowheader",
                                    "aria-label": translations.calendarWeekNumberAriaLabelText(adapter.getWeekNumber(week[0])),
                                    children: translations.calendarWeekNumberText(adapter.getWeekNumber(week[0]))
                                }),
                                week.map((day, dayIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(WrappedDay, {
                                        parentProps: props,
                                        day: day,
                                        selectedDays: validSelectedDays,
                                        isViewFocused: hasFocus,
                                        focusedDay: focusedDay,
                                        onKeyDown: handleKeyDown,
                                        onFocus: handleFocus,
                                        onBlur: handleBlur,
                                        onDaySelect: handleDaySelect,
                                        isDateDisabled: isDateDisabled,
                                        currentMonthNumber: currentMonthNumber,
                                        "aria-colindex": dayIndex + 1
                                    }, day.toString()))
                            ]
                        }, `week-${week[0]}`))
                })
            }))
        ]
    });
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/MonthCalendar/monthCalendarClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMonthCalendarUtilityClass",
    ()=>getMonthCalendarUtilityClass,
    "monthCalendarClasses",
    ()=>monthCalendarClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
function getMonthCalendarUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiMonthCalendar', slot);
}
const monthCalendarClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiMonthCalendar', [
    'root',
    'button',
    'disabled',
    'selected'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendarButton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthCalendarButton",
    ()=>MonthCalendarButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/MonthCalendar/monthCalendarClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "autoFocus",
    "classes",
    "disabled",
    "selected",
    "value",
    "onClick",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "slots",
    "slotProps"
];
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes, ownerState)=>{
    const slots = {
        button: [
            'button',
            ownerState.isMonthDisabled && 'disabled',
            ownerState.isMonthSelected && 'selected'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthCalendarUtilityClass"], classes);
};
const DefaultMonthButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('button', {
    name: 'MuiMonthCalendar',
    slot: 'Button',
    overridesResolver: (_, styles)=>[
            styles.button,
            {
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthCalendarClasses"].disabled}`]: styles.disabled
            },
            {
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthCalendarClasses"].selected}`]: styles.selected
            }
        ]
})(({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        color: 'unset',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0
    }, theme.typography.subtitle1, {
        height: 36,
        width: 72,
        borderRadius: 18,
        cursor: 'pointer',
        '&:focus': {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.active, theme.palette.action.hoverOpacity)
        },
        '&:hover': {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.active, theme.palette.action.hoverOpacity)
        },
        '&:disabled': {
            cursor: 'auto',
            pointerEvents: 'none'
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthCalendarClasses"].disabled}`]: {
            color: (theme.vars || theme).palette.text.secondary
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthCalendarClasses"].selected}`]: {
            color: (theme.vars || theme).palette.primary.contrastText,
            backgroundColor: (theme.vars || theme).palette.primary.main,
            '&:focus, &:hover': {
                backgroundColor: (theme.vars || theme).palette.primary.dark
            }
        }
    }));
const MonthCalendarButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](function MonthCalendarButton(props) {
    const { autoFocus, classes: classesProp, disabled, selected, value, onClick, onKeyDown, onFocus, onBlur, slots, slotProps } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { ownerState: pickerOwnerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, pickerOwnerState, {
        isMonthDisabled: disabled,
        isMonthSelected: selected
    });
    const classes = useUtilityClasses(classesProp, ownerState);
    // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (autoFocus) {
            // `ref.current` being `null` would be a bug in MUI.
            ref.current?.focus();
        }
    }, [
        autoFocus
    ]);
    const MonthButton = slots?.monthButton ?? DefaultMonthButton;
    const monthButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: MonthButton,
        externalSlotProps: slotProps?.monthButton,
        externalForwardedProps: other,
        additionalProps: {
            disabled,
            ref,
            type: 'button',
            role: 'radio',
            'aria-checked': selected,
            onClick: (event)=>onClick(event, value),
            onKeyDown: (event)=>onKeyDown(event, value),
            onFocus: (event)=>onFocus(event, value),
            onBlur: (event)=>onBlur(event, value)
        },
        ownerState,
        className: classes.button
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MonthButton, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, monthButtonProps));
});
if ("TURBOPACK compile-time truthy", 1) MonthCalendarButton.displayName = "MonthCalendarButton";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useControlledValue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControlledValue",
    ()=>useControlledValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
;
;
;
;
const useControlledValue = ({ name, timezone: timezoneProp, value: valueProp, defaultValue, referenceDate, onChange: onChangeProp, valueManager })=>{
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const [valueWithInputTimezone, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        name,
        state: 'value',
        controlled: valueProp,
        default: defaultValue ?? valueManager.emptyValue
    });
    const inputTimezone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>valueManager.getTimezone(adapter, valueWithInputTimezone), [
        adapter,
        valueManager,
        valueWithInputTimezone
    ]);
    const setInputTimezone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newValue)=>{
        if (inputTimezone == null) {
            return newValue;
        }
        return valueManager.setTimezone(adapter, inputTimezone, newValue);
    });
    const timezoneToRender = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (timezoneProp) {
            return timezoneProp;
        }
        if (inputTimezone) {
            return inputTimezone;
        }
        if (referenceDate) {
            return adapter.getTimezone(Array.isArray(referenceDate) ? referenceDate[0] : referenceDate);
        }
        return 'default';
    }, [
        timezoneProp,
        inputTimezone,
        referenceDate,
        adapter
    ]);
    const valueWithTimezoneToRender = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>valueManager.setTimezone(adapter, timezoneToRender, valueWithInputTimezone), [
        valueManager,
        adapter,
        timezoneToRender,
        valueWithInputTimezone
    ]);
    const handleValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newValue, ...otherParams)=>{
        const newValueWithInputTimezone = setInputTimezone(newValue);
        setValue(newValueWithInputTimezone);
        onChangeProp?.(newValueWithInputTimezone, ...otherParams);
    });
    return {
        value: valueWithTimezoneToRender,
        handleValueChange,
        timezone: timezoneToRender
    };
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApplyDefaultValuesToDateValidationProps",
    ()=>useApplyDefaultValuesToDateValidationProps,
    "useDateManager",
    ()=>useDateManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$validation$2f$validateDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/validation/validateDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerTranslations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerTranslations.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function useDateManager(parameters = {}) {
    const { enableAccessibleFieldDOMStructure = true } = parameters;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            valueType: 'date',
            validator: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$validation$2f$validateDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDate"],
            internal_valueManager: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"],
            internal_fieldValueManager: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemFieldValueManager"],
            internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
            internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateFieldInternalProps,
            internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
        }), [
        enableAccessibleFieldDOMStructure
    ]);
}
function useOpenPickerButtonAriaLabel(value) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerTranslations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerTranslations"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const formattedValue = adapter.isValid(value) ? adapter.format(value, 'fullDate') : null;
        return translations.openDatePickerDialogue(formattedValue);
    }, [
        value,
        translations,
        adapter
    ]);
}
function useApplyDefaultValuesToDateFieldInternalProps(internalProps) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const validationProps = useApplyDefaultValuesToDateValidationProps(internalProps);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, internalProps, validationProps, {
            format: internalProps.format ?? adapter.formats.keyboardDate
        }), [
        internalProps,
        validationProps,
        adapter
    ]);
}
function useApplyDefaultValuesToDateValidationProps(props) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const defaultDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultDates"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            disablePast: props.disablePast ?? false,
            disableFuture: props.disableFuture ?? false,
            minDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDefaultDate"])(adapter, props.minDate, defaultDates.minDate),
            maxDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDefaultDate"])(adapter, props.maxDate, defaultDates.maxDate)
        }), [
        props.minDate,
        props.maxDate,
        props.disableFuture,
        props.disablePast,
        adapter,
        defaultDates
    ]);
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthCalendar",
    ()=>MonthCalendar,
    "useMonthCalendarDefaultizedProps",
    ()=>useMonthCalendarDefaultizedProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/RtlProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/createStyled/createStyled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$MonthCalendarButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendarButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/MonthCalendar/monthCalendarClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useControlledValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useControlledValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$managers$2f$useDateManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "autoFocus",
    "className",
    "currentMonth",
    "classes",
    "value",
    "defaultValue",
    "referenceDate",
    "disabled",
    "disableFuture",
    "disablePast",
    "maxDate",
    "minDate",
    "onChange",
    "shouldDisableMonth",
    "readOnly",
    "disableHighlightToday",
    "onMonthFocus",
    "hasFocus",
    "onFocusedViewChange",
    "monthsPerRow",
    "timezone",
    "gridLabelId",
    "slots",
    "slotProps"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$monthCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthCalendarUtilityClass"], classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
    const themeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props,
        name
    });
    const validationProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$managers$2f$useDateManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApplyDefaultValuesToDateValidationProps"])(themeProps);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, themeProps, validationProps, {
        monthsPerRow: themeProps.monthsPerRow ?? 3
    });
}
const isSameMonth = (monthA, monthB, yearA, yearB, adapter)=>Boolean(monthA === monthB && yearB && adapter.isSameYear(yearA, yearB));
const MonthCalendarRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiMonthCalendar',
    slot: 'Root',
    shouldForwardProp: (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldForwardProp"])(prop) && prop !== 'monthsPerRow'
})({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 16,
    padding: '8px 0',
    width: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIALOG_WIDTH"],
    // avoid padding increasing width over defined
    boxSizing: 'border-box',
    variants: [
        {
            props: {
                monthsPerRow: 3
            },
            style: {
                columnGap: 24
            }
        },
        {
            props: {
                monthsPerRow: 4
            },
            style: {
                columnGap: 0
            }
        }
    ]
});
const MonthCalendar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function MonthCalendar(inProps, ref) {
    const props = useMonthCalendarDefaultizedProps(inProps, 'MuiMonthCalendar');
    const { autoFocus, className, currentMonth, classes: classesProp, value: valueProp, defaultValue, referenceDate: referenceDateProp, disabled, disableFuture, disablePast, maxDate, minDate, onChange, shouldDisableMonth, readOnly, onMonthFocus, hasFocus, onFocusedViewChange, monthsPerRow, timezone: timezoneProp, gridLabelId, slots, slotProps } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { value, handleValueChange, timezone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useControlledValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControlledValue"])({
        name: 'MonthCalendar',
        timezone: timezoneProp,
        value: valueProp,
        defaultValue,
        referenceDate: referenceDateProp,
        onChange,
        valueManager: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"]
    });
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNow"])(timezone);
    const isRtl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRtl"])();
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const { ownerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const referenceDate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"].getInitialReferenceValue({
            value,
            adapter,
            props,
            timezone,
            referenceDate: referenceDateProp,
            granularity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTION_TYPE_GRANULARITY"].month
        }), [] // eslint-disable-line react-hooks/exhaustive-deps
    );
    const classes = useUtilityClasses(classesProp);
    const todayMonth = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>adapter.getMonth(now), [
        adapter,
        now
    ]);
    const selectedMonth = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (value != null) {
            return adapter.getMonth(value);
        }
        return null;
    }, [
        value,
        adapter
    ]);
    const [focusedMonth, setFocusedMonth] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>selectedMonth || adapter.getMonth(referenceDate));
    const [internalHasFocus, setInternalHasFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        name: 'MonthCalendar',
        state: 'hasFocus',
        controlled: hasFocus,
        default: autoFocus ?? false
    });
    const changeHasFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newHasFocus)=>{
        setInternalHasFocus(newHasFocus);
        if (onFocusedViewChange) {
            onFocusedViewChange(newHasFocus);
        }
    });
    const isMonthDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((dateToValidate)=>{
        const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
        const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
        const monthToValidate = adapter.startOfMonth(dateToValidate);
        if (adapter.isBefore(monthToValidate, firstEnabledMonth)) {
            return true;
        }
        if (adapter.isAfter(monthToValidate, lastEnabledMonth)) {
            return true;
        }
        if (!shouldDisableMonth) {
            return false;
        }
        return shouldDisableMonth(monthToValidate);
    }, [
        disableFuture,
        disablePast,
        maxDate,
        minDate,
        now,
        shouldDisableMonth,
        adapter
    ]);
    const handleMonthSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, month)=>{
        if (readOnly) {
            return;
        }
        const currentValue = value && currentMonth && !adapter.isSameYear(value, currentMonth) ? adapter.setYear(value, adapter.getYear(currentMonth)) : value;
        // When no value is selected yet but a year was chosen (via YearCalendar),
        // prefer using currentMonth (which carries the selected year) over the initial referenceDate.
        // Fix for: https://github.com/mui/mui-x/issues/20624
        const baseDateForMonth = currentValue ?? currentMonth ?? referenceDate;
        const newDate = adapter.setMonth(baseDateForMonth, month);
        handleValueChange(newDate);
    });
    const focusMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((month)=>{
        if (!isMonthDisabled(adapter.setMonth(value ?? currentMonth ?? referenceDate, month))) {
            setFocusedMonth(month);
            changeHasFocus(true);
            if (onMonthFocus) {
                onMonthFocus(month);
            }
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setFocusedMonth((prevFocusedMonth)=>selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
    }, [
        selectedMonth
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, month)=>{
        const monthsInYear = 12;
        const monthsInRow = 3;
        switch(event.key){
            case 'ArrowUp':
                focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
                event.preventDefault();
                break;
            case 'ArrowDown':
                focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
                event.preventDefault();
                break;
            case 'ArrowLeft':
                focusMonth((monthsInYear + month + (isRtl ? 1 : -1)) % monthsInYear);
                event.preventDefault();
                break;
            case 'ArrowRight':
                focusMonth((monthsInYear + month + (isRtl ? -1 : 1)) % monthsInYear);
                event.preventDefault();
                break;
            default:
                break;
        }
    });
    const handleMonthFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, month)=>{
        focusMonth(month);
    });
    const handleMonthBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, month)=>{
        if (focusedMonth === month) {
            changeHasFocus(false);
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MonthCalendarRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        role: "radiogroup",
        "aria-labelledby": gridLabelId,
        monthsPerRow: monthsPerRow
    }, other, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthsInYear"])(adapter, currentMonth ?? value ?? referenceDate).map((month)=>{
            const monthNumber = adapter.getMonth(month);
            const monthText = adapter.format(month, 'monthShort');
            const monthLabel = adapter.format(month, 'month');
            const isSelected = isSameMonth(monthNumber, selectedMonth, month, value, adapter);
            const isDisabled = disabled || isMonthDisabled(month);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$MonthCalendarButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonthCalendarButton"], {
                selected: isSelected,
                value: monthNumber,
                onClick: handleMonthSelection,
                onKeyDown: handleKeyDown,
                autoFocus: internalHasFocus && monthNumber === focusedMonth,
                disabled: isDisabled,
                tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
                onFocus: handleMonthFocus,
                onBlur: handleMonthBlur,
                "aria-current": isSameMonth(monthNumber, todayMonth, month, now, adapter) ? 'date' : undefined,
                "aria-label": monthLabel,
                slots: slots,
                slotProps: slotProps,
                classes: classesProp,
                children: monthText
            }, monthText);
        })
    }));
});
if ("TURBOPACK compile-time truthy", 1) MonthCalendar.displayName = "MonthCalendar";
("TURBOPACK compile-time truthy", 1) ? MonthCalendar.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    currentMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The default selected value.
   * Used when the component is not controlled.
   */ defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */ disableFuture: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */ disableHighlightToday: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */ disablePast: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    gridLabelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    hasFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Maximal selectable date.
   * @default 2099-12-31
   */ maxDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Minimal selectable date.
   * @default 1900-01-01
   */ minDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Months rendered per row.
   * @default 3
   */ monthsPerRow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        3,
        4
    ]),
    /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */ onChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onFocusedViewChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onMonthFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */ readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */ referenceDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */ shouldDisableMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The props used for each component slot.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Overridable component slots.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */ timezone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The selected value.
   * Used when the component is controlled.
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
} : "TURBOPACK unreachable";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/YearCalendar/yearCalendarClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getYearCalendarUtilityClass",
    ()=>getYearCalendarUtilityClass,
    "yearCalendarClasses",
    ()=>yearCalendarClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
function getYearCalendarUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiYearCalendar', slot);
}
const yearCalendarClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiYearCalendar', [
    'root',
    'button',
    'disabled',
    'selected'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendarButton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YearCalendarButton",
    ()=>YearCalendarButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/YearCalendar/yearCalendarClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "autoFocus",
    "classes",
    "disabled",
    "selected",
    "value",
    "onClick",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "slots",
    "slotProps"
];
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes, ownerState)=>{
    const slots = {
        button: [
            'button',
            ownerState.isYearDisabled && 'disabled',
            ownerState.isYearSelected && 'selected'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearCalendarUtilityClass"], classes);
};
const DefaultYearButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('button', {
    name: 'MuiYearCalendar',
    slot: 'Button',
    overridesResolver: (_, styles)=>[
            styles.button,
            {
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yearCalendarClasses"].disabled}`]: styles.disabled
            },
            {
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: styles.selected
            }
        ]
})(({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        color: 'unset',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0
    }, theme.typography.subtitle1, {
        height: 36,
        width: 72,
        borderRadius: 18,
        cursor: 'pointer',
        '&:focus': {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.active, theme.palette.action.focusOpacity)
        },
        '&:hover': {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.active, theme.palette.action.hoverOpacity)
        },
        '&:disabled': {
            cursor: 'auto',
            pointerEvents: 'none'
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yearCalendarClasses"].disabled}`]: {
            color: (theme.vars || theme).palette.text.secondary
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
            color: (theme.vars || theme).palette.primary.contrastText,
            backgroundColor: (theme.vars || theme).palette.primary.main,
            '&:focus, &:hover': {
                backgroundColor: (theme.vars || theme).palette.primary.dark
            }
        }
    }));
const YearCalendarButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](function YearCalendarButton(props) {
    const { autoFocus, classes: classesProp, disabled, selected, value, onClick, onKeyDown, onFocus, onBlur, slots, slotProps } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { ownerState: pickerOwnerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, pickerOwnerState, {
        isYearDisabled: disabled,
        isYearSelected: selected
    });
    const classes = useUtilityClasses(classesProp, ownerState);
    // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (autoFocus) {
            // `ref.current` being `null` would be a bug in MUI.
            ref.current?.focus();
        }
    }, [
        autoFocus
    ]);
    const YearButton = slots?.yearButton ?? DefaultYearButton;
    const yearButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: YearButton,
        externalSlotProps: slotProps?.yearButton,
        externalForwardedProps: other,
        additionalProps: {
            disabled,
            ref,
            type: 'button',
            role: 'radio',
            'aria-checked': selected,
            onClick: (event)=>onClick(event, value),
            onKeyDown: (event)=>onKeyDown(event, value),
            onFocus: (event)=>onFocus(event, value),
            onBlur: (event)=>onBlur(event, value)
        },
        ownerState,
        className: classes.button
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(YearButton, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, yearButtonProps));
});
if ("TURBOPACK compile-time truthy", 1) YearCalendarButton.displayName = "YearCalendarButton";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YearCalendar",
    ()=>YearCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/RtlProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/createStyled/createStyled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$YearCalendarButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendarButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/YearCalendar/yearCalendarClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useControlledValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useControlledValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$managers$2f$useDateManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "autoFocus",
    "className",
    "classes",
    "value",
    "defaultValue",
    "referenceDate",
    "disabled",
    "disableFuture",
    "disablePast",
    "maxDate",
    "minDate",
    "onChange",
    "readOnly",
    "shouldDisableYear",
    "disableHighlightToday",
    "onYearFocus",
    "hasFocus",
    "onFocusedViewChange",
    "yearsOrder",
    "yearsPerRow",
    "timezone",
    "gridLabelId",
    "slots",
    "slotProps"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearCalendarUtilityClass"], classes);
};
function useYearCalendarDefaultizedProps(props, name) {
    const themeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props,
        name
    });
    const validationProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$managers$2f$useDateManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApplyDefaultValuesToDateValidationProps"])(themeProps);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, themeProps, validationProps, {
        yearsPerRow: themeProps.yearsPerRow ?? 3,
        yearsOrder: themeProps.yearsOrder ?? 'asc'
    });
}
const YearCalendarRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiYearCalendar',
    slot: 'Root',
    shouldForwardProp: (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldForwardProp"])(prop) && prop !== 'yearsPerRow'
})({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 12,
    padding: '6px 0',
    overflowY: 'auto',
    height: '100%',
    width: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIALOG_WIDTH"],
    maxHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_CALENDAR_HEIGHT"],
    // avoid padding increasing width over defined
    boxSizing: 'border-box',
    position: 'relative',
    variants: [
        {
            props: {
                yearsPerRow: 3
            },
            style: {
                columnGap: 24
            }
        },
        {
            props: {
                yearsPerRow: 4
            },
            style: {
                columnGap: 0,
                padding: '0 2px'
            }
        }
    ]
});
const YearCalendarButtonFiller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiYearCalendar',
    slot: 'ButtonFiller'
})({
    height: 36,
    width: 72
});
const YearCalendar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function YearCalendar(inProps, ref) {
    const props = useYearCalendarDefaultizedProps(inProps, 'MuiYearCalendar');
    const { autoFocus, className, classes: classesProp, value: valueProp, defaultValue, referenceDate: referenceDateProp, disabled, disableFuture, disablePast, maxDate, minDate, onChange, readOnly, shouldDisableYear, onYearFocus, hasFocus, onFocusedViewChange, yearsOrder, yearsPerRow, timezone: timezoneProp, gridLabelId, slots, slotProps } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { value, handleValueChange, timezone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useControlledValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControlledValue"])({
        name: 'YearCalendar',
        timezone: timezoneProp,
        value: valueProp,
        defaultValue,
        referenceDate: referenceDateProp,
        onChange,
        valueManager: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"]
    });
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNow"])(timezone);
    const isRtl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRtl"])();
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const { ownerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const referenceDate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"].getInitialReferenceValue({
            value,
            adapter,
            props,
            timezone,
            referenceDate: referenceDateProp,
            granularity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$getDefaultReferenceDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTION_TYPE_GRANULARITY"].year
        }), [] // eslint-disable-line react-hooks/exhaustive-deps
    );
    const classes = useUtilityClasses(classesProp);
    const todayYear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>adapter.getYear(now), [
        adapter,
        now
    ]);
    const selectedYear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (value != null) {
            return adapter.getYear(value);
        }
        return null;
    }, [
        value,
        adapter
    ]);
    const [focusedYear, setFocusedYear] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>selectedYear || adapter.getYear(referenceDate));
    const [internalHasFocus, setInternalHasFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        name: 'YearCalendar',
        state: 'hasFocus',
        controlled: hasFocus,
        default: autoFocus ?? false
    });
    const changeHasFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newHasFocus)=>{
        setInternalHasFocus(newHasFocus);
        if (onFocusedViewChange) {
            onFocusedViewChange(newHasFocus);
        }
    });
    const isYearDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((dateToValidate)=>{
        if (disablePast && adapter.isBeforeYear(dateToValidate, now)) {
            return true;
        }
        if (disableFuture && adapter.isAfterYear(dateToValidate, now)) {
            return true;
        }
        if (minDate && adapter.isBeforeYear(dateToValidate, minDate)) {
            return true;
        }
        if (maxDate && adapter.isAfterYear(dateToValidate, maxDate)) {
            return true;
        }
        if (!shouldDisableYear) {
            return false;
        }
        const yearToValidate = adapter.startOfYear(dateToValidate);
        return shouldDisableYear(yearToValidate);
    }, [
        disableFuture,
        disablePast,
        maxDate,
        minDate,
        now,
        shouldDisableYear,
        adapter
    ]);
    const handleYearSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, year)=>{
        if (readOnly) {
            return;
        }
        const newDate = adapter.setYear(value ?? referenceDate, year);
        handleValueChange(newDate);
    });
    const focusYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((year)=>{
        if (!isYearDisabled(adapter.setYear(value ?? referenceDate, year))) {
            setFocusedYear(year);
            changeHasFocus(true);
            onYearFocus?.(year);
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setFocusedYear((prevFocusedYear)=>selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
    }, [
        selectedYear
    ]);
    const verticalDirection = yearsOrder !== 'desc' ? yearsPerRow * 1 : yearsPerRow * -1;
    const horizontalDirection = isRtl && yearsOrder === 'asc' || !isRtl && yearsOrder === 'desc' ? -1 : 1;
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, year)=>{
        switch(event.key){
            case 'ArrowUp':
                focusYear(year - verticalDirection);
                event.preventDefault();
                break;
            case 'ArrowDown':
                focusYear(year + verticalDirection);
                event.preventDefault();
                break;
            case 'ArrowLeft':
                focusYear(year - horizontalDirection);
                event.preventDefault();
                break;
            case 'ArrowRight':
                focusYear(year + horizontalDirection);
                event.preventDefault();
                break;
            default:
                break;
        }
    });
    const handleYearFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, year)=>{
        focusYear(year);
    });
    const handleYearBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((event, year)=>{
        if (focusedYear === year) {
            changeHasFocus(false);
        }
    });
    const scrollerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ref, scrollerRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (autoFocus || scrollerRef.current === null) {
            return;
        }
        const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
        if (!tabbableButton) {
            return;
        }
        // Taken from useScroll in x-data-grid, but vertically centered
        const offsetHeight = tabbableButton.offsetHeight;
        const offsetTop = tabbableButton.offsetTop;
        const clientHeight = scrollerRef.current.clientHeight;
        const scrollTop = scrollerRef.current.scrollTop;
        const elementBottom = offsetTop + offsetHeight;
        if (offsetHeight > clientHeight || offsetTop < scrollTop) {
            // Button already visible
            return;
        }
        scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
    }, [
        autoFocus
    ]);
    const yearRange = adapter.getYearRange([
        minDate,
        maxDate
    ]);
    if (yearsOrder === 'desc') {
        yearRange.reverse();
    }
    let fillerAmount = yearsPerRow - yearRange.length % yearsPerRow;
    if (fillerAmount === yearsPerRow) {
        fillerAmount = 0;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(YearCalendarRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: handleRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        role: "radiogroup",
        "aria-labelledby": gridLabelId,
        yearsPerRow: yearsPerRow
    }, other, {
        children: [
            yearRange.map((year)=>{
                const yearNumber = adapter.getYear(year);
                const isSelected = yearNumber === selectedYear;
                const isDisabled = disabled || isYearDisabled(year);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$YearCalendarButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YearCalendarButton"], {
                    selected: isSelected,
                    value: yearNumber,
                    onClick: handleYearSelection,
                    onKeyDown: handleKeyDown,
                    autoFocus: internalHasFocus && yearNumber === focusedYear,
                    disabled: isDisabled,
                    tabIndex: yearNumber === focusedYear && !isDisabled ? 0 : -1,
                    onFocus: handleYearFocus,
                    onBlur: handleYearBlur,
                    "aria-current": todayYear === yearNumber ? 'date' : undefined,
                    slots: slots,
                    slotProps: slotProps,
                    classes: classesProp,
                    children: adapter.format(year, 'year')
                }, adapter.format(year, 'year'));
            }),
            Array.from({
                length: fillerAmount
            }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(YearCalendarButtonFiller, {}, index))
        ]
    }));
});
if ("TURBOPACK compile-time truthy", 1) YearCalendar.displayName = "YearCalendar";
("TURBOPACK compile-time truthy", 1) ? YearCalendar.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The default selected value.
   * Used when the component is not controlled.
   */ defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */ disableFuture: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */ disableHighlightToday: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */ disablePast: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    gridLabelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    hasFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Maximal selectable date.
   * @default 2099-12-31
   */ maxDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Minimal selectable date.
   * @default 1900-01-01
   */ minDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */ onChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onFocusedViewChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onYearFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */ readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */ referenceDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */ shouldDisableYear: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The props used for each component slot.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Overridable component slots.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */ timezone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The selected value.
   * Used when the component is controlled.
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */ yearsOrder: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'asc',
        'desc'
    ]),
    /**
   * Years rendered per row.
   * @default 3
   */ yearsPerRow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        3,
        4
    ])
} : "TURBOPACK unreachable";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/createStepNavigation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_STEP_NAVIGATION",
    ()=>DEFAULT_STEP_NAVIGATION,
    "createStepNavigation",
    ()=>createStepNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
;
const DEFAULT_STEP_NAVIGATION = {
    hasNextStep: false,
    hasSeveralSteps: false,
    goToNextStep: ()=>{},
    areViewsInSameStep: ()=>true
};
function createStepNavigation(parameters) {
    const { steps, isViewMatchingStep, onStepChange } = parameters;
    return (parametersBis)=>{
        if (steps == null) {
            return DEFAULT_STEP_NAVIGATION;
        }
        const currentStepIndex = steps.findIndex((step)=>isViewMatchingStep(parametersBis.view, step));
        const nextStep = currentStepIndex === -1 || currentStepIndex === steps.length - 1 ? null : steps[currentStepIndex + 1];
        return {
            hasNextStep: nextStep != null,
            hasSeveralSteps: steps.length > 1,
            goToNextStep: ()=>{
                if (nextStep == null) {
                    return;
                }
                onStepChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, parametersBis, {
                    step: nextStep
                }));
            },
            areViewsInSameStep: (viewA, viewB)=>{
                const stepA = steps.find((step)=>isViewMatchingStep(viewA, step));
                const stepB = steps.find((step)=>isViewMatchingStep(viewB, step));
                return stepA === stepB;
            }
        };
    };
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useViews.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViews",
    ()=>useViews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$createStepNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/createStepNavigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
let warnedOnceNotValidView = false;
function useViews({ onChange, onViewChange, openTo, view: inView, views, autoFocus, focusedView: inFocusedView, onFocusedViewChange, getStepNavigation }) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedOnceNotValidView) {
            if (inView != null && !views.includes(inView)) {
                console.warn(`MUI X: \`view="${inView}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
                warnedOnceNotValidView = true;
            }
            if (inView == null && openTo != null && !views.includes(openTo)) {
                console.warn(`MUI X: \`openTo="${openTo}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
                warnedOnceNotValidView = true;
            }
        }
    }
    const previousOpenTo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](openTo);
    const previousViews = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](views);
    const defaultView = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](views.includes(openTo) ? openTo : views[0]);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        name: 'useViews',
        state: 'view',
        controlled: inView,
        default: defaultView.current
    });
    const defaultFocusedView = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](autoFocus ? view : null);
    const [focusedView, setFocusedView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useControlled$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        name: 'useViews',
        state: 'focusedView',
        controlled: inFocusedView,
        default: defaultFocusedView.current
    });
    const stepNavigation = getStepNavigation ? getStepNavigation({
        setView,
        view,
        defaultView: defaultView.current,
        views
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$createStepNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_STEP_NAVIGATION"];
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Update the current view when `openTo` or `views` props change
        if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView)=>!views.includes(previousView))) {
            setView(views.includes(openTo) ? openTo : views[0]);
            previousViews.current = views;
            previousOpenTo.current = openTo;
        }
    }, [
        openTo,
        setView,
        view,
        views
    ]);
    const viewIndex = views.indexOf(view);
    const previousView = views[viewIndex - 1] ?? null;
    const nextView = views[viewIndex + 1] ?? null;
    const handleFocusedViewChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((viewToFocus, hasFocus)=>{
        if (hasFocus) {
            // Focus event
            setFocusedView(viewToFocus);
        } else {
            // Blur event
            setFocusedView((prevFocusedView)=>viewToFocus === prevFocusedView ? null : prevFocusedView // If false the blur is due to view switching
            );
        }
        onFocusedViewChange?.(viewToFocus, hasFocus);
    });
    const handleChangeView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newView)=>{
        // always keep the focused view in sync
        handleFocusedViewChange(newView, true);
        if (newView === view) {
            return;
        }
        setView(newView);
        if (onViewChange) {
            onViewChange(newView);
        }
    });
    const goToNextView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (nextView) {
            handleChangeView(nextView);
        }
    });
    const setValueAndGoToNextView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((value, currentViewSelectionState, selectedView)=>{
        const isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
        const hasMoreViews = selectedView ? // handles case like `DateTimePicker`, where a view might return a `finish` selection state
        // but when it's not the final view given all `views` -> overall selection state should be `partial`.
        views.indexOf(selectedView) < views.length - 1 : Boolean(nextView);
        const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? 'partial' : currentViewSelectionState;
        onChange(value, globalSelectionState, selectedView);
        // The selected view can be different from the active view,
        // This can happen if multiple views are displayed, like in `DesktopDateTimePicker` or `MultiSectionDigitalClock`.
        let currentView = null;
        if (selectedView != null && selectedView !== view) {
            currentView = selectedView;
        } else if (isSelectionFinishedOnCurrentView) {
            currentView = view;
        }
        if (currentView == null) {
            return;
        }
        const viewToNavigateTo = views[views.indexOf(currentView) + 1];
        if (viewToNavigateTo == null || !stepNavigation.areViewsInSameStep(currentView, viewToNavigateTo)) {
            return;
        }
        handleChangeView(viewToNavigateTo);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, stepNavigation, {
        view,
        setView: handleChangeView,
        focusedView,
        setFocusedView: handleFocusedViewChange,
        nextView,
        previousView,
        // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
        defaultView: views.includes(openTo) ? openTo : views[0],
        goToNextView,
        setValueAndGoToNextView
    });
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/icons/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowDropDownIcon",
    ()=>ArrowDropDownIcon,
    "ArrowLeftIcon",
    ()=>ArrowLeftIcon,
    "ArrowRightIcon",
    ()=>ArrowRightIcon,
    "CalendarIcon",
    ()=>CalendarIcon,
    "ClearIcon",
    ()=>ClearIcon,
    "ClockIcon",
    ()=>ClockIcon,
    "DateRangeIcon",
    ()=>DateRangeIcon,
    "TimeIcon",
    ()=>TimeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/utils/createSvgIcon.js [app-ssr] (ecmascript) <export default as createSvgIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * @ignore - internal component.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
const ArrowDropDownIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');
const ArrowLeftIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'ArrowLeft');
const ArrowRightIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'ArrowRight');
const CalendarIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), 'Calendar');
const ClockIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
        })
    ]
}), 'Clock');
const DateRangeIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), 'DateRange');
const TimeIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
        })
    ]
}), 'Time');
const ClearIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__["createSvgIcon"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPickersArrowSwitcherUtilityClass",
    ()=>getPickersArrowSwitcherUtilityClass,
    "pickersArrowSwitcherClasses",
    ()=>pickersArrowSwitcherClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
function getPickersArrowSwitcherUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersArrowSwitcher', slot);
}
const pickersArrowSwitcherClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersArrowSwitcher', [
    'root',
    'spacer',
    'button',
    'previousIconButton',
    'nextIconButton',
    'leftArrowIcon',
    'rightArrowIcon'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickersArrowSwitcher",
    ()=>PickersArrowSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/system/esm/RtlProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$icons$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/icons/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickersArrowSwitcher$2f$pickersArrowSwitcherClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "children",
    "className",
    "slots",
    "slotProps",
    "isNextDisabled",
    "isNextHidden",
    "onGoToNext",
    "nextLabel",
    "isPreviousDisabled",
    "isPreviousHidden",
    "onGoToPrevious",
    "previousLabel",
    "labelId",
    "classes"
], _excluded2 = [
    "ownerState"
], _excluded3 = [
    "ownerState"
];
;
;
;
;
;
;
;
;
;
;
;
;
const PickersArrowSwitcherRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiPickersArrowSwitcher',
    slot: 'Root'
})({
    display: 'flex'
});
const PickersArrowSwitcherSpacer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiPickersArrowSwitcher',
    slot: 'Spacer'
})(({ theme })=>({
        width: theme.spacing(3)
    }));
const PickersArrowSwitcherButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiPickersArrowSwitcher',
    slot: 'Button'
})({
    variants: [
        {
            props: {
                isButtonHidden: true
            },
            style: {
                visibility: 'hidden'
            }
        }
    ]
});
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ],
        spacer: [
            'spacer'
        ],
        button: [
            'button'
        ],
        previousIconButton: [
            'previousIconButton'
        ],
        nextIconButton: [
            'nextIconButton'
        ],
        leftArrowIcon: [
            'leftArrowIcon'
        ],
        rightArrowIcon: [
            'rightArrowIcon'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickersArrowSwitcher$2f$pickersArrowSwitcherClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPickersArrowSwitcherUtilityClass"], classes);
};
const PickersArrowSwitcher = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function PickersArrowSwitcher(inProps, ref) {
    const isRtl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRtl"])();
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiPickersArrowSwitcher'
    });
    const { children, className, slots, slotProps, isNextDisabled, isNextHidden, onGoToNext, nextLabel, isPreviousDisabled, isPreviousHidden, onGoToPrevious, previousLabel, labelId, classes: classesProp } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { ownerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const classes = useUtilityClasses(classesProp);
    const nextProps = {
        isDisabled: isNextDisabled,
        isHidden: isNextHidden,
        goTo: onGoToNext,
        label: nextLabel
    };
    const previousProps = {
        isDisabled: isPreviousDisabled,
        isHidden: isPreviousHidden,
        goTo: onGoToPrevious,
        label: previousLabel
    };
    const PreviousIconButton = slots?.previousIconButton ?? PickersArrowSwitcherButton;
    const previousIconButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: PreviousIconButton,
        externalSlotProps: slotProps?.previousIconButton,
        additionalProps: {
            size: 'medium',
            title: previousProps.label,
            'aria-label': previousProps.label,
            disabled: previousProps.isDisabled,
            edge: 'end',
            onClick: previousProps.goTo
        },
        ownerState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, ownerState, {
            isButtonHidden: previousProps.isHidden ?? false
        }),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.button, classes.previousIconButton)
    });
    const NextIconButton = slots?.nextIconButton ?? PickersArrowSwitcherButton;
    const nextIconButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: NextIconButton,
        externalSlotProps: slotProps?.nextIconButton,
        additionalProps: {
            size: 'medium',
            title: nextProps.label,
            'aria-label': nextProps.label,
            disabled: nextProps.isDisabled,
            edge: 'start',
            onClick: nextProps.goTo
        },
        ownerState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, ownerState, {
            isButtonHidden: nextProps.isHidden ?? false
        }),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.button, classes.nextIconButton)
    });
    const LeftArrowIcon = slots?.leftArrowIcon ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$icons$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeftIcon"];
    // The spread is here to avoid this bug mui/material-ui#34056
    const _useSlotProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: LeftArrowIcon,
        externalSlotProps: slotProps?.leftArrowIcon,
        additionalProps: {
            fontSize: 'inherit'
        },
        ownerState,
        className: classes.leftArrowIcon
    }), leftArrowIconProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useSlotProps, _excluded2);
    const RightArrowIcon = slots?.rightArrowIcon ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$icons$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"];
    // The spread is here to avoid this bug mui/material-ui#34056
    const _useSlotProps2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: RightArrowIcon,
        externalSlotProps: slotProps?.rightArrowIcon,
        additionalProps: {
            fontSize: 'inherit'
        },
        ownerState,
        className: classes.rightArrowIcon
    }), rightArrowIconProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useSlotProps2, _excluded3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(PickersArrowSwitcherRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState
    }, other, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PreviousIconButton, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, previousIconButtonProps, {
                children: isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RightArrowIcon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, rightArrowIconProps)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LeftArrowIcon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, leftArrowIconProps))
            })),
            children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "subtitle1",
                component: "span",
                id: labelId,
                children: children
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersArrowSwitcherSpacer, {
                className: classes.spacer,
                ownerState: ownerState
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NextIconButton, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, nextIconButtonProps, {
                children: isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LeftArrowIcon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, leftArrowIconProps)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RightArrowIcon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, rightArrowIconProps))
            }))
        ]
    }));
});
if ("TURBOPACK compile-time truthy", 1) PickersArrowSwitcher.displayName = "PickersArrowSwitcher";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/date-helpers-hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMeridiemMode",
    ()=>useMeridiemMode,
    "useNextMonthDisabled",
    ()=>useNextMonthDisabled,
    "usePreviousMonthDisabled",
    ()=>usePreviousMonthDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$time$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/time-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
;
;
;
function useNextMonthDisabled(month, { disableFuture, maxDate, timezone }) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const now = adapter.date(undefined, timezone);
        const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
        return !adapter.isAfter(lastEnabledMonth, month);
    }, [
        disableFuture,
        maxDate,
        month,
        adapter,
        timezone
    ]);
}
function usePreviousMonthDisabled(month, { disablePast, minDate, timezone }) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const now = adapter.date(undefined, timezone);
        const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
        return !adapter.isBefore(firstEnabledMonth, month);
    }, [
        disablePast,
        minDate,
        month,
        adapter,
        timezone
    ]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const cleanDate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>!adapter.isValid(date) ? null : date, [
        adapter,
        date
    ]);
    const meridiemMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$time$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMeridiem"])(cleanDate, adapter);
    const handleMeridiemChange = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((mode)=>{
        const timeWithMeridiem = cleanDate == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$time$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToMeridiem"])(cleanDate, mode, Boolean(ampm), adapter);
        onChange(timeWithMeridiem, selectionState ?? 'partial');
    }, [
        ampm,
        cleanDate,
        onChange,
        selectionState,
        adapter
    ]);
    return {
        meridiemMode,
        handleMeridiemChange
    };
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/pickersCalendarHeaderClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPickersCalendarHeaderUtilityClass",
    ()=>getPickersCalendarHeaderUtilityClass,
    "pickersCalendarHeaderClasses",
    ()=>pickersCalendarHeaderClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
const getPickersCalendarHeaderUtilityClass = (slot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersCalendarHeader', slot);
const pickersCalendarHeaderClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiPickersCalendarHeader', [
    'root',
    'labelContainer',
    'label',
    'switchViewButton',
    'switchViewIcon'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/PickersCalendarHeader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickersCalendarHeader",
    ()=>PickersCalendarHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/Fade/Fade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerTranslations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerTranslations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$PickersFadeTransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersFadeTransitionGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$icons$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/icons/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickersArrowSwitcher$2f$PickersArrowSwitcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$date$2d$helpers$2d$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/date-helpers-hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersCalendarHeader$2f$pickersCalendarHeaderClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/pickersCalendarHeaderClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "slots",
    "slotProps",
    "currentMonth",
    "disabled",
    "disableFuture",
    "disablePast",
    "maxDate",
    "minDate",
    "onMonthChange",
    "onViewChange",
    "view",
    "reduceAnimations",
    "views",
    "labelId",
    "className",
    "classes",
    "timezone",
    "format"
], _excluded2 = [
    "ownerState"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ],
        labelContainer: [
            'labelContainer'
        ],
        label: [
            'label'
        ],
        switchViewButton: [
            'switchViewButton'
        ],
        switchViewIcon: [
            'switchViewIcon'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersCalendarHeader$2f$pickersCalendarHeaderClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPickersCalendarHeaderUtilityClass"], classes);
};
const PickersCalendarHeaderRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiPickersCalendarHeader',
    slot: 'Root'
})({
    display: 'flex',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 4,
    paddingLeft: 24,
    paddingRight: 12,
    // prevent jumping in safari
    maxHeight: 40,
    minHeight: 40
});
const PickersCalendarHeaderLabelContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiPickersCalendarHeader',
    slot: 'LabelContainer'
})(({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: 'auto'
    }, theme.typography.body1, {
        fontWeight: theme.typography.fontWeightMedium
    }));
const PickersCalendarHeaderLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiPickersCalendarHeader',
    slot: 'Label'
})({
    marginRight: 6
});
const PickersCalendarHeaderSwitchViewButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiPickersCalendarHeader',
    slot: 'SwitchViewButton'
})({
    marginRight: 'auto',
    variants: [
        {
            props: {
                view: 'year'
            },
            style: {
                [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersCalendarHeader$2f$pickersCalendarHeaderClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickersCalendarHeaderClasses"].switchViewIcon}`]: {
                    transform: 'rotate(180deg)'
                }
            }
        }
    ]
});
const PickersCalendarHeaderSwitchViewIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$icons$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowDropDownIcon"], {
    name: 'MuiPickersCalendarHeader',
    slot: 'SwitchViewIcon'
})(({ theme })=>({
        willChange: 'transform',
        transition: theme.transitions.create('transform'),
        transform: 'rotate(0deg)'
    }));
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * - [DateRangeCalendar](https://mui.com/x/react-date-pickers/date-range-calendar/)
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [PickersCalendarHeader API](https://mui.com/x/api/date-pickers/pickers-calendar-header/)
 */ const PickersCalendarHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function PickersCalendarHeader(inProps, ref) {
    const translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerTranslations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerTranslations"])();
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiPickersCalendarHeader'
    });
    const { slots, slotProps, currentMonth: month, disabled, disableFuture, disablePast, maxDate, minDate, onMonthChange, onViewChange, view, reduceAnimations, views, labelId, className, classes: classesProp, timezone, format = `${adapter.formats.month} ${adapter.formats.year}` } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { ownerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const classes = useUtilityClasses(classesProp);
    const SwitchViewButton = slots?.switchViewButton ?? PickersCalendarHeaderSwitchViewButton;
    const switchViewButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: SwitchViewButton,
        externalSlotProps: slotProps?.switchViewButton,
        additionalProps: {
            size: 'small',
            'aria-label': translations.calendarViewSwitchingButtonAriaLabel(view)
        },
        ownerState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, ownerState, {
            view
        }),
        className: classes.switchViewButton
    });
    const SwitchViewIcon = slots?.switchViewIcon ?? PickersCalendarHeaderSwitchViewIcon;
    // The spread is here to avoid this bug mui/material-ui#34056
    const _useSlotProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: SwitchViewIcon,
        externalSlotProps: slotProps?.switchViewIcon,
        ownerState,
        className: classes.switchViewIcon
    }), switchViewIconProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useSlotProps, _excluded2);
    const selectNextMonth = ()=>onMonthChange(adapter.addMonths(month, 1));
    const selectPreviousMonth = ()=>onMonthChange(adapter.addMonths(month, -1));
    const isNextMonthDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$date$2d$helpers$2d$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNextMonthDisabled"])(month, {
        disableFuture,
        maxDate,
        timezone
    });
    const isPreviousMonthDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$date$2d$helpers$2d$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreviousMonthDisabled"])(month, {
        disablePast,
        minDate,
        timezone
    });
    const handleToggleView = ()=>{
        if (views.length === 1 || !onViewChange || disabled) {
            return;
        }
        if (views.length === 2) {
            onViewChange(views.find((el)=>el !== view) || views[0]);
        } else {
            // switching only between first 2
            const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
            onViewChange(views[nextIndexToOpen]);
        }
    };
    // No need to display more information
    if (views.length === 1 && views[0] === 'year') {
        return null;
    }
    const label = adapter.formatByString(month, format);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(PickersCalendarHeaderRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, other, {
        ownerState: ownerState,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(PickersCalendarHeaderLabelContainer, {
                role: "presentation",
                onClick: handleToggleView,
                ownerState: ownerState,
                "aria-live": "polite",
                className: classes.labelContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$PickersFadeTransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickersFadeTransitionGroup"], {
                        reduceAnimations: reduceAnimations,
                        transKey: label,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PickersCalendarHeaderLabel, {
                            id: labelId,
                            ownerState: ownerState,
                            className: classes.label,
                            children: label
                        })
                    }),
                    views.length > 1 && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SwitchViewButton, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, switchViewButtonProps, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SwitchViewIcon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, switchViewIconProps))
                    }))
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                in: view === 'day',
                appear: !reduceAnimations,
                enter: !reduceAnimations,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickersArrowSwitcher$2f$PickersArrowSwitcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickersArrowSwitcher"], {
                    slots: slots,
                    slotProps: slotProps,
                    onGoToPrevious: selectPreviousMonth,
                    isPreviousDisabled: isPreviousMonthDisabled,
                    previousLabel: translations.previousMonth,
                    onGoToNext: selectNextMonth,
                    isNextDisabled: isNextMonthDisabled,
                    nextLabel: translations.nextMonth
                })
            })
        ]
    }));
});
if ("TURBOPACK compile-time truthy", 1) PickersCalendarHeader.displayName = "PickersCalendarHeader";
("TURBOPACK compile-time truthy", 1) ? PickersCalendarHeader.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    currentMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object.isRequired,
    disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    disableFuture: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    disablePast: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */ format: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Id of the calendar text element.
   * It is used to establish an `aria-labelledby` relationship with the calendar `grid` element.
   */ labelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    maxDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object.isRequired,
    minDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object.isRequired,
    onMonthChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    onViewChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    reduceAnimations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool.isRequired,
    /**
   * The props used for each component slot.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Overridable component slots.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    timezone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string.isRequired,
    view: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'day',
        'month',
        'year'
    ]).isRequired,
    views: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'day',
        'month',
        'year'
    ]).isRequired).isRequired
} : "TURBOPACK unreachable";
;
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickerViewRoot/PickerViewRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PickerViewRoot",
    ()=>PickerViewRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js [app-ssr] (ecmascript)");
;
;
const PickerViewRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')({
    overflow: 'hidden',
    width: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIALOG_WIDTH"],
    maxHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEW_HEIGHT"],
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
});
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useReduceAnimations.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slowAnimationDevices",
    ()=>slowAnimationDevices,
    "useReduceAnimations",
    ()=>useReduceAnimations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/useMediaQuery/index.js [app-ssr] (ecmascript)");
;
const PREFERS_REDUCED_MOTION = '@media (prefers-reduced-motion: reduce)';
// detect if user agent has Android version < 10 or iOS version < 13
const mobileVersionMatches = typeof navigator !== 'undefined' && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
const androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
const iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
const slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
function useReduceAnimations(customReduceAnimations) {
    const prefersReduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(PREFERS_REDUCED_MOTION, {
        defaultMatches: false
    });
    if (customReduceAnimations != null) {
        return customReduceAnimations;
    }
    return prefersReduced || slowAnimationDevices;
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/dateCalendarClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dateCalendarClasses",
    ()=>dateCalendarClasses,
    "getDateCalendarUtilityClass",
    ()=>getDateCalendarUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
;
;
const getDateCalendarUtilityClass = (slot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiDateCalendar', slot);
const dateCalendarClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiDateCalendar', [
    'root',
    'viewTransitionContainer'
]);
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/DateCalendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateCalendar",
    ()=>DateCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/material/esm/styles/useThemeProps.js [app-ssr] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useId/useId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$useCalendarState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/useCalendarState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$PickersFadeTransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersFadeTransitionGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$DayCalendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/DayCalendar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$MonthCalendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$YearCalendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useViews$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useViews.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersCalendarHeader$2f$PickersCalendarHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/PickersCalendarHeader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickerViewRoot$2f$PickerViewRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/components/PickerViewRoot/PickerViewRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useReduceAnimations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useReduceAnimations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$dateCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/DateCalendar/dateCalendarClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useControlledValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/useControlledValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$managers$2f$useDateManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "autoFocus",
    "onViewChange",
    "value",
    "defaultValue",
    "referenceDate",
    "disableFuture",
    "disablePast",
    "onChange",
    "onYearChange",
    "onMonthChange",
    "reduceAnimations",
    "shouldDisableDate",
    "shouldDisableMonth",
    "shouldDisableYear",
    "view",
    "views",
    "openTo",
    "className",
    "classes",
    "disabled",
    "readOnly",
    "minDate",
    "maxDate",
    "disableHighlightToday",
    "focusedView",
    "onFocusedViewChange",
    "showDaysOutsideCurrentMonth",
    "fixedWeekNumber",
    "dayOfWeekFormatter",
    "slots",
    "slotProps",
    "loading",
    "renderLoading",
    "displayWeekNumber",
    "yearsOrder",
    "yearsPerRow",
    "monthsPerRow",
    "timezone"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ],
        viewTransitionContainer: [
            'viewTransitionContainer'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$dateCalendarClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDateCalendarUtilityClass"], classes);
};
function useDateCalendarDefaultizedProps(props, name) {
    const themeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props,
        name
    });
    const reduceAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useReduceAnimations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReduceAnimations"])(themeProps.reduceAnimations);
    const validationProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$managers$2f$useDateManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApplyDefaultValuesToDateValidationProps"])(themeProps);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, themeProps, validationProps, {
        loading: themeProps.loading ?? false,
        openTo: themeProps.openTo ?? 'day',
        views: themeProps.views ?? [
            'year',
            'day'
        ],
        reduceAnimations,
        renderLoading: themeProps.renderLoading ?? (()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                children: "..."
            }))
    });
}
const DateCalendarRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$components$2f$PickerViewRoot$2f$PickerViewRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickerViewRoot"], {
    name: 'MuiDateCalendar',
    slot: 'Root'
})({
    display: 'flex',
    flexDirection: 'column',
    height: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$constants$2f$dimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEW_HEIGHT"]
});
const DateCalendarViewTransitionContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$PickersFadeTransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickersFadeTransitionGroup"], {
    name: 'MuiDateCalendar',
    slot: 'ViewTransitionContainer'
})({});
const DateCalendar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DateCalendar(inProps, ref) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$hooks$2f$usePickerAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerAdapter"])();
    const { ownerState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$usePickerPrivateContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickerPrivateContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const props = useDateCalendarDefaultizedProps(inProps, 'MuiDateCalendar');
    const { autoFocus, onViewChange, value: valueProp, defaultValue, referenceDate: referenceDateProp, disableFuture, disablePast, onChange, onMonthChange, reduceAnimations, shouldDisableDate, shouldDisableMonth, shouldDisableYear, view: inView, views, openTo, className, classes: classesProp, disabled, readOnly, minDate, maxDate, disableHighlightToday, focusedView: focusedViewProp, onFocusedViewChange, showDaysOutsideCurrentMonth, fixedWeekNumber, dayOfWeekFormatter, slots, slotProps, loading, renderLoading, displayWeekNumber, yearsOrder, yearsPerRow, monthsPerRow, timezone: timezoneProp } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const { value, handleValueChange, timezone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useControlledValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControlledValue"])({
        name: 'DateCalendar',
        timezone: timezoneProp,
        value: valueProp,
        defaultValue,
        referenceDate: referenceDateProp,
        onChange,
        valueManager: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$valueManagers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleItemValueManager"]
    });
    const { view, setView, focusedView, setFocusedView, goToNextView, setValueAndGoToNextView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$hooks$2f$useViews$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useViews"])({
        view: inView,
        views,
        openTo,
        onChange: handleValueChange,
        onViewChange,
        autoFocus,
        focusedView: focusedViewProp,
        onFocusedViewChange
    });
    const { referenceDate, calendarState, setVisibleDate, isDateDisabled, onMonthSwitchingAnimationEnd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$useCalendarState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCalendarState"])({
        value,
        referenceDate: referenceDateProp,
        reduceAnimations,
        onMonthChange,
        minDate,
        maxDate,
        shouldDisableDate,
        disablePast,
        disableFuture,
        timezone,
        getCurrentMonthFromVisibleDate: (visibleDate, prevMonth)=>{
            if (adapter.isSameMonth(visibleDate, prevMonth)) {
                return prevMonth;
            }
            return adapter.startOfMonth(visibleDate);
        }
    });
    // When disabled, limit the view to the selected date
    const minDateWithDisabled = disabled && value || minDate;
    const maxDateWithDisabled = disabled && value || maxDate;
    const gridLabelId = `${id}-grid-label`;
    const hasFocus = focusedView !== null;
    const CalendarHeader = slots?.calendarHeader ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersCalendarHeader$2f$PickersCalendarHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickersCalendarHeader"];
    const calendarHeaderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useSlotProps$2f$useSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        elementType: CalendarHeader,
        externalSlotProps: slotProps?.calendarHeader,
        additionalProps: {
            views,
            view,
            currentMonth: calendarState.currentMonth,
            onViewChange: setView,
            onMonthChange: (month)=>setVisibleDate({
                    target: month,
                    reason: 'header-navigation'
                }),
            minDate: minDateWithDisabled,
            maxDate: maxDateWithDisabled,
            disabled,
            disablePast,
            disableFuture,
            reduceAnimations,
            timezone,
            labelId: gridLabelId
        },
        ownerState
    });
    const handleDateMonthChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newDate)=>{
        const startOfMonth = adapter.startOfMonth(newDate);
        const endOfMonth = adapter.endOfMonth(newDate);
        const closestEnabledDate = isDateDisabled(newDate) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findClosestEnabledDate"])({
            adapter,
            date: newDate,
            minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
            maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
            disablePast,
            disableFuture,
            isDateDisabled,
            timezone
        }) : newDate;
        if (closestEnabledDate) {
            setValueAndGoToNextView(closestEnabledDate, 'finish');
            setVisibleDate({
                target: closestEnabledDate,
                reason: 'cell-interaction'
            });
        } else {
            goToNextView();
            setVisibleDate({
                target: startOfMonth,
                reason: 'cell-interaction'
            });
        }
    });
    const handleDateYearChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newDate)=>{
        const startOfYear = adapter.startOfYear(newDate);
        const endOfYear = adapter.endOfYear(newDate);
        const closestEnabledDate = isDateDisabled(newDate) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findClosestEnabledDate"])({
            adapter,
            date: newDate,
            minDate: adapter.isBefore(minDate, startOfYear) ? startOfYear : minDate,
            maxDate: adapter.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
            disablePast,
            disableFuture,
            isDateDisabled,
            timezone
        }) : newDate;
        if (closestEnabledDate) {
            setValueAndGoToNextView(closestEnabledDate, 'finish');
            setVisibleDate({
                target: closestEnabledDate,
                reason: 'cell-interaction'
            });
        } else {
            goToNextView();
            setVisibleDate({
                target: startOfYear,
                reason: 'cell-interaction'
            });
        }
    });
    const handleSelectedDayChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((day)=>{
        if (day) {
            // If there is a date already selected, then we want to keep its time
            return handleValueChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$internals$2f$utils$2f$date$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDateAndTime"])(adapter, day, value ?? referenceDate), 'finish', view);
        }
        return handleValueChange(day, 'finish', view);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (adapter.isValid(value)) {
            setVisibleDate({
                target: value,
                reason: 'controlled-value-change'
            });
        }
    }, [
        value
    ]); // eslint-disable-line
    const classes = useUtilityClasses(classesProp);
    const baseDateValidationProps = {
        disablePast,
        disableFuture,
        maxDate,
        minDate
    };
    const commonViewProps = {
        disableHighlightToday,
        readOnly,
        disabled,
        timezone,
        gridLabelId,
        slots,
        slotProps
    };
    const prevOpenViewRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](view);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // If the view change and the focus was on the previous view
        // Then we update the focus.
        if (prevOpenViewRef.current === view) {
            return;
        }
        if (focusedView === prevOpenViewRef.current) {
            setFocusedView(view, true);
        }
        prevOpenViewRef.current = view;
    }, [
        focusedView,
        setFocusedView,
        view
    ]);
    const selectedDays = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            value
        ], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(DateCalendarRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState
    }, other, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CalendarHeader, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, calendarHeaderProps, {
                slots: slots,
                slotProps: slotProps
            })),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DateCalendarViewTransitionContainer, {
                reduceAnimations: reduceAnimations,
                className: classes.viewTransitionContainer,
                transKey: view,
                ownerState: ownerState,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    children: [
                        view === 'year' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$YearCalendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YearCalendar"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, baseDateValidationProps, commonViewProps, {
                            value: value,
                            onChange: handleDateYearChange,
                            shouldDisableYear: shouldDisableYear,
                            hasFocus: hasFocus,
                            onFocusedViewChange: (isViewFocused)=>setFocusedView('year', isViewFocused),
                            yearsOrder: yearsOrder,
                            yearsPerRow: yearsPerRow,
                            referenceDate: referenceDate
                        })),
                        view === 'month' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$MonthCalendar$2f$MonthCalendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonthCalendar"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, baseDateValidationProps, commonViewProps, {
                            currentMonth: calendarState.currentMonth,
                            hasFocus: hasFocus,
                            className: className,
                            value: value,
                            onChange: handleDateMonthChange,
                            shouldDisableMonth: shouldDisableMonth,
                            onFocusedViewChange: (isViewFocused)=>setFocusedView('month', isViewFocused),
                            monthsPerRow: monthsPerRow,
                            referenceDate: referenceDate
                        })),
                        view === 'day' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DateCalendar$2f$DayCalendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DayCalendar"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, calendarState, baseDateValidationProps, commonViewProps, {
                            onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
                            hasFocus: hasFocus,
                            onFocusedDayChange: (focusedDate)=>setVisibleDate({
                                    target: focusedDate,
                                    reason: 'cell-interaction'
                                }),
                            reduceAnimations: reduceAnimations,
                            selectedDays: selectedDays,
                            onSelectedDaysChange: handleSelectedDayChange,
                            shouldDisableDate: shouldDisableDate,
                            shouldDisableMonth: shouldDisableMonth,
                            shouldDisableYear: shouldDisableYear,
                            onFocusedViewChange: (isViewFocused)=>setFocusedView('day', isViewFocused),
                            showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
                            fixedWeekNumber: fixedWeekNumber,
                            dayOfWeekFormatter: dayOfWeekFormatter,
                            displayWeekNumber: displayWeekNumber,
                            loading: loading,
                            renderLoading: renderLoading
                        }))
                    ]
                })
            })
        ]
    }));
});
if ("TURBOPACK compile-time truthy", 1) DateCalendar.displayName = "DateCalendar";
("TURBOPACK compile-time truthy", 1) ? DateCalendar.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */ autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */ dayOfWeekFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The default selected value.
   * Used when the component is not controlled.
   */ defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */ disableFuture: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */ disableHighlightToday: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */ disablePast: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the week number will be display in the calendar.
   */ displayWeekNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */ fixedWeekNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Controlled focused view.
   */ focusedView: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'day',
        'month',
        'year'
    ]),
    /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */ loading: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Maximal selectable date.
   * @default 2099-12-31
   */ maxDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Minimal selectable date.
   * @default 1900-01-01
   */ minDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Months rendered per row.
   * @default 3
   */ monthsPerRow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        3,
        4
    ]),
    /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */ onChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */ onFocusedViewChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */ onMonthChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */ onViewChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */ onYearChange: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */ openTo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'day',
        'month',
        'year'
    ]),
    /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */ readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */ reduceAnimations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */ referenceDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */ renderLoading: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */ shouldDisableDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */ shouldDisableMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */ shouldDisableYear: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */ showDaysOutsideCurrentMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The props used for each component slot.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Overridable component slots.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */ timezone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The selected value.
   * Used when the component is controlled.
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */ view: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'day',
        'month',
        'year'
    ]),
    /**
   * Available views.
   */ views: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'day',
        'month',
        'year'
    ]).isRequired),
    /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */ yearsOrder: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'asc',
        'desc'
    ]),
    /**
   * Years rendered per row.
   * @default 3
   */ yearsPerRow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        3,
        4
    ])
} : "TURBOPACK unreachable";
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-date-pickers/esm/AdapterDayjs/AdapterDayjs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdapterDayjs",
    ()=>AdapterDayjs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
/* v8 ignore start */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
// dayjs has no exports field defined
// See https://github.com/iamkun/dayjs/issues/2562
/* eslint-disable import/extensions */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$weekOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/dayjs/plugin/weekOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$customParseFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/dayjs/plugin/customParseFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$localizedFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/dayjs/plugin/localizedFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$isBetween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/dayjs/plugin/isBetween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$advancedFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/dayjs/plugin/advancedFormat.js [app-ssr] (ecmascript)");
/* v8 ignore stop */ /* eslint-enable import/extensions */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$warning$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-internals/esm/warning/warning.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$localizedFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$weekOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$isBetween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$advancedFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const formatTokenMap = {
    // Year
    YY: 'year',
    YYYY: {
        sectionType: 'year',
        contentType: 'digit',
        maxLength: 4
    },
    // Month
    M: {
        sectionType: 'month',
        contentType: 'digit',
        maxLength: 2
    },
    MM: 'month',
    MMM: {
        sectionType: 'month',
        contentType: 'letter'
    },
    MMMM: {
        sectionType: 'month',
        contentType: 'letter'
    },
    // Day of the month
    D: {
        sectionType: 'day',
        contentType: 'digit',
        maxLength: 2
    },
    DD: 'day',
    Do: {
        sectionType: 'day',
        contentType: 'digit-with-letter'
    },
    // Day of the week
    d: {
        sectionType: 'weekDay',
        contentType: 'digit',
        maxLength: 2
    },
    dd: {
        sectionType: 'weekDay',
        contentType: 'letter'
    },
    ddd: {
        sectionType: 'weekDay',
        contentType: 'letter'
    },
    dddd: {
        sectionType: 'weekDay',
        contentType: 'letter'
    },
    // Meridiem
    A: 'meridiem',
    a: 'meridiem',
    // Hours
    H: {
        sectionType: 'hours',
        contentType: 'digit',
        maxLength: 2
    },
    HH: 'hours',
    h: {
        sectionType: 'hours',
        contentType: 'digit',
        maxLength: 2
    },
    hh: 'hours',
    // Minutes
    m: {
        sectionType: 'minutes',
        contentType: 'digit',
        maxLength: 2
    },
    mm: 'minutes',
    // Seconds
    s: {
        sectionType: 'seconds',
        contentType: 'digit',
        maxLength: 2
    },
    ss: 'seconds'
};
const defaultFormats = {
    year: 'YYYY',
    month: 'MMMM',
    monthShort: 'MMM',
    dayOfMonth: 'D',
    dayOfMonthFull: 'Do',
    weekday: 'dddd',
    weekdayShort: 'dd',
    hours24h: 'HH',
    hours12h: 'hh',
    meridiem: 'A',
    minutes: 'mm',
    seconds: 'ss',
    fullDate: 'll',
    keyboardDate: 'L',
    shortDate: 'MMM D',
    normalDate: 'D MMMM',
    normalDateWithWeekday: 'ddd, MMM D',
    fullTime12h: 'hh:mm A',
    fullTime24h: 'HH:mm',
    keyboardDateTime12h: 'L hh:mm A',
    keyboardDateTime24h: 'L HH:mm'
};
const MISSING_UTC_PLUGIN = [
    'Missing UTC plugin',
    'To be able to use UTC or timezones, you have to enable the `utc` plugin',
    'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc'
].join('\n');
const MISSING_TIMEZONE_PLUGIN = [
    'Missing timezone plugin',
    'To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin',
    'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone'
].join('\n');
class AdapterDayjs {
    isMUIAdapter = true;
    isTimezoneCompatible = true;
    lib = 'dayjs';
    escapedCharacters = {
        start: '[',
        end: ']'
    };
    formatTokenMap = (()=>formatTokenMap)();
    constructor({ locale, formats } = {}){
        this.locale = locale;
        this.formats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, defaultFormats, formats);
        // Moved plugins to the constructor to allow for users to use options on the library
        // for reference: https://github.com/mui/mui-x/pull/11151
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$plugin$2f$customParseFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    }
    setLocaleToValue = (value)=>{
        const expectedLocale = this.getCurrentLocaleCode();
        if (expectedLocale === value.locale()) {
            return value;
        }
        return value.locale(expectedLocale);
    };
    hasUTCPlugin = ()=>typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].utc !== 'undefined';
    hasTimezonePlugin = ()=>typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tz !== 'undefined';
    isSame = (value, comparing, comparisonTemplate)=>{
        const comparingInValueTimezone = this.setTimezone(comparing, this.getTimezone(value));
        return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
    };
    /**
   * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
   */ cleanTimezone = (timezone)=>{
        switch(timezone){
            case 'default':
                {
                    return undefined;
                }
            case 'system':
                {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tz.guess();
                }
            default:
                {
                    return timezone;
                }
        }
    };
    createSystemDate = (value)=>{
        let date;
        if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
            const timezone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tz.guess();
            if (timezone === 'UTC') {
                date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value);
            } else {
                // We can't change the system timezone in the tests
                date = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tz(value, timezone);
            }
        } else {
            date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value);
        }
        return this.setLocaleToValue(date);
    };
    createUTCDate = (value)=>{
        /* v8 ignore next 3 */ if (!this.hasUTCPlugin()) {
            throw new Error(MISSING_UTC_PLUGIN);
        }
        return this.setLocaleToValue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].utc(value));
    };
    createTZDate = (value, timezone)=>{
        /* v8 ignore next 3 */ if (!this.hasUTCPlugin()) {
            throw new Error(MISSING_UTC_PLUGIN);
        }
        /* v8 ignore next 3 */ if (!this.hasTimezonePlugin()) {
            throw new Error(MISSING_TIMEZONE_PLUGIN);
        }
        const keepLocalTime = value !== undefined && !value.endsWith('Z');
        return this.setLocaleToValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value).tz(this.cleanTimezone(timezone), keepLocalTime));
    };
    getLocaleFormats = ()=>{
        const locales = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Ls;
        const locale = this.locale || 'en';
        let localeObject = locales[locale];
        if (localeObject === undefined) {
            /* v8 ignore start */ if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$warning$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])([
                    'MUI X: Your locale has not been found.',
                    'Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.',
                    "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'",
                    'fallback on English locale.'
                ]);
            }
            /* v8 ignore stop */ localeObject = locales.en;
        }
        return localeObject.formats;
    };
    /**
   * If the new day does not have the same offset as the old one (when switching to summer day time for example),
   * Then dayjs will not automatically adjust the offset (moment does).
   * We have to parse again the value to make sure the `fixOffset` method is applied.
   * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
   */ adjustOffset = (value)=>{
        if (!this.hasTimezonePlugin()) {
            return value;
        }
        const timezone = this.getTimezone(value);
        if (timezone !== 'UTC') {
            const fixedValue = value.tz(this.cleanTimezone(timezone), true);
            // TODO: Simplify the case when we raise the `dayjs` peer dep to 1.11.12 (https://github.com/iamkun/dayjs/releases/tag/v1.11.12)
            /* v8 ignore next 3 */ // @ts-ignore
            if (fixedValue.$offset === (value.$offset ?? 0)) {
                return value;
            }
            // Change only what is needed to avoid creating a new object with unwanted data
            // Especially important when used in an environment where utc or timezone dates are used only in some places
            // Reference: https://github.com/mui/mui-x/issues/13290
            // @ts-ignore
            value.$offset = fixedValue.$offset;
        }
        return value;
    };
    date = (value, timezone = 'default')=>{
        if (value === null) {
            return null;
        }
        if (timezone === 'UTC') {
            return this.createUTCDate(value);
        }
        if (timezone === 'system' || timezone === 'default' && !this.hasTimezonePlugin()) {
            return this.createSystemDate(value);
        }
        return this.createTZDate(value, timezone);
    };
    getInvalidDate = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(new Date('Invalid date'));
    getTimezone = (value)=>{
        if (this.hasTimezonePlugin()) {
            // @ts-ignore
            const zone = value.$x?.$timezone;
            if (zone) {
                return zone;
            }
        }
        if (this.hasUTCPlugin() && value.isUTC()) {
            return 'UTC';
        }
        return 'system';
    };
    setTimezone = (value, timezone)=>{
        if (this.getTimezone(value) === timezone) {
            return value;
        }
        if (timezone === 'UTC') {
            /* v8 ignore next 3 */ if (!this.hasUTCPlugin()) {
                throw new Error(MISSING_UTC_PLUGIN);
            }
            return value.utc();
        }
        // We know that we have the UTC plugin.
        // Otherwise, the value timezone would always equal "system".
        // And it would be caught by the first "if" of this method.
        if (timezone === 'system') {
            return value.local();
        }
        if (!this.hasTimezonePlugin()) {
            if (timezone === 'default') {
                return value;
            }
            /* v8 ignore next */ throw new Error(MISSING_TIMEZONE_PLUGIN);
        }
        return this.setLocaleToValue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tz(value, this.cleanTimezone(timezone)));
    };
    toJsDate = (value)=>{
        return value.toDate();
    };
    parse = (value, format)=>{
        if (value === '') {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value, format, this.locale, true);
    };
    getCurrentLocaleCode = ()=>{
        return this.locale || 'en';
    };
    is12HourCycleInCurrentLocale = ()=>{
        /* v8 ignore next */ return /A|a/.test(this.getLocaleFormats().LT || '');
    };
    expandFormat = (format)=>{
        const localeFormats = this.getLocaleFormats();
        // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
        const t = (formatBis)=>formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b)=>a || b.slice(1));
        return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b)=>{
            const B = b && b.toUpperCase();
            return a || localeFormats[b] || t(localeFormats[B]);
        });
    };
    isValid = (value)=>{
        if (value == null) {
            return false;
        }
        return value.isValid();
    };
    format = (value, formatKey)=>{
        return this.formatByString(value, this.formats[formatKey]);
    };
    formatByString = (value, formatString)=>{
        return this.setLocaleToValue(value).format(formatString);
    };
    formatNumber = (numberToFormat)=>{
        return numberToFormat;
    };
    isEqual = (value, comparing)=>{
        if (value === null && comparing === null) {
            return true;
        }
        if (value === null || comparing === null) {
            return false;
        }
        return value.toDate().getTime() === comparing.toDate().getTime();
    };
    isSameYear = (value, comparing)=>{
        return this.isSame(value, comparing, 'YYYY');
    };
    isSameMonth = (value, comparing)=>{
        return this.isSame(value, comparing, 'YYYY-MM');
    };
    isSameDay = (value, comparing)=>{
        return this.isSame(value, comparing, 'YYYY-MM-DD');
    };
    isSameHour = (value, comparing)=>{
        return value.isSame(comparing, 'hour');
    };
    isAfter = (value, comparing)=>{
        return value > comparing;
    };
    isAfterYear = (value, comparing)=>{
        if (!this.hasUTCPlugin()) {
            return value.isAfter(comparing, 'year');
        }
        return !this.isSameYear(value, comparing) && value.utc() > comparing.utc();
    };
    isAfterDay = (value, comparing)=>{
        if (!this.hasUTCPlugin()) {
            return value.isAfter(comparing, 'day');
        }
        return !this.isSameDay(value, comparing) && value.utc() > comparing.utc();
    };
    isBefore = (value, comparing)=>{
        return value < comparing;
    };
    isBeforeYear = (value, comparing)=>{
        if (!this.hasUTCPlugin()) {
            return value.isBefore(comparing, 'year');
        }
        return !this.isSameYear(value, comparing) && value.utc() < comparing.utc();
    };
    isBeforeDay = (value, comparing)=>{
        if (!this.hasUTCPlugin()) {
            return value.isBefore(comparing, 'day');
        }
        return !this.isSameDay(value, comparing) && value.utc() < comparing.utc();
    };
    isWithinRange = (value, [start, end])=>{
        return value >= start && value <= end;
    };
    startOfYear = (value)=>{
        return this.adjustOffset(value.startOf('year'));
    };
    startOfMonth = (value)=>{
        return this.adjustOffset(value.startOf('month'));
    };
    startOfWeek = (value)=>{
        return this.adjustOffset(this.setLocaleToValue(value).startOf('week'));
    };
    startOfDay = (value)=>{
        return this.adjustOffset(value.startOf('day'));
    };
    endOfYear = (value)=>{
        return this.adjustOffset(value.endOf('year'));
    };
    endOfMonth = (value)=>{
        return this.adjustOffset(value.endOf('month'));
    };
    endOfWeek = (value)=>{
        return this.adjustOffset(this.setLocaleToValue(value).endOf('week'));
    };
    endOfDay = (value)=>{
        return this.adjustOffset(value.endOf('day'));
    };
    addYears = (value, amount)=>{
        return this.adjustOffset(value.add(amount, 'year'));
    };
    addMonths = (value, amount)=>{
        return this.adjustOffset(value.add(amount, 'month'));
    };
    addWeeks = (value, amount)=>{
        return this.adjustOffset(value.add(amount, 'week'));
    };
    addDays = (value, amount)=>{
        return this.adjustOffset(value.add(amount, 'day'));
    };
    addHours = (value, amount)=>{
        return this.adjustOffset(value.add(amount, 'hour'));
    };
    addMinutes = (value, amount)=>{
        return this.adjustOffset(value.add(amount, 'minute'));
    };
    addSeconds = (value, amount)=>{
        return this.adjustOffset(value.add(amount, 'second'));
    };
    getYear = (value)=>{
        return value.year();
    };
    getMonth = (value)=>{
        return value.month();
    };
    getDate = (value)=>{
        return value.date();
    };
    getHours = (value)=>{
        return value.hour();
    };
    getMinutes = (value)=>{
        return value.minute();
    };
    getSeconds = (value)=>{
        return value.second();
    };
    getMilliseconds = (value)=>{
        return value.millisecond();
    };
    setYear = (value, year)=>{
        return this.adjustOffset(value.set('year', year));
    };
    setMonth = (value, month)=>{
        return this.adjustOffset(value.set('month', month));
    };
    setDate = (value, date)=>{
        return this.adjustOffset(value.set('date', date));
    };
    setHours = (value, hours)=>{
        return this.adjustOffset(value.set('hour', hours));
    };
    setMinutes = (value, minutes)=>{
        return this.adjustOffset(value.set('minute', minutes));
    };
    setSeconds = (value, seconds)=>{
        return this.adjustOffset(value.set('second', seconds));
    };
    setMilliseconds = (value, milliseconds)=>{
        return this.adjustOffset(value.set('millisecond', milliseconds));
    };
    getDaysInMonth = (value)=>{
        return value.daysInMonth();
    };
    getWeekArray = (value)=>{
        const start = this.startOfWeek(this.startOfMonth(value));
        const end = this.endOfWeek(this.endOfMonth(value));
        let count = 0;
        let current = start;
        const nestedWeeks = [];
        while(current < end){
            const weekNumber = Math.floor(count / 7);
            nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
            nestedWeeks[weekNumber].push(current);
            current = this.addDays(current, 1);
            count += 1;
        }
        return nestedWeeks;
    };
    getWeekNumber = (value)=>{
        return value.week();
    };
    getDayOfWeek(value) {
        return value.day() + 1;
    }
    getYearRange = ([start, end])=>{
        const startDate = this.startOfYear(start);
        const endDate = this.endOfYear(end);
        const years = [];
        let current = startDate;
        while(this.isBefore(current, endDate)){
            years.push(current);
            current = this.addYears(current, 1);
        }
        return years;
    };
}
}),
];

//# sourceMappingURL=c6698_%40mui_x-date-pickers_esm_ed5c85b6._.js.map