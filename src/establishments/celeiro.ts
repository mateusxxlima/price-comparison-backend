import axios, { AxiosRequestHeaders } from 'axios';

export class Celeiro {
  url: string;
  endpoint_search: string;
  token: string;
  headers: AxiosRequestHeaders;

  constructor() {
    this.url = 'https://api.celeiro.com.br';
    this.endpoint_search =
      '/v1/loja/buscas/produtos/filial/1/centro_distribuicao/1/termo/';
    this.token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJ2aXBjb21tZXJjZSIsImF1ZCI6ImFwaS1hZG1pbiIsInN1YiI6IjZiYzQ4NjdlLWRjYTktMTFlOS04NzQyLTAyMGQ3OTM1OWNhMCIsImlhdCI6MTY1NDY0NTgxNywidmVyIjoxLCJjbGllbnQiOm51bGwsIm9wZXJhdG9yIjpudWxsLCJvcmciOiIyNSJ9.9jJkY0NZv3hDjwuIps2KRJHJwYuNdHn2Ifp3bmGUPWRJL8Q54hujIxXGouMfK-Li3LfJFs1s2iSawy6I74excw';
    this.headers = { Authorization: 'Bearer ' + this.token };
  }

  async product_search(product: string) {
    const uri = this.url + this.endpoint_search + product;

    try {
      const { data } = await axios.get(uri, { headers: this.headers });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}