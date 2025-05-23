import {DateTimeFormatOptions} from 'luxon';
import {LocaleOptions} from 'luxon/src/datetime';

export default interface IDigitalClockConfig {
    interval?: number;
    timeFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
    dateFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
    timeZone?: string;
    locale?: string;
    size?: number;
    firstLineFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
    secondLineFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
}
