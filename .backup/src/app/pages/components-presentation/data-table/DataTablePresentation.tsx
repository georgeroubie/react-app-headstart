import { Subtitle } from '@typography-components';
import { DataTable } from '@ui-components';
import { ReactElement } from 'react';

const DataTablePresentation = (): ReactElement => {
  return (
    <>
      <Subtitle>Data table</Subtitle>
      <DataTable>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
        </tbody>
      </DataTable>
      <br />
      <Subtitle>Data table stripped</Subtitle>
      <DataTable stripped>
        <thead>
          <tr>
            <th>Header column</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
          </tr>
          <tr>
            <td>Row 3</td>
          </tr>
        </tbody>
      </DataTable>
    </>
  );
};

export default DataTablePresentation;
