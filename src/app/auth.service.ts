import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    login(name: string, password: string) {
        let isLoggedIn = (name === 'admin' && password === 'admin');
        return of(true).pipe(
            delay(1000),
            tap(() => this.isLoggedIn = isLoggedIn)
        );
    }

    logout() {
        this.isLoggedIn = false;
    }
}