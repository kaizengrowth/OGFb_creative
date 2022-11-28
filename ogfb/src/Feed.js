import Story from './Story'

export default function Feed () {

    const posts = [
        {
            'name': 'Mark Zuckerburg',
            'status': 'I am dreaming of building a Metaverse.',
            'time': 'November 27, 2006, 3:00pm',
            'likes': 0,
        },
        {
            'name': 'Bill Gates',
            'status': 'I am dreaming of creating a cure for malaria.',
            'time': 'November 28, 2006, 4:00pm',
            'likes': 100,
        },
        {
            'name': 'Elon Musk',
            'status': 'I am dreaming of not being a total idiot.',
            'time': 'November 29, 2006, 9:00pm',
            'likes': 1000,
        }
    ]

    return(
      <div className="feed">
        <Story post={posts[0]} />
        <Story post={posts[1]} />
        <Story post={posts[2]} />
      </div>
    )    
}