import { dice, roll} from './type'

const Dice = ({de} : {de:dice}) => {
    var res : number = 0;
    var css_class : string = "";
    var img : string = ""
    var rootContext = document.body.getAttribute("data-root");
    switch (de.Faces) {
        case 4:
            res = Math.floor(Math.random() * 4);
            css_class = "four_faces";
            img = rootContext + "/assets/de-4.png";
            break;
        case 6:
            res = Math.floor(Math.random() * 6);
            css_class = "six_faces";
            img = rootContext + "/assets/de-6.png";
            break;
        case 8:
            res = Math.floor(Math.random() * 8);
            css_class = "eight_faces";
            img = rootContext + "/assets/de-8.png";
            break;
        case 10:
            res = Math.floor(Math.random() * 10);
            css_class = "ten_faces";
            img = rootContext + "/assets/de-10.png";
            break;
        case 12:
            res = Math.floor(Math.random() * 12);
            css_class = "twelve_faces";
            img = rootContext + "/assets/de-12.png";
            break;
        case 20:
            res = Math.floor(Math.random() * 20);
            css_class = "twenty_faces";
            img = rootContext + "/assets/de-20.png";
            break;
        default:
            css_class = "no_faces";
            break;
    }
    if(!de.ZeroIncluded){
        res = res + 1;
    }
    
    return(
        <div className="de_container">
            <img className="immage_de" src={img}/>
            <p className={css_class} >
                {res}
            </p>
        </div>
    )
}

export const Roll = ({jet} : {jet:roll}) => {
    const dices = jet.Dices.map((de : dice, index : number) =>
        <Dice de={de}/>
    )

    return(
        <div>
            <p>{jet.Sender.Name} rolled :</p>
            {dices}
        </div>
    )
}
