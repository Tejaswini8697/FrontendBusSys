
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserHubService {
  
  //constructor dependency injection
  link = 'http://localhost:8080/';

  constructor(private http:HttpClient) { 
    console.log("User service");
  }

  validateUser(user)
  {
    console.log("in validateUser");
    return this.http.post(this.link + "login",user);
  }

  getUser(email)
  {
    console.log(" in getuser");
    return this.http.post(this.link + "getUser" , email);
  }
  registerUser(user)
  {
    console.log("in register user");
    return this.http.post(this.link + "register",user,{responseType: 'text'});
    
  }

  changePassowrd(user)
  {
    console.log("changePassowrd called");
    return this.http.put(this.link + "changePassword", user, {responseType: 'text'});
  }

  changePhone(user)
  {
    console.log("changePhone called");
    return this.http.put(this.link + "changePhone", user, {responseType: 'text'});
  }

  updateUser(user)
  {
    console.log("updateUser called");
    return this.http.put(this.link + "updateUser", user, {responseType: 'text'});
  }


  }
