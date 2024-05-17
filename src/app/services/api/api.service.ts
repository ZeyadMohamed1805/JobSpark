import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private baseUrl: string = 'https://localhost:7092/';
	constructor(private http: HttpClient) {}

	get<T>(endPoint: string): Observable<T> {
		return this.http.get<T>(this.baseUrl + endPoint);
	}

	post<T>(endPoint: string, body: T): Observable<T> {
		return this.http.post<T>(this.baseUrl + endPoint, body);
	}
}
