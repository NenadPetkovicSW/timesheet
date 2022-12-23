import { useEffect, useState } from "react";
function Alpha(props) {

	const letters = (props.letters);
	const [lastActive, setLastActive] = useState('');
	const [newClick, setNewClick] = useState('');
	const [trigger, setTrigger] = useState(true);
	const [deactivate, setDeactivate] = useState(props.deactivate);
	const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

	useEffect(() => {
		letters.map((letter, index) => {
			document.getElementById(letter).className = "";
		});
	}, [props.letters])


	useEffect(() => {
		
		if(lastActive)
		document.getElementById(lastActive).className = "";
	}, [props.deactivate, deactivate])
	

	useEffect(() => {
		if (newClick != '') {
			if (newClick != lastActive) {
				document.getElementById(newClick).className = "active";
				props.letterToParent(newClick);

				if (lastActive != '')
					document.getElementById(lastActive).className = "";

				setLastActive(newClick);
			}
			else {
				if (lastActive != '') {
					setLastActive('');
					document.getElementById(lastActive).className = "";
					props.letterToParent('');
				}
			}
		}
	}, [newClick, trigger]);


	function onClickActive(e) {
		if (document.getElementById(e.currentTarget.id).className == 'disabled')
			return;

		setNewClick(e.currentTarget.id);
		if (e.currentTarget.id == lastActive || e.currentTarget.id == newClick) {
			setTrigger(!trigger)
		}
	}

	return (
		<>
			<div class="alpha">
				<ul>
					{alphabet.map((ch, index) => {
						return <li onClick={onClickActive} class="disabled" id={ch.toUpperCase()}>
							<a>{ch.toUpperCase()}</a>
						</li>
					})}
				</ul>
			</div>
		</>
	)
};
export default Alpha;