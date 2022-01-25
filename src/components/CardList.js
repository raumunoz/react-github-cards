import React from 'react';
import Card from './Card';
function CardList(props) {
    console.log(props.profiles);
    return (<div>
        {props.profiles.map(profile => <Card  key={profile.id} profile={profile}/>)}
    </div>
    );
}
//<Card key={profile.id} {...profile} />
export default CardList;
