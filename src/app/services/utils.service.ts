import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';
import { Politicien } from 'app/models/model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  maxSlide = 6;
  carouselRefresh = new Subject<any>();
  errorsEmitter = new Subject<any>();
  selectedPoliticien: Politicien;
  constructor(private ts:TranslateService) { }
  errors(err){
    this.errorsEmitter.next(err);
  }
  generateRadarData(){
    const eco = this.ts.instant("APP.POLITIC.ECONOMY");
    const leg = this.ts.instant("APP.POLITIC.LEGISLATIF");
    const int = this.ts.instant("APP.POLITIC.INTERIOR");
    const ecl = this.ts.instant("APP.POLITIC.ECOLOGY");
    const edu = this.ts.instant("APP.POLITIC.EDUCATION");
    const def = this.ts.instant("APP.POLITIC.DEFENSE");
    return [
      {
        "name": "",
        "series": [
          {
            "name": eco,
            "value": Math.random()*10
          },
          {
            "name": leg,
            "value":  Math.random()*10
          },
          {
            "name":int,
            "value":  Math.random()*10
          },
          {
            "name": ecl,
            "value":  Math.random()*10
          },
          {
            "name": edu,
            "value":  Math.random()*10
          },
          {
            "name": def,
            "value":  Math.random()*10
          }
        ]
      }/*,
      {
        "name": "ref",
        "series": [
          {
            "name": eco,
            "value": 10
          },
          {
            "name": leg,
            "value":  10
          },
          {
            "name":int,
            "value":  10
          },
          {
            "name": ecl,
            "value":  10
          },
          {
            "name": edu,
            "value":  10
          },
          {
            "name": def,
            "value":  10
          }
        ]
      }*/
    ]
  }
  generateLineChart(){
    return [
      {
        "name": "Iraq",
        "series": [
          {
            "value": 3603,
            "name": "2016-09-15T18:55:53.049Z"
          },
          {
            "value": 5845,
            "name": "2016-09-16T02:13:46.837Z"
          },
          {
            "value": 5808,
            "name": "2016-09-12T21:25:24.784Z"
          },
          {
            "value": 6564,
            "name": "2016-09-20T08:39:18.718Z"
          },
          {
            "value": 3690,
            "name": "2016-09-13T21:44:36.168Z"
          }
        ]
      },
      {
        "name": "American Samoa",
        "series": [
          {
            "value": 4394,
            "name": "2016-09-15T18:55:53.049Z"
          },
          {
            "value": 6623,
            "name": "2016-09-16T02:13:46.837Z"
          },
          {
            "value": 3970,
            "name": "2016-09-12T21:25:24.784Z"
          },
          {
            "value": 3423,
            "name": "2016-09-20T08:39:18.718Z"
          },
          {
            "value": 2894,
            "name": "2016-09-13T21:44:36.168Z"
          }
        ]
      },
      {
        "name": "Bonaire, Sint Eustatius and Saba",
        "series": [
          {
            "value": 6068,
            "name": "2016-09-15T18:55:53.049Z"
          },
          {
            "value": 4319,
            "name": "2016-09-16T02:13:46.837Z"
          },
          {
            "value": 6623,
            "name": "2016-09-12T21:25:24.784Z"
          },
          {
            "value": 4931,
            "name": "2016-09-20T08:39:18.718Z"
          },
          {
            "value": 5514,
            "name": "2016-09-13T21:44:36.168Z"
          }
        ]
      },
      {
        "name": "United States",
        "series": [
          {
            "value": 6747,
            "name": "2016-09-15T18:55:53.049Z"
          },
          {
            "value": 5060,
            "name": "2016-09-16T02:13:46.837Z"
          },
          {
            "value": 2211,
            "name": "2016-09-12T21:25:24.784Z"
          },
          {
            "value": 2833,
            "name": "2016-09-20T08:39:18.718Z"
          },
          {
            "value": 2354,
            "name": "2016-09-13T21:44:36.168Z"
          }
        ]
      },
      {
        "name": "Maldives",
        "series": [
          {
            "value": 4987,
            "name": "2016-09-15T18:55:53.049Z"
          },
          {
            "value": 4314,
            "name": "2016-09-16T02:13:46.837Z"
          },
          {
            "value": 3264,
            "name": "2016-09-12T21:25:24.784Z"
          },
          {
            "value": 3808,
            "name": "2016-09-20T08:39:18.718Z"
          },
          {
            "value": 5677,
            "name": "2016-09-13T21:44:36.168Z"
          }
        ]
      }
    ]
  }
}
