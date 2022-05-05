class Component{
    constructor(selector){
        this.$el = document.querySelector(selector);
    }

    hide(){
        this.$el.style.display = 'none';
    }

    show(){
        this.$el.style.display = 'block';
    }

}

document.querySelector('body').innerHTML = 
'<textarea type="text" id="box1"></textarea><div id="box2"></div>';

class Box extends Component{
    constructor(options){
        super(options.selector)

        this.$el.style.width = options.size  * 2 + 'vh'
        this.$el.style.height = options.size + 'vh'
        this.$el.style.background = options.color

    }
}

const box1 = new Box({
    selector: '#box1',
    size: 40,
    color: 'transparent',
})
const box2 = new Box({
    selector: '#box2',
    size: 40,
    color: ' rgba(72, 71, 71, 0.566)',
})


