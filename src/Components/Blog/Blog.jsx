import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmarks }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='space-y-2 mt-20'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='flex items-center justify-between '>
                <div className='flex space-x-3 py-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-lg font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <p className='text-lg font-medium'>{reading_time} minute Read</p>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='text-blue-700 '><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx} className='text-blue-800 text-2xl'><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}


export default Blog;