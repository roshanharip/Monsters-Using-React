import { Component } from "react";
import './card.list.component.css'
class CardLst extends Component {
    render() {
        const {monsters} = this.props;
        return (
            <div className="monsterListComponent">
                {
                    monsters.map((monster)=>{
                        const {name,email,id} = monster
                        return (
                            <div className='cardComponent' key={id}>
                                <img src={`https://robohash.org/${id}?set=set2`} alt={`monsters`} />
                                <h2>{name}</h2>
                                <p>{email}</p>
                            </div>
                        );    
                    }
                )
                }
            </div>
        )
    }
}
export default CardLst;