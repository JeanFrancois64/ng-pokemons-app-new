import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private _authService: AuthService, private router: Router){}



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let url: string = state.url;

        if(this._authService.isLoggedIn)
            return true;

        this._authService.redirectUrl = url;
        this.router.navigate(['/login']);
        
        return false;
    }
}