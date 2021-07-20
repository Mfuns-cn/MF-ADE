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
	
	<div class="advanceDanmakuEditor_mask">
	<div class="advanceDanmakuEditor" >
	  <div class="exit_edit">x</div>
	  <div class="editor_title">mfuns高级弹幕编辑器</div>
	  <div class="danmaku_code" id="danmaku_code"></div>
	  <div class="danmuku_link"><a href="https://meogirl.ml/2021/06/11/danmaku/Mfuns%E5%BC%B9%E5%B9%95%E6%89%8B%E5%86%8C/"
	   target="_blank">mfuns高级弹幕手册</a></div>
	  <div class="editor_footer">
	     <div class="editor_btn" id="editor_clear">清除</div>
		 <div class="editor_btn" id="editor_preview">预览</div>
		 <div class="editor_btn" id="editor_emit">发送</div>
	  </div>
	</div>
	</div>
	<div id="control_mask">
		<div id="tip" class="tip"></div>
		<div id="voice"></div>
		<div id="wait_loading">
		 <div></div>
		 <p>正在缓冲...</p>
		</div>
		
		<div id="play_box" class="button_pause">
			
		</div>
		<div class="advanceDanmaku_pre_box"></div>
	  </div>
		
		<div id="danmakuEditor">
			<div id="danmaku_type">
				<div id="top">顶部</div>
				<div id="normal" class="focus">滚动</div>
				<div id="bottom">底部</div>
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
			<div id="wrap">
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