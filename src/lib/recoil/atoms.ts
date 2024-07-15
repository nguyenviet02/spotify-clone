import { atom } from 'recoil';
export const stepSignUpState = atom({
  key: 'stepSignUpState',
  default: 0
});

export const dataSignUpState = atom({
  key: 'dataSignUpState',
  default: {}
});
