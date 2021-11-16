import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from './../../../commons/button/Button';
import { ACTIONS } from '../../../../redux/constants';

import cl from './../Profile.module.css';

const tableHeaderText = {
  col1: 'Заказанная услуга',
  col2: 'На дату',
  col3: 'Зарезервированные часы',
};

function createData(service, date, time, button) {
  return { service, date, time, button };
}

const actions = {
  record: ACTIONS.RESERVE_RECORD_CANCEL,
  rooms: ACTIONS.RESERVE_ROOM_CANCEL,
};

const ReserveServicesTable = ({ data }) => {
  console.log(data);

  const dispatch = useDispatch();

  const cancelReserve = (info) => {
    const formData = {
      dayId: info.date.id,
      reservedTime: info.reservedTime,
    };
    dispatch({ type: actions[info.type], formData });
    dispatch({ type: ACTIONS.DELL_ORDER_IN_USER, orderId: info.orderId });
  };

  const rowsArray = data.map((element) => {
    return createData(
      element.type + ' ' + element.name,
      element.date.date + ' ' + element.date.monthName,
      element.reservedTime.join(', '),
      <Button text={'Отменить'} onClick={() => cancelReserve(element)} />
    );
  });

  const rows = rowsArray.map((row) => {
    return (
      <TableRow key={row.date + row.time}>
        <TableCell component='th' scope='row'>
          {row.service}
        </TableCell>
        <TableCell align='right'>{row.date}</TableCell>
        <TableCell align='right'>{row.time}</TableCell>
        <TableCell align='right'>{row.button}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table className={cl.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>{tableHeaderText.col1}</TableCell>
            <TableCell align='right'>{tableHeaderText.col2}</TableCell>
            <TableCell align='right'>{tableHeaderText.col3}</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

ReserveServicesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.string.isRequired,
      reservedTime: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      actionTime: PropTypes.string.isRequired,
      dayId: PropTypes.string.isRequired,
      date: PropTypes.shape().isRequired,
    })
  ),
};

export default ReserveServicesTable;
