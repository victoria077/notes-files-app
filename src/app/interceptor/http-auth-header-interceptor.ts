
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpAuthHeaderInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone({ setHeaders: { Authorization: localStorage.getItem('token')  } });
    return next.handle(clonedRequest);
  }

}
