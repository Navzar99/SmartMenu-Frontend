import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartMenuService {

  constructor(private http: HttpClient) { }

  public callWaiter(tableNumber: number): void{
    console.log(tableNumber);
    this.http.put(`http://localhost:8080/tables/setDoesRequireWaiterTrueById/${tableNumber}`, {}).subscribe();
  }
}
