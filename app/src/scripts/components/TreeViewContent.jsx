import React from "react";

function _renderNodeContent(node) {
    if(node._content){
        return (<div className="content" dangerouslySetInnerHTML={{__html: node._content}}/>);
    }else if(node.content){
        return <div className="content">{node.content}</div>;
    }else{
        return null;
    }
}

function _renderNodeImage(node) {
    if(node._img && node._img.src){
        return <img className="img-responsive" style={{maxWidth: node._img.maxWidth}} src={node._img.src}/>;
    }else{
        return null;
    }
}

function _renderNodeText(node) {
    if(node._text){
        return (<span dangerouslySetInnerHTML={{__html: node._text}}/>);
    }else if(node.text){
        return node.text;
    }else{
        return null;
    }
}

function _renderGeneralNodes (_tree) {
    return _tree.map( node => 
        <li key={node.ref}>
            <h3 ref={node.ref}>{_renderNodeText(node)}</h3>
            {_renderNodeContent(node)}
            <ul>
                {
                        node._nodes?
                        _renderGeneralNodes(node._nodes): null
                }
            </ul>
            {_renderNodeImage(node)}
        </li>
    );
};

function _render2ndNodes (_tree) {
    return _tree.map( secondLevelNode => 
        <li key={secondLevelNode.ref}>
            <h2 ref={secondLevelNode.ref}>{_renderNodeText(secondLevelNode)}</h2>
            {_renderNodeContent(secondLevelNode)}
            <ul>
                {
                    secondLevelNode.nodes?
                        _renderGeneralNodes(secondLevelNode.nodes): 
                        secondLevelNode._nodes?
                        _renderGeneralNodes(secondLevelNode._nodes): null
                }
            </ul>
            {_renderNodeImage(secondLevelNode)}
        </li>
    );
};

function _render1stNodes (_tree, path) {
    return Underscore.chain(_tree)
    .filter( firstLevelNode => ((path && path == firstLevelNode["_href"]) || (!path)) )
    .map( firstLevelNode => 
        <li key={firstLevelNode.ref}>
            <h1 ref={firstLevelNode.ref}>{_renderNodeText(firstLevelNode)}</h1>
            {_renderNodeContent(firstLevelNode)}
            <ol>
                {firstLevelNode.nodes?_render2ndNodes(firstLevelNode.nodes):null}
            </ol>
        </li>
    )
    .value();
};

function _renderNodes (tree, depth) {
    return tree.map( node => 
        <li key={node.ref}>
            {React.createElement(`h${depth}`, {ref: node.ref},  _renderNodeText(node) )}
            {_renderNodeContent(node)}
            {React.createElement(
                node.nodeOrder?"ol":"ul", {},  
                node.nodes? 
                    _renderNodes(node.nodes, depth+1):
                    node._nodes?
                        _renderNodes(node._nodes, depth+1): null)}
            {_renderNodeImage(node)}
        </li>
    );
}

// _react2["default"].createElement(
//                 "h2",
//                 { ref: secondLevelNode.ref },
//                 _renderNodeText(secondLevelNode)
//             ),

const TreeViewContent = React.createClass({

    propTypes: {
        scrollToRef: React.PropTypes.string, 
        offsetTop: React.PropTypes.number,
        data: React.PropTypes.array 
    },

    getDefaultProps: function() {
        return {
            offsetTop: 0
        };
    },

    _scrollTo () {
        if( this.refs[this.props.scrollToRef] ){
            jQuery("html,body").animate({
                scrollTop: jQuery(React.findDOMNode(this.refs[this.props.scrollToRef])).offset().top - this.props.offsetTop
            }, 1000);
        }
    },

    componentDidMount () {
        this._scrollTo()
    },

    componentDidUpdate (prevProps, prevState) {
        this._scrollTo();
    },

    render () {
        return (
            <ul>
                {_renderNodes(this.props.data, 1)}
            </ul>
        );
    }
});

export default TreeViewContent;