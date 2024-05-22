import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByList'
})
export class FilterByListPipe implements PipeTransform {

  transform(users: any[], selectedRoleId: number): any[] {
    if (!users || !selectedRoleId || selectedRoleId === 0) {
      return users; // Return all users if no data or no role selected
    } else {
      return users.filter(user => user.role_id === selectedRoleId);
    }
  }
  }


