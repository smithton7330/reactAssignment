import Item from './Item'

const album = [
    {
        title: 'Rapster',
        artist: 'Polo G',
        imgUrl: 'https://charts-static.billboard.com/img/2021/04/polo-g-9l1-rapstar-pz6-155x155.jpg',
        mp3Url: '/static/media/rapster.132afbd7.mp3'
    },
    {
        title: 'Leave The Door Open',
        artist: 'Silk Sonic (Bruno Mars & Anderson .Paak)',
        imgUrl: 'https://charts-static.billboard.com/img/2021/03/bruno-mars-c75-leave-the-door-open-fy0-155x155.jpg',
        mp3Url: '/static/media/leave-the-open-door.988226c2.mp3'
    },
    {
        title: 'Peaches',
        artist: 'Justin Bieber Feat. Daniel Caesar Giveon',
        imgUrl: 'https://charts-static.billboard.com/img/2021/03/justin-bieber-f8k-peaches-zld-155x155.jpg',
        mp3Url: '/static/media/peaches.8d6e40eb.mp3'
    },
    {
        title: 'Montero (Call Me By Your Name)',
        artist: 'Lil Nas X',
        imgUrl: 'https://charts-static.billboard.com/img/2021/04/lil-nas-x-n94-montero-call-me-by-your-name-4si-155x155.jpg',
        mp3Url: '/static/media/montero.4a581b4b.mp3'
    },
    {
        title: 'Levitating',
        artist: 'Dua Lipa Featuring DaBaby',
        imgUrl: 'https://charts-static.billboard.com/img/2020/08/dua-lipa-eqf-levitating-lmv-155x155.jpg',
        mp3Url: '/static/media/levitating.11f3bcde.mp3'
    },
]

export default function MusicList(props) {
    const items = album.map((item) => {
        return <Item imgUrl={item.imgUrl} title={item.title} artist={item.artist} mp3Url={item.mp3Url}/>
    })
    return (
        <div className="musicList-container">
            <button style={{ marginBottom: '20px', color: 'black', width: '100px', fontSize: '16px' }} onClick={()=>{props.movePage()}}>
                Intro
            </button>
            <h1>MusicList</h1>
            <div className="item-container">
                { items }
            </div>
        </div>

    )
} 