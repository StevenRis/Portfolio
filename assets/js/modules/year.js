// copyright year

const year = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  document.getElementById('year').innerHTML = '&#169; Copyright 2020 - ' + year;
};

export default year;
