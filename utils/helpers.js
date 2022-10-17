function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'};
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

module.exports = {
  formatDate,
  emailRegex
}