export const getUsers = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/users'
    })
  );
};
