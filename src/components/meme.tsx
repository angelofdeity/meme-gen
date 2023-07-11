export default function Meme() {
    return (
        <main>
            <form>
                <div className="input-section">
                    <input className="input-box" placeholder="Shut up"></input>
                    <input className="input-box" placeholder="and take my money"></input>
                </div>
                <input className="submit-meme" type="submit" value={'Get a new meme image  🖼'}></input>
                <div className='memeImg'></div>
            </form>
        </main>
    )
}
