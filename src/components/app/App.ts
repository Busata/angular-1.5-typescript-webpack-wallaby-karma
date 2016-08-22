require('./App.scss');

export class App {
    bindings: any;
    template: any;
    controller: any;

    constructor() {
        this.bindings = {};
        this.controller = function(AppService) {
            this.message = AppService.getMessage();
        };
        this.template =  require('./App.html');
    }
}
