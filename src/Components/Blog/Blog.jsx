import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex items-center justify-between'>
                <div className='flex space-x-3 py-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-lg font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='text-lg font-medium'>{reading_time} minute Read</p>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx} className='text-blue-800'><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;