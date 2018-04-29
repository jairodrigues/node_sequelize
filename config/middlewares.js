import bodyParser from 'body-parser'

module.exports	=	app	=>	{
  app.set("port",	3003);
  app.set("jsons paces", 4);
  app.use(bodyParser.json());
  app.use(app.auth.initialize());
  app.use((req,res,next)=>{
    delete req.body.id
    next()
  })
};
