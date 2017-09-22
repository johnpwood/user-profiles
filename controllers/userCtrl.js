var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login(req, res, next){
    var y = users.filter(x=>x.name==req.body.name)
    console.log(y);
    if(y.length < 1){
      return res.send({userFound:false})
    }
    if(y[0].password == req.body.password){
      req.session.currentUser = y[0];
      res.send({userFound:true})
    }else{
      res.send({userFound:false})
    }
  }
}
