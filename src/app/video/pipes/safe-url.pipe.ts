import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeURL'
})


export class SafeURLPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){}

  transform(url: any) {
    console.log(url);
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
//TODO: how to sanitaze links in angular