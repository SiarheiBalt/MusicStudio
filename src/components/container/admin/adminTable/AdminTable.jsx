import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import { Button } from '../../../commons/button/Button';
import { getUserLocalStorage } from '../../../../utils/localStorage';
import { Input } from '../../../commons/input/Input';

const ico = <FontAwesomeIcon icon={faSearch} />;

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
  const cancelReserve = (info) => {
    const { token } = getUserLocalStorage();
    const formData = {
      ...info,
      auth: token,
      userId: info.owner,
    };
    console.log('cancel reserve, Admin');
  };

  const rowsArray = data.map((element) => {
    return createData(
      element.owner,
      element.type + ' ' + element.name,
      element.date.date + ' ' + element.date.monthName,
      element.reserveTime.join(', '),
      <Button text={'Отменить'} onClick={() => cancelReserve(element)} />
    );
  });

  const rows = rowsArray.map((row) => {
    return (
      <TableRow key={row.date + ' ' + row.time}>
        <TableCell align='left'>{row.user}</TableCell>
        <TableCell align='right' scope='row'>
          {row.service}
        </TableCell>
        <TableCell align='right'>{row.date}</TableCell>
        <TableCell align='right'>{row.time}</TableCell>
        <TableCell align='right'>{row.button}</TableCell>
      </TableRow>
    );
  });

  const [rowsAfterSearch, setRowsAfterSearch] = useState(rows);
  const [input, setInput] = useState('');

  const onchangeInput = (event) => {
    setInput(event.target.value);
    let result = rows.filter((row) => {
      let user = row.props.children[0].props.children;
      return user.toLowerCase().includes(event.target.value);
    });
    setRowsAfterSearch(result);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              {tableHeaderText.col1}{' '}
              <Input value={input} onchangeInput={onchangeInput} /> {ico}
            </TableCell>
            <TableCell align='right'>{tableHeaderText.col2}</TableCell>
            <TableCell align='right'>{tableHeaderText.col3}</TableCell>
            <TableCell align='right'>{tableHeaderText.col4}</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rowsAfterSearch}</TableBody>
      </Table>
    </TableContainer>
  );
}
