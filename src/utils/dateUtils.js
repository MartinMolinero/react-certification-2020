import moment from 'moment';

const formatDate = (date) => {
  const formattedDate = moment(date).format('DD/MM/YYYY');
  return formattedDate;
};

export { formatDate };
