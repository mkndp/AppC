



export interface Template {
  data: any[];
}




export interface Datum {
  name: string;
  value: string;
}

export interface Link {
  rel: string;
  href: string;
}

export interface Item {
  href: string;
  data: Datum[];
  links: Link[];
}

export interface Template {
  data: any[];
}

export interface Collection {
  version: string;
  href: string;
  links: any[];
  items: Item[];
  queries: any[];
  template: Template;
}


export interface ResultApi {
  collection: Collection;
}
