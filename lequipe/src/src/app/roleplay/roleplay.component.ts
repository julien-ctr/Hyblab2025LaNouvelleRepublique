import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContentData } from '../models/content-data';
import { SituationComponent } from '../situation/situation.component';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
    selector: 'app-roleplay',
    standalone: true,
    imports: [
        CommonModule,
        SituationComponent,
        HeaderComponent,
        SliderComponent
    ],
    templateUrl: './roleplay.component.html',
    styleUrl: './roleplay.component.scss'
})
export class RoleplayComponent implements OnInit {
    title = "Hyblab-angular L'Equipe";
    data?: ContentData[];
    selected_scenario?: ContentData;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.fetchData().subscribe((response) => {
            this.data = response;
            console.log(this.data);
        });
    }

    fetchData(): Observable<ContentData[]> {
        return this.http.get<ContentData[]>('assets/data.json');
    }

    selectScenario(scenario: ContentData): void {
        this.selected_scenario = scenario;
    }
}
