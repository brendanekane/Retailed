export const getUsers = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/users'
    })
  );
};

export const getOneUser = id => {
  return (
      $.ajax({
      method: 'GET',
      url: `api/users/${id}`
    })
  );
};
