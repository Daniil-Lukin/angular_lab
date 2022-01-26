import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeURL'
})


export class SafeURLPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){}

  transform(url: any) {
    return this._sanitizer.sanitize(SecurityContext.URL, url);
  }

}
