module.exports = app => {
    const controller = require('../controllers/usuarios')();
  
    app.route('/usuario/todos')
      .get(controller.listarUsuarios);
    
    app.route('/usuario/cidade/:cidade')
      .get(controller.listarUsuariosPorCidade);
    
    app.route('/usuario/sorteado')
      .get(controller.sorteioUsuario);
  }