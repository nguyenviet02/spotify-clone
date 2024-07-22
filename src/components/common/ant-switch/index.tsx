import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import React from 'react';

type Props = {
  defaultChecked?: boolean;
};

const AntSwitch = ({ defaultChecked }: Props) => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 10
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)'
      }
    },
    '& .MuiSwitch-switchBase': {
      padding: 3,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#000',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#1ed760'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 10,
      height: 10,
      borderRadius: 5,
      transition: theme.transitions.create(['width'], {
        duration: 200
      })
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: '#727272',
      boxSizing: 'border-box'
    }
  }));
  return <AntSwitch defaultChecked={defaultChecked} />;
};

export default AntSwitch;
