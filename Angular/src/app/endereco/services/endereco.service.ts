import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Address } from './../models/address.model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class EnderecoService {
    constructor(private httpClient: HttpClient) {}

    obterPorCep(cep: string): Observable<Address> {
      return this.httpClient.get<Address>(environment.urlCep + `${cep}/json/`);
    }
    
}