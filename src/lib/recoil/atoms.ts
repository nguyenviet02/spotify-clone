import { atom } from 'recoil';
import { Gender, User } from '../graphql/generated/types';

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

export type TNumberOfColumnInGrid = {
  column: number;
};

export const defaultDataSignUp: TDataSignUp = {
  email: '',
  phoneNumber: '',
  password: '',
  displayName: '',
  dateOfBirth: null,
  gender: Gender.Male,
  notGetMarketingMessage: false,
  shareData: false
};

export const defaultNumberOfColumnInGrid: TNumberOfColumnInGrid = {
  column: 0
};

export const defaultDataUser: User = {
  __typename: 'User',
  _id: '',
  displayName: '',
  email: '',
  phoneNumber: '',
  password: '',
  dateOfBirth: null,
  gender: Gender.Male,
  notGetMarketingMessage: false,
  shareData: false,
  playlists: [],
  likedSongs: []
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

export const dataUserState = atom({
  key: 'dataUserState',
  default: defaultDataUser
});
