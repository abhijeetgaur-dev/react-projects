import { useState } from "react";


const BgChanger = () =>{

    let [mode, setMode] = useState('hex');
    let [color, setColor]  = useState('#000000')

    let randFunc = (length) => Math.floor(Math.random()*length)

    const hashCreator = () =>{
        const hex= [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
        let hashBase = '#';
        
          
        for(let i=0; i<6; i++){
            hashBase+=hex[randFunc(hex.length)]
            console.log()
        }
        setColor(hashBase)
    }

    const rgbCreator = () =>{
        let r = randFunc(256)
        let g = randFunc(256)
        let b = randFunc(256)

        let rgbColor= `rgb(${r},${g},${b})`
        setColor(rgbColor)
        console.log(rgbColor)

    }


    const changeBackground =() =>{
        mode === 'hex'
        ?   hashCreator()
        :   rgbCreator();

    }
    

    return (
        <div className="wrapper" style= {{
            background: color,
            width: "100vw",
            height: "100vh"
         }}>
            <button onClick={()=>setMode('hex')}>Hex Color</button>
            <button onClick={()=>setMode('rgb')}>RGB Color</button>
            <button onClick={()=>{changeBackground()}}>Change Background</button>
            <div className="bg-name">
                {mode === 'hex'
                ?<span><h1>hexBackgoundColor</h1>{color}</span>
                :<span><h1>rgbColor</h1> {color}</span>
                }
            </div>
        </div>
    )
}

export default BgChanger