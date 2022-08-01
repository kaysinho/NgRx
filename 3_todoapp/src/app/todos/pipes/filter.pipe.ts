import { Pipe, PipeTransform } from '@angular/core';
import { filters } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Todo>, filter: filters): Array<Todo> {
    switch (filter){
      case 'PENDING' : return value.filter(f => f.completed == false)
      case 'COMPLETED' : return value.filter(f => f.completed == true)

      default: return value;
    }
  }

}
