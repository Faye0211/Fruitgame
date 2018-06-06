

/*---------$()ʹ��  ��ʼ---------*/

function $( v ){
	if( typeof v === 'function' ){	//������ں���������ҳ�������֮��ִ�д���
		window.onload = v;
	} else if ( typeof v === 'string' ) {	//��������ַ�������ô�Ͳ���id
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {	//������ڶ��󣬾�ֱ�ӷ��ض���
		return v;
	}
}

/*---------$()ʹ��  ����---------*/




/*---------getStyle()�����Ӽ������ʾ���  ��ʼ---------*/

//��ȡ�����ĺ�����ʽ��obj��д���ӣ�attr��д����߸ߣ�����͸���ȵȵ�
function getStyle( obj, attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}

/*---------getStyle()�����Ӽ������ʾ���  ����---------*/





/*---------doMove()�����Զ��ĺ���  ��ʼ---------*/

//obj�Ǻ���  attr��Ҫ�ߵĿ���߸�  dir�ǲ�����target�ǵ����λ�ã�endfn�ǿ��Լ���ִ�еĺ���
function doMove ( obj, attr, dir, target, endFn ) {
	// 要改变元素属性的速度
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		// 下一个位置变化
		var speed = parseInt(getStyle( obj, attr )) + dir;			// ����
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 30);
}

/*---------doMove()�����Զ��ĺ���  ����--------*/






/*---------shake()�����Զ����ĺ���  ��ʼ---------*/

//��������obj�Ǻ��ӣ�attr��top����left��endFn�ǿ���ִ������ĺ��� shake( this, 'left');
function shake ( obj, attr, endFn ) {
	//  getStyle获取样式函数,避免只能获取行内样式的尴尬.
	var pos = parseInt( getStyle(obj, attr) );
	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
	var timer = null;
		
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
	if(obj.onOff !== true ){	//�������������true����ִ������Ĵ��� ע�������ظ�ʹ�ö�
		clearInterval( obj.shake );
		obj.shake = setInterval(function (){
			obj.onOff = true;	//��ʼִ�е�ʱ��һֱΪtrue�����������true�ǹر�
			obj.style[attr] = pos + arr[num] + 'px';
			num++;
			if ( num === arr.length ) {
				clearInterval( obj.shake );
				endFn && endFn();
				obj.onOff = false;	//ִ����֮�󣬾ͱ��flase��Ȼ���ֿ��Կ�ʼ���
			}
		}, 50);
	}
}

/*---------shake()�����Զ����ĺ���  ����---------*/


/*---------hide()������ obj�Ǻ��ӣ�sec�ǽ���ʱ�䣬endFn�Ǽ���ִ�еĺ���---------*/
// function hide(obj,cy,sec,endFn){
// 	var timer = null;
// 	var fadeNum = Number(getStyle( obj, 'opacity' )*100);
// 	var fadeNum1 = Number(getStyle( obj, 'opacity' ));
	
// 	timer = setInterval(function(){
// 		fadeNum -= 10;
// 		fadeNum1 -=0.1;
// 		obj.style.filter="alpha(opacity="+fadeNum+")";  
// 		obj.style['-moz-opacity'] =fadeNum1;  
// 		obj.style['-khtml-opacity']=fadeNum1;  
// 		obj.style.opacity = fadeNum1;
// 		if(fadeNum==cy*100 || fadeNum1==cy){
// 			clearInterval( timer );
// 			endFn && endFn();
// 		}
// 	},sec);
// }

/*---------hide()������---------*/



/*---------out()������ obj�Ǻ��ӣ�sec�ǽ���ʱ�䣬endFn�Ǽ���ִ�еĺ���---------*/
// function out(obj,cy,sec,endFn){
// 	var timer = null;
// 	var fadeNum = Number(getStyle( obj, 'opacity' )*100);
// 	var fadeNum1 = Number(getStyle( obj, 'opacity' ));
// 	timer = setInterval(function(){
// 		fadeNum += 10;
// 		fadeNum1 +=0.1;
// 		obj.style.filter="alpha(opacity="+fadeNum+")";  
// 		obj.style['-moz-opacity'] =fadeNum1;  
// 		obj.style['-khtml-opacity']=fadeNum1;  
// 		obj.style.opacity = fadeNum1;
// 		if(fadeNum==cy*100 || fadeNum1==cy){
// 			clearInterval( timer );
// 			endFn && endFn();
// 		}
// 	},sec);
// }

/*---------out()������---------*/