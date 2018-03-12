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
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/users/${user.get('user[id]')}`,
      contentType: false,
      processData: false,
      dataType: "json",
      data: user
    })
  );
};
