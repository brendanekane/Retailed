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

export const updateUser = user => {
  debugger
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/users/${user.id}`,
      data: { user }
    })
  );
};
