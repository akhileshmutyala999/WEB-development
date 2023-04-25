const users = [
    {
     userId: 134,
     userName: "Akhilesh",
     password: "icecream"  
    },
    {
      userId: 534,
      userName: "Sai",
      password: "badpassword"  
     },
     {
      userId: 654,
      userName: "Mutyala",
      password: "password"  
     }
  ]
  
  let getAllUsers = () => users;

module.exports = { getAllUsers };
