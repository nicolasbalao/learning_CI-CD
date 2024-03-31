import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type ApiRepsonse = {
  hello: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello, test';
  helloWorld$ = this.httpClient.get<ApiRepsonse>('http://localhost:3333/');
  constructor(private readonly httpClient: HttpClient) {}
}
