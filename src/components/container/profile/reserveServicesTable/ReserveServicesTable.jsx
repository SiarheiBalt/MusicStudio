import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from './../../../commons/button/Button';
import { ACTIONS } from '../../../../redux/constants';
import { useDispatch } from 'react-redux';

function createData(service, date, time, button) {
  return { service, date, time, button };
}

const actions = {
  record: ACTIONS.RESERVE_RECORD_CANCEL,
  rooms: ACTIONS.RESERVE_ROOM_CANCEL,
};

const ReserveServicesTable = ({ data }) => {
  const dispatch = useDispatch();

  const cancelReserve = (info) => {
    const formData = {
      dayId: info.date.id,
      reservedTime: info.reservedTime,
    };
    dispatch({ type: actions[info.type], formData });
    dispatch({ type: ACTIONS.DELL_ORDER_IN_USER, dayId: formData.dayId });
  };

  const rowsArray = data.map((element) => {
    return createData(
      element.type + ' ' + element.name,
      element.date.date + ' ' + element.date.monthName,
      element.reservedTime.join(', '),
      <Button text={'Отменить'} onClick={() => cancelReserve(element)} />
    );
  });

  const rows = rowsArray.map((row, i) => (
    <TableRow key={i}>
      <TableCell component="th" scope="row">
        {row.service}
      </TableCell>
      <TableCell align="right">{row.date}</TableCell>
      <TableCell align="right">{row.time}</TableCell>
      <TableCell align="right">{row.button}</TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Заказанная услуга</TableCell>
            <TableCell align="right">На дату</TableCell>
            <TableCell align="right">Зарезервированные часы</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReserveServicesTable;
