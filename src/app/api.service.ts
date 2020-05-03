import {Injectable, Output, EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Users} from './users';
import {Product} from './product';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl: string;
  PHP_API_SERVER = 'http://localhost/CoffeeSite1/php';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
  }

  public userlogin(username, password) {
    alert(username);
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/login.php', {username, password})
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  public userregistration(name, email, pwd) {
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/register.php', {name, email, pwd})
      .pipe(map(Users => {
        return Users;
      }));
  }

// token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    return usertoken != null;
  }

  readProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER}/index.php`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.PHP_API_SERVER}/create_product.php`, product);
  }

  updateProduct(product: Product) {
    return this.httpClient.put<Product>(`${this.PHP_API_SERVER}/update_product.php`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete<Product>(`${this.PHP_API_SERVER}/delete_product.php/?id=${id}`);
  }
}
