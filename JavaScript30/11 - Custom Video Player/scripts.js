/* Get our element */ 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */ 
function togglePlay(){
    // video(media)의 paused 속성이 true을 return 한다면
    // if(video.paused){
        //     video.play();
        // } else {
            //     video.pause();
        // }
    // 삼항연산자 : video(MediaElement)의 paused 속성이 true면 'play'이고 false면 'pause'를 return
    const method = video.paused ? 'play' : 'pause';
    // video 객체의 key['play', 'pause']를 method(())화 시켜서 return
    video[method]();
    /*
     * 질문 : video[method](); 이해 어려움, 객체(video)의 배열? 배열이 맞는지?([])의 키(['play', 'pause'])를 메서드(())화???
     */
    console.log('typeof : ' + typeof [method])
}

function updateButton(){
    // eventTarget의 paused 속성의 return 값에 따라 '▶' or '∥' 을 표시
    const icon = this.paused ? '▶' : '∥';
    // toggle의 textContent에 icon을 대입
    toggle.textContent = icon;
}

function skip(){
    // MediaElement.currentTime 은 현재 재생 시간을 초 단위로 표시
    // eventTarget의 dataset속성으로 data-skip의 접근후 부동소수점(parseFloat) 처리하여 합대입연산자(+=)로 값을 덧셈 대입
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
    /*
     * 질문 : video[this.name] = this.value; 이해 어려움 volume, playbackRate = value?
     */
}

function handleProgress(){
    // currentTime(현재 재생 시간)을 미디어의 길이(duration)으로 나눈 값을 100으로 곱한다 = 퍼센트로 표시
    const percent = (video.currentTime / video.duration) * 100;
    // progressBar의 flexBais 값에 percent 상수를 대입
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    // (eventTarget에서 마우스 offsetX의 위치값 / propgress의 너비(border, padding vertical scrollbar)) * 미디어의 길이
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    /*
     * 질문 : 이해 어려움 return 갑의 의미는??
     */
}

/* Hook up the event listners */ 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
/*
 * 질문 : 이해 어려움..
 */


 // 정리 : HtmlMediaElement의 속성과 메서드에 대해 알아보았다, 어려운 부분도 있었고 이해하기 쉬운 부분도 있었다 