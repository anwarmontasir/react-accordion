import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };

    state = {
        currentSectionIndex: 0
    }

    handleSectionClick = (index) => {
        this.setState({ currentSectionIndex: index })
    }

    renderSections() {
        const currentSection = this.props.sections[this.state.currentSectionIndex];
        return this.props.sections.map((section, index) => (
           <li>
                <button key={index} onClick={() => this.handleSectionClick(index)}>
                    {section.title}
                </button>
                {this.state.currentSectionIndex === index && <p>{currentSection.content}</p>}
            </li>
        ));
    }

    render() {
        return (
            <ul className="accordion">
                {this.renderSections()}
            </ul>
        )
    }
}

export default Accordion;