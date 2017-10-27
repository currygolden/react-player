import React from 'react';
require('./progress.less');

let Progress = React.createClass({
	getDefaultProps() {
		return {
			barColor: '#2f9842'
		}
	},
	//子组件中涉及到数据变动，this.props是从父组件拿到的，所以要传值到父组件
	changeProgress(e) {
		//要获取某个dom节点、可以设置ref值
		let progressBar = this.refs.progressBar;
		//计算出点击后进度条的宽度
		let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		//这里是先判定存在否，再进行调用，把响应的进度反应到歌曲播放上
		this.props.onProgressChange && this.props.onProgressChange(progress);
	},
    render() {
        return (
        	//在外层绑定点击事件
        	<div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
        		<div className="progress" style={{width: `${this.props.progress}%`, background: this.props.barColor}}></div>
        	</div>
        );
    }
});

export default Progress;
