import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EmpresabuscaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'empresabusca',
})
export class EmpresabuscaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms: string): any[] {
  
    if(!items) return [];//validando os itens da lista
    if(!terms) return items;//validando os itens da lista
    terms = terms.toLowerCase();//verfica se o valor existe dentro da lista
    return items.filter( it => {
      return it.nomefantasia.toLowerCase().includes(terms);//it.nam (a propriedade name é campo que está no banco de dados que vc quer listar)
    });
  }
}
    