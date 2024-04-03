import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
let logedin=localStorage.getItem('isloged');

if(logedin=='false'){
  alert("not authenticate user")
  return false;
}



  return true;
};
