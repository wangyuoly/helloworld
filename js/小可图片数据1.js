var 小可图片数组 = [
    {
        src: "./img/小可出生.png",
        description: `你好呀！
我是2024年3月7日刚来世界的小孩，
呼吸是甜的，阳光痒痒的。
妈妈的声音是毛毯，爸爸的胡子蹭我的脸，像小草刚发芽。
天上掉下来好多圆圆的光，叶子在鼓掌，
门缝溜进的风悄悄亲我脚趾——
哦！原来这就是"活着"啊。`
    },
    {
        src: "./img/小可1.png",
        description: `时光匆匆，我满月啦
我现在有一个月咯，我的手掌会捏住爸爸的手指，里三层外三层被包的可严实了。奶嘴真好吃，嘿嘿`
    },
    {
        src: "./img/小可2.png",
        description: `嘿嘿嘿，2个月啦啦啦。肉乎乎的小脸蛋可好rua了。爸爸就很喜欢~
靠在爸爸的腿上，像是依靠了一座大山，安心哎！
我会看东西了哦`
    },
    {
        src: "./img/小可3.png",
        description: `哎呀又要换尿不湿了，好烦好烦
什么时候才能自己换尿不湿呢？
三月咯哦`
    },
    {
        src: "./img/小可4.png",
        description: `四月了呢，今天爸爸带我去河边玩，突然就刮起了大风啊，冷死啦。还好爸爸把我塞在肚肚里，很暖和，向妈妈一样`
    },
    {
        src: "./img/小可5.png",
        description: `五月天啊，好热好热。妈妈买的小包屁有点累屁屁，我更好看咯啦啦啦`
    },
    {
        src: "./img/小可6.png",
        description: `哎呀今天妈妈好累，我自己在床上玩。一张一张又一张，完蛋辣被纸淹没不知所措`
    },
    {
        src: "./img/小可7.png",
        description: `七月的鱼，八月的风啦啦啦，偶尔听到的音乐真好听~我也七月了，来张美美的自拍`
    },
    {
        src: "./img/小可8.png",
        description: `可恶！八月大的小可被放在婴儿椅上看爸爸妈妈吃美食，我也想吃啊，可惜没有牙牙`
    },
    {
        src: "./img/小可9.png",
        description: `九月，衣服穿的厚了一点点。我坐的好不好啊，夸夸我啊嘿嘿！`
    },
    {
        src: "./img/小可10.png",
        description: `啦啦啦，我是看别人吹泡泡的小行家。开心，今天来体育场玩么，人多多的`
    },
    {
        src: "./img/小可11.png",
        description: `小可十一岁咯，妈妈带我来看三姑，我愈加帅气漂亮啦`
    },
    {
        src: "./img/小可12.png",
        description: `啊啊啊终于一岁了，可得多吃些长身体，我干了这一盘你随意哈哈`
    }
];

function renderPhotos() {
    const container = document.getElementById('photo-container');
    小可图片数组.forEach(photo => {
        // 创建图片容器
        const photoDiv = document.createElement('div');
        // 给容器一个id，方便css定位美化
        photoDiv.id = 'photo-container';
        
        // 创建图片元素
        const img = document.createElement('img');
        // 设置图片的src属性
        img.src = photo.src;
        // 把图片添加到容器中
        photoDiv.appendChild(img);
    

        // 创建描述文本容器
        const descriptionDiv = document.createElement('div');
        // 容器id
        descriptionDiv.id = 'text-container';
        // 创建p标签
        const p = document.createElement('p');
        p.textContent = photo.description;
        // 把p标签添加到描述文本容器中
        descriptionDiv.appendChild(p);

        const imageTextContainer = document.getElementById('image-text-container');

        imageTextContainer.appendChild(photoDiv);
        imageTextContainer.appendChild(descriptionDiv);
        
    });
}

// 当页面加载完成后执行渲染
window.addEventListener('DOMContentLoaded', renderPhotos);