window.addEventListener('load', function () {
    var box = this.document.querySelector('.box_dbj');
    var ulImg = this.document.querySelector('.dbj_img')
    var boxTwo = this.document.querySelector('.dbj_dw')
    var ulBtn = this.document.querySelector('.dbj_02');
    var btnLeft = this.document.querySelector('.al_l');
    var btnRight = this.document.querySelector('.al_r');
    var liOne = this.document.querySelector('.dbj_lis');
    var lisBtn = ulBtn.querySelectorAll('li');
    //左侧按钮
    var num = 0;
    var boxWidth = box.clientWidth;
    var current = 0;
    btnLeft.addEventListener('click', function () {
        if (num >= ulImg.children.length - 1) {
            ulImg.style.left = 0;
            num = 0;
        }
        num++;
        animate(ulImg, -num * boxWidth);
    })

    // 右侧按钮
    btnRight.addEventListener('click', function () {
        if (num <= 0) {
            ulImg.style.left = -(ulImg.children.length - 1) * boxWidth + 'px';
            num = ulImg.children.length - 1;
        }
        num--;
        animate(ulImg, -num * boxWidth);
    })

    //自动轮播
    var loopTimer = this.setInterval(function () {
        btnLeft.click();
    }, 2000)

    //鼠标经过暂停轮播
    box.addEventListener('mouseenter', function () {
        clearInterval(loopTimer);
    })

    //鼠标离开自动播放轮播
    box.addEventListener('mouseleave', function () {
        loopTimer = setInterval(function () {
            btnLeft.click();
        }, 2000)
    })

    // 分页按钮
    








})