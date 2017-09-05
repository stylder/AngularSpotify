import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  idSession = 'BQCdFc0kMjeHo76GMtH3y0jmP6SQI8j2kV_XH4l_g2GzBaNk1jOAFjfCcUffxKPf1_L3PBfmulYkquOXuiU7rA';

  artistas: any[] = [];
  artista: any = {};

  urlBusqueda = 'https://api.spotify.com/v1/search';
  urlArtista = 'https://api.spotify.com/v1/artists/';

  constructor(private http: Http) {
  }

  getArtistas(q: string) {

    const headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.idSession);

    const url = this.urlBusqueda + '?q=' + q + '&type=artist';

    return this.http.get(url, {headers})
      .map(res => {
        this.artistas = res.json().artists.items;
        return this.artistas;
      });
  }

  getArtista(id: string) {

    const headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.idSession);

    const url = this.urlArtista + id;

    return this.http.get(url, {headers})
      .map(res => {
        this.artista = res.json();
        return this.artista;
      });
  }

  getTop(id: string) {

    const headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.idSession);

    const url = this.urlArtista + id + '/top-tracks?country=US';

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json());
        return (res.json());
      });
  }
}
