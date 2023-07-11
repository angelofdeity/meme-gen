import trollFace from '../assets/troll-face.svg'
export default function Header() {
    return (
        <nav style={{height: 65}}>
            <img src={trollFace}/>
            <h4 style={{marginRight: 'auto'}}>Meme Generator</h4>
            <h5>React Course - Project 3</h5>
        </nav>
    )
}
