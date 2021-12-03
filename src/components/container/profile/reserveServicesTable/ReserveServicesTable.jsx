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
import { useState } from 'react';

import { Button } from './../../../commons/button/Button';
import { ACTIONS } from '../../../../redux/constants';

import cl from './../Profile.module.css';
import { getUserLocalStorage } from '../../../../utils/localStorage';
import ConfirmModall from '../../../commons/modal/ConfirmModall';

const tableHeaderText = {
  col1: 'Заказанная услуга',
  col2: 'На дату',
  col3: 'Зарезервированные часы',
};

function createRow(order, cancelReserve) {
  const { type, name, date, reserveTime } = order;
  const row = {
    service: `${type} ${name}`,
    date: `${date.date} ${date.monthName}`,
    time: `${reserveTime.sort().join(', ')}`,
    button: <Button text={'Отменить'} onClick={() => cancelReserve(order)} />,
  };
  return row;
}

const ReserveServicesTable = ({ data }) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [cancelData, setCancelData] = useState({});

  const cancelReserve = (info) => {
    const { userId, token } = getUserLocalStorage();
    const formData = { ...info, userId, auth: token };
    setCancelData(formData);
    setIsModal(true);
  };

  const confirmCancelReserve = () => {
    setIsModal(false);
    dispatch({
      type: ACTIONS.CANCEL_ORDER_IN_USER,
      formData: cancelData,
    });
    closeModal();
  };

  const rowsArray = data.map((order) => {
    return createRow(order, cancelReserve);
  });

  const closeModal = () => {
    setIsModal(false);
  };

  const rows = rowsArray.map((row) => {
    const key = Math.random().toString(36);
    return (
      <TableRow key={key}>
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
    <>
      {isModal && (
        <ConfirmModall
          closeModal={closeModal}
          confirmCancelReserve={confirmCancelReserve}
          cancelData={cancelData}
        />
      )}
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
    </>
  );
};

ReserveServicesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      reserveTime: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      actionTime: PropTypes.string.isRequired,
      dayId: PropTypes.string.isRequired,
      date: PropTypes.shape().isRequired,
    })
  ),
};

export default ReserveServicesTable;
