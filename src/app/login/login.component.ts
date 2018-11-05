import { OnInit, Component, Inject } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  constructor(@Inject('auth') private service) {

  }
  ngOnInit() {}
  onSubmit(value) {
    console.log(value)
    if (this.service.loginWithCredentials(this.username, this.password)) {
      console.log(1)
    } else {
      console.log(2)
    }
    console.log(this.username, this.password)
  }
}
