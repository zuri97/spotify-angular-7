import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';;


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQCK-0FMuBsL2uAC7yMi4cXYfPFIPr1miJcb255_v6hfXfi91hslvcq3zoHlhbj-KpVtGjWzxtOo9dFrUPv_NTagLG5MrxJZTXDgJOEs-EY2IZhvhVp5hUfePycMkCdbKhjeszspzpwsQWv6DcfVcaNHgzB_DhRvNKZFxzphPEBapygC61DXIB82H-qGexVGbGL3LG_JfhJ5_inAdFexRnA7gdAd1PMTpsADBIn5wk8SFdNCDkNCOvPbRpQ9F3pVtjuGjBf-EK72M6PPLjDwFTwT-8el8iVMTH4');

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }
  getArtistinfo(id: string) {
    const query = 'artists/${id}';
    return this.getArtistinfo(query);
  }
}

