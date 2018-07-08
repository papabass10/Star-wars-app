import React from 'react';

const InfoCard = ({attributes, values}) => {
	return(
		<div className='center'>
			<div className='fl w-50 tr pr2'>
			{attributes.map(attribute => <p>{attribute}:</p>)}
			</div>
			<div className='fl w-50 tl pl2'>
				{values.map(value => {
					if(Array.isArray(value)) {
						value.map(item => {
							let filteredItem = ''
							fetch(item)
							.then(response => response.json())
							.then(respJSON => {
								if(!~item.indexOf('/films/')){
									console.log(respJSON.name)
									filteredItem += respJson.name + ', '
								}else if(~item.indexOf('/films/')){
									filteredItem += respJson.title + ', '
								}
							})
							console.log(filteredItem)
						})
					}
					else {
						return <p>{value}</p>
					}
				})}
			</div>
		</div>
	);
}

export default InfoCard;