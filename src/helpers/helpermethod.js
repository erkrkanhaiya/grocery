import moment from 'moment';
import {apiconfig} from './config';

export function daymonthyear(date) {
  date = String(date).split(' ');
  const days = String(date[0]).split('/');
  let parse = [parseInt(days[2]), parseInt(days[1]) - 1, parseInt(days[0])];
  const ddmmyyy = moment(parse).format('Do MMM YY');
  return ddmmyyy;
}

export const formateDate = (val) => {
  const date = moment(val).format('MMMM Do YYYY');
  return date;
};

export const formateTime = (val) => {
  const date = moment(val).format('MMM Do YY hh:mm');
  return date;
};


export const dateMonth = (val) => {
  const newdate = moment(val).format('DD/MM/YYYY');
  return newdate;
};

export function capitalizeFirstLetter(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export function percentageDiscount(total, percentage) {
  const per = Number(total) * (Number(percentage) / 100);
  return per.toFixed(2);
}

export function statusChange(string) {
  if (string === 'draft') {
    return {
      color: '#707070',
      status: 'dr',
    };
  } else if (string === 'pending') {
    return {
      color: '#FE9800',
      status: 'pn',
    };
  } else if (string === 'rejected') {
    return {
      color: 'red',
      status: 'rj',
    };
  } else {
    return {
      color: 'green',
      status: 'cf',
    };
  }
}

export function eachItemTotla(item, editEstimate) {
  // if (editEstimate) {
  return item.rate * item?.pivot?.quantity;
  // } else {
  //   return item.rate * item?.quantity;
  // }
}

export function caluAmount(params) {
  let EdtcaluAmount = 0;
  params?.forEach((item) => {
    EdtcaluAmount =
      EdtcaluAmount + Number(item?.pivot?.quantity) * Number(item.rate);
  });
  if (EdtcaluAmount < 0) {
    return 0;
  }
  return EdtcaluAmount.toFixed(2);
}

export function downlaodTemplate(id, downlaodfor, temp_id) {
  const url = `${apiconfig.DOWNLOAD_TEMPLATE}download-${downlaodfor}/${id}/${temp_id}`;
  return url;
}

export function calculateSubtotal(total, dis_type, txtInput, taxValue) {
  console.log('>>>>>>', total, dis_type, txtInput, taxValue);
  let subtotaol = 0;
  if (dis_type === 'doller') {
    subtotaol = total - txtInput;
  } else {
    subtotaol = total - (total * txtInput) / 100;
  }
  if (subtotaol > 0) return subtotaol;
  else return 0;
}
