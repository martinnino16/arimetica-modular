import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class ValidateGuard implements CanActivate {
  constructor(private apiService:ApiService, private router: Router ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.apiService.getLocalUser()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }

  }

}
