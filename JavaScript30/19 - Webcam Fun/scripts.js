const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


// 브라우저에 webcam을 출력하기 위한 함수
function getVideo() {

    // camera, mike 같은 미디어 입력 장치 및 화면 공유에 대한 엑세스를 MediaDevices 싱글톤 객체(?)로 반환
    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : false
    })
    // localMediaStream은 MediaCapture, Stream API의 일부로 로컬에서 셍성되는 데이터 스트림을 나타낸다(getUserMedia())
    // MDN에서 이 스펙은 더이상 사용되지 않는다고 표기됨
    .then(localMediaStream => {
        console.log(localMediaStream);
        // video객체의 src 속성에 window 객체의 localMeidaStream을 URL로 지정
        video.src = window.URL.createObjectURL(localMediaStream);
        // video 실행
        video.play();
    })
    // error 발생시 콘솔에 출력될 메세지 지정
    .catch(err=> {
      console.log(`ON NO!!!`, err);
    });
}

// webcam을 브라우저에서 표시하기 위한 크기, 위치를 리턴하는 함수
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

// 16ms 마다 함수를 실행
  setInterval(() => {
    // ctx.drawImage(image, dx, dy, dWidth, dHeight);
    // 캔버스에 이미지를 그리는 방법을 제공
    ctx.drawImage(video, 0, 0, width, height);
    // 캔버스의 지정된 부분에 대한 기본 픽셀 데이터를 나타내는 ImageData 객체를 반환
    let pixels = ctx.getImageData(0, 0, width, height);
    // ImageData를 필터링
    pixels = redEffect(pixel);
    // ctx.putImageData(imageData, dx, dy)
    // 주어진 ImageData 객체의 데이터를 비트맵에 페인팅
    ctx.putImageData(pixel, 0, 0);
  }, 16);
}

// webcam으로 사진을 출력하는 함수
function takePhoto(){
  // HTMLMediaElement.currentTime 현재 재생 시간을 0으로, 소리 삽입
  snap.currentTime = 0;
  snap.play();

  // jpeg. 포맷으로 저장
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  // donwload 속성 지정
  link.setAttribute('download', 'handsome');

  link.innerHTML = `<img src="${data}" alt="Hansome Man" />`
  link.textContent = 'Download Image';
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(){
  for(let i = 0; i < pixels.data.length; i+=4){
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  return pixels;
}

getVideo();

// MediaEvents인 canplay 이벤트가 발생되면 실행될 함수 지정
video.addEventListener('canplay', paintToCanvas);