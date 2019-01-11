import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  signUp() {
    this.http.post("http://localhost:5000/api/Account/register", { "username": this.username, "myPassowrd": this.password})
      .subscribe(() => {
        console.log('dsf');
      });
  }

  ngOnInit() {}
}
