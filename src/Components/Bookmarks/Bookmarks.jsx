import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-amber-50 mt-20 p-4 rounded-lg">
            <h2 className="text-4xl  font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;