import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '../../../commons/button/Button';

const tableHeaderText = {
  col1: 'Пользователь',
  col2: 'Заказанная услуга',
  col3: 'На дату',
  col4: 'Зарезервированные часы',
};

function createData(user, service, date, time, button) {
  return { user, service, date, time, button };
}

export default function AdminTable({ data }) {
  const rowsArray = data.map((element) => {
    console.log(element);
    return createData(
      element.owner,
      element.type + ' ' + element.name,
      element.date.date + ' ' + element.date.monthName,
      element.reserveTime.join(', '),
      <Button text={'Отменить'} onClick={() => console.log('1')} />
    );
  });

  const rows = rowsArray.map((row) => {
    return (
      <TableRow key={row.date + row.time}>
        <TableCell align='right'>{row.owner}</TableCell>
        <TableCell component='th' scope='row'>
          {row.service}
        </TableCell>
        <TableCell align='right'>{row.date}</TableCell>
        <TableCell align='right'>{row.time}</TableCell>
        <TableCell align='right'>{row.button}</TableCell>
      </TableRow>
    );
  });
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>{tableHeaderText.col1}</TableCell>
            <TableCell align='right'>{tableHeaderText.col2}</TableCell>
            <TableCell align='right'>{tableHeaderText.col3}</TableCell>
            <TableCell align='right'>{tableHeaderText.col4}</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
