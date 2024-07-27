import { atom } from 'recoil';
import { Gender } from '../graphql/generated/types';

export type TDataSignUp = {
  displayName: string;
  email: string;
  phoneNumber: string;
  password: string;
  dateOfBirth: Date | null;
  gender: Gender;
  notGetMarketingMessage: boolean;
  shareData: boolean;
};

const defaultDataSignUp: TDataSignUp = {
  email: '',
  phoneNumber: '',
  password: '',
  displayName: '',
  dateOfBirth: null,
  gender: Gender.Male,
  notGetMarketingMessage: false,
  shareData: false
};

export type TNumberOfColumnInGrid = {
  column: number;
};

const defaultNumberOfColumnInGrid: TNumberOfColumnInGrid = {
  column: 0
};

export const numberOfColumnInGridState = atom({
  key: 'numberOfColumnInGridState',
  default: defaultNumberOfColumnInGrid
});

export const stepSignUpState = atom({
  key: 'stepSignUpState',
  default: 0
});

export const dataSignUpState = atom({
  key: 'dataSignUpState',
  default: defaultDataSignUp
});
