
module.exports = () => {
    const usuarios = require('../data/usuarios.json');
    const controller = {};
  
    controller.listarUsuarios = (req, res) => res.status(200).json(usuarios);

    controller.listarUsuariosPorCidade = (req, res) => {
        const cidade = req.params.cidade;
        const usuariosFiltrados = filtrarUsuariosPorCidade(usuarios, cidade);
        
        if (usuariosFiltrados.length === 0) {
            return res.status(404).json({ message: 'Nenhum usuário encontrado na cidade informada.' });
        }
        
        return res.status(200).json(usuariosFiltrados);
    }

    controller.sorteioUsuario = (req, res) => {
        if (usuarios.length === 0) {
            return res.status(404).json({ message: 'Nenhum usuário cadastrado.' });
        }
        
        const usuarioSorteado = sortearUsuario(usuarios);
        return res.status(200).json(usuarioSorteado);
    }
  
    return controller;
}

function filtrarUsuariosPorCidade(usuarios, cidade) {
    return usuarios.filter(usuario => {
        const cidadeUsuario = usuario.cidade.toLowerCase();
        return cidadeUsuario === cidade.toLowerCase();
    });
}

function sortearUsuario(usuarios) {
    const indiceSorteado = Math.floor(Math.random() * usuarios.length);
    return usuarios[indiceSorteado];
}