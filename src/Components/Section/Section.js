import React from "react";
import PropTypes from 'prop-types';

const Section = ({ title, children}) => (
<div>
    {title && <h2>{title}</h2>}
    {children}
</div>
);

Section.defaultProps = {
    title: ''
}
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;