const Pets = require('../models/Pet');

////////Criar //////////
exports.create =  async(req, res) =>{
  var dados = req.body;


  await Pets.create(dados)
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: 'Categoria inserida com sucesso!'
    });
  }).catch((err)=>{
    return res.status(400).json({
      erro:true,
      mensagem: `Erro: Categoria não encontrada... ${err}`
    })
  })
}

////////mostrar todos //////////
exports.findAll = async(req,res)=>{
  await Pets.findAll({
    attributes: ['id','name','description'],
    order: [['id', 'ASC']]

  })
  .then((categories) => {
    return res.json({
      erro: false,
      categories
    });
  }).catch((err) => {
    return res.status(400).json({
      erro : true,
      mensagem: `Erro ${err} ou nenhuma categoria encontrada!!!`
    })
  })
}
exports.findAllPages = async(req,res)=>{
  console.log(req.params)

  const {page = 1} = req.params
  const limit = 2
  let lastPage = 1

  const countCategories = await Categories.count()
  console.log(countCategories)

  if(countCategories === null){
    
    return res.status(400).json({
      erro: true,
      mensagem:"Erro , Categories não encontrada"
    }) 
  }else{
    lastPage = Math.ceil(countCategories / limit)
    console.log(lastPage)
  }

  await Categories.findAll({
    attributes: ['id','name','description'],
    order: [['id', 'ASC']],
    offset:Number((page * limit) - limit),
    limit: limit

  })
  .then((categories) => {
    return res.json({
      erro: false,
      categories,
      countCategories,
      lastPage
    });
  }).catch((err) => {
    return res.status(400).json({
      erro : true,
      mensagem: `Erro ${err} ou nenhuma categoria encontrada!!!`
    })
  })
}

////////mostrar 1 //////////
exports.findOne = async (req, res) =>{
  const {id} = req.params;
  try{
    // await User.findAll({ where: {id: id}})
    const categories = await Pets.findByPk(id);
    if(!categories){
      return res.status(400).json({
        erro: true,
        mensagem: "Erro:Nenhuma categoria encontrada!"
      })
    }
    res.status(200).json({
      erro: false,
      categories
    })
  }catch(err){
    res.status(400).json({
      erro: true,
      mensagem: `Erro ${err}`
    })
  }
}

////////alterar //////////
exports.update = async(req,res)=>{
  const {id} = req.body;

  await Pets.update(req.body, {where: {id}})
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: "Categoria alterada com sucesso!"
    })
  }).catch((err)=>{
    return res.status(400).json({
      erro: true,
      mensagem: `Erro: Categoria não encontrada ...${err}`
    })
  })
}

////////deletar //////////
exports.delete =  async(req,res)=>{
  const {id} = req.params;
  await Pets.destroy({where: {id}})
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: "Categoriea apagada com sucesso!"
    });
  }).catch((err)=>{
    return res.status(400).json({
      erro: true,
      mensagem: `Erro: ${err} Categoria não apagado...`
    })
  })
}










