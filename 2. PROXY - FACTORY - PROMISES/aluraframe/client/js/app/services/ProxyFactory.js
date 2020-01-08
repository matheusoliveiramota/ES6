class ProxyFactory {

    static create(model, props, acao) {
        return new Proxy(model, {
            
            get(target, prop, receiver) {
                
                if(props.includes(prop) && typeof(target[prop]) == 'function') {
                    
                    return function() {
                        acao(model);
                        Reflect.apply(target[prop],target,arguments);
                    }
                }

                else {
                    return target[prop];
                }
            }
        });
    }
}