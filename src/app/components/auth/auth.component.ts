import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { UserInterface } from '../../intefaces/User'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public user: UserInterface;
    public username: string;
    private componentDestroyed$: Subject<boolean> = new Subject();

    constructor(private api: ApiService) { }

    async ngOnInit() {
        try {
            const resp = await this.api.fetch()
            console.log(resp);
        } catch (err) {
            console.log(err)
        }
        this.api.user$
            .pipe(takeUntil(this.componentDestroyed$.asObservable()))
            .subscribe(user => this.user = user)
    }

    ngOnDestroy() {
        this.componentDestroyed$.next(true);
    }

    login() {
        this.api.login(this.username)
    }

    logout() {
        this.api.logout();
    }
}
