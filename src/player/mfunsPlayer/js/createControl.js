export function createControl(el){
	
	el.innerHTML = `
	<div id="danmakuList" class="list">
			<div id="headOfList">
			    <div class="label">弹幕内容</div>
			    <div class="label">时间</div>
				
			</div>
			<div id="danmakuList_content"></div>
			<div id="programList_content"></div>
			<div id="footOfList">
			  <div id="closeList" class="close"></div>
			  <div id="danmakuList_btn" class="foot_item"></div>
			  <div id="advancedDanmaku_btn" class="foot_item">高级弹幕<div class="goto"></div></div>
			</div>
	</div>   
	
	
	<div id="control_mask">
		<div id="tip" class="tip"></div>
		<div id="voice"></div>
		<div id="wait_loading">
		 <div></div>
		 <p>正在缓冲...</p>
		</div>
		<div id="play_box">
			<div class="neko">	
				<div class="ear_left ear" ></div>
				<div class="ear_right ear"></div>
				<div class="button_pause" id="play_button"></div>
				<div class="foot_left foot"></div>
				<div class="foot_right foot"></div>
			</div>
		</div>
		
	  </div>
		
		<div id="danmakuEditor">
			<div id="danmaku_type">
				<p id="top">顶部</p>
				<p id="normal" class="focus">滚动</p>
				<p id="bottom">底部</p>
			</div>
			<div id="danmaku_color"></div>
		</div>
		
		
		<div id="control">
			<div class="loader-box" id="load">
			 <div class="scroll" id="scroll">
			    <div class="bar" id="bar"></div>
				<div class="buffer" id="buffer"></div>
			    <div class="mask" id="mask"></div>
				
			  </div>
			</div>	
			<div class="wrap">
				<div id="player"><div class="icon_pause" id="swich_player"></div></div>
				
				<span id="currentTime"></span>
				<span id="total"></span>
				
				
				<div id="barrage">
					<div class="input_box">
						<input type="text" placeholder="喵御宅Mfuns,发射(。゜ω゜)ノ!" id="text" />
						<div id="danmaku_style">A</div>
						<div id="emit">发送</div>
					</div>
					
				
				</div>
				<div class="control_right">
					<div id="danmaku">
						<div id="switch" class="switch_open">弹</div>
					</div>
					<div id="list_danmaku" class="right_icon">
						<i></i>
					</div>
				    <div id="troggle">
						<i></i>
					</div>
				    <div id="full" class="right_icon">
						<i class="fullsc" id="fs_icon"></i>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	
	`
	
	
	
}