import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-logan',
  templateUrl: './logan.component.html',
  styleUrls: ['./logan.component.css']
})
export class LoganComponent implements OnInit {

   public username: string;
  public password: string;
  public errorMessage = 'Invalid Credentials';
  public successMessage: string;
  public invalidLogin = false;
  public loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  public ngOnInit() {
  }

  public handleLogin() {
    this.authenticationService.authenticationService2(this.username, this.password).subscribe((resp) => {
      // tslint:disable-next-line:no-console
      // @ts-ignore
      // tslint:disable-next-line:no-console
      // @ts-ignore
      // tslint:disable-next-line:no-console

      const jwt = (resp.body.token);
      this.authenticationService.saveToken(jwt);
      // tslint:disable-next-line:no-console
      console.log((jwt));
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      if ( this.authenticationService.isResp()) {
        this.router.navigate(['/list-prime']);
      } else if (this.authenticationService.isUser()) {
        this.router.navigate(['/demande-prime']);
      }
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

  resetpass() {
   this.authenticationService.resetpass = true;
   console.log(this.authenticationService.resetpass);
   // @ts-ignore
   this.router.navigate('/create');
   this.authenticationService.resetpass = false;
   location.reload();
  }
  isreset() {
    return this.authenticationService.resetpass;}

}
