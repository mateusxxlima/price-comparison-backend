import axios from 'axios';
import { IProduct } from 'src/interfaces';

export class Alfa {
  url: string;
  endpoint_search: string;

  constructor() {
    this.url = 'https://search.osuper.com.br';
    this.endpoint_search = '/ecommerce_products_production/_search';
  }

  async product_search(product: string) {
    const uri = this.url + this.endpoint_search;

    try {
      const body = this.getBody(product);
      const { data } = await axios.post(uri, body);
      return this.standardizes(data);
    } catch (err) {
      console.log(err);
    }
  }

  getBody(product: string) {
    return {
      accountId: 69,
      storeId: 189,
      categoryName: null,
      first: 9,
      promotion: null,
      after: null,
      search: product,
      brands: [],
      categories: [],
      tags: [],
      personas: [],
      sort: {
        field: '_score',
        order: 'desc',
      },
      pricingRange: {},
    };
  }

  standardizes(data):IProduct[] {
    const { edges } = data;
    console.log(edges)
    return edges.map(({ node }) => {
      const product: IProduct = {
        price: node.pricing[0].price,
        ean: node.gtin,
        product: node.name,
        supermarket: 'Alfa',
        imageLink: node.image
      }
      return product;
    })
  }
}
