import React from 'react';




const Testimonialsblock = ({ customerImage, author, quoteText }) => {
    return(
        <React.Fragment>
            <blockquote>
                {quoteText}
                <cite><img src={customerImage} alt={author}/>{author}</cite>
            </blockquote>
        </React.Fragment>
    );
}


export default Testimonialsblock;