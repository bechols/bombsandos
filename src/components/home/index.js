import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<img src={"../assets/img/bombsando.jpg"} alt={"Pretty bomb"} class={style.pic} />
			</div>
		);
	}
}
