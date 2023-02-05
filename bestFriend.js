function bestFriend(friends) {
    let largestFriend = friends[0];
    for (let i = 1; i < friends.length; i++) {
      if (friends[i].length > largestFriend.length) {
        largestFriend = friends[i];
      }
    
    }
    return largestFriend;
  }

  const names = [ 'sajjad', 'Akhi', 'Arufa', 'Tajuar','Kazi Ahammed Nabi' ];
  const longest = bestFriend(names);
  console.log('Longest Name:', longest);



