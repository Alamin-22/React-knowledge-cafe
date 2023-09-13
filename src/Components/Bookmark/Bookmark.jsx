import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}= bookmark
    return (
        <div className='bg-stone-200 p-4 rounded-lg mt-4'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};


Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;