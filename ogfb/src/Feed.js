import Story from './Story'

export default function Feed () {

    const post = {
        'name': 'Mark Zuckerburg',
        'status': 'I am dreaming of building a Metaverse.',
        'time': 'November 27, 2006, 3:00pm',
        'likes': 0,
    }

    return(
      <div className="feed">
        <Story post={post} />
      </div>
    )    
}