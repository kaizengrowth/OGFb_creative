import Story from './Story'

export default function Feed () {

    const post = {
        'name': 'Mark Zuckerburg',
        'status': 'is dreaming of building a Metaverse',
        'time': 'November 27, 2006, 3:00pm',
        'likes': 0,
    }

    return(
      <div className="feed">
        <h3>Feed</h3>
        <Story post={post} />
      </div>
    )    
}