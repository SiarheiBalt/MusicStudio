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

function createRowsArray(element, cancelReserve) {
  const { userEmail, type, name, date, reserveTime } = element;
  return {
    user: userEmail,
    service: `${type} ${name}`,
    date: `${date.date} ${date.monthName}`,
    time: reserveTime.join(', '),
    button: <Button text={'Отменить'} onClick={() => cancelReserve(element)} />,
  };
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
    return createRowsArray(element, cancelReserve);
  });

  const [rowsArrayAfterSearch, setRowsArrayAfterSearch] = useState(rowsArray);
  const [input, setInput] = useState('');

  const onchangeInput = (event) => {
    setInput(event.target.value);
    let result = rowsArray.filter((row) => {
      let user = row.user;
      return user.toLowerCase().includes(event.target.value);
    });
    setRowsArrayAfterSearch(result);
  };

  const rows = rowsArrayAfterSearch.map((row) => {
    const { date, time, user, button, service } = row;
    const key = Math.random().toString(36);
    return (
      <TableRow key={key}>
        <TableCell align='left'>{user}</TableCell>
        <TableCell align='right' scope='row'>
          {service}
        </TableCell>
        <TableCell align='right'>{date}</TableCell>
        <TableCell align='right'>{time}</TableCell>
        <TableCell align='right'>{button}</TableCell>
      </TableRow>
    );
  });

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
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
