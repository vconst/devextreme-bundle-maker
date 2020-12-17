import {
  Component,
  ComponentBindings,
  JSXComponent,
  Effect,
} from 'devextreme-generator/component_declaration/common';

import { DataGridLight } from './data_grid_light/data_grid_light';

let s = 123456789;
const random = function() {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
};

const generateData = function(count) {
  const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
  const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
  const gender = ['Male', 'Female'];
  const items: any[] = [];

  for (let i = 0; i < count; i++) {
    const nameIndex = random();
    const item = {
      id: i + 1,
      firstName: names[nameIndex],
      lastName: surnames[random()],
      gender: gender[Math.floor(nameIndex / 5)]
    };
    items.push(item);
  }
  return items;
};


const columns = ['id', 'firstName', 'lastName', 'gender', 'id', 'firstName', 'lastName', 'gender', 'id', 'firstName', 'lastName', 'gender'];

const dataSource = generateData(100000);

function viewFunction() {
  return (
    <DataGridLight
      height={600}
      dataSource={dataSource}
      columns={columns}
    >
    </DataGridLight>  
  );
}

@ComponentBindings()
class DataGridLightPageProps {
}

@Component({
  view: viewFunction,
  jQuery: {
    register: true,
  },
})
export class DataGridLightPage extends JSXComponent(DataGridLightPageProps) {
  @Effect({ run: 'once' })
  addStyles(): void {
    var style = document.createElement('style');
    style.innerHTML = `
.my-grid {
    overflow: auto;
}
  
.my-grid table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}
.my-grid th, .my-grid td {
  padding: 7px;
  border: 1px solid #888;
  background-color: white;
}
  
.my-grid th {
  position: sticky;
  top: 0;
}
 `;
    document.head.appendChild(style);
  }
}