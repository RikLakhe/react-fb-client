import {DISABLE_BALANCE_ON_ADD,DISABLE_BALANCE_ON_EDIT,ALLOW_REGISTRATION} from '../actions/types';

export  const setDisableBalanceOnAdd = () =>{
//getings settings from local storage
  const settings = JSON.parse(localStorage.getItem('settings'));
//toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
//set back to local storage
  localStorage.setItem('settings',JSON.stringify(settings));
    return {
      type : DISABLE_BALANCE_ON_ADD,
      payload:settings.disableBalanceOnAdd
    }
}

export  const setDisableBalanceOnEdit = () =>{
  //getings settings from local storage
  const settings = JSON.parse(localStorage.getItem('settings'));
//toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
//set back to local storage
  localStorage.setItem('settings',JSON.stringify(settings));
    return {
      type : DISABLE_BALANCE_ON_EDIT,
      payload:settings.disableBalanceOnEdit
    }
}

export  const setAllowRegistration = () =>{
  //getings settings from local storage
  const settings = JSON.parse(localStorage.getItem('settings'));
//toggle
  settings.allowRegistration = !settings.allowRegistration;
//set back to local storage
  localStorage.setItem('settings',JSON.stringify(settings));
    return {
      type : ALLOW_REGISTRATION,
      payload:settings.allowRegistration
    }
}