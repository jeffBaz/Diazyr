import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  public CONTENT_TYPE_JSON = 'application/json';
  public UTF_8 = 'utf-8';
  public CONTENT_MULTIPART = 'multipart/form-data';
  public DEFAULT_ACCEPT = 'application/json, text/plain';
  public BEARER = 'Bearer ';

  constructor(
    private http: HttpClient
  ) {}

  request(api, datas, isMultipart?) {
    return this.http.request(
      this.getHttpMethod(api),
      this.getEndpoint(
        api,
        environment.backend
      ),
      this.buildRequestOptions(datas, isMultipart)
    );
  }
  // Build request http options
  buildRequestOptions(datas, isMultipart?) {
    // Get user Token
    /*const cUser = JSON.parse(
      localStorage.getItem(LoadConfigurationService.CURRENT_USER)
    );
    const token = cUser && cUser.token ? cUser.token : null;*/
    // Get Request Body
    const body = datas && datas.body ? datas.body : null;
    // Get query params
    const params = datas && datas.params ? datas.params : null;
    // Build Request Option
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.BEARER);// + token);
    if (!isMultipart) {
      headers = headers.append('Content-Type', this.CONTENT_TYPE_JSON);
    } /*else {
      headers = headers.append('Charset', this.UTF_8);
    }*/
    const httpOptions = {
      headers: headers,
      body: body,
      params: params,
    };
    return httpOptions;
  }


  // Get the Http method name
  getHttpMethod(api) {
    return api.method || 'GET';
  }

  getEndpoint(api, urlBackend) {
    return urlBackend + api.url;
  }
}
