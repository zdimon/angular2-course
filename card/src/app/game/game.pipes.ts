import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'remQ'
})

export class RemoveQuotes implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return value.replace('"','');
    }
}