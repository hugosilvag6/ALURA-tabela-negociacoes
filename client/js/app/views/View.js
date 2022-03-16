class View {
    constructor(elemento){
        this._elemento = elemento;
    }
    _template(){
        throw new Error('Sobrescreva o template herdado para utilizar.')
    }
    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}