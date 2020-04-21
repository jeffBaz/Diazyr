import { MatPaginatorIntl } from '@angular/material';

export class GetPaginatorIntl {

  constructor() {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = 'Nb d\'élements par page:';
    paginatorIntl.nextPageLabel = null;
    paginatorIntl.previousPageLabel = null;
    paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
    // paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => (page + 1) + ' ' + pageSize + ' ' + length ;
    return paginatorIntl;
  }
  public getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return startIndex + ' - ' + endIndex + ' des ' + length;

  }
}
