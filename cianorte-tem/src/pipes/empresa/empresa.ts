import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'empresa',
})
export class EmpresaPipe implements PipeTransform {

  transform(items: any[], terms: string): any[] {
  
    if(!items) return [];//validando os itens da lista
    if(!terms) return items;//validando os itens da lista
    terms = terms.toLowerCase();//verfica se o valor existe dentro da lista
    return items.filter( it => {
      return it.name.toLowerCase().includes(terms);
    });
  }
}
    