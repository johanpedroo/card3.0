import React, { Component } from 'react';
import './App.scss';
import { SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value}) => {
    return <li className="item" style={{listStyle: 'none'}}><img src={`./image/mm_${value}.png`} alt={value}/></li>
});

const SortableList = SortableContainer(({items}) => {
    return (
        <ul className="list horizontalList">
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value}/>
            ))}
        </ul>
    );
});
class App extends Component {
    state = {
        items: [
            "meta",
            "curiosidade",
            "liberdade",
            "status",
            "aceitacao",
            "relacao",
            "honra",
            "maestria",
            "poder",
            "ordem",
        ],
        openImg: false
    };
    onSortEnd = ({oldIndex, newIndex}) => {
        if(oldIndex === newIndex){
            setTimeout(() => {
                return this.setState({openImg: this.state.items[oldIndex]});
            },200)
        }
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    closeImg = () => {
        setTimeout(() => {
            this.setState({openImg: false});
        },200)
    };

    render() {
        return <>
            <SortableList
                axis="xy"
                items={this.state.items} onTouchStart={this.closeImg} onSortEnd={this.onSortEnd} />
            {
                this.state.openImg && <div className="background" onTouchStart={this.closeImg} onClick={this.closeImg}><img className="img-open" src={`./image/mm_${this.state.openImg}.png`} alt={this.state.openImg}/></div>
            }
        </>;
    }
}

export default App;
