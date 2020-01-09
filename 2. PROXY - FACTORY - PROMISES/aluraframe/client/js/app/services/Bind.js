class Bind {

    constructor(model, view, ...props) {
                
        let proxy = ProxyFactory.create( model
                                        ,props
                                        ,(x) => view.update(x));

        view.update(model);

        return proxy;
    }
}