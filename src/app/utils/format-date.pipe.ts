import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
    constructor() {}

    transform(value: any): string {
        return dayjs(value).format('MM/DD/YYYY');
    }
}