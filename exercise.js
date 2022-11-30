function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    })
  }


  function removeUser(usersArray, username) {
    let index1 = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(index1 === -1) return;
  
    return usersArray.splice(index1,1)[0];
  }