window.onload = function(){
    //��ȡ��������
    var canvas = document.getElementById("canvas");
    //��ȡ������������
    var context =canvas.getContext("2d");
    var s = window.screen;
    var W = canvas.width = s.width;
    var H = canvas.height;
    //��ȡ�������Ļ�Ŀ��Ⱥ͸߶�
    //var W = window.innerWidth;
    //var H = window.innerHeight;
    //����canvas�Ŀ��Ⱥ͸߶�
    canvas.width = W;
    canvas.height = H;
    //ÿ�����ֵ������С
    var fontSize = 12;
    //������
    var colunms = Math.floor(W /fontSize);	
    //��¼ÿ�����ֵ�y������
    var drops = [];
    //��ÿһ�����ֳ�ʼ��һ����ʼ���λ��
    for(var i=0;i<colunms;i++){
        drops.push(0);
    }
    //�˶�������
    var str ="WELCOME TO SH'S BLOG";
    //4:fillText(str,x,y);ԭ������ȥ����y������λ��
    //�滭�ĺ���
    function draw(){
        context.fillStyle = "rgba(238,238,238,.08)";//�ڸǲ�
        context.fillRect(0,0,W,H);
        //������������ʽ
        context.font = "600 "+fontSize+"px  Georgia";
        //������������ɫ
        context.fillStyle = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"][parseInt(Math.random() * 10)];//randColor();����rgb,hsl, ��׼ɫ��ʮ��������ɫ
        //д�뻭����
        for(var i=0;i<colunms;i++){
            var index = Math.floor(Math.random() * str.length);
            var x = i*fontSize;
            var y = drops[i] *fontSize;
            context.fillText(str[index],x,y);
            //���Ҫ�ı�ʱ�䣬�϶����Ǹı�ÿ���������
            if(y >= canvas.height && Math.random() > 0.99){
                drops[i] = 0;
            }
            drops[i]++;
        }
    };
    function randColor(){//�����ɫ
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb("+r+","+g+","+b+")";
    }
    draw();
    setInterval(draw,35);
};