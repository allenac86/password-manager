const getDateNow = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const formatDate = `${day}/${month}/${year}`;

  return formatDate;
};

export default getDateNow;
