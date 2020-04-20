
var controller = {
    probando : function(req, res){
        res.status(200).send({
            message: "soy el metodo probando"
        });
    },
    testeando: function(req, res) {
        res.status(200).send({
            message: "soy el metodo testeando"
        });        
    }

};

module.exports = controller;