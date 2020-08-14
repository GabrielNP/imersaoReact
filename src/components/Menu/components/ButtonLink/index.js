import React from 'react';
import PropTypes from 'prop-types'

 function ButtonLink({ className, href, children}) {
    return (
        <a className={className} href={href}>
            {children}
        </a>
    );
}

export default ButtonLink;