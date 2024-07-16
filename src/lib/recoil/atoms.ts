import { atom } from 'recoil';

export type TDataSignUp = {
  email: string;
  phone: string;
  password: string;
  displayName: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  notGetMarketingMessage: boolean;
  notShareData: boolean;
};

const defaultDataSignUp: TDataSignUp = {
  email: '',
  phone: '',
  password: '',
  displayName: '',
  day: '',
  month: '',
  year: '',
  gender: 'male',
  notGetMarketingMessage: false,
  notShareData: false
};

export const stepSignUpState = atom({
  key: 'stepSignUpState',
  default: 0
});

export const dataSignUpState = atom({
  key: 'dataSignUpState',
  default: defaultDataSignUp
});
