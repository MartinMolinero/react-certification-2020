import moment from 'moment';

const formatDate = (date) => {
  if (!date) return '';
  const formattedDate = moment(date).format('DD/MM/YYYY');
  return formattedDate;
};

export { formatDate };
